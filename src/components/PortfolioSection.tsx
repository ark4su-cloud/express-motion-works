const videos = [
  {
    title: "Promo Animation",
    url: "https://www.w3schools.com/html/mov_bbb.mp4",
  },
  {
    title: "Logo Reveal",
    url: "https://www.w3schools.com/html/mov_bbb.mp4",
  },
  {
    title: "Explainer Video",
    url: "https://www.w3schools.com/html/mov_bbb.mp4",
  },
  {
    title: "Social Media Ad",
    url: "https://www.w3schools.com/html/mov_bbb.mp4",
  },
];

const PortfolioSection = () => {
  return (
    <section id="portfolio" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Portofoliul</span> Meu
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Câteva dintre proiectele realizate recent
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {videos.map((video, index) => (
            <div
              key={index}
              className="group relative rounded-2xl overflow-hidden bg-card border border-border shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div className="aspect-video bg-muted">
                <video
                  className="w-full h-full object-cover"
                  autoPlay
                  loop
                  muted
                  playsInline
                >
                  <source src={video.url} type="video/mp4" />
                </video>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <h3 className="font-display text-lg font-semibold text-card">{video.title}</h3>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-muted-foreground text-sm mt-8">
          * Videoclipurile sunt demo. Voi adăuga proiectele reale în curând.
        </p>
      </div>
    </section>
  );
};

export default PortfolioSection;
