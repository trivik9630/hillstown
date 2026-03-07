import { motion } from "framer-motion";
import {
  MapPin,
  ShoppingBag,
  GraduationCap,
  TreePine,
  Car,
  Building2,
} from "lucide-react";

const advantages = [
  { icon: ShoppingBag, text: "Whole Foods Market — 3.9 miles" },
  { icon: GraduationCap, text: "Glastonbury High School — 4.2 miles" },
  { icon: Building2, text: "Hartford Downtown — 7.7 miles" },
  { icon: GraduationCap, text: "CT State Community College Manchester — 2.2 miles" },
  { icon: TreePine, text: "Quiet suburban environment" },
  { icon: MapPin, text: "Prime Manchester / Glastonbury location" },
];

const LocationSection = () => (
  <section id="location" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6">
    <div className="container mx-auto">

      {/* Section Heading */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-12 sm:mb-16 text-center"
      >
        <span className="text-sm font-semibold uppercase tracking-wider text-primary">
          Location
        </span>

        <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold">
          Prime <span className="text-gradient">Location Advantage</span>
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12">

        {/* Map Section */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >

          {/* Google Maps Link */}
          <a
            href="https://maps.app.goo.gl/HkMRQQ1ug8JG6SMx5"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mb-4 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
          >
            <MapPin size={16} />
            View Project Location on Google Maps
          </a>

          {/* Embedded Map */}
          <div className="overflow-hidden rounded-2xl shadow-xl border border-white/10 aspect-video">

            <iframe
              src="https://www.google.com/maps?q=916+918R+921+Hillstown+Road+Manchester+CT&z=16&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              title="Hillstown Estates Location"
            />

          </div>

        </motion.div>

        {/* Location Advantages */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-4 content-start"
        >

          {advantages.map((item, i) => (
            <motion.div
              key={item.text}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/5 backdrop-blur-md p-4 shadow-sm hover:shadow-lg transition-all"
            >

              <div className="rounded-lg gradient-green p-2 shrink-0">
                <item.icon size={18} className="text-primary-foreground" />
              </div>

              <p className="text-sm font-medium text-foreground leading-relaxed">
                {item.text}
              </p>

            </motion.div>
          ))}

        </motion.div>

      </div>
    </div>
  </section>
);

export default LocationSection;