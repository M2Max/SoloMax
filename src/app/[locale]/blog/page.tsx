
import Link from 'next/link';
import Image from 'next/image'; // Use next/image for optimization
import { getAllPostsMetadata, PostMetadata } from '@/lib/posts'; // Adjust import path if needed
import { Metadata } from 'next';

const translations = {
  en: { title: 'Blog', noPosts: 'No blog posts found yet.', author: 'Author' },
  es: { title: 'Blog', noPosts: 'Aún no hay entradas de blog.', author: 'Autor' },
  it: { title: 'Blog', noPosts: 'Nessun articolo del blog ancora trovato.', author: 'Autore' }, // Italian translations
};

const metadataTranslations = {
    en: { title: 'Blog', description: 'Read the latest articles from our blog.' },
    es: { title: 'Blog', description: 'Lee los últimos artículos de nuestro blog.' },
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
  const t = translations[locale] || translations.en; // Fallback to English

  // Fetch posts metadata using the centralized function
  // Note: Currently, posts are not locale-specific. You might need to adapt `getAllPostsMetadata`
  // if you plan to have translated posts (e.g., filter by locale or load locale-specific files).
  const articles: PostMetadata[] = getAllPostsMetadata();

  if (!articles || articles.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl w-full space-y-8 text-center">
           <h1 className="text-3xl font-semibold text-gray-800 dark:text-gray-100">{t.title}</h1>
           <p className="text-gray-600 dark:text-gray-400">{t.noPosts}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl w-full space-y-8">
        <h1 className="text-3xl font-semibold text-center text-gray-800 dark:text-gray-100">
          {t.title}
        </h1>
        <ul className="space-y-6">
          {articles.map((article) => {
              // Use a more robust date parsing and formatting
              let displayDate = article.date;
              try {
                // Ensure locale string is valid for toLocaleDateString
                const validLocale = ['en', 'es', 'it'].includes(locale) ? locale : 'en';
                displayDate = new Date(article.date).toLocaleDateString(validLocale, {
                    year: 'numeric', month: 'short', day: 'numeric'
                });
              } catch (e) {
                console.error(`Invalid date format encountered for slug ${article.slug}: ${article.date}`);
                // Keep the original string if parsing fails
              }

              // Construct locale-specific link
              const articleLink = `/${locale}/blog/${article.slug}`;

              return (
                <li key={article.slug} className="bg-white dark:bg-gray-800 shadow rounded-lg p-4 flex flex-col sm:flex-row items-start sm:items-center hover:shadow-md transition-shadow duration-200">
                  {article.image && (
                    <div className="flex-shrink-0 sm:mr-4 mb-4 sm:mb-0 w-full sm:w-auto">
                      <Link href={articleLink} className="block">
                       <Image
                         src={article.image} // Ensure image paths are correct (e.g., /images/post1.jpg)
                         alt={article.title}
                         width={150} // Optimized image width
                         height={100} // Optimized image height
                         className="rounded-md object-cover w-full h-auto sm:w-[150px] sm:h-[100px]" // Responsive styling
                          data-ai-hint="blog post summary image" // Added AI hint
                       />
                      </Link>
                    </div>
                  )}
                  <div className="flex-grow">
                    <Link href={articleLink} className="group">
                      <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 group-hover:text-teal-500 dark:group-hover:text-blue-400 transition-colors duration-200">
                        {article.title} {/* Keep title as is for now, assuming it's language-neutral or handled elsewhere */}
                      </h2>
                      <p className="text-gray-600 dark:text-gray-400 mt-1 text-sm">
                        {article.summary} {/* Keep summary as is */}
                      </p>
                      <p className="text-gray-500 dark:text-gray-500 text-xs mt-2">
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
