import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const ContactSection = () => (
  <section id="contact" className="section-dark py-16 sm:py-20 lg:py-24 px-4 sm:px-6">
    <div className="container mx-auto">

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-12 sm:mb-16 text-center"
      >
        <span className="text-sm font-semibold uppercase tracking-wider text-primary">
          Contact
        </span>

        <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold">
          Get In <span className="text-gradient">Touch</span>
        </h2>
      </motion.div>

      {/* Contact Info */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-10 sm:mb-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center"
      >

        {/* Phone */}
        <a href="tel:+18606820175" className="flex items-center gap-3 group">
          <div className="rounded-full gradient-green p-3">
            <Phone size={18} className="text-primary-foreground" />
          </div>

          <div>
            <p className="text-xs text-muted-foreground">Phone</p>
            <p className="text-sm font-semibold text-white group-hover:text-primary transition-colors">
              +1 (860) 682-0175
            </p>
          </div>
        </a>

        {/* Email */}
        <a
          href="mailto:hari@trivikbuilders.com"
          className="flex items-center gap-3 group"
        >
          <div className="rounded-full gradient-green p-3">
            <Mail size={18} className="text-primary-foreground" />
          </div>

          <div>
            <p className="text-xs text-muted-foreground">Email</p>
            <p className="text-sm font-semibold text-white group-hover:text-primary transition-colors">
              hari@trivikbuilders.com
            </p>
          </div>
        </a>

        {/* Location */}
        <a
          href="https://maps.app.goo.gl/HkMRQQ1ug8JG6SMx5"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 group"
        >
          <div className="rounded-full gradient-green p-3">
            <MapPin size={18} className="text-primary-foreground" />
          </div>

          <div>
            <p className="text-xs text-muted-foreground">Location</p>
            <p className="text-sm font-semibold text-white group-hover:text-primary transition-colors leading-snug">
              916, 918R & 921 Hillstown Road<br />
              Manchester, CT
            </p>
          </div>
        </a>

      </motion.div>

      {/* Business Hours */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-10 sm:mb-12 mx-auto max-w-md"
      >
        <div className="rounded-2xl bg-gradient-to-br from-[#0f172a]/80 to-[#022c22]/80 backdrop-blur-md p-6 shadow-xl border border-emerald-500/20">

          <div className="flex items-center gap-3 mb-5">
            <div className="rounded-full gradient-green p-3">
              <Clock size={18} className="text-primary-foreground" />
            </div>

            <h3 className="text-lg font-semibold text-white">
              Business Hours
            </h3>
          </div>

          <div className="space-y-3 text-sm">

            <div className="flex justify-between">
              <span className="text-muted-foreground">
                Monday – Friday
              </span>

              <span className="font-medium text-white">
                9:00 AM – 6:00 PM
              </span>
            </div>

            <div className="flex justify-between">
              <span className="text-muted-foreground">
                Saturday
              </span>

              <span className="font-medium text-white">
                10:00 AM – 4:00 PM
              </span>
            </div>

            <div className="flex justify-between">
              <span className="text-muted-foreground">
                Sunday
              </span>

              <span className="font-medium text-white">
                By Appointment
              </span>
            </div>

          </div>

        </div>
      </motion.div>

      {/* Google Form */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mx-auto max-w-3xl overflow-hidden rounded-2xl bg-card shadow-lg"
      >
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSeaRDPgqA-dcQMtqoXSmEatMHdB6peDGnzin1O3VZHQV73XIg/viewform?embedded=true"
          width="100%"
          height="750"
          style={{ border: 0 }}
          title="Contact Form"
        >
          Loading…
        </iframe>
      </motion.div>

    </div>
  </section>
);

export default ContactSection;