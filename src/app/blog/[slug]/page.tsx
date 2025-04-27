const articles = [
  {
    title: 'First Post',
    summary: 'This is the first post',
    slug: 'first-post',
    date: '2024-01-01',
    author: 'John Doe',
    content: 'This is the first post content. It is very long',
  },
  {
    title: 'Second Post',
    summary: 'This is the second post',
    slug: 'second-post',
    date: '2024-01-02',
    author: 'John Doe',
    content: 'This is the second post content. It is very long',
  },
  {
    title: 'Third Post',
    summary: 'This is the third post',
    slug: 'third-post',
    date: '2024-01-03',
    author: 'John Doe',
    content: 'This is the third post content. It is very long',
  },
];

async function getArticle(slug: string) {
  return articles.find((article) => article.slug === slug);
}

export default async function Article({ params }: { params: { slug: string } }) {
  const article = await getArticle(params.slug);

  if (!article) {
    return <div>Article not found</div>;
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl w-full space-y-8">
        <h1 className="text-3xl font-semibold text-center text-gray-800 dark:text-gray-100">
          {article.title}
        </h1>
        <div className="text-center text-gray-600 dark:text-gray-400">
          <p>
            By {article.author} on {article.date}
          </p>
        </div>
        <div className="space-y-4">
          <p className="text-gray-700 dark:text-gray-300">
            {article.content}
          </p>
        </div>
      </div>
    </div>
  );
}
