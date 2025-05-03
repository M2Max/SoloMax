
import Image from 'next/image';

// Translations object - Removed Spanish
const translations = {
  en: {
    greeting: "Hello, I'm SoloMax", // Updated Name
    bio: "A passionate software engineer and blogger.",
    welcome: "Welcome to my digital space!",
    introduction: "I'm thrilled to share my journey, insights, and experiences in the ever-evolving world of software development. This platform serves as a hub for my thoughts on coding, technology trends, and the art of problem-solving. With a deep passion for technology and a commitment to continuous learning, I strive to create elegant and efficient solutions. Whether it's building complex web applications or exploring the latest advancements in AI, I enjoy tackling challenges and pushing the boundaries of what's possible. Join me as I navigate the exciting landscape of tech!",
    expertiseTitle: "My Expertise",
    expertise: "My expertise lies in crafting elegant and efficient code, specializing in full-stack development with a focus on modern web technologies like React, Next.js, Node.js, and TypeScript. I also have a keen interest in cloud computing (AWS, Google Cloud) and architecting scalable systems. I'm constantly seeking opportunities to expand my skill set and stay ahead of the curve in this dynamic field. Learning new technologies is not just a part of my job; it's a personal commitment. I firmly believe that coding is a powerful tool for creativity and problem-solving, and I'm dedicated to making software development more accessible.",
    sharingTitle: "Sharing Knowledge",
    sharing: "In my free time, I channel my energy into writing about software development and sharing my insights with the world through this blog. I aim to provide valuable resources, tutorials, and reflections on the tech industry, hoping to inspire and help others on their own coding journeys. I invite you to delve into the blog section, where you'll discover a collection of articles covering a diverse range of subjects, from practical coding techniques and architectural patterns to thought-provoking discussions on the future of technology and the ethical considerations surrounding it. Sharing knowledge fosters growth for everyone involved.",
    learningTitle: "Continuous Learning",
    learning: "The tech landscape is constantly shifting, and embracing lifelong learning is crucial for staying relevant and effective. I actively participate in online courses, attend tech conferences (both virtual and in-person when possible), contribute to open-source projects, and engage with the developer community. This commitment to continuous improvement allows me to bring fresh perspectives and cutting-edge techniques to my work, ensuring that the solutions I build are not only functional but also modern, scalable, and maintainable. It's about adapting, evolving, and always being curious.",
    contactTitle: "Get In Touch",
    contact: "Thank you for visiting my website! I'm always eager to connect with fellow tech enthusiasts, developers, and potential collaborators. Feel free to explore the blog, check out my projects (linked elsewhere), or reach out through the contact information provided (if available). Let's build something amazing together! I believe in the power of collaboration and community. Sharing knowledge and learning from others are fundamental aspects of growth in the technology field. Whether you have a question, a project idea, or simply want to chat about tech, don't hesitate to connect!",
  },
  // es: { ... } // Removed Spanish
  it: { // Italian translations
    greeting: "Ciao, sono SoloMax", // Updated Name
    bio: "Un appassionato ingegnere del software e blogger.",
    welcome: "Benvenuto nel mio spazio digitale!",
    introduction: "Sono entusiasta di condividere il mio percorso, le mie intuizioni ed esperienze nel mondo in continua evoluzione dello sviluppo software. Questa piattaforma funge da hub per i miei pensieri sulla programmazione, le tendenze tecnologiche e l'arte della risoluzione dei problemi. Con una profonda passione per la tecnologia e un impegno per l'apprendimento continuo, mi sforzo di creare soluzioni eleganti ed efficienti. Che si tratti di costruire complesse applicazioni web o esplorare gli ultimi progressi nell'IA, mi piace affrontare le sfide e spingere i confini del possibile. Unisciti a me mentre navigo nell'entusiasmante panorama tecnologico!",
    expertiseTitle: "La Mia Esperienza",
    expertise: "La mia esperienza risiede nella creazione di codice elegante ed efficiente, specializzandomi nello sviluppo full-stack con un focus sulle moderne tecnologie web come React, Next.js, Node.js e TypeScript. Ho anche un vivo interesse per il cloud computing (AWS, Google Cloud) e l'architettura di sistemi scalabili. Cerco costantemente opportunità per ampliare le mie competenze e rimanere all'avanguardia in questo campo dinamico. Imparare nuove tecnologie non è solo una parte del mio lavoro; è un impegno personale. Credo fermamente che la programmazione sia un potente strumento per la creatività e la risoluzione dei problemi, e mi dedico a rendere lo sviluppo software più accessibile.",
    sharingTitle: "Condivisione della Conoscenza",
    sharing: "Nel mio tempo libero, canalizzo la mia energia scrivendo sullo sviluppo software e condividendo le mie intuizioni con il mondo attraverso questo blog. Miro a fornire risorse preziose, tutorial e riflessioni sull'industria tecnologica, sperando di ispirare e aiutare gli altri nei loro percorsi di programmazione. Ti invito ad approfondire la sezione del blog, dove scoprirai una raccolta di articoli che coprono una vasta gamma di argomenti, dalle tecniche pratiche di programmazione e pattern architetturali alle discussioni stimolanti sul futuro della tecnologia e le considerazioni etiche che la circondano. Condividere la conoscenza favorisce la crescita di tutti.",
    learningTitle: "Apprendimento Continuo",
    learning: "The tech landscape is constantly shifting, and embracing lifelong learning is crucial for staying relevant and effective. I actively participate in online courses, attend tech conferences (both virtual and in-person when possible), contribute to open-source projects, and engage with the developer community. This commitment to continuous improvement allows me to bring fresh perspectives and cutting-edge techniques to my work, ensuring that the solutions I build are not only functional but also modern, scalable and maintainable. It's about adapting, evolving, and always being curious.",
    contactTitle: "Get In Touch",
    contact: "Thank you for visiting my website! I'm always eager to connect with fellow tech enthusiasts, developers, and potential collaborators. Feel free to explore the blog, check out my projects (linked elsewhere), or reach out through the contact information provided (if available). Let's build something amazing together! I believe in the power of collaboration and community. Sharing knowledge and learning from others are fundamental aspects of growth in the technology field. Whether you have a question, a project idea, or simply want to chat about tech, don't hesitate to connect!",
  }
};

