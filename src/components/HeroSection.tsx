import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-home.jpg";

const HeroSection = () => (
  <section className="relative min-h-screen overflow-hidden hero-gradient flex items-center">

    {/* Floating gradient orbs */}
    <div className="absolute top-20 left-10 w-60 sm:w-72 h-60 sm:h-72 rounded-full bg-primary/20 blur-[100px] animate-float" />
    <div
      className="absolute bottom-20 right-10 w-72 sm:w-96 h-72 sm:h-96 rounded-full bg-primary/10 blur-[120px] animate-float"
      style={{ animationDelay: "3s" }}
    />

    <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-28 sm:pt-32 pb-16 sm:pb-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10 lg:gap-12">

        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6 sm:space-y-8"
        >

          {/* Location Badge */}
          <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-2 text-xs sm:text-sm text-primary-foreground/80">
            <MapPin size={14} className="text-primary" />
            916, 918R & 921 Hillstown Road, Manchester, CT
          </div>

          {/* Heading */}
          <h1 className="text-3xl sm:text-4xl lg:text-6xl font-extrabold leading-tight tracking-tight text-primary-foreground">
            Find Your Dream Home at{" "}
            <span className="text-gradient">Hillstown Estates</span>
          </h1>

          {/* Description */}
          <p className="max-w-lg text-base sm:text-lg leading-relaxed text-primary-foreground/70">
            Experience peaceful suburban living with 12 premium single-family homes located near the Glastonbury town line in Manchester, Connecticut.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row flex-wrap gap-4">

            <Button
              asChild
              size="lg"
              className="gradient-green border-0 text-primary-foreground rounded-full px-6 sm:px-8 text-sm sm:text-base"
            >
              <Link to="/contact">
                Secure Your Lot <ArrowRight className="ml-2" size={18} />
              </Link>
            </Button>

            <Button
              asChild
              size="lg"
              variant="outline"
              className="rounded-full px-6 sm:px-8 text-sm sm:text-base bg-white/10 border-white/30 text-white hover:bg-white/20 hover:border-white/50 transition-all"
            >
              <Link to="/location">View Location</Link>
            </Button>

          </div>

          {/* Builder Credit */}
          <p className="text-xs sm:text-sm text-primary-foreground/50">
            Backed by{" "}
            <a
              href="https://trivikbuilders.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary underline underline-offset-4 hover:text-primary/80 transition-colors"
            >
              Trivik Builders
            </a>
          </p>

        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >

          <div className="relative overflow-hidden rounded-2xl shadow-2xl">
            <img
              src={heroImage}
              alt="Modern luxury home at Hillstown Estates"
              className="w-full object-cover aspect-[4/3]"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
          </div>

          {/* Floating Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="absolute -bottom-5 sm:-bottom-6 left-4 sm:-left-6 glass rounded-xl p-3 sm:p-4 shadow-xl"
          >
            <p className="text-xs sm:text-sm font-semibold text-primary-foreground">
              12 Premium Homes
            </p>

            <p className="text-[10px] sm:text-xs text-primary-foreground/60">
              Limited Availability
            </p>
          </motion.div>

        </motion.div>

      </div>
    </div>

  </section>
);

export default HeroSection;