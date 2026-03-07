import { motion } from "framer-motion";
import AboutSection from "@/components/AboutSection";
import galleryImg from "@/assets/gallery-3.jpg";

const About = () => (
  <>
    <section className="hero-gradient pt-32 pb-20 px-6">
      <div className="container mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold sm:text-5xl"
          style={{ color: "hsl(0 0% 95%)" }}
        >
          About <span className="text-gradient">Hillstown Estates</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mt-4 text-lg"
          style={{ color: "hsla(0, 0%, 95%, 0.7)" }}
        >
          Discover the story behind Manchester's newest premium community
        </motion.p>
      </div>
    </section>
    <AboutSection />

    {/* Extra about content */}
    <section className="section-dark py-24 px-6">
      <div className="container mx-auto grid gap-12 lg:grid-cols-2 items-center">
        <motion.img
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          src={galleryImg}
          alt="Interior of Hillstown Estates home"
          className="rounded-2xl shadow-lg w-full aspect-video object-cover"
        />
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <h2 className="text-3xl font-bold" style={{ color: "hsl(0 0% 95%)" }}>
            Built with <span className="text-gradient">Excellence</span>
          </h2>
          <p style={{ color: "hsla(0, 0%, 95%, 0.7)" }} className="leading-relaxed">
            Every home at Hillstown Estates is constructed with premium materials and meticulous attention to detail by Trivik Builders, ensuring lasting quality and modern aesthetics that stand the test of time.
          </p>
          <p style={{ color: "hsla(0, 0%, 95%, 0.7)" }} className="leading-relaxed">
            From energy-efficient designs to spacious floor plans, each residence is crafted to meet the highest standards of contemporary living.
          </p>
        </motion.div>
      </div>
    </section>
  </>
);

export default About;
