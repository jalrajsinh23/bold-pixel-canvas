import { useScrollReveal } from "@/hooks/use-animations";

const skills = [
  { name: "HTML", level: 90, category: "core" },
  { name: "CSS", level: 85, category: "core" },
  { name: "React", level: 75, category: "framework" },
  { name: "Node.js", level: 60, category: "framework" },
  { name: "Webflow", level: 70, category: "tool" },
  { name: "JavaScript", level: 80, category: "core" },
  { name: "TypeScript", level: 55, category: "core" },
  { name: "UI/UX", level: 80, category: "design" },
];

const categoryColors: Record<string, string> = {
  core: "bg-primary",
  framework: "bg-emerald-400",
  tool: "bg-amber-400",
  design: "bg-pink-400",
};

const categoryBorders: Record<string, string> = {
  core: "border-primary/30",
  framework: "border-emerald-400/30",
  tool: "border-amber-400/30",
  design: "border-pink-400/30",
};

const SkillsSection = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollReveal();
  const { ref: gridRef, isVisible: gridVisible } = useScrollReveal(0.1);

  return (
    <section id="skills" className="relative py-32 md:py-48 overflow-hidden">
      {/* Marquee background */}
      <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 opacity-[0.03] pointer-events-none select-none overflow-hidden whitespace-nowrap">
        <div className="animate-marquee inline-block">
          <span className="font-display text-[12rem] font-extrabold tracking-tighter">
            HTML CSS REACT NODE WEBFLOW DESIGN CODE BUILD SHIP&nbsp;&nbsp;
            HTML CSS REACT NODE WEBFLOW DESIGN CODE BUILD SHIP&nbsp;&nbsp;
          </span>
        </div>
      </div>

      <div className="container mx-auto px-6 relative">
        <div
          ref={titleRef}
          className={`mb-16 transition-all duration-700 ${
            titleVisible ? "opacity-100 translate-y-0 blur-0" : "opacity-0 translate-y-6 blur-sm"
          }`}
        >
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary mb-4">
            03 — Skills
          </p>
          <h2 className="font-display text-4xl md:text-6xl font-bold tracking-tight leading-[1.05]">
            Tools &<br />
            <span className="text-muted-foreground">technologies</span>
          </h2>
        </div>

        <div
          ref={gridRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {skills.map((skill, i) => (
            <div
              key={skill.name}
              className={`glass rounded-2xl p-6 border ${categoryBorders[skill.category]} hover:glow-sm transition-all duration-500 group ${
                gridVisible ? "opacity-100 translate-y-0 blur-0" : "opacity-0 translate-y-8 blur-sm"
              }`}
              style={{ transitionDelay: `${i * 80}ms`, transitionDuration: "700ms" }}
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-display text-base font-semibold group-hover:text-primary transition-colors duration-300">
                  {skill.name}
                </h3>
                <span className="font-mono text-xs text-muted-foreground">{skill.level}%</span>
              </div>
              <div className="h-1 bg-secondary rounded-full overflow-hidden">
                <div
                  className={`h-full rounded-full ${categoryColors[skill.category]} transition-all duration-1000 ease-out`}
                  style={{
                    width: gridVisible ? `${skill.level}%` : "0%",
                    transitionDelay: `${i * 80 + 300}ms`,
                  }}
                />
              </div>
              <p className="mt-3 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                {skill.category}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
