import { PlayCircle, ArrowRight } from "lucide-react";

const PortfolioSection = () => {
  return (
    <section id="portfolio" className="py-32 relative overflow-hidden">
      {/* Moving Background Shapes */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div 
          className="absolute top-1/2 left-1/4 w-[400px] h-[400px] md:w-[600px] md:h-[600px] bg-primary/10 rounded-full animate-float opacity-50"
          style={{ background: 'radial-gradient(circle, hsl(var(--primary)/0.15) 0%, transparent 70%)' }} 
        />
        <div 
          className="absolute top-1/3 right-1/4 w-[500px] h-[500px] md:w-[700px] md:h-[700px] bg-accent/10 rounded-full animate-float opacity-50" 
          style={{ background: 'radial-gradient(circle, hsl(var(--accent)/0.10) 0%, transparent 70%)', animationDelay: "2s" }} 
        />
      </div>

      <div className="container mx-auto px-4 relative z-10 text-center">
        <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
          Portofoliul <span className="text-gradient">Meu</span>
        </h2>
        
        <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-16 leading-relaxed">
          Puteți vedea toate proiectele mele, animațiile comerciale și concepte recente direct pe profilul meu oficial de Vimeo. Toate lucrările sunt redare la rezoluție și calitate maximă.
        </p>

        {/* The "Turbat" CTA Area */}
        <div className="relative inline-flex items-center justify-center p-8 md:p-24 w-full md:w-auto">
           {/* Orbiting / Animated Shapes around button */}
           <div className="absolute top-2 left-6 md:top-6 md:left-6 w-12 h-12 md:w-20 md:h-20 border border-primary/40 rounded-full animate-[spin_10s_linear_infinite]" />
           <div className="absolute bottom-6 right-6 md:bottom-12 md:right-12 w-10 h-10 md:w-16 md:h-16 bg-gradient-to-tr from-accent to-primary rounded-2xl rotate-45 animate-float shadow-[0_0_30px_hsl(var(--primary)/0.4)]" />
           <div className="absolute bottom-2 left-8 md:bottom-8 md:left-12 w-20 h-20 md:w-32 md:h-32 border-[2px] border-dashed border-accent/20 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
           
           {/* Extra Turbat Shapes */}
           <div className="absolute top-1/4 -right-8 md:-right-16 w-20 h-20 md:w-28 md:h-28 border border-blue-500/20 rounded-full animate-[spin_8s_linear_infinite]" />
           <div className="absolute -bottom-8 right-1/3 w-6 h-6 md:w-8 md:h-8 bg-gradient-to-br from-primary to-blue-500 rounded-sm rotate-12 animate-float" style={{ animationDelay: "1.5s" }} />
           <div className="absolute top-1/2 -left-8 md:-left-16 w-14 h-14 md:w-20 md:h-20 border-[3px] border-dotted border-white/20 rounded-full animate-[spin_12s_linear_infinite]" />
           <div className="absolute -top-10 right-10 w-4 h-4 bg-primary/60 rounded-full animate-bounce" style={{ animationDelay: "0.5s" }} />
           <div className="absolute -bottom-12 left-1/4 w-24 h-24 border border-accent/10 rounded-full animate-[spin_20s_linear_infinite]" />

           {/* The actual button */}
           <a 
             href="https://vimeo.com/artiomotion?fl=pp&fe=sh" 
             target="_blank" 
             rel="noreferrer"
             className="relative group flex items-center justify-center gap-4 px-5 py-6 md:px-14 md:py-8 rounded-[2.5rem] bg-secondary/30 backdrop-blur-xl border border-white/10 shadow-[0_0_50px_hsl(var(--primary)/0.2)] hover:shadow-[0_0_100px_hsl(var(--primary)/0.6)] transition-all duration-700 hover:scale-110 overflow-hidden z-10 hover:border-primary/50"
           >
             {/* Liquid hover fill effect */}
             <div className="absolute inset-0 bg-hero-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10" />
             <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay pointer-events-none" />
             
             <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-primary/20 flex items-center justify-center group-hover:bg-white/20 flex-shrink-0 transition-all duration-700 group-hover:scale-110">
               <PlayCircle className="w-6 h-6 md:w-8 md:h-8 text-primary group-hover:text-white transition-colors duration-700" />
             </div>
             
             <div className="flex flex-col items-start mr-4">
               <span className="font-bold text-lg md:text-3xl whitespace-nowrap text-foreground group-hover:text-white transition-colors duration-700">
                 Explorează Profilul
               </span>
               <span className="text-xs md:text-base whitespace-nowrap text-muted-foreground group-hover:text-white/80 transition-colors duration-700 font-medium">
                 vimeo.com/artiomotion
               </span>
             </div>
             
             <ArrowRight className="w-6 h-6 md:w-8 md:h-8 text-primary group-hover:text-white transition-all duration-700 group-hover:translate-x-4 opacity-70 group-hover:opacity-100 hidden sm:block" />
           </a>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
