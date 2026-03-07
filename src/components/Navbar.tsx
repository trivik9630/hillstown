import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";

const navItems = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Gallery", path: "/gallery" },
  { label: "Location", path: "/location" },
  { label: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [location]);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/10 backdrop-blur-xl border-b border-white/10 shadow-lg"
          : "bg-white/5 backdrop-blur-md"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between py-3 sm:py-4">

        {/* Logo + Brand */}
        <div className="flex flex-col items-start leading-tight">

          <a
            href="https://trivikbuilders.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/logo.png"
              alt="Trivik Builders"
              className="h-10 sm:h-12 lg:h-14 w-auto object-contain drop-shadow-[0_4px_12px_rgba(0,0,0,0.6)] brightness-125 contrast-125"
            />
          </a>

          <Link
            to="/"
            className="text-base sm:text-lg font-bold tracking-tight mt-1"
          >
            <span className="text-gradient">Hillstown</span>{" "}
            <span className="text-white">Estates</span>
          </Link>

        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                location.pathname === item.path
                  ? "text-primary"
                  : "text-white/70"
              }`}
            >
              {item.label}
            </Link>
          ))}

          <Button
            asChild
            size="sm"
            className="gradient-green border-0 text-primary-foreground rounded-full px-5 sm:px-6 hover:scale-105 transition-transform"
          >
            <Link to="/contact">Secure Your Lot</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>

      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="bg-white/10 backdrop-blur-xl md:hidden overflow-hidden border-t border-white/10"
          >
            <div className="flex flex-col gap-5 px-6 py-6">

              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`text-base font-medium transition-colors ${
                    location.pathname === item.path
                      ? "text-primary"
                      : "text-white/80"
                  }`}
                >
                  {item.label}
                </Link>
              ))}

              <Button
                asChild
                className="gradient-green border-0 text-primary-foreground rounded-full mt-2"
              >
                <Link to="/contact">Secure Your Lot</Link>
              </Button>

            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </motion.nav>
  );
};

export default Navbar;