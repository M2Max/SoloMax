
import Image from 'next/image';
import WorkTimeline from '../../components/WorkTimeline'; // Import the new component
import EducationTimeline from '../../components/EducationTimeline'; // Import the new component

// Translations object
const translations = {
  en: {
    greeting: "Hello, I'm Max",
    bio: "Software engineer, AI enthusiast, and blogger.",
    welcome: "Welcome to my digital space!",
    introduction: "I'm excited to share my journey, insights and experiences in the ever-evolving world of software development and artificial intelligence. This platform serves as a hub for my thoughts on AI, programming, technology trends and the art of problem solving. With a deep passion for technology and a commitment to continuous learning, I strive to create elegant and efficient solutions. Whether it's building complex web applications or exploring the latest advances in AI, I enjoy tackling challenges and pushing the boundaries of what's possible with the latest technologies!",
    expertiseTitle: "My Experience & Education",
    expertisePart1: "After graduating in Computer, Electronics and Telecommunications Engineering, I embarked on a professional path as a Data & AI Engineer in Reply, collaborating with Sky Italia on complex data engineering and machine learning projects. I currently work as a Data Scientist and AI Engineer at Elfo Srl, where I contribute to the development of advanced solutions based on predictive models and AI technologies.",
    expertisePart2: "My experience lies in creating code closely intertwined with Machine and Deep Learning models (including GPT but not only!). I also have a keen interest in cloud computing (AWS, Google Cloud) and scalable system architecture. I am constantly looking for opportunities to expand my skills and stay at the forefront in this dynamic field. Learning new technologies is not just part of my job; it's a personal commitment.",

    workHistoryTitle: "Work History", // New title for work history
    workHistory: [
      { dates: "December 2024 - Currently", company: "Elfo Srl", title: "Data Scientist & AI Engineer" },
      { dates: "May 2025 - June 2025", company: "ENAC Emilia Romagna", title: "Artificial Intelligence Teacher"},
      { dates: "April 2023 - December 2024", company: "Live Reply IT | Sky Italia", title: "Data & AI Engineer" },
      { dates: "December 2022 - April 2023", company: "Teknomaint Srl", title: "Full Stack Web Developer" },
      { dates: "October 2022 - December 2022", company: "ENAC Emilia Romagna", title: "Computer Science Teacher" }
    ],

    educationHistoryTitle: "Education", // New title for education history
    educationHistory: [
      { dates: "September 2019 - December 2022", title: "Bachelor's Degree in Computer, Electronic and Telecommunications Engineering", institution: "Università degli Studi di Parma" },
      { dates: "February 2024", title: "Cambridge C1 Advanced Certification", institution: "Cambridge Assessment English" }
    ],

    sharingTitle: "Knowledge Sharing",
    sharing: "In my free time, I channel my energy into writing about software development and sharing my insights with the world through this blog. My commitment isn't driven by monetization goals, but by the desire to document and share my experiments. For this reason, I aim to make the code and methods I use open source, so they can be useful to other developers and AI enthusiasts. I invite you to explore the blog section, where you'll find a collection of articles covering a wide range of topics—from practical programming techniques and architectural patterns to thought-provoking discussions on the future of technology and the ethical considerations surrounding it. Sharing knowledge fosters growth for everyone.",
    contactTitle: "Get In Touch",
    contact: "Thank you for visiting my website! I'm always eager to connect with fellow tech enthusiasts, developers, and knowledgable people. Feel free to explore the blog, check out my projects (<a class='text-blue-600 hover:underline' href='https://github.com/M2Max'>GitHub</a>), or reach out through email (<a class='text-blue-600 hover:underline' href='mailto:maximiliano.mamone@solomax.dev'>You just need to click here</a>). Sharing knowledge and learning from others are fundamental aspects of growth in the technology field. Whether you have a question, a project idea, or simply want to chat about tech, don't hesitate to connect!",
  },
  it: {
    greeting: "Ciao, sono Max",
    bio: "Ingegnere, appasionato di AI e blogger.",
    welcome: "Benvenuto nel mio spazio digitale!",
    introduction: "Sono entusiasta di condividere il mio percorso, le mie intuizioni ed esperienze nel mondo in continua evoluzione dello sviluppo software e dell'intelligenza artificiale. Questa piattaforma funge da hub per i miei pensieri sull'AI, la programmazione, le tendenze tecnologiche e l'arte della risoluzione dei problemi. Con una profonda passione per la tecnologia e un impegno per l'apprendimento continuo, mi sforzo di creare soluzioni eleganti ed efficienti. Che si tratti di costruire complesse applicazioni web o esplorare gli ultimi progressi nell'IA, mi piace affrontare le sfide e spingere i confini del possibile con le ultime tecnologie!",
    expertiseTitle: "La Mia Esperienza e Formazione",
    expertisePart1: "Dopo la laurea in Ingegneria Informatica, Elettronica e delle Telecomunicazioni, ho intrapreso un percorso professionale  come Data & AI Engineer in Reply, collaborando con Sky Italia su progetti complessi di data engineering e machine learning. Attualmente lavoro come Data Scientist e AI Engineer in Elfo Srl, dove contribuisco allo sviluppo di soluzioni avanzate basate su modelli predittivi e tecnologie AI.",
    expertisePart2: "La mia esperienza risiede nella creazione di codice strettamente intrecciato con modelli di Machine e Deep Learning (anche GPT ma non solo!). Ho anche un vivo interesse per il cloud computing (AWS, Google Cloud) e l'architettura di sistemi scalabili. Cerco costantemente opportunità per ampliare le mie competenze e rimanere all'avanguardia in questo campo dinamico. Imparare nuove tecnologie non è solo una parte del mio lavoro; è un impegno personale.",

    workHistoryTitle: "Cronologia Lavorativa", // New title for work history
    workHistory: [
      { dates: "Dicembre 2024 - Attualmente", company: "Elfo Srl", title: "Data Scientist & AI Engineer" },
      { dates: "Maggio 2025 - Giugno 2025", company: "ENAC Emilia Romagna", title: "Insegnante corso di Intelligenza Artificiale"},
      { dates: "Aprile 2023 - Dicembre 2024", company: "Live Reply IT | Sky Italia", title: "Data & AI Engineer" },
      { dates: "Dicembre 2022 - Aprile 2023", company: "Teknomaint Srl", title: "Full Stack Web Developer" },
      { dates: "Ottobre 2022 - Dicembre 2022", company: "ENAC Emilia Romagna", title: "Insegnante corso di Informatica" }
    ],

    educationHistoryTitle: "Formazione", // New title for education history
     educationHistory: [
      { dates: "Settembre 2019 - Dicembre 2022", title: "Laurea in Ingegneria Informatica, Elettronica e delle Telecomunicazioni", institution: "Università degli Studi di Parma" },
      { dates: "Febbraio 2024", title: "Certificazione Cambridge C1 Advanced", institution: "Cambridge Assessment English" }
    ],

    sharingTitle: "Condivisione della Conoscenza",
    sharing: "Nel mio tempo libero, canalizzo la mia energia scrivendo sullo sviluppo software e condividendo le mie intuizioni con il mondo attraverso questo blog. Il mio impegno non è guidato da obiettivi di monetizzazione, ma dalla volontà di documentare e condividere le mie sperimentazioni. Per questo motivo, punto a rendere open source il codice e i metodi che utilizzo, affinché possano essere utili ad altri sviluppatori e appassionati dell'intelligenza Artificiale. Ti invito ad approfondire la sezione del blog, dove scoprirai una raccolta di articoli che coprono una vasta gamma di argomenti, dalle tecniche pratiche di programmazione e pattern architetturali alle discussioni stimolanti sul futuro della tecnologia e le considerazioni etiche che la circondano. Condividere la conoscenza favorisce la crescita di tutti.",
    contactTitle: "Fatti sentire",
    contact: "Grazie per aver visitato il mio sito! Sono sempre felice di entrare in contatto con altri appassionati di tecnologia, sviluppatori e persone con più esperienza e conoscenza. Sentiti libero di esplorare il blog, dare un'occhiata ai miei progetti (<a class='text-blue-600 hover:underline' href='https://github.com/M2Max'>GitHub</a>) o contattarmi tramite mail (<a class='text-blue-600 hover:underline' href='mailto:maximiliano.mamone@solomax.dev'>Ti basta cliccare qui</a>). Condividere conoscenze e imparare dagli altri sono aspetti fondamentali per crescere nel campo della tecnologia. Che tu abbia una domanda, un'idea per un progetto o semplicemente voglia fare due chiacchiere sul mondo tech, non esitare a metterti in contatto!",
  }
};

