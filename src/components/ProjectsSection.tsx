import { useScrollReveal } from "@/hooks/use-animations";
import { useState } from "react";
import { ExternalLink, Github } from "lucide-react";

interface Project {
  title: string;
  description: string;
  tech: string[];
  image: string;
  color: string;
}

const projects: Project[] = [
  {
    title: "Portfolio Website",
    description:
      "A creative, animated personal portfolio showcasing frontend development skills with modern design patterns and micro-interactions.",
    tech: ["React", "CSS", "Animations"],
    image: "",
    color: "from-primary/20 to-primary/5",
  },
  {
    title: "Webflow Projects",
    description:
      "Various client-facing web projects built with Webflow, focusing on responsive design, clean UI, and user experience optimization.",
    tech: ["Webflow", "CSS", "UI/UX"],
    image: "",
    color: "from-emerald-500/20 to-emerald-500/5",
  },
  {
    title: "Frontend Experiments",
    description:
      "A collection of creative coding experiments exploring modern CSS, React patterns, and interactive web experiences.",
    tech: ["React", "HTML", "CSS"],
    image: "",
    color: "from-amber-500/20 to-amber-500/5",
  },
];

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  const [hovered, setHovered] = useState(false);
  const { ref, isVisible } = useScrollReveal(0.15);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0 blur-0" : "opacity-0 translate-y-8 blur-sm"
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="group relative rounded-3xl overflow-hidden border border-border/50 hover:border-primary/30 transition-all duration-500 hover:glow-sm"
      >
        {/* Gradient background */}
        <div className={`h-56 md:h-72 bg-gradient-to-br ${project.color} relative overflow-hidden`}>
          <div
            className={`absolute inset-0 flex items-center justify-center transition-all duration-500 ${
              hovered ? "scale-105" : "scale-100"
            }`}
          >
            <span className="font-display text-6xl md:text-8xl font-extrabold text-foreground/5">
              {String(index + 1).padStart(2, "0")}
            </span>
          </div>

          {/* Hover overlay */}
          <div
            className={`absolute inset-0 bg-background/80 backdrop-blur-sm flex items-center justify-center gap-4 transition-all duration-500 ${
              hovered ? "opacity-100" : "opacity-0"
            }`}
          >
            <button className="w-12 h-12 rounded-full border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 active:scale-95">
              <ExternalLink size={18} />
            </button>
            <button className="w-12 h-12 rounded-full border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 active:scale-95">
              <Github size={18} />
            </button>
          </div>
        </div>

        {/* Info */}
        <div className="p-6 md:p-8 bg-card">
          <h3 className="font-display text-xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">
            {project.title}
          </h3>
          <p className="text-muted-foreground text-sm leading-relaxed mb-5">{project.description}</p>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <span
                key={t}
                className="font-mono text-[10px] uppercase tracking-wider px-3 py-1.5 rounded-full bg-secondary text-muted-foreground"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const ProjectsSection = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollReveal();

  return (
    <section id="projects" className="relative py-32 md:py-48">
      <div className="container mx-auto px-6">
        <div
          ref={titleRef}
          className={`mb-16 transition-all duration-700 ${
            titleVisible ? "opacity-100 translate-y-0 blur-0" : "opacity-0 translate-y-6 blur-sm"
          }`}
        >
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary mb-4">
            02 — Projects
          </p>
          <h2 className="font-display text-4xl md:text-6xl font-bold tracking-tight leading-[1.05]">
            Selected<br />
            <span className="text-muted-foreground">works</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
