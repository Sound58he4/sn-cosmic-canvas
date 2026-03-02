import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, ScrollText } from "lucide-react";

const education = [
  {
    icon: GraduationCap,
    title: "B.E. Computer Science Engineering",
    place: "Dr. N.G.P. Institute of Technology, Coimbatore",
    year: "2022 – 2025",
  },
  {
    icon: ScrollText,
    title: "Diploma in Electronics & Communication Engineering",
    place: "Paavai Polytechnic College, Namakkal",
    year: "2020 – 2022",
  },
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
        <span className="text-gradient-gold">Education</span>
      </motion.h2>

      {/* Education */}
      <div className="grid md:grid-cols-2 gap-6">
        {education.map((edu, i) => (
          <motion.div
            key={edu.title}
            className="glass-card-hover p-6"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: i * 0.15 }}
          >
            <div className="text-secondary mb-2"><edu.icon size={24} /></div>
            <h3 className="font-heading font-semibold text-foreground mb-1">{edu.title}</h3>
            <p className="text-sm text-muted-foreground">{edu.place}</p>
            <p className="text-sm text-secondary mt-2 font-medium">{edu.year}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default EducationSection;
