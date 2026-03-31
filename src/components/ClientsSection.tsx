import { useState, useRef, useEffect } from "react";

type ClientData = {
  name: string;
  logo: string;
  link?: string;
  scale?: number;
};

const clients: ClientData[] = [
  { name: "Donate-Win", logo: "/donatewin.png", link: "https://www.donate-win.com/" },
  { name: "Dumitriu Metal", logo: "/Dumitru metal.png", link: "https://dumitriumetal.ro/", scale: 2.5 },
  { name: "Electric Smart", logo: "/Electric Smart LOGO.png", link: "https://www.tiktok.com/@electric.smartsol?is_from_webapp=1&sender_device=pc" },
  { name: "Home Direct", logo: "/home direct ro.png", link: "https://homedirect.ro/" },
  { name: "iRestore", logo: "/iRestore log.png", link: "https://www.tiktok.com/@irestoremoldova?is_from_webapp=1&sender_device=pc" },
  { name: "Vadim Kretu", logo: "/KRETU LOGO .png", link: "https://www.tiktok.com/@vadimkretu?is_from_webapp=1&sender_device=pc" },
  { name: "Metalline", logo: "/logo METALLINE.png", link: "https://metalline.md/" },
  { name: "Lumiere", logo: "/Lumiere.png", link: "https://www.facebook.com/skinlux.md/" },
  { name: "Meladore", logo: "/meladore.png", link: "https://www.tiktok.com/@meladore.interior" },
  { name: "Natura", logo: "/natura.png", link: "https://valamir-plant.md/" },
  { name: "Nice Angro", logo: "/Nice Angro.png" },
  { name: "Kinetoterapeut Pascan", logo: "/pascanserghei.png", link: "https://www.tiktok.com/@kinetoterapeut.pascan_s" },
  { name: "Piano", logo: "/piano.png" },
  { name: "Finisaje", logo: "/finisaj logo.png", link: "https://finisaje.md/" }
];

// Pentru Desktop: Toate logourile pe un rând (dublate pentru marquee infinit)
const desktopClients = [...clients, ...clients];

// Pentru Mobile: Împărțim lista în două jumătăți egale absolut distincte
const halfSize = Math.ceil(clients.length / 2);
const firstHalf = clients.slice(0, halfSize);
const secondHalf = clients.slice(halfSize);

// Triplăm jumătățile mici pentru a asigura un scroll neîntrerupt și fluid pe telefoane
const mobileRow1 = [...firstHalf, ...firstHalf, ...firstHalf];
const mobileRow2 = [...secondHalf, ...secondHalf, ...secondHalf];

const ClientLogo = ({ client, index }: { client: ClientData, index: number }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseLeave = () => setIsHovered(false);
  const handleMouseEnter = () => setIsHovered(true);

  const content = (
    <div
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
      className="relative flex items-center justify-center p-4 h-20 sm:h-28 w-[140px] sm:w-[180px] cursor-pointer group"
    >
      {/* Wrapper pentru control independent al "Padding-ului gol" din imagini individuale */}
      <div className="w-full h-full flex items-center justify-center pointer-events-none" style={{ transform: `scale(${client.scale || 1})` }}>
        <img
          src={client.logo}
          alt={client.name}
          className={`max-h-12 sm:max-h-16 max-w-[100px] sm:max-w-[130px] w-full object-contain filter transition-all duration-500 relative z-10 
            grayscale-0 opacity-100 saturate-100 drop-shadow-sm pointer-events-auto
            md:grayscale md:opacity-[0.65] md:sepia-[0.2] md:mix-blend-multiply
            md:group-hover:grayscale-0 md:group-hover:opacity-100 md:group-hover:scale-[1.12] md:group-hover:drop-shadow-[0_0_25px_rgba(139,92,246,0.4)] md:group-hover:saturate-100 md:group-hover:sepia-0 md:group-hover:mix-blend-normal`}
        />
      </div>
    </div>
  );

  if (client.link) {
    return (
      <a href={client.link} target="_blank" rel="noreferrer" className="block outline-none" draggable={false}>
        {content}
      </a>
    );
  }

  return content;
};

const ClientsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 } // Se declanșează când 15% din secțiune intră în ecran
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef}
      className={`py-20 relative z-10 w-full mt-10 md:mt-0 px-4 transition-all duration-[1500ms] ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-24"
      }`}
    >
      <div className="container mx-auto mb-16 text-center text-balance px-4">
        <h2 className="text-lg sm:text-2xl md:text-3xl tracking-[0.15em] sm:tracking-[0.2em] uppercase font-bold mx-auto text-foreground/90">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-purple-400 to-blue-500">
            Companii și Antreprenori
          </span>
          <br className="md:hidden" /> cu care am colaborat
        </h2>
      </div>

      <style>{`
        @keyframes infiniteScroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-50%)); }
        }
        @keyframes infiniteScrollReverse {
          0% { transform: translateX(calc(-50%)); }
          100% { transform: translateX(0); }
        }
        .animate-scroll-slow {
          animation: infiniteScroll 90s linear infinite;
        }
        .animate-scroll-reverse-slow {
          animation: infiniteScrollReverse 90s linear infinite;
        }
        
        .animate-gradient-spray {
          background-size: 200% 200%;
          animation: gradientMove 8s ease infinite;
        }
        @keyframes gradientMove {
           0% { background-position: 0% 50%; }
           50% { background-position: 100% 50%; }
           100% { background-position: 0% 50%; }
        }
        
        .bg-noise {
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
        }
      `}</style>
      
      <div className="max-w-[1400px] mx-auto relative px-2 sm:px-6 z-20">
        
        {/* Glow stins delicat la baza containerului */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[120%] bg-primary/5 rounded-[3rem] blur-[80px] -z-10 pointer-events-none"></div>

        {/* Forma elegantă glassmorphic (Sleek Light/Holo) */}
        <div className="relative rounded-[2rem] sm:rounded-[4rem] bg-gradient-to-tr from-white/70 via-background/80 to-primary/10 border border-white/60 overflow-hidden backdrop-blur-2xl shadow-[0_20px_80px_-20px_rgba(0,0,0,0.1)]">
          
          {/* Orbs de lumină internă colorată (Efectul tău de Spray estompat, impecabil) */}
          <div className="absolute -top-32 left-0 w-[400px] h-[400px] bg-violet-400/20 rounded-full blur-[90px] animate-pulse pointer-events-none -z-10"></div>
          <div className="absolute -bottom-32 right-0 w-[400px] h-[400px] bg-blue-400/20 rounded-full blur-[90px] animate-pulse pointer-events-none -z-10" style={{ animationDelay: '3s' }}></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-primary/10 rounded-full blur-[100px] pointer-events-none -z-10"></div>

          {/* Noise super subtil de premium */}
          <div className="absolute inset-0 opacity-[0.02] bg-noise mix-blend-multiply pointer-events-none"></div>

          {/* Wrapper cu mască lentă de estompare și tăiere forțată a colțurilor - Centrat cu justify-center */}
          <div className="relative py-12 sm:py-20 w-full flex flex-col items-center justify-center gap-10 overflow-hidden rounded-[2rem] sm:rounded-[4rem] [mask-image:_linear-gradient(to_right,transparent_0,_black_15%,_black_85%,transparent_100%)]">
            
            {/* DESKTOP ONLY: Toate companiile într-un singur rând imens */}
            <ul className="hidden md:flex items-center justify-start animate-scroll-slow w-max">
              {desktopClients.map((client, index) => (
                <li key={`desktop-${client.name}-${index}`} className="flex-shrink-0">
                  <ClientLogo client={client} index={index} />
                </li>
              ))}
            </ul>

            {/* MOBILE ONLY Rândul 1: Doar prima jumătate a firmelor */}
            <ul className="flex md:hidden items-center justify-start animate-scroll-slow w-max">
              {mobileRow1.map((client, index) => (
                <li key={`mob1-${client.name}-${index}`} className="flex-shrink-0">
                  <ClientLogo client={client} index={index} />
                </li>
              ))}
            </ul>

            {/* MOBILE ONLY Rândul 2: Doar a doua jumătate a firmelor (mișcare în sens opus) */}
            <ul className="flex md:hidden items-center justify-start animate-scroll-reverse-slow w-max">
              {mobileRow2.map((client, index) => (
                <li key={`mob2-${client.name}-${index}`} className="flex-shrink-0">
                  <ClientLogo client={client} index={index} />
                </li>
              ))}
            </ul>

          </div>
          
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
