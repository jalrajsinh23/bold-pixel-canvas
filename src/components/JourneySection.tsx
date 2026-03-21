import { useScrollReveal } from "@/hooks/use-animations";

const journeyItems = [
  {
    period: "Present",
    title: "B.Tech — CS (AI & ML)",
    description: "Currently pursuing Computer Science with specialisation in Artificial Intelligence and Machine Learning.",
    highlight: true,
  },
  {
    period: "Ongoing",
    title: "Frontend Development",
    description: "Building responsive, animated web experiences with React, modern CSS, and design systems.",
    highlight: false,
  },
  {
    period: "Exploring",
    title: "Creative Coding",
    description: "Experimenting with animations, micro-interactions, and creative frontend patterns.",
    highlight: false,
  },
  {
    period: "Always",
    title: "Learning & Growing",
    description: "Picking up new frameworks, exploring open-source, and staying current with web trends.",
    highlight: false,
  },
];

const JourneySection = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollReveal();

  return (
    <section id="journey" className="relative py-32 md:py-48">
      <div className="container mx-auto px-6">
        <div
          ref={titleRef}
          className={`mb-16 transition-all duration-700 ${
            titleVisible ? "opacity-100 translate-y-0 blur-0" : "opacity-0 translate-y-6 blur-sm"
          }`}
        >
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary mb-4">
            04 — Journey
          </p>
          <h2 className="font-display text-4xl md:text-6xl font-bold tracking-tight leading-[1.05]">
            The path<br />
            <span className="text-muted-foreground">so far</span>
          </h2>
        </div>

        <div className="relative max-w-2xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-border to-transparent" />

          <div className="space-y-12">
            {journeyItems.map((item, i) => {
              const { ref, isVisible } = useScrollReveal(0.2);
              return (
                <div
                  key={item.title}
                  ref={ref}
                  className={`relative pl-16 md:pl-20 transition-all duration-700 ${
                    isVisible ? "opacity-100 translate-x-0 blur-0" : "opacity-0 translate-x-6 blur-sm"
                  }`}
                  style={{ transitionDelay: `${i * 120}ms` }}
                >
                  {/* Dot */}
                  <div
                    className={`absolute left-[18px] md:left-[26px] top-1.5 w-3 h-3 rounded-full border-2 ${
                      item.highlight
                        ? "bg-primary border-primary glow-sm"
                        : "bg-background border-muted-foreground/40"
                    }`}
                  />

                  <p className="font-mono text-[10px] uppercase tracking-widest text-primary mb-2">
                    {item.period}
                  </p>
                  <h3 className="font-display text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default JourneySection;
