import React, { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Send, MessageCircle, Instagram, Music, Video, Linkedin, Briefcase } from "lucide-react";

/** Isolated Typewriter Component explicitly running upon portal mount */
const TypedTitle = () => {
  const [text, setText] = useState("");
  const fullText = "Cum colaborăm?";

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setText(fullText.slice(0, i + 1));
      i++;
      if (i >= fullText.length) clearInterval(interval);
    }, 80);
    return () => clearInterval(interval);
  }, []);

  return (
    <span className="inline-block border-r-[3px] border-primary pr-2 h-8 leading-8" style={{ animation: "blink 1s step-end infinite" }}>
      {text}
      <style>{`@keyframes blink { 50% { border-color: transparent } }`}</style>
    </span>
  );
};

export const ContactDialog = ({ children }: { children: React.ReactNode }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-md bg-secondary/90 backdrop-blur-3xl border-white/10 shadow-[0_0_80px_rgba(0,0,0,0.8)] rounded-2xl gap-0 p-6 overflow-hidden">
        
        {/* Dynamic Background Decorations */}
        <div className="absolute inset-0 pointer-events-none -z-0">
          <div className="absolute inset-0 opacity-[0.85]" style={{ backgroundImage: "linear-gradient(to right, rgba(255, 255, 255, 0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.08) 1px, transparent 1px)", backgroundSize: "30px 30px" }} />
          <div className="absolute inset-0 hero-noise opacity-10" />
          <div className="absolute -top-20 -left-20 w-56 h-56 bg-primary/30 blur-[60px] rounded-full mix-blend-screen animate-pulse" />
          <div className="absolute -bottom-20 -right-20 w-56 h-56 bg-accent/30 blur-[60px] rounded-full mix-blend-screen animate-pulse" style={{ animationDelay: "1s" }} />
        </div>

        <DialogHeader className="mb-6 relative z-10">
          <DialogTitle className="text-2xl md:text-3xl font-display font-bold text-center text-gradient flex justify-center items-center h-10">
            <TypedTitle />
          </DialogTitle>
          <p className="text-center text-muted-foreground text-sm mt-1">
            Alege platforma prin care îți este cel mai ușor să comunicăm pentru proiectul tău.
          </p>
        </DialogHeader>
        
        <div className="flex flex-col gap-3">
          {/* 1. Telegram (Most Important) */}
          <a href="https://t.me/ArtioMotion" target="_blank" rel="noreferrer" className="group relative flex items-center justify-center gap-3 px-6 py-4 rounded-xl bg-gradient-to-r from-[#0088cc] to-[#00aaff] shadow-[0_0_20px_rgba(0,136,204,0.3)] hover:shadow-[0_0_40px_rgba(0,136,204,0.6)] transition-all text-white font-bold text-lg hover:-translate-y-1 overflow-hidden">
            <div className="absolute inset-0 w-[150%] h-full bg-gradient-to-r from-transparent via-white/40 to-transparent sweet-sweep" />
            <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity" />
            <Send className="h-6 w-6 group-hover:scale-110 transition-transform relative z-10" />
            <span className="relative z-10">Telegram</span>
          </a>

          {/* 2. WhatsApp (Second Most Important) */}
          <a href="https://wa.me/37368189267" target="_blank" rel="noreferrer" className="group relative flex items-center justify-center gap-3 px-6 py-4 rounded-xl bg-gradient-to-r from-[#128C7E] to-[#25D366] shadow-[0_0_20px_rgba(37,211,102,0.3)] hover:shadow-[0_0_40px_rgba(37,211,102,0.6)] transition-all text-white font-bold text-lg hover:-translate-y-1 overflow-hidden">
            <div className="absolute inset-0 w-[150%] h-full bg-gradient-to-r from-transparent via-white/40 to-transparent sweet-sweep-delayed" />
            <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity" />
            <MessageCircle className="h-6 w-6 group-hover:scale-110 transition-transform relative z-10" />
            <span className="relative z-10">WhatsApp</span>
          </a>

          <div className="w-full flex items-center justify-center gap-3 my-1 opacity-60">
            <div className="h-px bg-white/10 flex-1"></div>
            <span className="text-[10px] sm:text-xs font-semibold text-white/60 uppercase tracking-widest">Altele</span>
            <div className="h-px bg-white/10 flex-1"></div>
          </div>

          {/* Sub-grid for secondary options */}
          <div className="grid grid-cols-2 gap-3">
            {/* Instagram */}
            <a href="https://www.instagram.com/artiomotion.md" target="_blank" rel="noreferrer" className="group relative overflow-hidden flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-gradient-to-tr from-[#f09433] via-[#e6683c] to-[#bc1888] shadow-[0_0_15px_rgba(188,24,136,0.2)] hover:shadow-[0_0_25px_rgba(188,24,136,0.5)] transition-all text-white font-bold hover:-translate-y-1">
               <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity" />
               <Instagram className="h-4 w-4 relative z-10" />
               <span className="relative z-10">Instagram</span>
            </a>

            {/* TikTok */}
            <a href="https://www.tiktok.com/@artiomotion" target="_blank" rel="noreferrer" className="group relative overflow-hidden flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-black border border-white/20 hover:border-[#00f2fe]/50 shadow-lg hover:shadow-[0_0_25px_rgba(0,242,254,0.3)] transition-all text-white font-bold hover:-translate-y-1">
              <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              <Music className="h-4 w-4 relative z-10" />
              <span className="relative z-10">TikTok</span>
            </a>

            {/* Vimeo */}
            <a href="https://vimeo.com/artiomotion?fl=pp&fe=sh" target="_blank" rel="noreferrer" className="group relative overflow-hidden flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-[#1ab7ea] shadow-[0_0_15px_rgba(26,183,234,0.2)] hover:shadow-[0_0_25px_rgba(26,183,234,0.5)] transition-all text-white font-bold hover:-translate-y-1">
              <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity" />
              <Video className="h-4 w-4 relative z-10" />
              <span className="relative z-10">Vimeo</span>
            </a>

            {/* LinkedIn */}
            <a href="https://www.linkedin.com/in/artiom-casu" target="_blank" rel="noreferrer" className="group relative overflow-hidden flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-[#0077b5] shadow-[0_0_15px_rgba(0,119,181,0.2)] hover:shadow-[0_0_25px_rgba(0,119,181,0.5)] transition-all text-white font-bold hover:-translate-y-1">
              <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity" />
              <Linkedin className="h-4 w-4 relative z-10" />
              <span className="relative z-10">LinkedIn</span>
            </a>

            {/* Fiverr (Full Width across bottom) */}
            <a href="https://www.fiverr.com/s/8zX6GxZ" target="_blank" rel="noreferrer" className="group col-span-2 relative overflow-hidden flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-[#1dbf73] shadow-[0_0_15px_rgba(29,191,115,0.2)] hover:shadow-[0_0_25px_rgba(29,191,115,0.5)] transition-all text-white font-bold hover:-translate-y-1 mt-1">
              <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity" />
              <Briefcase className="h-4 w-4 relative z-10" />
              <span className="relative z-10">Fiverr</span>
            </a>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
