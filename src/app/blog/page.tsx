import Link from 'next/link';
import Image from 'next/image'; // Use next/image for optimization
import { getAllPostsMetadata, PostMetadata } from '@/lib/posts'; // Import from centralized module

export default async function Blog() {
  // Fetch posts metadata using the centralized function
  const articles: PostMetadata[] = getAllPostsMetadata();

  if (!articles || articles.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl w-full space-y-8 text-center">
           <h1 className="text-3xl font-semibold text-gray-800 dark:text-gray-100">Blog</h1>
           <p className="text-gray-600 dark:text-gray-400">No blog posts found yet.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl w-full space-y-8">
        <h1 className="text-3xl font-semibold text-center text-gray-800 dark:text-gray-100">
          Blog
        </h1>
        <ul className="space-y-6">
          {articles.map((article) => {
              // Use a more robust date parsing and formatting
              let displayDate = article.date;
              try {
                displayDate = new Date(article.date).toLocaleDateString(undefined, {
                    year: 'numeric', month: 'short', day: 'numeric'
                });
              } catch (e) {
                console.error(`Invalid date format encountered for slug ${article.slug}: ${article.date}`);
                // Keep the original string if parsing fails
              }

              return (
                <li key={article.slug} className="bg-white dark:bg-gray-800 shadow rounded-lg p-4 flex flex-col sm:flex-row items-start sm:items-center hover:shadow-md transition-shadow duration-200">
                  {article.image && (
                    <div className="flex-shrink-0 sm:mr-4 mb-4 sm:mb-0 w-full sm:w-auto">
                      <Link href={`/blog/${article.slug}`} className="block">
                       <Image
                         src={article.image} // Ensure image paths are correct (e.g., /images/post1.jpg)
                         alt={article.title}
                         width={150} // Optimized image width
                         height={100} // Optimized image height
                         className="rounded-md object-cover w-full h-auto sm:w-[150px] sm:h-[100px]" // Responsive styling
                       />
                      </Link>
                    </div>
                  )}
                  <div className="flex-grow">
                    <Link href={`/blog/${article.slug}`} className="group">
                      <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
                        {article.title}
                      </h2>
                      <p className="text-gray-600 dark:text-gray-400 mt-1 text-sm">
                        {article.summary}
                      </p>
                      <p className="text-gray-500 dark:text-gray-500 text-xs mt-2">
                        {article.author} - {displayDate}
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

// Optional: Add metadata for the blog index page
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Read the latest articles from our blog.',
}
