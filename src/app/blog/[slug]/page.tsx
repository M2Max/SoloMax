import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
// import Image from 'next/image'; // Uncomment and use if you prefer next/image

interface PostData {
  title: string;
  summary: string;
  slug: string;
  date: string;
  author: string;
  image?: string; // Optional image field
}

interface ArticleData extends PostData {
  content: string;
  contentHtml?: string; // Add field for HTML content
}

async function getArticle(slug: string): Promise<ArticleData | null> {
  const postsDirectory = path.join(process.cwd(), 'src', 'posts');
  const filePath = path.join(postsDirectory, `${slug}.md`);

  try {
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data, content } = matter(fileContents);

    // Convert markdown to HTML
    const processedContent = await remark().use(html).process(content);
    const contentHtml = processedContent.toString();

    return { ...(data as PostData), content, contentHtml, slug } as ArticleData;
  } catch (error) {
    console.error(`Error reading post file ${filePath}:`, error);
    return null;
  }
}

// Optional: Generate static params for SSG
// export async function generateStaticParams() {
//   const postsDirectory = path.join(process.cwd(), 'src', 'posts');
//   const filenames = fs.readdirSync(postsDirectory);
//
//   return filenames.map((filename) => ({
//     slug: filename.replace(/\.md$/, ''),
//   }));
// }

export default async function Article({ params }: { params: { slug: string } }) {
  const awaitedParams = await params; // Await params as suggested by Next.js error
  const article = await getArticle(awaitedParams.slug);

  if (!article) {
    return <div>Article not found</div>;
  }

  // Temporarily simplify rendering for debugging
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl w-full space-y-8">
        {/* Only render title and slug for debugging */}
        <h1 className="text-3xl font-semibold text-center text-gray-800 dark:text-gray-100">
          {article.title}
        </h1>
        <p>Slug: {article.slug}</p>

        {/* 
        // Uncomment the following sections gradually to identify the source of the error

        <div className="text-center text-gray-600 dark:text-gray-400">
          <p>
            By {article.author} on {article.date}
          </p>
        </div>

        {article.image && (
          <div className="mt-4 mb-6">
            <img
              src={article.image}
              alt={article.title}
              className="rounded-md object-cover w-full"
              style={{ maxHeight: '400px' }} // Example style
            />
          </div>
        )}

        <div className="space-y-4 prose dark:prose-invert">
          {article.contentHtml && (
            <div dangerouslySetInnerHTML={{ __html: article.contentHtml }} />
          )}
        </div>
        */}
      </div>
    </div>
  );
}
