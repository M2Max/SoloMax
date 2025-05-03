
import Image from 'next/image';

// Translations object
const translations = {
  en: {
    greeting: "Hello, I'm John Doe",
    bio: "A passionate software engineer and blogger.",   
    welcome: "Welcome to my digital space!",   
    introduction: "I'm thrilled to share my journey, insights, and experiences in the ever-evolving world of software development. This platform serves as a hub for my thoughts on coding, technology trends, and the art of problem-solving. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. With over a decade in the software industry, I've had the privilege of contributing to diverse projects, ranging from intricate web applications to robust enterprise systems. Each experience has enriched my understanding and fueled my passion for creating innovative solutions. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
    expertiseTitle: "My Expertise",
    expertise: "My expertise lies in crafting elegant and efficient code, specializing in front-end and back-end development, as well as cloud computing. I'm constantly seeking opportunities to expand my skill set and stay ahead of the curve in this dynamic field. Learning new technologies is not just a part of my job; it's a personal commitment. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit. I firmly believe that coding is a skill that can be learned by anyone, regardless of background. Therefore, I'm dedicated to making software development more accessible and inclusive for all. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit. Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi.",
    sharingTitle: "Sharing Knowledge",
    sharing: "In my free time, I channel my energy into writing about software development and sharing my insights with the world. Through my blog, I aim to provide valuable resources, tutorials, and reflections on the tech industry. Similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. I invite you to delve into the blog section, where you'll discover a collection of articles covering a diverse range of subjects, from practical coding techniques to thought-provoking discussions on the future of technology. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae.",
    learningTitle: "Continuous Learning",
    learning: "The tech landscape is constantly shifting, and embracing lifelong learning is crucial. I actively participate in online courses, attend tech conferences, and contribute to open-source projects to stay updated with the latest advancements and best practices. Itaque earum rerum hic tenetur a sapiente delectus. This commitment to continuous improvement allows me to bring fresh perspectives and cutting-edge techniques to my work, ensuring that the solutions I build are not only functional but also modern and scalable. Ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    contactTitle: "Get In Touch",
    contact: "Thank you for visiting my website! I'm always eager to connect with fellow tech enthusiasts, developers, and potential collaborators. Feel free to explore the blog, check out my projects, or reach out through the contact information provided. Let's build something amazing together! I believe in the power of collaboration and community. Sharing knowledge and learning from others are fundamental aspects of growth in the technology field. Whether you have a question, a project idea, or just want to chat about tech, don't hesitate to connect!",
  },
  es: {
    greeting: "Hola, soy John Doe",
    bio: "Un apasionado ingeniero de software y blogger.",
    welcome: "¡Bienvenido a mi espacio digital!",
    introduction: "Estoy encantado de compartir mi viaje, conocimientos y experiencias en el mundo en constante evolución del desarrollo de software. Esta plataforma sirve como un centro para mis pensamientos sobre codificación, tendencias tecnológicas y el arte de resolver problemas. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Con más de una década en la industria del software, he tenido el privilegio de contribuir a diversos proyectos, desde intrincadas aplicaciones web hasta robustos sistemas empresariales. Cada experiencia ha enriquecido mi comprensión y ha alimentado mi pasión por crear soluciones innovadoras. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
    expertiseTitle: "Mi Experiencia",
    expertise: "Mi experiencia radica en la creación de código elegante y eficiente, especializándome en el desarrollo front-end y back-end, así como en la computación en la nube. Busco constantemente oportunidades para ampliar mi conjunto de habilidades y mantenerme a la vanguardia en este campo dinámico. Aprender nuevas tecnologías no es solo parte de mi trabajo; es un compromiso personal. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit. Creo firmemente que la codificación es una habilidad que cualquiera puede aprender, independientemente de su origen. Por lo tanto, me dedico a hacer que el desarrollo de software sea más accesible e inclusivo para todos. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit. Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi.",
    sharingTitle: "Compartiendo Conocimiento",
    sharing: "En mi tiempo libre, canalizo mi energía escribiendo sobre desarrollo de software y compartiendo mis conocimientos con el mundo. A través de mi blog, mi objetivo es proporcionar recursos valiosos, tutoriales y reflexiones sobre la industria tecnológica. Similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Te invito a profundizar en la sección del blog, donde descubrirás una colección de artículos que cubren una amplia gama de temas, desde técnicas prácticas de codificación hasta debates que invitan a la reflexión sobre el futuro de la tecnología. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae.",
    learningTitle: "Aprendizaje Continuo",
    learning: "El panorama tecnológico cambia constantemente y abrazar el aprendizaje permanente es crucial. Participo activamente en cursos en línea, asisto a conferencias tecnológicas y contribuyo a proyectos de código abierto para mantenerme actualizado con los últimos avances y mejores prácticas. Itaque earum rerum hic tenetur a sapiente delectus. Este compromiso con la mejora continua me permite aportar nuevas perspectivas y técnicas de vanguardia a mi trabajo, asegurando que las soluciones que construyo no solo sean funcionales sino también modernas y escalables. Ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    contactTitle: "Ponerse en Contacto",
    contact: "¡Gracias por visitar mi sitio web! Siempre estoy ansioso por conectar con otros entusiastas de la tecnología, desarrolladores y posibles colaboradores. Siéntete libre de explorar el blog, ver mis proyectos o contactarme a través de la información proporcionada. ¡Construyamos algo increíble juntos! Creo en el poder de la colaboración y la comunidad. Compartir conocimientos y aprender de los demás son aspectos fundamentales del crecimiento en el campo de la tecnología. Ya sea que tengas una pregunta, una idea de proyecto o simplemente quieras charlar sobre tecnología, ¡no dudes en conectarte!",
  },
  it: { // Italian translations
    greeting: "Ciao, sono John Doe",
    bio: "Un appassionato ingegnere del software e blogger.",
    welcome: "Benvenuto nel mio spazio digitale!",
    introduction: "Sono entusiasta di condividere il mio percorso, le mie intuizioni ed esperienze nel mondo in continua evoluzione dello sviluppo software. Questa piattaforma funge da hub per i miei pensieri sulla programmazione, le tendenze tecnologiche e l'arte della risoluzione dei problemi. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Con oltre un decennio nel settore del software, ho avuto il privilegio di contribuire a diversi progetti, dalle intricate applicazioni web ai robusti sistemi aziendali. Ogni esperienza ha arricchito la mia comprensione e alimentato la mia passione per la creazione di soluzioni innovative. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
    expertiseTitle: "La Mia Esperienza",
    expertise: "La mia esperienza risiede nella creazione di codice elegante ed efficiente, specializzandomi nello sviluppo front-end e back-end, nonché nel cloud computing. Cerco costantemente opportunità per ampliare le mie competenze e rimanere all'avanguardia in questo campo dinamico. Imparare nuove tecnologie non è solo una parte del mio lavoro; è un impegno personale. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit. Credo fermamente che la programmazione sia un'abilità che può essere appresa da chiunque, indipendentemente dal background. Pertanto, mi dedico a rendere lo sviluppo software più accessibile e inclusivo per tutti. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit. Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi.",
    sharingTitle: "Condivisione della Conoscenza",
    sharing: "Nel mio tempo libero, canalizzo la mia energia scrivendo sullo sviluppo software e condividendo le mie intuizioni con il mondo. Attraverso il mio blog, miro a fornire risorse preziose, tutorial e riflessioni sull'industria tecnologica. Similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Ti invito ad approfondire la sezione del blog, dove scoprirai una raccolta di articoli che coprono una vasta gamma di argomenti, dalle tecniche pratiche di programmazione alle discussioni stimolanti sul futuro della tecnologia. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae.",
    learningTitle: "Apprendimento Continuo",
    learning: "Il panorama tecnologico è in continua evoluzione ed è fondamentale abbracciare l'apprendimento permanente. Partecipo attivamente a corsi online, partecipo a conferenze tecnologiche e contribuisco a progetti open source per rimanere aggiornato sugli ultimi progressi e le migliori pratiche. Itaque earum rerum hic tenetur a sapiente delectus. Questo impegno per il miglioramento continuo mi consente di apportare nuove prospettive e tecniche all'avanguardia al mio lavoro, garantendo che le soluzioni che costruisco non siano solo funzionali ma anche moderne e scalabili. Ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    contactTitle: "Mettiti in Contatto",
    contact: "Grazie per aver visitato il mio sito web! Sono sempre desideroso di connettermi con altri appassionati di tecnologia, sviluppatori e potenziali collaboratori. Sentiti libero di esplorare il blog, dare un'occhiata ai miei progetti o contattarmi tramite le informazioni di contatto fornite. Costruiamo qualcosa di straordinario insieme! Credo nel potere della collaborazione e della comunità. Condividere la conoscenza e imparare dagli altri sono aspetti fondamentali della crescita nel campo della tecnologia. Che tu abbia una domanda, un'idea per un progetto o semplicemente voglia chiacchierare di tecnologia, non esitare a connetterti!",
  }
};


