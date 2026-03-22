import { Button } from "@/components/ui/button";

const Navbar = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent backdrop-blur-2xl border-b border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.1)] transition-all duration-300">
      <div className="container mx-auto flex items-center justify-between h-20 px-4 md:px-8">
        <span className="font-display text-2xl md:text-3xl font-bold text-gradient cursor-pointer hover:scale-105 transition-transform" onClick={() => scrollTo("hero")}>ArtioMotion</span>
        <div className="flex items-center gap-4 md:gap-8">
          <div className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollTo("portfolio")} className="text-base font-medium text-foreground/80 hover:text-foreground hover:scale-105 transition-all">Portofoliu</button>
            <button onClick={() => scrollTo("services")} className="text-base font-medium text-foreground/80 hover:text-foreground hover:scale-105 transition-all">Servicii</button>
            <button onClick={() => scrollTo("pricing")} className="text-base font-medium text-foreground/80 hover:text-foreground hover:scale-105 transition-all">Prețuri</button>
            <button onClick={() => scrollTo("about")} className="text-base font-medium text-foreground/80 hover:text-foreground hover:scale-105 transition-all">Despre</button>
            <Button size="lg" className="liquid-gradient-btn text-white font-bold rounded-xl px-6 py-5 text-base shadow-lg hover:shadow-primary/20 hover:-translate-y-0.5 transition-all" onClick={() => scrollTo("pricing")}>Comandă</Button>
          </div>
          <Button size="default" className="md:hidden liquid-gradient-btn text-white font-bold rounded-lg px-5 shadow-lg" onClick={() => scrollTo("pricing")}>Comandă</Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
