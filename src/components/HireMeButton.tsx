import { motion } from "framer-motion";

const HireMeButton = () => {
  return (
    <motion.a
      href="#contact"
      className="fixed bottom-6 right-6 z-40 btn-gold animate-pulse-gold rounded-full px-6 py-3 font-heading font-bold text-sm shadow-2xl"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 3.5, type: "spring" }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      Hire Me 🚀
    </motion.a>
  );
};

export default HireMeButton;
