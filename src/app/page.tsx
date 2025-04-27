import Image from 'next/image';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl w-full space-y-12">
        {/* Personal Bio Section */}
        <div className="text-center">
          <Image
            src="https://picsum.photos/200/200"
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

        {/* Introduction - Image on Left */}
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2">
            <Image
              src="https://picsum.photos/400/300"
              alt="Software Development"
              width={400}
              height={300}
              className="rounded-lg shadow-md"
            />
          </div>
          <div className="md:w-1/2 space-y-4">
            <p className="text-gray-700 dark:text-gray-300">
              Welcome to my digital space! I'm thrilled to share my journey,
              insights, and experiences in the ever-evolving world of software
              development. This platform serves as a hub for my thoughts on
              coding, technology trends, and the art of problem-solving.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              With over a decade in the software industry, I've had the
              privilege of contributing to diverse projects, ranging from
              intricate web applications to robust enterprise systems. Each
              experience has enriched my understanding and fueled my passion
              for creating innovative solutions.
            </p>
          </div>
        </div>

        {/* Expertise - Image on Right */}
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2 space-y-4">
            <p className="text-gray-700 dark:text-gray-300">
              My expertise lies in crafting elegant and efficient code,
              specializing in front-end and back-end development, as well as
              cloud computing. I'm constantly seeking opportunities to expand
              my skill set and stay ahead of the curve in this dynamic field.
              Learning new technologies is not just a part of my job; it's a
              personal commitment.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              I firmly believe that coding is a skill that can be learned by
              anyone, regardless of background. Therefore, I'm dedicated to
              making software development more accessible and inclusive for
              all.
            </p>
          </div>
          <div className="md:w-1/2">
            <Image
              src="https://picsum.photos/401/300"
              alt="Cloud Computing"
              width={401}
              height={300}
              className="rounded-lg shadow-md"
            />
          </div>
        </div>

        {/* Blogging - Image on Left */}
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2">
            <Image
              src="https://picsum.photos/402/300"
              alt="Blogging"
              width={402}
              height={300}
              className="rounded-lg shadow-md"
            />
          </div>
          <div className="md:w-1/2 space-y-4">
            <p className="text-gray-700 dark:text-gray-300">
              In my free time, I channel my energy into writing about software
              development and sharing my insights with the world. Through my
              blog, I aim to provide valuable resources, tutorials, and
              reflections on the tech industry.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              I invite you to delve into the blog section, where you'll
              discover a collection of articles covering a diverse range of
              subjects, from practical coding techniques to thought-provoking
              discussions on the future of technology.
            </p>
          </div>
        </div>

        {/* Conclusion */}
        <div className="space-y-4">
          <p className="text-gray-700 dark:text-gray-300">
            Thank you for visiting my website! I'm always eager to connect with
            fellow tech enthusiasts, so feel free to reach out and explore the
            possibilities of collaboration.
          </p>
        </div>
      </div>
    </div>
  );
}
