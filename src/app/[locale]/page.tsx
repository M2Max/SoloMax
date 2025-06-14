
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
    contact: "Thank you for visiting my website! I'm always eager to connect with fellow tech enthusiasts, developers, and knowledgable people. Feel free to explore the blog, check out my projects (<a class='text-blue-600 hover:underline' href='https://github.com/M2Max'>GitHub</a>), or reach out through email (<a class='text-blue-600 hover:underline' href='mailto:info@maxmamone.it'>You just need to click here</a>). Sharing knowledge and learning from others are fundamental aspects of growth in the technology field. Whether you have a question, a project idea, or simply want to chat about tech, don't hesitate to connect!",
  },
  it: {
    greeting: "Ciao, sono Max",
    bio: "Ingegnere, appasionato di AI e blogger.",
    welcome: "Benvenuto nel mio spazio digitale!",
    introduction: "Qui trovi idee e progetti su <strong>sviluppo software, intelligenza artificiale, risoluzione di problemi…</strong> insomma, tutto ciò che stuzzica la mia curiosità!<br/> Mi piace sperimentare, imparare, cercare nuove sfide… Su questo sito condivido pensieri, riflessioni domande e soluzioni pratiche che possono essere <strong>utili anche a te.</strong> Se vuoi rimanere aggiornato sulle nuove tecnologie e capire usarle al meglio, sei nel posto giusto!",
    expertiseTitle: "La mia Esperienza e Formazione",
    expertisePart1: "Dopo la laurea in Ingegneria Informatica, Elettronica e delle Telecomunicazioni, ho iniziato a lavorare come Data & Ai Engineer in Reply, collaborando con Sky Italia su progetti di data engineering e machine learning.<br/><strong>Oggi sono Data Scientist e AI Engineer</strong> in Elfo Srl, dove mi occupo di sviluppare soluzioni basate su modelli predittivi e tecnologie AI.",
    expertisePart2: "Il mio lavoro è quello di creare codice che dialoga con modelli di machine e deep learning (anche GPT ma non solo!), ma mi interesso anche di cloud computing (AWS, Google Cloud) e architettura di sistemi scalabili.<br/> <strong>Mi piace restare sempre aggiornato, provare nuove tecnologie e continuare a crescere.</strong><br/> Non è solo lavoro: è uno sfida continua che mi diverte e mi motiva.",
    
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

    sharingTitle: "Perché scrivo (e condivido)",
    sharing: "Nel mio tempo libero mi piace scrivere sullo sviluppo software e intelligenza artificiale, condividendo esperimenti, intuizioni e qualche sbaglio lungo il percorso.<br/> Il mio obiettivo? <strong>Documentare quello che imparo nella speranza che possa tornare utile anche ad altri.</strong> Per questo, rendo open source il codice e i metodi che uso: così restano accessibili e si può discuterne e crescere insieme.<br/><br/>Nel blog trovi un po' di tutto, dalle tecniche pratiche di programmazione a discussioni e riflessioni su etica e futuro della tecnologia.<br/>Dacci un'occhiata!",
    contactTitle: "Fatti sentire",
    contact: "Grazie per essere passato di qui! <strong>Mi fa sempre piacere entrare in contatto con altri appassionati di tecnologia, sviluppatori e persone con più esperienza.</strong><br/> Sentiti libero di esplorare il blog, dare un'occhiata ai miei progetti (<a class='text-secondary hover:underline' href='https://github.com/M2Max'>GitHub</a>) o scrivimi se ti va di scambiare due parole (<a class='text-secondary hover:underline' href='mailto:info@maxmamone.it'>Ti basta cliccare qui</a>)<br/>Condividere il sapere e imparare dagli altri è il modo migliore per crescere in questo campo.<br/><br/><strong>Hai una domanda, un progetto in mente o solo voglia di fare due chiacchiere tech? Scrivimi!</strong>",
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
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-150px)] py-16 px-4 sm:px-6 lg:px-8 bg-background dark:bg-my-black">
      <div className="max-w-5xl w-full space-y-16">
        {/* Personal Bio Section */}
        <div className="text-center px-4">
          <Image
            src="https://picsum.photos/120/120" // Slightly larger avatar
            alt="Max Avatar"
            width={120}
            height={120}
            className="rounded-full mx-auto mb-6 shadow-lg border-4 border-white dark:border-gray-700"
            priority // Load avatar first
            data-ai-hint="avatar profile picture person"
          />
          <h1 className="text-4xl sm:text-5xl font-extrabold text-my-black dark:text-my-black tracking-tight mb-2">
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
            <p className="text-base md:text-lg leading-relaxed" dangerouslySetInnerHTML={{ __html: t.introduction }}>
            </p>
          </div>
        </div>

        {/* Expertise - Image on Right */}
        <div className="flex flex-col md:flex-row items-start gap-10 md:gap-12 px-4 mb-8">
 <div className="md:w-1/2 space-y-4 text-gray-700 dark:text-gray-300">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-4">{t.expertiseTitle}</h2>
          <p className="text-base md:text-lg leading-relaxed mb-8" dangerouslySetInnerHTML={{ __html: t.expertisePart1 }}></p>
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
            <p className="text-base md:text-lg leading-relaxed text-center md:text-left" dangerouslySetInnerHTML={{ __html: t.expertisePart2 }}></p>           
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
            <p className="text-base md:text-lg leading-relaxed" dangerouslySetInnerHTML={{ __html: t.sharing }}></p>           
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
