import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, Phone, MapPin, Linkedin, Github, Instagram, Send, Loader2 } from "lucide-react";
import contactBg from "@/assets/contact-dramatic.jpeg";

// Get your free access key from https://web3forms.com/
const WEB3FORMS_ACCESS_KEY = "YOUR_ACCESS_KEY_HERE";

const ContactSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          name: form.name,
          email: form.email,
          message: form.message,
          subject: `Portfolio Contact from ${form.name}`,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus("success");
        setForm({ name: "", email: "", message: "" });
      } else {
        setSubmitStatus("error");
      }
    } catch {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative py-20 md:py-28" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0">
        <img src={contactBg} alt="" loading="lazy" decoding="async" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-background/90" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 md:px-8">
        <motion.h2
          className="font-heading text-3xl md:text-4xl font-bold text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
        >
          Get In <span className="text-gradient-gold">Touch</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="space-y-6"
          >
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full border border-secondary/40 flex items-center justify-center text-secondary">
                <Mail size={18} />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Email</p>
                <a href="mailto:selvarasann09@gmail.com" className="text-sm text-foreground hover:text-primary transition-colors">
                  selvarasann09@gmail.com
                </a>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full border border-secondary/40 flex items-center justify-center text-secondary">
                <Phone size={18} />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Phone</p>
                <a href="tel:+919360646129" className="text-sm text-foreground hover:text-primary transition-colors">
                  +91 9360646129
                </a>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full border border-secondary/40 flex items-center justify-center text-secondary">
                <MapPin size={18} />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Location</p>
                <p className="text-sm text-foreground">Namakkal, Tamil Nadu</p>
              </div>
            </div>

            <div className="flex gap-4 pt-4">
              {[
                { icon: Linkedin, href: "https://www.linkedin.com/in/selvarasan-n/" },
                { icon: Github, href: "https://github.com/Sound58he4" },
                { icon: Instagram, href: "https://www.instagram.com/selvarasan_n" },
              ].map(({ icon: Icon, href }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all duration-300"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            className="glass-card p-6 space-y-4"
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3 }}
          >
            <input
              type="text"
              placeholder="Your Name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full bg-muted/50 border border-border rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors disabled:opacity-50"
              required
              disabled={isSubmitting}
            />
            <input
              type="email"
              placeholder="Your Email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full bg-muted/50 border border-border rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors disabled:opacity-50"
              required
              disabled={isSubmitting}
            />
            <textarea
              placeholder="Your Message"
              rows={4}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full bg-muted/50 border border-border rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors resize-none"
              required
              disabled={isSubmitting}
            />
            <button 
              type="submit" 
              className="btn-gold w-full flex items-center justify-center gap-2"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <Loader2 size={18} className="animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  <Send size={18} />
                  Send Message
                </>
              )}
            </button>
            {submitStatus === "success" && (
              <p className="text-green-500 text-sm text-center">
                Message sent successfully! I'll get back to you soon.
              </p>
            )}
            {submitStatus === "error" && (
              <p className="text-red-500 text-sm text-center">
                Something went wrong. Please try again or email me directly.
              </p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
