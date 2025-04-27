import Link from 'next/link';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Image from 'next/image'; // Need to import Image component

interface PostMetadata {
  title: string;
  summary: string;
  slug: string;
  date: string;
  author: string;
  image: string; // Add image field
}

async function getPosts(): Promise<PostMetadata[]> {
  const postsDirectory = path.join(process.cwd(), 'src', 'posts');
  const filenames = fs.readdirSync(postsDirectory);

  const posts = filenames.map((filename) => {
    const filePath = path.join(postsDirectory, filename);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data } = matter(fileContents);

    return data as PostMetadata;
  });

  // Optionally, sort posts by date
  posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return posts;
}

export default async function Blog() { // Make the component async
  const articles = await getPosts(); // Fetch posts

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl w-full space-y-8">
        <h1 className="text-3xl font-semibold text-center text-gray-800 dark:text-gray-100">
          Blog
        </h1>
        <ul className="space-y-6">
          {articles.map((article) => (
            <li key={article.slug} className="bg-white dark:bg-gray-800 shadow rounded-lg p-4 flex flex-col md:flex-row items-center"> {/* Add flex for layout */}
              {article.image && ( // Conditionally render image
                <div className="flex-shrink-0 md:mr-4 mb-4 md:mb-0">
                  <Image
                    src={article.image}
                    alt={article.title}
                    width={150} // Define image width
                    height={100} // Define image height
                    className="rounded-md object-cover" // Add some styling
                  />
                </div>
              )}
              <Link href={`/blog/${article.slug}`} className="block hover:underline">
                <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
                  {article.title}
                </h2>
                <p className="text-gray-600 dark:text-gray-400">
                  {article.summary}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
