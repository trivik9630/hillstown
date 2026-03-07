import { motion } from "framer-motion";
import galleryImg from "@/assets/gallery-2.jpg";

const AboutSection = () => (
  <section id="about" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6">
    <div className="container mx-auto">

      <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10 lg:gap-16">

        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-5 sm:space-y-6"
        >

          <span className="text-sm font-semibold uppercase tracking-wider text-primary">
            About Us
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
            A New Chapter of{" "}
            <span className="text-gradient">Modern Living</span>
          </h2>

          <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
            Hillstown Estates is a thoughtfully designed residential community offering{" "}
            <strong className="text-foreground">
              12 exclusive single-family homes
            </strong>{" "}
            near the Glastonbury town line in Manchester, Connecticut.
          </p>

          <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
            Each home is designed with modern architecture, spacious layouts, and
            high-quality craftsmanship to provide a comfortable and elegant lifestyle.
          </p>

          <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
            Residents enjoy peaceful surroundings while staying close to major
            roads, shopping centers, schools, and city amenities.
          </p>

        </motion.div>

        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative"
        >

          <img
            src={galleryImg}
            alt="Hillstown Estates community aerial view"
            className="w-full object-cover rounded-2xl shadow-xl aspect-[4/3]"
          />

          {/* Floating Stat Card */}
          <div className="absolute -bottom-4 sm:-bottom-5 right-4 sm:-right-4 gradient-green rounded-xl p-4 sm:p-6 shadow-xl">

            <p className="text-xl sm:text-2xl font-bold text-primary-foreground">
              12
            </p>

            <p className="text-xs sm:text-sm text-primary-foreground/80">
              Exclusive Homes
            </p>

          </div>

        </motion.div>

      </div>

    </div>
  </section>
);

export default AboutSection;