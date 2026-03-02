import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Linkedin, Github, Instagram, Mail, Download } from "lucide-react";
import heroImg from "@/assets/hero-headshot.jpeg";
import resumePdf from "@/assets/resume.pdf";
import ParticleBackground from "./ParticleBackground";

const titles = [
  "Full Stack Developer",
  "Flutter Developer",
  ".NET Engineer",
  "Cloud & AI Integrator",
];

const HeroSection = () => {
  const [titleIndex, setTitleIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = titles[titleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && text.length < current.length) {
      timeout = setTimeout(() => setText(current.slice(0, text.length + 1)), 80);
    } else if (!deleting && text.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 1800);
    } else if (deleting && text.length > 0) {
      timeout = setTimeout(() => setText(text.slice(0, -1)), 40);
    } else if (deleting && text.length === 0) {
      setDeleting(false);
      setTitleIndex((prev) => (prev + 1) % titles.length);
    }

    return () => clearTimeout(timeout);
  }, [text, deleting, titleIndex]);

  const socials = [
    { icon: Linkedin, href: "https://www.linkedin.com/in/selvarasan-n/" },
    { icon: Github, href: "https://github.com/Sound58he4" },
    { icon: Instagram, href: "https://www.instagram.com/selvarasan_n" },
    { icon: Mail, href: "mailto:selvarasann09@gmail.com" },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <ParticleBackground />
      <div className="relative z-10 text-center px-4">
        {/* Profile Photo */}
        <motion.div
          className="mx-auto mb-8 relative w-40 h-40 md:w-48 md:h-48"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.4 }}
        >
          <div className="absolute inset-0 rounded-full gold-ring-animated p-1">
            <div className="w-full h-full rounded-full overflow-hidden bg-background">
              <img
                src={heroImg}
                alt="Selvarasan N"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>
        </motion.div>

        {/* Name */}
        <motion.h1
          className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold mb-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.6 }}
        >
          SELVARASAN{" "}
          <span className="text-gradient-gold">N</span>
        </motion.h1>

        {/* Typing subtitle */}
        <motion.div
          className="h-8 md:h-10 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8 }}
        >
          <span className="font-body text-lg md:text-xl text-primary">
            {text}
          </span>
          <span className="animate-pulse text-secondary">|</span>
        </motion.div>

        {/* Buttons */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.9 }}
        >
          <a href="#projects" className="btn-gold">View My Work</a>
          <a href="#contact" className="btn-blue-outline">Contact Me</a>
          <a 
            href={resumePdf} 
            download="Selvarasan_N_Resume.pdf" 
            className="btn-blue-outline flex items-center gap-2"
          >
            <Download size={18} />
            Download CV
          </a>
        </motion.div>

        {/* Social Icons */}
        <motion.div
          className="flex justify-center gap-5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.0 }}
        >
          {socials.map(({ icon: Icon, href }) => (
            <a
              key={href}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all duration-300 hover:blue-glow"
            >
              <Icon size={18} />
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
