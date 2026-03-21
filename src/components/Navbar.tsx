import { Button } from "@/components/ui/button";

const Navbar = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-card">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <span className="font-display text-xl font-bold text-gradient">ArtioMotion</span>
        <div className="hidden md:flex items-center gap-6">
          <button onClick={() => scrollTo("portfolio")} className="text-sm text-muted-foreground hover:text-foreground transition-colors">Portofoliu</button>
          <button onClick={() => scrollTo("services")} className="text-sm text-muted-foreground hover:text-foreground transition-colors">Servicii</button>
          <button onClick={() => scrollTo("pricing")} className="text-sm text-muted-foreground hover:text-foreground transition-colors">Prețuri</button>
          <button onClick={() => scrollTo("about")} className="text-sm text-muted-foreground hover:text-foreground transition-colors">Despre</button>
          <Button variant="hero" size="sm" onClick={() => scrollTo("order")}>Plasează Comanda</Button>
        </div>
        <Button variant="hero" size="sm" className="md:hidden" onClick={() => scrollTo("order")}>Comandă</Button>
      </div>
    </nav>
  );
};

export default Navbar;
