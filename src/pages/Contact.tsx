import { motion } from "framer-motion";
import ContactSection from "@/components/ContactSection";

const Contact = () => (
  <>
    <section className="hero-gradient pt-32 pb-20 px-6">
      <div className="container mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold sm:text-5xl"
          style={{ color: "hsl(0 0% 95%)" }}
        >
          Contact <span className="text-gradient">Us</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mt-4 text-lg"
          style={{ color: "hsla(0, 0%, 95%, 0.7)" }}
        >
          Ready to find your dream home? Get in touch today
        </motion.p>
      </div>
    </section>
    <ContactSection />
  </>
);

export default Contact;
