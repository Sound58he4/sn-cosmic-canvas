import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Server, Layout, Database, Cloud, Brain } from "lucide-react";

const skillGroups = [
  {
    title: "Languages",
    icon: Code2,
    skills: ["C", "C#", "JavaScript", "TypeScript", "SQL", "HTML5", "CSS3"],
  },
  {
    title: "Backend",
    icon: Server,
    skills: [".NET Core", "ASP.NET Web API", "EF Core", "LINQ", "RESTful APIs"],
  },
  {
    title: "Frontend",
    icon: Layout,
    skills: ["Angular 12+", "Flutter", "Bootstrap", "SPA"],
  },
  {
    title: "Database",
    icon: Database,
    skills: ["MSSQL", "Azure SQL", "Firebase Realtime DB"],
  },
  {
    title: "Cloud & DevOps",
    icon: Cloud,
    skills: ["Azure", "App Services", "Firebase", "CI/CD", "Git", "GitHub"],
  },
  {
    title: "AI & Tools",
    icon: Brain,
    skills: ["Azure OpenAI", "ChatGPT API", "Gemini AI", "Claude API", "Razorpay", "Postman", "n8n"],
  },
];

const SkillsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="section-padding max-w-7xl mx-auto" ref={ref}>
      <motion.h2
        className="font-heading text-3xl md:text-4xl font-bold text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
      >
        Technical <span className="text-gradient-blue">Skills</span>
      </motion.h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillGroups.map((group, gi) => (
          <motion.div
            key={group.title}
            className="glass-card-hover p-6"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: gi * 0.1 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                <group.icon size={20} className="text-secondary" />
              </div>
              <h3 className="font-heading text-sm font-semibold text-secondary uppercase tracking-wider">
                {group.title}
              </h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1.5 text-xs rounded-full border border-border bg-muted/50 text-muted-foreground hover:border-primary hover:text-primary transition-colors duration-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
