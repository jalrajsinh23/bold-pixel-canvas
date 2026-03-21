import { useScrollReveal } from "@/hooks/use-animations";

const AboutSection = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollReveal();
  const { ref: contentRef, isVisible: contentVisible } = useScrollReveal(0.15);

  const highlights = [
    { label: "Focus", value: "Frontend Dev" },
    { label: "Study", value: "CS + AIML" },
    { label: "Passion", value: "UI/UX Craft" },
    { label: "Vibe", value: "Creative Coder" },
  ];

  return (
    <section id="about" className="relative py-32 md:py-48 overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Section label */}
        <div
          ref={titleRef}
          className={`mb-16 transition-all duration-700 ${
            titleVisible ? "opacity-100 translate-y-0 blur-0" : "opacity-0 translate-y-6 blur-sm"
          }`}
        >
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary mb-4">
            01 — About
          </p>
          <h2 className="font-display text-4xl md:text-6xl font-bold tracking-tight leading-[1.05]">
            Bridging design<br />
            <span className="text-muted-foreground">& code</span>
          </h2>
        </div>

        <div
          ref={contentRef}
          className={`grid md:grid-cols-2 gap-16 transition-all duration-700 delay-200 ${
            contentVisible ? "opacity-100 translate-y-0 blur-0" : "opacity-0 translate-y-6 blur-sm"
          }`}
        >
          {/* Story */}
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm a CS student specialising in AI & Machine Learning, but my heart lives 
              in the <span className="text-foreground">intersection of design and code</span>.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I turn creative ideas into clean, responsive interfaces that users actually love. 
              Known as the <span className="text-primary">creative spark</span> of every team I join — 
              always experimenting, always building.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Currently sharpening my craft with React, Node.js, and modern design systems. 
              Eager to create impactful products with teams that value craft.
            </p>
          </div>

          {/* Highlight cards */}
          <div className="grid grid-cols-2 gap-4">
            {highlights.map((item, i) => (
              <div
                key={item.label}
                className="glass rounded-2xl p-6 hover:glow-sm transition-all duration-500 group"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-3">
                  {item.label}
                </p>
                <p className="font-display text-lg font-semibold group-hover:text-primary transition-colors duration-300">
                  {item.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
