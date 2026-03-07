import { Link } from "react-router-dom";
import {
  Instagram,
  Linkedin,
  Facebook,
  Youtube,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";

const socials = [
  { icon: Instagram, href: "https://www.instagram.com/trivikbuilders_/", label: "Instagram" },
  { icon: Linkedin, href: "https://www.linkedin.com/company/trivik-builders/", label: "LinkedIn" },
  { icon: Facebook, href: "https://www.facebook.com/profile.php?id=61585128100615", label: "Facebook" },
  { icon: Youtube, href: "https://www.youtube.com/@trivikbuilders", label: "YouTube" },
];

const Footer = () => (
  <footer className="hero-gradient backdrop-blur-xl bg-white/5 border-t border-white/10 py-14 sm:py-16 px-4 sm:px-6 lg:px-8">
    <div className="container mx-auto">

      {/* Footer Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-12">

        {/* Brand Section */}
        <div className="space-y-4">

          <a
            href="https://trivikbuilders.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block"
          >
            <img
              src="/logo.png"
              alt="Trivik Builders"
              className="h-12 sm:h-14 lg:h-16 w-auto object-contain drop-shadow-[0_4px_12px_rgba(0,0,0,0.6)] brightness-125 contrast-125"
            />
          </a>

          <Link to="/" className="block text-lg sm:text-xl font-bold">
            <span className="text-gradient">Hillstown</span>{" "}
            <span className="text-white">Estates</span>
          </Link>

          <p className="text-sm text-white/60 max-w-sm">
            Premium Living in Manchester, Connecticut
          </p>

        </div>

        {/* Contact Section */}
        <div className="space-y-4">

          <p className="text-sm font-semibold text-white">Contact Info</p>

          <a
            href="tel:+18606820175"
            className="flex items-center gap-3 text-sm text-white/70 transition-colors duration-300 hover:text-primary"
          >
            <Phone size={16} />
            +1 (860) 682-0175
          </a>

          <a
            href="mailto:hari@trivikbuilders.com"
            className="flex items-center gap-3 text-sm text-white/70 transition-colors duration-300 hover:text-primary"
          >
            <Mail size={16} />
            hari@trivikbuilders.com
          </a>

          <a
            href="https://maps.app.goo.gl/HkMRQQ1ug8JG6SMx5"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-start gap-3 text-sm text-white/70 transition-colors duration-300 hover:text-primary"
          >
            <MapPin size={16} className="mt-0.5" />
            <span>
              916, 918R & 921 Hillstown Road <br />
              Manchester, CT
            </span>
          </a>

        </div>

        {/* Social Section */}
        <div className="space-y-4">

          <p className="text-sm font-semibold text-white">Follow Us</p>

          <div className="flex flex-wrap gap-3">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="rounded-full bg-white/10 backdrop-blur-md border border-white/10 p-3 transition-all duration-300 hover:scale-110 hover:bg-primary/80 hover:shadow-[0_0_20px_hsla(142,60%,45%,0.45)]"
              >
                <s.icon size={18} className="text-white" />
              </a>
            ))}
          </div>

        </div>

      </div>

      {/* Bottom Section */}
      <div className="mt-12 border-t border-white/10 pt-6 sm:pt-8">

        <p className="text-center text-xs sm:text-sm text-white/40">
          © {new Date().getFullYear()} Hillstown Estates. All rights reserved. Built by{" "}
          <a
            href="https://trivikbuilders.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary transition-colors duration-300 hover:text-primary/80"
          >
            Trivik Builders
          </a>
        </p>

      </div>

    </div>
  </footer>
);

export default Footer;