import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const education = [
  {
    icon: "🎓",
    title: "B.E. Computer Science Engineering",
    place: "Dr. N.G.P. Institute of Technology, Coimbatore",
    year: "2022 – 2025",
  },
  {
    icon: "📜",
    title: "Diploma in Electronics & Communication Engineering",
    place: "Paavai Polytechnic College, Namakkal",
    year: "2020 – 2022",
  },
];

const certs = [
  ".NET Fundamentals — LinkedIn Learning",
  "Learning C# — LinkedIn Learning",
  "Full Stack Developer Internship — Solar Secure Solutions",
  "Nxtway 4.0 Technology Workshop — Project-based Learning",
];

const EducationSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" className="section-padding max-w-5xl mx-auto" ref={ref}>
      <motion.h2
        className="font-heading text-3xl md:text-4xl font-bold text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
      >
        Education & <span className="text-gradient-gold">Certifications</span>
      </motion.h2>

      {/* Education */}
      <div className="grid md:grid-cols-2 gap-6 mb-12">
        {education.map((edu, i) => (
          <motion.div
            key={edu.title}
            className="glass-card-hover p-6"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: i * 0.15 }}
          >
            <div className="text-2xl mb-2">{edu.icon}</div>
            <h3 className="font-heading font-semibold text-foreground mb-1">{edu.title}</h3>
            <p className="text-sm text-muted-foreground">{edu.place}</p>
            <p className="text-sm text-secondary mt-2 font-medium">{edu.year}</p>
          </motion.div>
        ))}
      </div>

      {/* Certifications */}
      <div className="grid sm:grid-cols-2 gap-4">
        {certs.map((cert, i) => (
          <motion.div
            key={cert}
            className="glass-card-hover p-4 flex items-center gap-3"
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3 + i * 0.1 }}
          >
            <span className="text-secondary text-lg">🏅</span>
            <span className="text-sm text-muted-foreground">{cert}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default EducationSection;