// Since this is a Server Component, we can directly accept params
export default function Home({ params }: { params: { locale: string } }) {
  const locale = params.locale as keyof typeof translations; // Ensure locale is a valid key
  const t = translations[locale] || translations.en; // Fallback to English if locale is invalid

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
            data-ai-hint="avatar profile picture"
          />
          <h1 className="text-3xl font-semibold text-gray-800 dark:text-gray-100">
            {t.greeting}
          </h1>
          <p className="mt-2 text-gray-600 dark:text-gray-400">
            {t.bio}
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
              data-ai-hint="software development code computer"
            />
          </div>
          <div className="md:w-1/2 space-y-4">
             <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">{t.welcome}</h2>
            <p className="text-gray-700 dark:text-gray-300">
              {t.introduction}
            </p>            
          </div>
        </div>

        {/* Expertise - Image on Right */}
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2 space-y-4">
             <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">{t.expertiseTitle}</h2>
            <p className="text-gray-700 dark:text-gray-300">
              {t.expertise}
            </p>
           </div>
          <div className="md:w-1/2">
            <Image
              src="https://picsum.photos/401/300"
              alt="Cloud Computing"
              width={401}
              height={300}
              className="rounded-lg shadow-md"
               data-ai-hint="cloud computing network server"
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
              data-ai-hint="blogging writing keyboard"
            />
          </div>
          <div className="md:w-1/2 space-y-4">
             <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">{t.sharingTitle}</h2>
            <p className="text-gray-700 dark:text-gray-300">
              {t.sharing}
            </p>          
           </div>
        </div>

        {/* Additional Section - Image on Right */}
        <div className="flex flex-col md:flex-row items-center gap-8">
           <div className="md:w-1/2 space-y-4">
             <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">{t.learningTitle}</h2>
            <p className="text-gray-700 dark:text-gray-300">
              {t.learning}
            </p>           
           </div>
          <div className="md:w-1/2">
            <Image
              src="https://picsum.photos/403/300"
              alt="Learning"
              width={403}
              height={300}
              className="rounded-lg shadow-md"
              data-ai-hint="learning books education"
            />
          </div>
        </div>


        {/* Conclusion */}
        <div className="space-y-4 text-center pt-8">
           <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">{t.contactTitle}</h2>
          <p className="text-gray-700 dark:text-gray-300">{t.contact}</p>
           
        </div>
      </div>
    </div>
  );
}
