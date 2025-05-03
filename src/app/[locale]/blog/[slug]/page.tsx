
import { getAllPostSlugs, getArticleData, ArticleData } from '@/lib/posts'; // Adjust import path if needed
import { Metadata, ResolvingMetadata } from 'next';
import Image from 'next/image'; // Use next/image

// If slugs are NOT locale-specific, generateStaticParams needs to include locale
export async function generateStaticParams() {
  const slugs = getAllPostSlugs(); // Get all slugs like [{ slug: 'first-post' }, ...]
  const locales = ['en', 'es', 'it']; // Your supported locales, added 'it'

  // Combine locales and slugs
  return locales.flatMap((locale) =>
    slugs.map((post) => ({
      locale: locale,
      slug: post.slug,
    }))
  );
  // [{ locale: 'en', slug: 'first-post' }, { locale: 'es', slug: 'first-post' }, { locale: 'it', slug: 'first-post' }, ...]
}

const translations = {
  en: { notFound: 'Article not found', by: 'By', on: 'on' },
  es: { notFound: 'Artículo no encontrado', by: 'Por', on: 'el' },
  it: { notFound: 'Articolo non trovato', by: 'Di', on: 'il' }, // Italian translations
};

export default async function Article({ params }: { params: { locale: string, slug: string } }) {
  const { locale, slug } = params;
  const localeKey = locale as keyof typeof translations; // Ensure locale is a valid key
  const t = translations[localeKey] || translations.en; // Fallback to English

  // Fetch article data using the centralized function
  // Note: `getArticleData` might need adaptation if content is translated based on locale.
  // Currently, it fetches the same markdown file regardless of locale.
  const article: ArticleData | null = await getArticleData(slug);

  if (!article) {
    // Consider a more user-friendly "Not Found" page/component, potentially localized
    return <div>{t.notFound}</div>;
  }

  // Use locale for date formatting
  let displayDate = article.date;
  try {
    // Ensure locale string is valid for toLocaleDateString
    const validLocale = ['en', 'es', 'it'].includes(locale) ? locale : 'en';
    displayDate = new Date(article.date).toLocaleDateString(validLocale, {
        year: 'numeric', month: 'long', day: 'numeric'
    });
  } catch (e) {
    console.error(`Invalid date format encountered for slug ${article.slug}: ${article.date}`);
    // Keep the original string if parsing fails
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl w-full space-y-8 bg-white dark:bg-gray-900 shadow-lg rounded-lg p-8">
        <h1 className="text-4xl font-bold text-center text-gray-900 dark:text-gray-100">
          {article.title} {/* Assuming title is handled (or same across locales) */}
        </h1>
        <div className="text-center text-gray-500 dark:text-gray-400 text-sm">
          <p>
            {t.by} {article.author} {t.on} {displayDate}
          </p>
        </div>

        {article.image && (
          <div className="mt-6 mb-8 rounded-lg overflow-hidden shadow-md">
            <Image // Use next/image
              src={article.image} // Assuming images are in public/ or external
              alt={article.title}
              className="object-cover w-full"
              style={{ maxHeight: '450px' }} // Consistent styling
              width={800} // Provide width/height hints if possible
              height={450}
              priority // Prioritize loading the main article image
              data-ai-hint="blog post header image" // Added AI hint
            />
          </div>
        )}

        {/* Apply prose styles for better markdown rendering */}
        {/* Content is currently not localized, displaying the same markdown */}
        <article className="prose lg:prose-xl dark:prose-invert max-w-none mx-auto mt-8">
           {article.contentHtml && (
            <div dangerouslySetInnerHTML={{ __html: article.contentHtml }} />
          )}
        </article>
      </div>
    </div>
  );
}


// Metadata generation - Adapt for locale if necessary
type Props = {
  params: { locale: string, slug: string }
}

const metadataTranslations = {
    en: { notFoundTitle: 'Article Not Found', blogTitle: 'Blog', blogDescription: 'Read the latest articles from our blog.' },
    es: { notFoundTitle: 'Artículo No Encontrado', blogTitle: 'Blog', blogDescription: 'Lee los últimos artículos de nuestro blog.' },
    it: { notFoundTitle: 'Articolo Non Trovato', blogTitle: 'Blog', blogDescription: 'Leggi gli ultimi articoli dal nostro blog.' }, // Italian metadata translations
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const slug = params.slug
  const locale = params.locale as keyof typeof metadataTranslations; // Access locale
  const tMeta = metadataTranslations[locale] || metadataTranslations.en; // Fallback to English

  // Fetch data - potentially adapt getArticleData for locale
  const article = await getArticleData(slug)

  if (!article) {
    return {
      title: tMeta.notFoundTitle,
    }
  }

  // Potentially translate title/description for metadata based on locale
  // For now, using the fetched data directly, but ideally, translate these too
  const metadataTitle = article.title; // Example: Assume title is fetched in correct lang or is lang-neutral
  const metadataDescription = article.summary; // Example: Assume summary is fetched in correct lang or is lang-neutral

  const supportedLocales = ['en', 'es', 'it'];

  return {
    title: metadataTitle,
    description: metadataDescription,
     // Set alternate languages if applicable
    alternates: {
      canonical: `/${locale}/blog/${slug}`, // Canonical URL for the current locale
      languages: supportedLocales.reduce((acc, lang) => {
            acc[lang] = `/${lang}/blog/${slug}`;
            return acc;
      }, {} as Record<string, string>),
    },
    openGraph: {
      title: metadataTitle,
      description: metadataDescription,
      images: article.image ? [article.image] : [],
      authors: [article.author],
      publishedTime: article.date,
      locale: locale, // Set OG locale
      // Define alternate locales for Open Graph
      alternateLocale: supportedLocales.filter(l => l !== locale),
    },
  }
}
