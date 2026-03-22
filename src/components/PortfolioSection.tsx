import { useEffect, useRef } from "react";

const videos = [
  { src: "https://player.vimeo.com/video/1167214245?background=1&autoplay=1&loop=1&muted=1", type: "vertical" }, // finisaj
  { src: "https://player.vimeo.com/video/1175906049?background=1&autoplay=1&loop=1&muted=1", type: "horizontal" }, // lumier
  { src: "https://player.vimeo.com/video/1167215573?background=1&autoplay=1&loop=1&muted=1", type: "vertical" }, // video kretu
  { src: "https://player.vimeo.com/video/1175906559?background=1&autoplay=1&loop=1&muted=1", type: "horizontal" }, // piano
  { src: "https://player.vimeo.com/video/1171750940?background=1&autoplay=1&loop=1&muted=1", type: "vertical" }, // zbor compensat
  { src: "https://player.vimeo.com/video/1175906816?background=1&autoplay=1&loop=1&muted=1", type: "horizontal" }, // video natura
  { src: "https://player.vimeo.com/video/1167215252?background=1&autoplay=1&loop=1&muted=1", type: "vertical" }, // metalline
  { src: "https://player.vimeo.com/video/1167215645?background=1&autoplay=1&loop=1&muted=1", type: "horizontal" }, // detaliing
  { src: "https://player.vimeo.com/video/1171745250?background=1&autoplay=1&loop=1&muted=1", type: "vertical" }, // A7 VIDEO vertical
  { src: "https://player.vimeo.com/video/1144657439?background=1&autoplay=1&loop=1&muted=1", type: "horizontal" }, // PIZZA VIDEO orizontal
];

const PortfolioSection = () => {
  return (
    <section id="portfolio" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 mb-16 text-center">
        <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
          Portofoliul <span className="text-gradient">Meu</span>
        </h2>
        <p className="text-muted-foreground text-lg max-w-xl mx-auto">
          Câteva dintre proiectele pe care le-am realizat recent
        </p>
      </div>

      <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-8">
        {/* Completely Transparent Container to match global background */}
        <div className="relative rounded-[3rem] py-4 overflow-hidden border-0 ring-0">
          <div className="relative z-10">
            <div
              className="overflow-hidden w-full relative"
              style={{
                maskImage: "linear-gradient(to right, transparent, black 3%, black 97%, transparent)",
                WebkitMaskImage: "linear-gradient(to right, transparent, black 3%, black 97%, transparent)"
              }}
            >
              {/* Scrolling track: continuous left-to-right without hover pause */}
              <div className="flex min-w-max animate-[marquee-lr_40s_linear_infinite]">
                {/* We render exactly 2 identical sets of videos to loop seamlessly */}
                {[0, 1].map((setIndex) => (
                  <div key={setIndex} className="flex gap-6 md:gap-8 items-center px-3 md:px-4">
                    {videos.map((video, index) => (
                      <div
                        key={`${setIndex}-${index}`}
                        className={`relative rounded-3xl overflow-hidden flex-shrink-0 shadow-2xl border border-white/10 transition-transform duration-500 hover:scale-[1.03] ${video.type === "vertical" ? "w-[160px] md:w-[260px] aspect-[9/16]" : "w-[240px] md:w-[460px] aspect-video"
                          }`}
                      >
                        <iframe
                          src={video.src}
                          className="w-[150%] h-[150%] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 object-cover pointer-events-none"
                          allow="autoplay; fullscreen"
                          frameBorder="0"
                        />
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
