
import { getAllPostPaths, getArticleData, ArticleData } from '@/lib/posts'; // Adjust import path if needed
import { Metadata, ResolvingMetadata } from 'next';
import Image from 'next/image'; // Use next/image

// Generate static paths for all existing locale/slug combinations
export async function generateStaticParams() {
  const paths = getAllPostPaths(); // Returns [{ locale: 'en', slug: 'first-post' }, { locale: 'it', slug: 'first-post' }, ...]
  return paths;
}

// Translations for UI elements within the page
const translations = {
  en: { notFound: 'Article not found', by: 'By', on: 'on' },
  // es: { notFound: 'Artículo no encontrado', by: 'Por', on: 'el' }, // Removed Spanish
  it: { notFound: 'Articolo non trovato', by: 'Di', on: 'il' }, // Italian translations
};

export default async function Article({ params }: { params: Promise<{ locale: string, slug: string }> }) {
  const { locale, slug } = await params; // Await params
  const localeKey = locale as keyof typeof translations; // Ensure locale is a valid key
  const t = translations[localeKey] || translations.en; // Fallback to English

  // Fetch article data using the locale and slug
  const article: ArticleData | null = await getArticleData(slug, locale);

  if (!article) {
    // Consider a more user-friendly "Not Found" page/component, potentially localized
    return <div className="flex justify-center items-center min-h-screen"><p>{t.notFound}</p></div>;
  }

  // Use locale for date formatting
  let displayDate = article.date;
  try {
    // Ensure locale string is valid for toLocaleDateString
    const validLocale = ['en', 'it'].includes(locale) ? locale : 'en';
    displayDate = new Date(article.date).toLocaleDateString(validLocale, {
        year: 'numeric', month: 'long', day: 'numeric'
    });
  } catch (e) {
    console.error(`Invalid date format encountered for slug ${article.slug}, locale ${locale}: ${article.date}`);
    // Keep the original string if parsing fails
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-12 px-4 sm:px-6 lg:px-8 bg-background dark:bg-my-black">
      <div className="max-w-3xl w-full space-y-8 bg-[hsl(var(--background)/0.10)] dark:bg-my-black shadow-xl rounded-lg p-8 ring-1 ring-gray-200 dark:ring-700">
        <h1 className="text-4xl font-extrabold text-center text-gray-900 dark:text-gray-100 tracking-tight">
          {article.title} {/* Title comes from the fetched localized markdown */}
        </h1>
        <div className="text-center text-gray-500 dark:text-gray-400 text-sm">
          <p>
            {t.by} {article.author} {t.on} {displayDate}
          </p>
        </div>

        {article.image && (
          <div className="mt-6 mb-8 rounded-lg overflow-hidden shadow-lg aspect-video relative">
            <Image // Use next/image
              src={article.image} // Assuming images are in public/ or external
              alt={article.title}
              className="object-cover"
              fill // Use fill for aspect ratio container
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 800px" // Example sizes
              priority // Prioritize loading the main article image
              data-ai-hint="blog post header image" // Added AI hint
            />
          </div>
        )}

        {/* Apply prose styles for better markdown rendering */}
        <article className="prose lg:prose-xl dark:prose-invert max-w-none mx-auto mt-8 text-gray-700 dark:text-gray-300">
           {article.contentHtml && (
            <div dangerouslySetInnerHTML={{ __html: article.contentHtml }} />
          )}
        </article>
      </div>
    </div>
  );
}


// Metadata generation - Adapt for locale if necessary
// type Props = {
//   params: { locale: string, slug: string }
// }

// Translations for Metadata - can be expanded
const metadataTranslations = {
    en: { notFoundTitle: 'Article Not Found', alternatesLabel: 'Read in' },
    // es: { notFoundTitle: 'Artículo No Encontrado' }, // Removed Spanish
    it: { notFoundTitle: 'Articolo Non Trovato', alternatesLabel: 'Leggi in' }, // Italian metadata translations
};

export async function generateMetadata(
  { params }: { params: Promise<{ locale: string, slug: string }> }, // Type params as Promise
  parent: ResolvingMetadata
): Promise<Metadata> {
  const { slug, locale } = await params; // Await params
  const localeKey = locale as keyof typeof metadataTranslations; // Access locale
  const tMeta = metadataTranslations[localeKey] || metadataTranslations.en; // Fallback to English

  // Fetch data using locale
  const article = await getArticleData(slug, locale);

  if (!article) {
    return {
      title: tMeta.notFoundTitle,
    }
  }

  // Use fetched localized data for metadata
  const metadataTitle = article.title;
  const metadataDescription = article.summary;

  // Find available alternate locales for this slug
  const allPaths = getAllPostPaths();
  const alternateLocales = allPaths
      .filter(p => p.slug === slug && p.locale !== locale)
      .map(p => p.locale);

  const alternates: Record<string, string> = {};
   alternateLocales.forEach(altLocale => {
     alternates[altLocale] = `/${altLocale}/blog/${slug}`;
   });

  return {
    title: metadataTitle,
    description: metadataDescription,
     // Set alternate languages if applicable
    alternates: {
      canonical: `/${locale}/blog/${slug}`, // Canonical URL for the current locale
      languages: alternates, // Use the generated alternates object
    },
    openGraph: {
      title: metadataTitle,
      description: metadataDescription,
      images: article.image ? [article.image] : [],
      authors: [article.author],
      publishedTime: article.date,
      locale: locale, // Set OG locale (e.g., en_US, it_IT - adjust if needed)
      // Define alternate locales for Open Graph if they exist
      alternateLocale: alternateLocales,
    },
  }
}
