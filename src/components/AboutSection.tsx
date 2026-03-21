import { MapPin, Users, Award, Briefcase } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Despre <span className="text-gradient">Mine</span>
          </h2>
        </div>

        <div className="max-w-5xl mx-auto flex flex-col lg:flex-row items-center gap-12">
          {/* Photo group */}
          <div className="relative flex-shrink-0">
            {/* Team member placeholders behind */}
            <div className="absolute -left-6 -top-4 w-32 h-40 rounded-2xl bg-primary/10 border border-primary/20 overflow-hidden rotate-[-6deg] shadow-lg">
              <div className="w-full h-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                <Users className="h-8 w-8 text-primary/40" />
              </div>
            </div>
            <div className="absolute -right-6 -top-2 w-32 h-40 rounded-2xl bg-accent/10 border border-accent/20 overflow-hidden rotate-[6deg] shadow-lg">
              <div className="w-full h-full bg-gradient-to-br from-accent/20 to-primary/20 flex items-center justify-center">
                <Users className="h-8 w-8 text-accent/40" />
              </div>
            </div>
            {/* Main photo placeholder */}
            <div className="relative z-10 w-48 h-56 rounded-2xl bg-card border-2 border-primary/30 overflow-hidden shadow-xl">
              <div className="w-full h-full bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                <span className="text-5xl">👨‍💻</span>
              </div>
            </div>
          </div>

          {/* Bio text */}
          <div className="flex-1 text-center lg:text-left">
            <h3 className="font-display text-2xl font-bold mb-4">Salut! Sunt Artiom 👋</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Activez în domeniul motion design-ului de peste 2 ani, oferind servicii profesionale ca antreprenor independent. 
              Am dezvoltat o afacere dedicată creării de conținut vizual de calitate, cu o echipă de încredere care se ocupă 
              de crearea site-urilor web și design-ul de logo-uri.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Împreună cu echipa mea, acoperim toate nevoile vizuale ale brandului tău — de la animații captivante 
              până la identitate vizuală completă. Suntem bazați în Republica Moldova și lucrăm cu clienți din toată lumea.
            </p>

            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
                <Briefcase className="h-4 w-4" />
                Antreprenor Independent
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
                <Users className="h-4 w-4" />
                Echipă Dedicată
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
                <MapPin className="h-4 w-4" />
                Republica Moldova
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
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
