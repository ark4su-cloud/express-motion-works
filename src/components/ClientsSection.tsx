import { useRef } from "react";

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

const ClientLogo = ({ client }: { client: ClientData }) => {
  const content = (
    <div className="flex items-center justify-center p-2 sm:p-4 h-28 md:h-36 w-[150px] md:w-[220px] shrink-0 group/logo">
      <img
        src={client.logo}
        alt={client.name}
        draggable={false}
        title={client.name}
        style={{ transform: `scale(${client.scale || 1})` }}
        // Pe Telefon (Default): Culori complet ORIGINALE (fără filtre).
        // Pe PC (md:): Default Gri opac, revelandu-se Original la trecerea cursorului.
        className="max-h-20 md:max-h-24 w-auto h-auto object-contain no-drag 
          transition-all duration-[1500ms] ease-in-out
          md:grayscale md:opacity-50
          md:group-hover/logo:grayscale-0 md:group-hover/logo:opacity-100 md:group-hover/logo:scale-[1.12]"
      />
    </div>
  );

  if (client.link) {
    return (
      <a href={client.link} target="_blank" rel="noreferrer" className="block outline-none no-drag shrink-0" draggable={false}>
        {content}
      </a>
    );
  }

  return content;
};

const ClientsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section
      ref={sectionRef}
      className="py-12 md:py-24 relative w-full overflow-hidden bg-transparent"
    >
      <div className="container mx-auto mb-10 md:mb-16 text-center px-4">
        <h2 className="text-sm md:text-base font-medium tracking-widest text-foreground/70 uppercase">
          Companii și Antreprenori cu care am colaborat
        </h2>
      </div>

      <style>{`
        .no-drag {
          -webkit-user-drag: none;
          -khtml-user-drag: none;
          -moz-user-drag: none;
          -o-user-drag: none;
          user-select: none;
        }

        /* DIRECTIA STÂNGA -> DREAPTA */
        @keyframes marquee-left-to-right {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0%); }
        }
        
        .animate-marquee {
          /* Viteza redusa considerabil pe Telefon! (65 secunde) */
          animation: marquee-left-to-right 65s linear infinite;
        }

        @media (min-width: 768px) {
          .animate-marquee {
            /* PE PC (80 secunde per ciclu complet) */
            animation: marquee-left-to-right 80s linear infinite;
          }
        }
      `}</style>

      <div className="max-w-[1400px] mx-auto relative px-2 sm:px-6">
        
        <div className="w-full relative [mask-image:_linear-gradient(to_right,transparent_0,_black_15%,_black_85%,transparent_100%)] pointer-events-auto overflow-hidden">
          
          <div className="flex w-max animate-marquee">
            
            {/* Grupa 1 */}
            <div className="flex items-center justify-start min-w-max shrink-0 gap-8 sm:gap-16 px-4 sm:px-8">
              {clients.map((client, index) => (
                <ClientLogo key={`client-g1-${index}`} client={client} />
              ))}
            </div>

            {/* Grupa 2 (Seam-less loop) */}
            <div className="flex items-center justify-start min-w-max shrink-0 gap-8 sm:gap-16 px-4 sm:px-8" aria-hidden="true">
              {clients.map((client, index) => (
                 <ClientLogo key={`client-g2-${index}`} client={client} />
              ))}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
