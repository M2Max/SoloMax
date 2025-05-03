
import type {Metadata} from 'next';
import '../globals.css'; // Adjust path relative to the new location
import Link from 'next/link';
import { Permanent_Marker, Caveat } from "next/font/google"; // Import Caveat

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
//   return [{ locale: 'en' }, { locale: 'es' }, { locale: 'it' }] // Added 'it'
// }

const translations = {
  en: { home: 'Home', blog: 'Blog', rights: 'All rights reserved.' },
  es: { home: 'Inicio', blog: 'Blog', rights: 'Todos los derechos reservados.' },
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
    <html lang={params.locale}>
      {/* Apply both font variables */}
      <body className={`font-sans antialiased ${permanentMarker.variable} ${caveat.variable}`}>
        <header className="bg-white dark:bg-gray-900 py-4 shadow-md">
          <div className="container mx-auto px-4">
            <nav className="flex items-center justify-between">
              {/* Apply Caveat font to the logo */}
              <Link href={`/${params.locale}/`} className={`text-2xl font-bold text-gray-800 dark:text-gray-100 hover:text-teal-500 font-caveat`}>
                SoloMax
              </Link>
              <div className="space-x-4 flex items-center">
                 {/* Update links to include locale */}
                <Link href={`/${params.locale}/`} className="px-3 py-2 rounded-md text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 hover:text-teal-500 transition-colors duration-200">
                  {t.home}
                </Link>
                <Link href={`/${params.locale}/blog`} className="px-3 py-2 rounded-md text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 hover:text-teal-500 transition-colors duration-200">
                  {t.blog}
                </Link>
              </div>
            </nav>
          </div>
        </header>
        <main>{children}</main>
        <footer className="bg-white dark:bg-gray-900 py-4 mt-8">
          <div className="container mx-auto px-4 text-center text-gray-600 dark:text-gray-300">
            &copy; {new Date().getFullYear()} SoloMax. {t.rights}
          </div>
        </footer>
      </body>
    </html>
  );
}
