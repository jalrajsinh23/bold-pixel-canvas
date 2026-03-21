import { useEffect, useState } from "react";

const roles = ["Frontend Developer", "Creative Coder", "UI Enthusiast", "CS Student"];

const FloatingSticker = ({ children, className }: { children: React.ReactNode; className?: string }) => (
  <div className={`absolute text-primary/20 font-mono text-xs select-none pointer-events-none ${className}`}>
    {children}
  </div>
);

const HeroSection = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => setLoaded(true), 100);
    const interval = setInterval(() => {
      setRoleIndex((i) => (i + 1) % roles.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden grain">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-primary/3 rounded-full blur-3xl animate-float" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-border/30" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full border border-border/15" />
      </div>

      {/* Floating stickers */}
      <FloatingSticker className="top-[15%] left-[10%] animate-float text-lg">{"<div>"}</FloatingSticker>
      <FloatingSticker className="top-[20%] right-[12%] animate-float-slow text-sm">{"React.js"}</FloatingSticker>
      <FloatingSticker className="bottom-[20%] left-[8%] animate-float text-base">{"CSS"}</FloatingSticker>
      <FloatingSticker className="bottom-[25%] right-[15%] animate-float-slow text-xs">{"{ }"}</FloatingSticker>
      <FloatingSticker className="top-[40%] left-[5%] animate-float text-2xl opacity-10">{"⚡"}</FloatingSticker>
      <FloatingSticker className="top-[30%] right-[8%] animate-float-slow text-xl opacity-10">{"✦"}</FloatingSticker>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl">
        <div
          className={`transition-all duration-1000 ${
            loaded ? "opacity-100 translate-y-0 blur-0" : "opacity-0 translate-y-8 blur-sm"
          }`}
          style={{ transitionDelay: "200ms" }}
        >
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground mb-6">
            Portfolio — 2025
          </p>
        </div>

        <h1
          className={`font-display text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold leading-[0.9] tracking-tighter mb-8 transition-all duration-1000 ${
            loaded ? "opacity-100 translate-y-0 blur-0" : "opacity-0 translate-y-12 blur-sm"
          }`}
          style={{ transitionDelay: "400ms" }}
        >
          <span className="block">Jalrajsinh</span>
          <span className="block text-gradient glow-text">Darbar</span>
        </h1>

        <div
          className={`h-12 flex items-center justify-center transition-all duration-1000 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
          style={{ transitionDelay: "700ms" }}
        >
          <span className="font-mono text-sm md:text-base text-muted-foreground">
            {"// "}
            <span key={roleIndex} className="text-primary animate-fade-up inline-block">
              {roles[roleIndex]}
            </span>
          </span>
        </div>

        <div
          className={`mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-1000 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
          style={{ transitionDelay: "900ms" }}
        >
          <a
            href="#projects"
            className="group relative px-8 py-4 bg-primary text-primary-foreground font-display font-semibold text-sm uppercase tracking-wider rounded-full overflow-hidden transition-all duration-300 active:scale-[0.97] glow-sm hover:glow-md"
          >
            <span className="relative z-10">View Work</span>
          </a>
          <a
            href="#contact"
            className="px-8 py-4 border border-border text-foreground font-display font-semibold text-sm uppercase tracking-wider rounded-full hover:border-primary/50 hover:text-primary transition-all duration-300 active:scale-[0.97]"
          >
            Get in Touch
          </a>
        </div>

        {/* Scroll indicator */}
        <div
          className={`absolute bottom-12 left-1/2 -translate-x-1/2 transition-all duration-1000 ${
            loaded ? "opacity-100" : "opacity-0"
          }`}
          style={{ transitionDelay: "1200ms" }}
        >
          <div className="w-5 h-8 rounded-full border-2 border-muted-foreground/30 flex justify-center pt-1.5">
            <div className="w-1 h-2 bg-primary rounded-full animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
