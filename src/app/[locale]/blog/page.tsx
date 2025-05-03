
import Link from 'next/link';
import Image from 'next/image'; // Use next/image for optimization
import { getAllPostsMetadata, PostMetadata } from '@/lib/posts'; // Adjust import path if needed
import { Metadata } from 'next';

const translations = {
  en: { title: 'Blog', noPosts: 'No blog posts found yet.', author: 'Author' },
  // es: { title: 'Blog', noPosts: 'Aún no hay entradas de blog.', author: 'Autor' }, // Removed Spanish
  it: { title: 'Blog', noPosts: 'Nessun articolo del blog ancora trovato.', author: 'Autore' }, // Italian translations
};

const metadataTranslations = {
    en: { title: 'Blog', description: 'Read the latest articles from our blog.' },
    // es: { title: 'Blog', description: 'Lee los últimos artículos de nuestro blog.' }, // Removed Spanish
    it: { title: 'Blog', description: 'Leggi gli ultimi articoli dal nostro blog.' }, // Italian metadata translations
};


// Generate metadata based on locale
export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const locale = params.locale as keyof typeof metadataTranslations;
  const tMeta = metadataTranslations[locale] || metadataTranslations.en; // Fallback to English

  return {
    title: tMeta.title,
    description: tMeta.description,
  };
}


// Since this is a Server Component, we can directly accept params
export default async function BlogIndex({ params }: { params: { locale: string } }) {
  const locale = params.locale as keyof typeof translations; // Get the current locale, ensure it's a valid key
  const t = translations[locale] || translations.en; // Fallback to English if locale is invalid

  // Fetch posts metadata FOR THE CURRENT LOCALE using the centralized function
  const articles: PostMetadata[] = getAllPostsMetadata(locale);

  if (!articles || articles.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-200px)] py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl w-full space-y-8 text-center">
           <h1 className="text-3xl font-semibold text-gray-800 dark:text-gray-100">{t.title}</h1>
           <p className="text-gray-600 dark:text-gray-400">{t.noPosts}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center min-h-[calc(100vh-200px)] py-12 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-950">
      <div className="max-w-3xl w-full space-y-8">
        <h1 className="text-4xl font-bold text-center text-gray-900 dark:text-gray-100 mb-10">
          {t.title}
        </h1>
        <ul className="space-y-8">
          {articles.map((article) => {
              // Use a more robust date parsing and formatting
              let displayDate = article.date;
              try {
                // Ensure locale string is valid for toLocaleDateString
                const validLocale = ['en', 'it'].includes(locale) ? locale : 'en';
                displayDate = new Date(article.date).toLocaleDateString(validLocale, {
                    year: 'numeric', month: 'short', day: 'numeric'
                });
              } catch (e) {
                console.error(`Invalid date format encountered for slug ${article.slug}, locale ${locale}: ${article.date}`);
                // Keep the original string if parsing fails
              }

              // Construct locale-specific link (already handled by param)
              const articleLink = `/${locale}/blog/${article.slug}`;

              return (
                <li key={article.slug} className="bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden flex flex-col sm:flex-row items-start sm:items-center hover:shadow-xl transition-shadow duration-300 ease-in-out ring-1 ring-gray-100 dark:ring-gray-700">
                  {article.image && (
                    <div className="flex-shrink-0 sm:mr-6 mb-4 sm:mb-0 w-full sm:w-[200px] h-[150px] sm:h-auto sm:aspect-[4/3] relative">
                      <Link href={articleLink} className="block h-full w-full">
                       <Image
                         src={article.image} // Ensure image paths are correct (e.g., /images/post1.jpg)
                         alt={article.title}
                         fill
                         sizes="(max-width: 640px) 100vw, 200px" // Sizes for responsiveness
                         className="object-cover" // Use object-cover to fill the container
                          data-ai-hint="blog post summary image" // Added AI hint
                       />
                      </Link>
                    </div>
                  )}
                  <div className="flex-grow p-5">
                    <Link href={articleLink} className="group">
                      <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors duration-200 mb-2">
                        {article.title} {/* Displaying localized title */}
                      </h2>
                      <p className="text-gray-600 dark:text-gray-400 mt-1 text-base line-clamp-3">
                        {article.summary} {/* Displaying localized summary */}
                      </p>
                      <p className="text-gray-500 dark:text-gray-500 text-xs mt-3">
                         {article.author} - {displayDate} {/* Author label removed for simplicity, could be added back with `t.author` */}
                      </p>
                    </Link>
                  </div>
                </li>
              )
           }
          )}
        </ul>
      </div>
    </div>
  );
}
