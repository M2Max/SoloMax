import { getAllPostSlugs, getArticleData, ArticleData } from '@/lib/posts';

// Re-export generateStaticParams using the centralized function
export { getAllPostSlugs as generateStaticParams } from '@/lib/posts';

export default async function Article({ params }: { params: { slug: string } }) {
  // Fetch article data using the centralized function
  const article: ArticleData | null = await getArticleData(params.slug);

  if (!article) {
    // Consider a more user-friendly "Not Found" page/component
    return <div>Article not found</div>;
  }

  // Use a more robust date parsing and formatting
  let displayDate = article.date;
  try {
    displayDate = new Date(article.date).toLocaleDateString(undefined, {
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
          {article.title}
        </h1>
        <div className="text-center text-gray-500 dark:text-gray-400 text-sm">
          <p>
            By {article.author} on {displayDate}
          </p>
        </div>

        {article.image && (
          <div className="mt-6 mb-8 rounded-lg overflow-hidden shadow-md">
            {/* Consider using next/image for optimization if images are local */}
            <img
              src={article.image} // Assuming images are externally hosted or in public/
              alt={article.title}
              className="object-cover w-full"
              style={{ maxHeight: '450px' }} // Consistent styling
              width={800} // Provide width/height hints if possible
              height={450}
            />
          </div>
        )}

        {/* Apply prose styles for better markdown rendering */}
        <article className="prose lg:prose-xl dark:prose-invert max-w-none mx-auto mt-8">
           {article.contentHtml && (
            <div dangerouslySetInnerHTML={{ __html: article.contentHtml }} />
          )}
        </article>
      </div>
    </div>
  );
}

// Optional: Add metadata generation for SEO
import { Metadata, ResolvingMetadata } from 'next'

type Props = {
  params: { slug: string }
}

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const slug = params.slug

  // fetch data
  const article = await getArticleData(slug)

  // optionally access and extend (rather than replace) parent metadata
  // const previousImages = (await parent).openGraph?.images || []

  if (!article) {
    // Handle case where article is not found, maybe return default metadata
    return {
      title: 'Article Not Found',
    }
  }

  return {
    title: article.title,
    description: article.summary,
    openGraph: {
      title: article.title,
      description: article.summary,
      images: article.image ? [article.image] : [],
      authors: [article.author],
      publishedTime: article.date, // Assuming date is in ISO format or parsable
    },
  }
}

