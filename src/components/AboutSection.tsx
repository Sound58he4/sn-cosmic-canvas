import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import aboutImg from "@/assets/about-lifestyle.jpeg";

const stats = [
  { icon: "🏆", value: "6+", label: "Months Experience" },
  { icon: "📱", value: "2", label: "Apps Published" },
  { icon: "🚀", value: "2", label: "Major Projects" },
  { icon: "💻", value: "5+", label: "Technologies" },
];

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding max-w-7xl mx-auto" ref={ref}>
      <motion.h2
        className="font-heading text-3xl md:text-4xl font-bold text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        About <span className="text-gradient-gold">Me</span>
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Image */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, x: -50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="rounded-2xl overflow-hidden border-2 border-secondary/30 gold-glow">
            <img
              src={aboutImg}
              alt="Selvarasan lifestyle"
              className="w-full h-[400px] md:h-[500px] object-cover"
            />
          </div>
        </motion.div>

        {/* Text + Stats */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <p className="text-muted-foreground leading-relaxed mb-8 text-lg">
            Results-driven Full Stack Developer specializing in{" "}
            <span className="text-primary">.NET</span>,{" "}
            <span className="text-primary">Angular</span>,{" "}
            <span className="text-primary">Flutter</span>, and{" "}
            <span className="text-primary">Cloud technologies</span>. Passionate
            about building production-ready applications that solve real-world
            problems.
          </p>

          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                className="glass-card-hover p-5 text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.6 + i * 0.1 }}
              >
                <div className="text-2xl mb-1">{stat.icon}</div>
                <div className="font-heading text-2xl font-bold text-secondary">
                  {stat.value}
                </div>
                <div className="text-xs text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
