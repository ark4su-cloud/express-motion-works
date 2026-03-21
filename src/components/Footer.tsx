const Footer = () => {
  return (
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-4 text-center">
        <span className="font-display text-lg font-bold text-gradient">Casu Artiom</span>
        <p className="text-muted-foreground text-sm mt-2">
          Motion Designer & After Effects Specialist
        </p>
        <p className="text-muted-foreground/60 text-xs mt-4">
          © {new Date().getFullYear()} Casu Artiom. Toate drepturile rezervate.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
