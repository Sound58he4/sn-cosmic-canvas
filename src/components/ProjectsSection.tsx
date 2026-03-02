import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Apple, Monitor, CheckCircle } from "lucide-react";

const projects = [
  {
    icon: Apple,
    title: "Bago AI Fit",
    subtitle: "Nutritional Platform",
    tech: ["Angular", "Flutter", ".NET Core", "Azure SQL", "Firebase", "Azure OpenAI", "Razorpay"],
    playStore: true,
    features: [
      "AI-powered nutrition recommendations (ChatGPT + Gemini AI)",
      "Secure payments via Razorpay",
      "Google Sign-In cross-platform auth",
      "Real-time Firebase sync",
      "Full project lifecycle — concept to deployment",
    ],
  },
  {
    icon: Monitor,
    title: "Vendor Zone",
    subtitle: "IT Asset Management",
    tech: ["ASP.NET Core", "Angular", "SQL Server", "EF Core"],
    features: [
      "Enterprise vendor & IT asset tracking",
      "Admin dashboards with RBAC & secure auth",
      "SOLID + Repository + DI patterns",
      "40% operational efficiency improvement",
      "Automated vendor/purchase tracking",
    ],
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="section-padding max-w-7xl mx-auto" ref={ref}>
      <motion.h2
        className="font-heading text-3xl md:text-4xl font-bold text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
      >
        Featured <span className="text-gradient-blue">Projects</span>
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((proj, i) => (
          <motion.div
            key={proj.title}
            className="glass-card-hover p-8 group"
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: i * 0.2 }}
            whileHover={{ y: -5 }}
          >
            <div className="text-secondary mb-3"><proj.icon size={28} /></div>
            <h3 className="font-heading text-xl font-bold text-foreground mb-1">
              {proj.title}
            </h3>
            <p className="text-sm text-primary mb-4">{proj.subtitle}</p>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2 mb-5">
              {proj.tech.map((t) => (
                <span
                  key={t}
                  className="px-2 py-1 text-[10px] rounded-full border border-secondary/30 text-secondary font-medium uppercase tracking-wider"
                >
                  {t}
                </span>
              ))}
            </div>

            {proj.playStore && (
              <div className="mb-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-muted/50 border border-border text-xs text-muted-foreground">
                <CheckCircle size={14} className="text-green-500" /> Published on Google Play Store
              </div>
            )}

            <ul className="space-y-2">
              {proj.features.map((f) => (
                <li key={f} className="text-sm text-muted-foreground flex items-start gap-2">
                  <span className="text-secondary mt-0.5">▹</span>
                  {f}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
