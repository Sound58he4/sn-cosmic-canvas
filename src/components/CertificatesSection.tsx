import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { Award, ExternalLink, X, ChevronLeft, ChevronRight, Briefcase, GraduationCap } from "lucide-react";

// Import certificate images
import cert1 from "@/assets/certificates/1714408151411.jpg";
import cert2 from "@/assets/certificates/1714409509341.jpg";
import cert3 from "@/assets/certificates/1714454604472.jpg";
import cert4 from "@/assets/certificates/1714483952046.jpg";
import cert5 from "@/assets/certificates/IMG-20230812-WA0003.jpg";
import cert6 from "@/assets/certificates/IMG-20230812-WA0004.jpg";
import cert7 from "@/assets/certificates/IMG-20230812-WA0005.jpg";
import cert8 from "@/assets/certificates/IMG-20230812-WA0006.jpg";
import cert9 from "@/assets/certificates/IMG-20230812-WA0007.jpg";
import workCert1 from "@/assets/certificates/1714395441619.jpg";
import workCert2 from "@/assets/certificates/1726028187359.jpg";

const certificates = [
  {
    category: "Work Experience",
    icon: Briefcase,
    items: [
      { title: "Trainee Engineer Certificate", issuer: "Nallas Corporation", image: workCert1 },
      { title: "Full Stack Developer Internship", issuer: "Solar Secure Solutions", image: workCert2 },
    ],
  },
  {
    category: "Professional Certifications",
    icon: Award,
    items: [
      { title: ".NET Fundamentals", issuer: "LinkedIn Learning", image: cert1 },
      { title: "Learning C#", issuer: "LinkedIn Learning", image: cert2 },
      { title: "Web Development Fundamentals", issuer: "Online Course", image: cert3 },
      { title: "Database Management", issuer: "Online Course", image: cert4 },
    ],
  },
  {
    category: "Workshops & Events",
    icon: GraduationCap,
    items: [
      { title: "Nxtway 4.0 Technology Workshop", issuer: "Project-based Learning", image: cert5 },
      { title: "Technical Symposium", issuer: "College Event", image: cert6 },
      { title: "Hackathon Participation", issuer: "Tech Event", image: cert7 },
      { title: "Coding Competition", issuer: "Inter-College", image: cert8 },
      { title: "Technical Workshop", issuer: "Industry Training", image: cert9 },
    ],
  },
];

const CertificatesSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedCert, setSelectedCert] = useState<{ title: string; issuer: string; image: string } | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Flatten all certificates for navigation
  const allCerts = certificates.flatMap((cat) => cat.items);

  const openModal = (cert: typeof allCerts[0]) => {
    setSelectedCert(cert);
    setCurrentIndex(allCerts.findIndex((c) => c.image === cert.image));
  };

  const closeModal = () => setSelectedCert(null);

  const navigate = (direction: "prev" | "next") => {
    const newIndex = direction === "next" 
      ? (currentIndex + 1) % allCerts.length 
      : (currentIndex - 1 + allCerts.length) % allCerts.length;
    setCurrentIndex(newIndex);
    setSelectedCert(allCerts[newIndex]);
  };

  return (
    <section id="certificates" className="section-padding max-w-6xl mx-auto" ref={ref}>
      <motion.h2
        className="font-heading text-3xl md:text-4xl font-bold text-center mb-4"
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
      >
        Certificates & <span className="text-gradient-gold">Achievements</span>
      </motion.h2>
      <motion.p
        className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ delay: 0.2 }}
      >
        Click on any certificate to view in full size
      </motion.p>

      {certificates.map((category, ci) => (
        <motion.div
          key={category.category}
          className="mb-10"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: ci * 0.15 }}
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-secondary/20 to-primary/20 flex items-center justify-center">
              <category.icon size={20} className="text-secondary" />
            </div>
            <h3 className="font-heading text-lg font-semibold text-foreground">
              {category.category}
            </h3>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {category.items.map((cert, i) => (
              <motion.div
                key={cert.image}
                className="group cursor-pointer will-change-transform"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: ci * 0.1 + i * 0.03 }}
                whileHover={{ scale: 1.03, y: -3 }}
                onClick={() => openModal(cert)}
              >
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden border-2 border-border group-hover:border-secondary transition-colors duration-200 shadow-lg">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-200" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    <div className="w-10 h-10 rounded-full bg-secondary/90 flex items-center justify-center">
                      <ExternalLink size={18} className="text-background" />
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-3">
                    <p className="text-xs font-medium text-foreground truncate">{cert.title}</p>
                    <p className="text-[10px] text-muted-foreground truncate">{cert.issuer}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      ))}

      {/* Modal */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/95 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            {/* Close button */}
            <button
              onClick={closeModal}
              className="absolute top-6 right-6 w-12 h-12 rounded-full bg-muted/50 border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-secondary transition-all z-10"
            >
              <X size={24} />
            </button>

            {/* Navigation buttons */}
            <button
              onClick={(e) => { e.stopPropagation(); navigate("prev"); }}
              className="absolute left-4 md:left-8 w-12 h-12 rounded-full bg-muted/50 border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-secondary transition-all z-10"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); navigate("next"); }}
              className="absolute right-4 md:right-8 w-12 h-12 rounded-full bg-muted/50 border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-secondary transition-all z-10"
            >
              <ChevronRight size={24} />
            </button>

            {/* Certificate image */}
            <motion.div
              className="relative max-w-4xl w-full"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", damping: 25 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="rounded-2xl overflow-hidden border-2 border-secondary/50 shadow-2xl shadow-secondary/10">
                <img
                  src={selectedCert.image}
                  alt={selectedCert.title}
                  className="w-full h-auto max-h-[80vh] object-contain bg-muted"
                />
              </div>
              <div className="mt-4 text-center">
                <h3 className="font-heading text-xl font-bold text-foreground">{selectedCert.title}</h3>
                <p className="text-sm text-muted-foreground">{selectedCert.issuer}</p>
                <p className="text-xs text-secondary mt-2">{currentIndex + 1} / {allCerts.length}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default CertificatesSection;
