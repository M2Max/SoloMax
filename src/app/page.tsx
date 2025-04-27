import Image from 'next/image';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl w-full space-y-8">
        {/* Personal Bio Section */}
        <div className="text-center">
          <Image
            src="https://picsum.photos/200/200" // Replace with your actual image
            alt="Your Avatar"
            width={100}
            height={100}
            className="rounded-full mx-auto mb-4"
          />
          <h1 className="text-3xl font-semibold text-gray-800 dark:text-gray-100">
            Hello, I'm John Doe
          </h1>
          <p className="mt-2 text-gray-600 dark:text-gray-400">
            A passionate software engineer and blogger.
          </p>
        </div>

        {/* Introduction */}
        <div className="space-y-4">
          <p className="text-gray-700 dark:text-gray-300">
            Welcome to my personal website and blog! I'm excited to share my
            thoughts, experiences, and insights on software development,
            technology, and everything in between.
          </p>
          <p className="text-gray-700 dark:text-gray-300">
            I've been working in the software industry for over 10 years, and I've had the opportunity to work on a wide variety of projects, from small web applications to large-scale enterprise systems.
          </p>
          <p className="text-gray-700 dark:text-gray-300">
            My areas of expertise include front-end development, back-end development, and cloud computing. I'm also passionate about learning new technologies and staying up-to-date with the latest trends in the industry.
          </p>
          <p className="text-gray-700 dark:text-gray-300">
            In my spare time, I enjoy writing about software development and sharing my knowledge with others. I believe that everyone can learn to code, and I'm committed to making software development more accessible to everyone.
          </p>
          <p className="text-gray-700 dark:text-gray-300">
            Here, you'll find a collection of articles covering a wide range
            of topics, from coding tutorials to personal reflections on the tech
            industry.
          </p>
          <p className="text-gray-700 dark:text-gray-300">
            Feel free to explore the blog section and connect with me on social
            media. I'm always open to new ideas and collaborations!
          </p>
        </div>
      </div>
    </div>
  );
}
