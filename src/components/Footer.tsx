import { ArrowUp } from "lucide-react";
import { Linkedin, Github, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border py-10 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-sm text-muted-foreground">
          Crafted with <span className="text-red-500">❤️</span> by{" "}
          <span className="text-gradient-gold font-heading font-semibold">Selvarasan N</span>
        </p>

        <div className="flex gap-4">
          {[
            { icon: Linkedin, href: "https://www.linkedin.com/in/selvarasan-n/" },
            { icon: Github, href: "https://github.com/Sound58he4" },
            { icon: Instagram, href: "https://www.instagram.com/selvarasan_n" },
          ].map(({ icon: Icon, href }) => (
            <a
              key={href}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Icon size={18} />
            </a>
          ))}
        </div>

        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="w-10 h-10 rounded-full border border-secondary/40 flex items-center justify-center text-secondary hover:gold-glow transition-all duration-300"
        >
          <ArrowUp size={18} />
        </button>
      </div>
    </footer>
  );
};

export default Footer;
