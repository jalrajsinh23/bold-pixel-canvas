import { useScrollReveal } from "@/hooks/use-animations";
import { Github, Linkedin, Mail, Phone } from "lucide-react";

const links = [
  {
    icon: <Mail size={20} />,
    label: "Email",
    value: "jalrajsinhdarbar@gmail.com",
    href: "mailto:jalrajsinhdarbar@gmail.com",
  },
  {
    icon: <Phone size={20} />,
    label: "Phone",
    value: "+91 81603 43959",
    href: "tel:+918160343959",
  },
  {
    icon: <Github size={20} />,
    label: "GitHub",
    value: "jalrajsinh23",
    href: "https://github.com/jalrajsinh23",
  },
  {
    icon: <Linkedin size={20} />,
    label: "LinkedIn",
    value: "Jalrajsinh Darbar",
    href: "https://linkedin.com/in/jalrajsinh-darbar-380232350",
  },
];

const ContactSection = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollReveal();
  const { ref: linksRef, isVisible: linksVisible } = useScrollReveal(0.15);

  return (
    <section id="contact" className="relative py-32 md:py-48">
      <div className="container mx-auto px-6">
        <div
          ref={titleRef}
          className={`text-center mb-16 transition-all duration-700 ${
            titleVisible ? "opacity-100 translate-y-0 blur-0" : "opacity-0 translate-y-6 blur-sm"
          }`}
        >
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary mb-4">
            05 — Contact
          </p>
          <h2 className="font-display text-4xl md:text-7xl font-bold tracking-tight leading-[0.95]">
            Let's build<br />
            <span className="text-gradient glow-text">something great</span>
          </h2>
        </div>

        <div
          ref={linksRef}
          className="max-w-xl mx-auto space-y-4"
        >
          {links.map((link, i) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              className={`group flex items-center gap-5 glass rounded-2xl p-5 hover:glow-sm hover:border-primary/30 transition-all duration-500 ${
                linksVisible ? "opacity-100 translate-y-0 blur-0" : "opacity-0 translate-y-6 blur-sm"
              }`}
              style={{ transitionDelay: `${i * 100}ms`, transitionDuration: "700ms" }}
            >
              <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center text-muted-foreground group-hover:text-primary group-hover:bg-primary/10 transition-all duration-300">
                {link.icon}
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-0.5">
                  {link.label}
                </p>
                <p className="text-sm font-medium truncate group-hover:text-primary transition-colors duration-300">
                  {link.value}
                </p>
              </div>
              <span className="text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all duration-300">
                →
              </span>
            </a>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="container mx-auto px-6 mt-32 pt-8 border-t border-border/50">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-muted-foreground">
          <p className="font-mono text-xs">
            © 2025 Jalrajsinh Darbar
          </p>
          <p className="font-mono text-xs">
            Built with <span className="text-primary">♥</span> and React
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
