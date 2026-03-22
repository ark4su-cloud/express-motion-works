import { MapPin, Users, Award, Briefcase, Youtube, Instagram, Music, PlayCircle } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 relative z-10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Despre <span className="text-gradient">Mine</span>
          </h2>
        </div>

        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Video Presentation */}
          <div className="w-full lg:w-3/5 flex-shrink-0">
            <div className="aspect-video w-full rounded-3xl shadow-[0_0_40px_rgba(var(--primary),0.15)] relative border-none ring-0">
              <iframe 
                src="https://player.vimeo.com/video/1171742310?title=0&byline=0&portrait=0" 
                className="w-full h-full object-cover rounded-3xl outline-none focus:outline-none border-none ring-0 absolute inset-0"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                frameBorder="0"
              />
            </div>
          </div>

          {/* Bio text */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <h3 className="font-display text-3xl font-bold mb-4">Salut! Sunt Artiom 👋</h3>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Activez în domeniul motion design-ului de peste 2 ani, oferind servicii de animație și design vizual. Am o echipă de încredere care se ocupă suplimentar de crearea site-urilor web și design-ul de logo-uri.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Postez regulat conținut pe rețelele de socializare, unde îmi prezint lucrările, rezultatele și alte proiecte din domeniul animației și design-ului. Aș aprecia foarte mult susținerea voastră printr-o urmărire a paginilor mele.
            </p>

            {/* Social Buttons */}
            <div className="flex w-full justify-center lg:justify-start gap-2 sm:gap-4 mb-10">
              <a href="https://www.tiktok.com/@artiomotion" target="_blank" rel="noreferrer" className="flex-1 lg:flex-none group relative flex items-center justify-center gap-1 sm:gap-2 px-1 sm:px-6 py-2.5 sm:py-3 rounded-xl sm:rounded-2xl bg-[#000000] border border-white/10 shadow-[0_0_20px_rgba(255,255,255,0.05)] hover:shadow-[0_0_30px_rgba(0,242,254,0.3)] hover:border-[#00f2fe]/50 transition-all text-[11px] sm:text-base font-semibold text-white overflow-hidden hover:-translate-y-1">
                <div className="absolute inset-0 bg-gradient-to-r from-[#00f2fe]/10 to-[#4facfe]/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                <Music className="h-4 w-4 sm:h-5 sm:w-5 relative z-10 group-hover:scale-110 transition-transform" /> 
                <span className="relative z-10">TikTok</span>
              </a>
              <a href="https://www.instagram.com/artiomotion.md" target="_blank" rel="noreferrer" className="flex-1 lg:flex-none group relative flex items-center justify-center gap-1 sm:gap-2 px-1 sm:px-6 py-2.5 sm:py-3 rounded-xl sm:rounded-2xl bg-gradient-to-tr from-[#f09433] via-[#e6683c] to-[#bc1888] shadow-[0_0_20px_rgba(188,24,136,0.3)] hover:shadow-[0_0_40px_rgba(188,24,136,0.5)] transition-all text-[11px] sm:text-base font-semibold text-white hover:-translate-y-1">
                <Instagram className="h-4 w-4 sm:h-5 sm:w-5 group-hover:scale-110 transition-transform" /> 
                <span className="relative z-10">Instagram</span>
              </a>
              <a href="https://www.youtube.com/@ArtioMotionMD/shorts" target="_blank" rel="noreferrer" className="flex-1 lg:flex-none group relative flex items-center justify-center gap-1 sm:gap-2 px-1 sm:px-6 py-2.5 sm:py-3 rounded-xl sm:rounded-2xl bg-[#FF0000] shadow-[0_0_20px_rgba(255,0,0,0.3)] hover:shadow-[0_0_40px_rgba(255,0,0,0.5)] transition-all text-[11px] sm:text-base font-semibold text-white hover:-translate-y-1">
                <Youtube className="h-4 w-4 sm:h-5 sm:w-5 group-hover:scale-110 transition-transform" /> 
                <span className="relative z-10">YouTube</span>
              </a>
            </div>

            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium border border-primary/20">
                <Briefcase className="h-4 w-4" />
                Antreprenor
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium border border-primary/20">
                <MapPin className="h-4 w-4" />
                Republica Moldova
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium border border-primary/20">
                <Award className="h-4 w-4" />
                2+ Ani Experiență
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
