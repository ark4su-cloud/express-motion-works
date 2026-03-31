import { useEffect, useState } from "react";

export const CustomCursor = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    // Check if device supports hover/has fine pointer
    if (window.matchMedia("(pointer: coarse)").matches) {
      setIsTouchDevice(true);
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      
      // Hide if mouse is hitting edges of screen
      if (
        e.clientX <= 5 || 
        e.clientY <= 5 || 
        e.clientX >= window.innerWidth - 5 || 
        e.clientY >= window.innerHeight - 5
      ) {
        setIsVisible(false);
      } else {
        if (!isVisible) setIsVisible(true);
      }

      // Check if hovering a clickable element
      const target = e.target as HTMLElement;
      if (
        window.getComputedStyle(target).cursor === 'pointer' || 
        target.tagName.toLowerCase() === 'a' || 
        target.tagName.toLowerCase() === 'button'
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [isVisible]);

  if (isTouchDevice) return null;

  return (
    <>
      <style>{`
        body * {
          cursor: none !important;
        }
      `}</style>
      <div 
        className="fixed top-0 left-0 pointer-events-none z-[9999] transition-opacity duration-300"
        style={{ 
          opacity: isVisible ? 1 : 0,
          transform: `translate(${position.x}px, ${position.y}px)`
        }}
      >
        {/* Core dot */}
        <div 
          className="absolute rounded-full bg-primary mix-blend-screen transition-transform duration-200"
          style={{
            transform: `translate(-50%, -50%) scale(${isHovering ? 1.5 : 1})`,
            width: '8px',
            height: '8px'
          }}
        />
        {/* Outer glowing ring */}
        <div 
          className="absolute rounded-full border border-primary/40 bg-primary/10 transition-transform duration-200"
          style={{
            transform: `translate(-50%, -50%) scale(${isHovering ? 1.5 : 1})`,
            width: '32px',
            height: '32px'
          }}
        />
        {/* Subtle large glow */}
        <div 
          className="absolute rounded-full bg-primary/10 blur-xl opacity-50 transition-transform duration-200"
          style={{
            transform: `translate(-50%, -50%) scale(${isHovering ? 1.2 : 1})`,
            width: '80px',
            height: '80px'
          }}
        />
      </div>
    </>
  );
};
