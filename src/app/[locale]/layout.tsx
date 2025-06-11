
import type {Metadata} from 'next';
import '../globals.css'; // Adjust path relative to the new location
import Link from 'next/link'; // Import Link
import { Permanent_Marker, Dancing_Script } from "next/font/google"; // Import Dancing_Script
import Image from 'next/image'; // Import Image component
// import Script from 'next/script'; // Import the Script component - Not directly used for this widget
import { Toaster } from "@/components/ui/toaster" // Import Toaster
// import { ChatbotWidgetLoader } from '@/components/chatbot/ChatbotWidgetLoader';


const permanentMarker = Permanent_Marker({
  weight: '400',
  variable: '--font-permanent-marker',
  subsets: ['latin'],
});

const dancingScript = Dancing_Script({
  variable: '--font-dancing-script',
  subsets: ['latin'],
});


export const metadata: Metadata = {
  title: 'Maximiliano Mamone', // Updated Title
  description: 'A personal blog by Maximiliano Mamone', // Updated Description
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

export default async function RootLayout({
  children,
  params, // Add params to receive locale
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>; // Define params type as Promise
}>) {
  const { locale } = await params; // Await params
  const localeKey = locale as keyof typeof translations; // Ensure locale is a valid key
  const t = translations[localeKey] || translations.en; // Fallback to English if locale is invalid

  return (
    // Use the locale from params for the lang attribute
    <html lang={locale} className="h-full">
      {/* Apply both font variables */}
      <body className={`font-sans antialiased ${permanentMarker.variable} ${dancingScript.variable} flex flex-col min-h-screen`}>
      <header className="bg-background dark:bg-gray-900 py-4 shadow-md sticky top-0 z-50">
          <div className="container mx-auto">
            {/* Ensure nav is flex and items-center */}
            <nav className="flex items-center justify-between">

              {/* Left Section: Add flex-1 and justify-start */}
              <div className="flex-1 flex justify-start items-center space-x-4">
                <Link href={`/${locale}/blog`} className="px-3 py-2 rounded-md text-my-black dark:text-my-black hover:bg-opacity-1 hover:bg-primary dark:hover:bg-gray-700 hover:text-primary dark:hover:text-primary transition-colors duration-200 font-medium">
                  {t.blog}
                </Link>
              </div>

              {/* Center Logo: No flex-1 needed */}
              <div className="flex-shrink-0"> {/* Optional: Prevents logo from shrinking if space gets tight */}
                <Link href={`/${locale}/`} className="text-3xl font-bold text-gray-800 dark:text-gray-100 hover:text-teal-500 transition-colors duration-200">
                  <Image src="/MnM.png" alt="Logo" width={100} height={37} />
                </Link>
              </div>

              {/* Right Section: Add flex-1 and justify-end */}
              <div className="flex-1 flex justify-end items-center space-x-4">
                {/* Social Icons */}
                <Link href="https://www.youtube.com/@MaxMamone" target="_blank" rel="noopener noreferrer" className="p-1 rounded-full hover:bg-primary transition-colors duration-200">
                  <Image src="/icons/youtube.png" alt="YouTube" width={24} height={24} className="filter dark:filter-none" />
                </Link>
                <Link href="https://www.linkedin.com/in/maximiliano-mamone/" target="_blank" rel="noopener noreferrer" className="p-1 rounded-full hover:bg-primary transition-colors duration-200">
                  <Image src="/icons/linkedin.png" alt="LinkedIn" width={24} height={24} className="filter dark:filter-none" />
                </Link>
                <Link href="https://www.instagram.com/mamone_max/" target="_blank" rel="noopener noreferrer" className="p-1 rounded-full hover:bg-primary transition-colors duration-200">
                  <Image src="/icons/instagram.png" alt="Instagram" width={24} height={24} className="filter dark:filter-none" />
                </Link>
              </div>

            </nav>
          </div>
        </header>
        <main className="flex-grow bg-background">{children}</main>
         <Toaster /> {/* Add Toaster here */}
        <footer className="bg-background dark:bg-gray-900 py-6 mt-auto border-t border-gray-200 dark:border-gray-700">
          <div className="container mx-auto px-4 text-center text-secondary dark:text-secondary text-sm">
            &copy; {new Date().getFullYear()} Maximiliano Mamone.{t.rights}
          </div>
        </footer>
        {/* <ChatbotWidgetLoader
          apiKey={process.env.NEXT_PUBLIC_GEMINI_API_KEY} 
          themeColor="#000000"
          initialGreeting="Hello! How can I assist you today?"
          position="bottom-right"
          hostUrl="http://localhost:9003"
        /> */}

      </body>
    </html>
  );
}