// Add generateStaticParams for the root locale page
export async function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'it' }];
}

// Work history data
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
        <div className="flex flex-col md:flex-row items-start gap-10 md:gap-12 px-4 mb-8">
 <div className="md:w-1/2 space-y-4 text-gray-700 dark:text-gray-300">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-4">{t.expertiseTitle}</h2>
          <p className="text-base md:text-lg leading-relaxed mb-8">
 {t.expertisePart1}
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
          {/* Work and Education History (Centered) */}
          <div className="flex flex-col items-center px-4 w-full">
          <div className="flex flex-col md:flex-row gap-8 w-full max-w-3xl"> {/* Limit width and center */}
          <div className="md:w-1/2">
 <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-4 text-center md:text-left">{t.workHistoryTitle}</h3>
          {t.workHistory.map((item, index) => (
          <WorkTimeline key={index} history={[item]} />
          ))}
          </div>
          <div className="md:w-1/2">
 <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-4 text-center md:text-left">{t.educationHistoryTitle}</h3>
          {t.educationHistory.map((item, index) => (
 <EducationTimeline key={index} history={[item]} />
 ))}          </div>
        </div>
        {/* Second part of Expertise */}          
        <div className="mt-8 text-gray-700 dark:text-gray-300 max-w-3xl"> {/* Limit width and center */}          
            <p className="text-base md:text-lg leading-relaxed text-center md:text-left">              
              {t.expertisePart2}              
            </p>           
          </div>           
        </div>        
        {/* Knowledge Sharing - Image on Left */ } 
        <div className ="flex flex-col md:flex-row items-center gap-10 md:gap-12 px-4">
          <div className="md:w-1/2 order-2 md:order-1">           
            <Image  src="https://picsum.photos/500/350?random=3"       
                    alt="Person Writing on Laptop"              
                    width={500}             
                    height={350}               
                    className="rounded-xl shadow-xl transform transition duration-500 hover:scale-105"              
                    data-ai-hint="blogging writing keyboard laptop person"/>
          </div>          
          <div className="md:w-1/2 order-1 md:order-2 space-y-4 text-gray-700 dark:text-gray-300">             
            <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-4">
              {t.sharingTitle}
            </h2>            
            <p className="text-base md:text-lg leading-relaxed">
              {t.sharing}            
            </p>           
          </div>        
        </div>
        {/* Conclusion */}
        <div className="space-y-4 text-center pt-12 px-4">
           <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100">{t.contactTitle}</h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed" dangerouslySetInnerHTML={{ __html: t.contact }}></p>
           {/* Optional: Add a Call to Action Button */}
           {/* <Button size="lg" className="mt-6">Connect with Me</Button> */}
        </div>
      </div>
    </div>
  );
}
