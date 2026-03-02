import { ArrowUp, Linkedin, Github, Instagram } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border/50 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center gap-6">
          {/* Logo */}
          <a href="#" className="font-heading text-2xl font-bold text-gradient-gold">
            SN
          </a>

          {/* Social Links */}
          <div className="flex gap-5">
            {[
              { icon: Linkedin, href: "https://www.linkedin.com/in/selvarasan-n/", label: "LinkedIn" },
              { icon: Github, href: "https://github.com/Sound58he4", label: "GitHub" },
              { icon: Instagram, href: "https://www.instagram.com/selvarasan_n", label: "Instagram" },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-10 h-10 rounded-full border border-border/50 flex items-center justify-center text-muted-foreground hover:text-secondary hover:border-secondary transition-all duration-300"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground text-center">
            © {currentYear} Selvarasan N. All rights reserved.
          </p>

          {/* Back to top */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="w-10 h-10 rounded-full bg-secondary/10 border border-secondary/30 flex items-center justify-center text-secondary hover:bg-secondary hover:text-background transition-all duration-300"
            aria-label="Back to top"
          >
            <ArrowUp size={18} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
