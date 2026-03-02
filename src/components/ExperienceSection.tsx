import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Building2, Briefcase } from "lucide-react";

const experiences = [
  {
    title: "Trainee Engineer",
    company: "Nallas Corporation",
    link: "https://nallas.com/careers/",
    icon: Building2,
    points: [
      "Built secure RESTful APIs with ASP.NET Core + EF Core",
      "Enhanced UI/UX with Angular, Agile methodology",
      "Optimized SQL queries, API testing with Postman",
    ],
  },
  {
    title: "Full Stack Developer Intern",
    company: "Solar Secure Solutions",
    icon: Briefcase,
    points: [
      "Responsive web apps: HTML5, CSS3, JavaScript",
      "Client portfolio websites, cybersecurity expert profiles",
      "Full stack + version control experience",
    ],
  },
];

const ExperienceSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="section-padding max-w-4xl mx-auto" ref={ref}>
      <motion.h2
        className="font-heading text-3xl md:text-4xl font-bold text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
      >
        Work <span className="text-gradient-gold">Experience</span>
      </motion.h2>

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-secondary via-primary to-secondary/20" />

        {experiences.map((exp, i) => (
          <motion.div
            key={exp.title}
            className={`relative mb-12 md:w-1/2 ${i % 2 === 0 ? "md:pr-12 md:ml-0" : "md:pl-12 md:ml-auto"} pl-12 md:pl-0`}
            initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: i * 0.3 }}
          >
            {/* Dot */}
            <div className={`absolute top-6 w-3 h-3 rounded-full bg-secondary gold-glow left-[10px] md:left-auto ${i % 2 === 0 ? "md:right-[-6px]" : "md:left-[-6px]"}`} />

            <div className="glass-card-hover p-6">
              <div className="text-secondary mb-2"><exp.icon size={24} /></div>
              <h3 className="font-heading text-lg font-semibold text-foreground">
                {exp.title}
              </h3>
              {exp.link ? (
                <a
                  href={exp.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-primary hover:underline"
                >
                  {exp.company} ↗
                </a>
              ) : (
                <p className="text-sm text-primary">{exp.company}</p>
              )}
              <ul className="mt-3 space-y-2">
                {exp.points.map((p) => (
                  <li key={p} className="text-sm text-muted-foreground flex items-start gap-2">
                    <span className="text-secondary mt-1">▹</span>
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ExperienceSection;
