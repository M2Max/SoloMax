
import { NextRequest, NextResponse } from 'next/server'
import Negotiator from 'negotiator'
import { match as matchLocale } from '@formatjs/intl-localematcher'

// Supported locales - Updated to only en and it
const locales = ['en', 'it']
const defaultLocale = 'en'

function getLocale(request: NextRequest): string {
  // Negotiator expects plain object so we need to transform headers
  const negotiatorHeaders: Record<string, string> = {}
  request.headers.forEach((value, key) => (negotiatorHeaders[key] = value))

  // @ts-ignore locales are readonly
  const languages = new Negotiator({ headers: negotiatorHeaders }).languages(
    locales
  )

  try {
     // Match the preferred language from the header against our supported locales
     return matchLocale(languages, locales, defaultLocale)
  } catch(e) {
    // Fallback to default if matching fails (e.g., invalid header)
    console.warn(`Error matching locale: ${e}. Falling back to default locale '${defaultLocale}'.`);
    return defaultLocale;
  }
}

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname

  // Check if the path is for a static file or API route, ignore if so
  const isStaticFile = /\.(.*)$/.test(pathname); // Basic check for file extensions
  const isApiRoute = pathname.startsWith('/api/');

  if (isStaticFile || isApiRoute || pathname.startsWith('/_next/')) {
    return NextResponse.next();
  }


  // Check if there is any supported locale in the pathname
  const pathnameIsMissingLocale = locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  )

  // Redirect if there is no locale
  if (pathnameIsMissingLocale) {
    const locale = getLocale(request)

    // e.g. incoming request is /products
    // The new URL is now /en/products
    return NextResponse.redirect(
      new URL(
        `/${locale}${pathname.startsWith('/') ? '' : '/'}${pathname}`,
        request.url
      )
    )
  }

  return NextResponse.next()
}

export const config = {
  // Matcher ignoring `/_next/` and `/api/` explicitly
  // and common static file extensions.
  matcher: ['/((?!api|_next/static|_next/image|images|favicon.ico|.*\.(?:svg|png|jpg|jpeg|gif|webp)$).*)'],
}
