import Link from 'next/link';

const articles = [
  {
    title: 'First Post',
    summary: 'This is the first post',
    slug: 'first-post',
    date: '2024-01-01',
    author: 'John Doe',
  },
  {
    title: 'Second Post',
    summary: 'This is the second post',
    slug: 'second-post',
    date: '2024-01-02',
    author: 'John Doe',
  },
  {
    title: 'Third Post',
    summary: 'This is the third post',
    slug: 'third-post',
    date: '2024-01-03',
    author: 'John Doe',
  },
];

export default function Blog() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl w-full space-y-8">
        <h1 className="text-3xl font-semibold text-center text-gray-800 dark:text-gray-100">
          Blog
        </h1>
        <ul className="space-y-6">
          {articles.map((article) => (
            <li key={article.slug} className="bg-white dark:bg-gray-800 shadow rounded-lg p-4">
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
