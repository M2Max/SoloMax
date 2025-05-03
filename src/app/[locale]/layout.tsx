
import type {Metadata} from 'next';
import '../globals.css'; // Adjust path relative to the new location
import Link from 'next/link';
import { Permanent_Marker, Caveat } from "next/font/google"; // Import Caveat
import { Toaster } from "@/components/ui/toaster" // Import Toaster


const permanentMarker = Permanent_Marker({
  weight: '400',
  variable: '--font-permanent-marker',
  subsets: ['latin'],
});

const caveat = Caveat({ // Define Caveat font
  weight: ['400', '700'], // Choose weights if needed
  variable: '--font-caveat',
  subsets: ['latin'],
});


export const metadata: Metadata = {
  title: 'SoloMax Personal Blog', // Updated Title
  description: 'A personal blog by SoloMax', // Updated Description
};

// Define supported locales for static generation if needed (usually handled by middleware dynamically)
// export async function generateStaticParams() {
//   return [{ locale: 'en' }, { locale: 'it' }] // Updated locales
// }

const translations = {
  en: { home: 'Home', blog: 'Blog', rights: 'All rights reserved.' },
  // es: { home: 'Inicio', blog: 'Blog', rights: 'Todos los derechos reservados.' }, // Removed Spanish
  it: { home: 'Home', blog: 'Blog', rights: 'Tutti i diritti riservati.' }, // Italian translations
};

export default function RootLayout({
  children,
  params, // Add params to receive locale
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string }; // Define params type
}>) {
  const locale = params.locale as keyof typeof translations; // Ensure locale is a valid key
  const t = translations[locale] || translations.en; // Fallback to English if locale is invalid


  return (
    // Use the locale from params for the lang attribute
    <html lang={params.locale} className="h-full">
      {/* Apply both font variables */}
      <body className={`font-sans antialiased ${permanentMarker.variable} ${caveat.variable} flex flex-col min-h-screen`}>
        <header className="bg-white dark:bg-gray-900 py-4 shadow-md sticky top-0 z-50">
          <div className="container mx-auto px-4">
            <nav className="flex items-center justify-between">
              {/* Apply Caveat font to the logo */}
              <Link href={`/${params.locale}/`} className={`text-3xl font-bold text-gray-800 dark:text-gray-100 hover:text-teal-500 font-caveat transition-colors duration-200`}>
                SoloMax
              </Link>
              <div className="space-x-4 flex items-center">
                 {/* Update links to include locale */}
                <Link href={`/${params.locale}/`} className="px-3 py-2 rounded-md text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-teal-500 dark:hover:text-teal-400 transition-colors duration-200 font-medium">
                  {t.home}
                </Link>
                <Link href={`/${params.locale}/blog`} className="px-3 py-2 rounded-md text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-teal-500 dark:hover:text-teal-400 transition-colors duration-200 font-medium">
                  {t.blog}
                </Link>
              </div>
            </nav>
          </div>
        </header>
        <main className="flex-grow">{children}</main>
         <Toaster /> {/* Add Toaster here */}
        <footer className="bg-white dark:bg-gray-900 py-6 mt-auto border-t border-gray-200 dark:border-gray-700">
          <div className="container mx-auto px-4 text-center text-gray-500 dark:text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} SoloMax. {t.rights}
          </div>
        </footer>
      </body>
    </html>
  );
}