// Add generateStaticParams for the root locale page
export async function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'it' }];
}

// Since this is a Server Component, we can directly accept params
export default async function Home({ params }: { params: Promise<{ locale: string }> }) { // Make component async and type params as Promise
  const { locale } = await params; // Await params
  const localeKey = locale as keyof typeof translations; // Ensure locale is a valid key
  const t = translations[localeKey] || translations.en; // Fallback to English if locale is invalid

  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-150px)] py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white dark:from-gray-950 dark:to-gray-900">
      <div className="max-w-5xl w-full space-y-16">
        {/* Personal Bio Section */}
        <div className="text-center px-4">
          <Image
            src="https://picsum.photos/120/120" // Slightly larger avatar
            alt="SoloMax Avatar"
            width={120}
            height={120}
            className="rounded-full mx-auto mb-6 shadow-lg border-4 border-white dark:border-gray-700"
            priority // Load avatar first
            data-ai-hint="avatar profile picture person"
          />
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-gray-100 tracking-tight mb-2">
            {t.greeting}
          </h1>
          <p className="mt-3 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            {t.bio}
          </p>
        </div>

        {/* Introduction - Image on Left */}
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-12 px-4">
          <div className="md:w-1/2 order-2 md:order-1">
            <Image
              src="https://picsum.photos/500/350?random=1" // Slightly larger image
              alt="Software Development Workspace"
              width={500}
              height={350}
              className="rounded-xl shadow-xl transform transition duration-500 hover:scale-105"
              data-ai-hint="software development code computer desk"
            />
          </div>
          <div className="md:w-1/2 order-1 md:order-2 space-y-4 text-gray-700 dark:text-gray-300">
             <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-4">{t.welcome}</h2>
            <p className="text-base md:text-lg leading-relaxed">
              {t.introduction}
            </p>
          </div>
        </div>

        {/* Expertise - Image on Right */}
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-12 px-4">
           <div className="md:w-1/2 space-y-4 text-gray-700 dark:text-gray-300">
             <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-4">{t.expertiseTitle}</h2>
            <p className="text-base md:text-lg leading-relaxed">
              {t.expertise}
            </p>
           </div>
          <div className="md:w-1/2">
            <Image
              src="https://picsum.photos/500/350?random=2" // Slightly larger image
              alt="Cloud Architecture Diagram"
              width={500}
              height={350}
              className="rounded-xl shadow-xl transform transition duration-500 hover:scale-105"
               data-ai-hint="cloud computing network server architecture diagram"
            />
          </div>
        </div>

         {/* Blogging - Image on Left */}
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-12 px-4">
           <div className="md:w-1/2 order-2 md:order-1">
            <Image
              src="https://picsum.photos/500/350?random=3" // Slightly larger image
              alt="Person Writing on Laptop"
              width={500}
              height={350}
              className="rounded-xl shadow-xl transform transition duration-500 hover:scale-105"
              data-ai-hint="blogging writing keyboard laptop person"
            />
          </div>
          <div className="md:w-1/2 order-1 md:order-2 space-y-4 text-gray-700 dark:text-gray-300">
             <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-4">{t.sharingTitle}</h2>
            <p className="text-base md:text-lg leading-relaxed">
              {t.sharing}
            </p>
           </div>
        </div>

        {/* Learning - Image on Right */}
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-12 px-4">
           <div className="md:w-1/2 space-y-4 text-gray-700 dark:text-gray-300">
             <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-4">{t.learningTitle}</h2>
            <p className="text-base md:text-lg leading-relaxed">
              {t.learning}
            </p>
           </div>
          <div className="md:w-1/2">
            <Image
              src="https://picsum.photos/500/350?random=2" // Using random=2 again for learning image
              alt="Online Course or Conference"
              width={500}
              height={350}
              className="rounded-xl shadow-xl transform transition duration-500 hover:scale-105"
              data-ai-hint="learning books education online course conference"
            />
          </div>
        </div>


        {/* Conclusion */}
        <div className="space-y-4 text-center pt-12 px-4">
           <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100">{t.contactTitle}</h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">{t.contact}</p>
           {/* Optional: Add a Call to Action Button */}
           {/* <Button size="lg" className="mt-6">Connect with Me</Button> */}
        </div>
      </div>
    </div>
  );
}
