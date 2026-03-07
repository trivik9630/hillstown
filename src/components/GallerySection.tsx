import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

import siteplan from "@/assets/gallery-22.jpg";

/* PLAN A */
import planA1 from "@/assets/plans/plan-a/front.jpg";
import planA2 from "@/assets/plans/plan-a/side.jpg";
import planA3 from "@/assets/plans/plan-a/back.jpg";
import planA4 from "@/assets/plans/plan-a/angle.jpg";
import planA5 from "@/assets/plans/plan-a/floor1.jpg";
import planA6 from "@/assets/plans/plan-a/floor2.jpg";

/* PLAN B */
import planB1 from "@/assets/plans/plan-b/front.jpg";
import planB2 from "@/assets/plans/plan-b/floor1.jpg";
import planB3 from "@/assets/plans/plan-b/floor2.jpg";
import planB4 from "@/assets/plans/plan-b/floor3.jpg";
import planB5 from "@/assets/plans/plan-b/floor4.jpg";
import planB6 from "@/assets/plans/plan-b/floor5.jpg";
import planB7 from "@/assets/plans/plan-b/floor6.jpg";

const planAImages = [planA1, planA2, planA3, planA4, planA5, planA6];
const planBImages = [planB1, planB2, planB3, planB4, planB5, planB6, planB7];

const GallerySection = () => {

  const [open, setOpen] = useState(false);
  const [images, setImages] = useState<string[]>([]);
  const [index, setIndex] = useState(0);

  const [planAIndex, setPlanAIndex] = useState(0);
  const [planBIndex, setPlanBIndex] = useState(0);

  /* PLAN A AUTO SLIDE */
  useEffect(() => {
    const interval = setInterval(() => {
      setPlanAIndex((prev) =>
        prev === planAImages.length - 1 ? 0 : prev + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  /* PLAN B AUTO SLIDE */
  useEffect(() => {
    const interval = setInterval(() => {
      setPlanBIndex((prev) =>
        prev === planBImages.length - 1 ? 0 : prev + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const openGallery = (imgs: string[], start = 0) => {
    setImages(imgs);
    setIndex(start);
    setOpen(true);
  };

  const next = () => {
    setIndex((prev) =>
      prev === images.length - 1 ? 0 : prev + 1
    );
  };

  const prev = () => {
    setIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  return (
    <section
      id="gallery"
      className="section-dark py-16 sm:py-20 lg:py-24 px-4 sm:px-6"
    >
      <div className="container mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 sm:mb-16 text-center"
        >
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">
            Gallery
          </span>

          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold">
            Explore <span className="text-gradient">Hillstown Estates</span>
          </h2>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">

          {/* SITE PLAN */}
          <motion.div
            whileHover={{ y: -6 }}
            className="cursor-pointer"
            onClick={() => openGallery([siteplan])}
          >
            <div className="relative overflow-hidden rounded-2xl shadow-xl aspect-[4/3] group">

              <img
                src={siteplan}
                alt="Site Plan"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                <p className="text-white font-semibold text-lg">
                  View Site Plan
                </p>
              </div>

            </div>

            <p className="text-center mt-4 font-semibold">
              Site Plan
            </p>
          </motion.div>


          {/* PLAN A */}
          <motion.div
            whileHover={{ y: -6 }}
            className="cursor-pointer"
            onClick={() => openGallery(planAImages)}
          >
            <div className="relative overflow-hidden rounded-2xl shadow-xl aspect-[4/3] group">

              <img
                src={planAImages[planAIndex]}
                alt="Building Plan A"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                <p className="text-white font-semibold text-lg">
                  View Building Plan A
                </p>
              </div>

            </div>

            <p className="text-center mt-4 font-semibold">
              Building Plan A
            </p>
          </motion.div>


          {/* PLAN B */}
          <motion.div
            whileHover={{ y: -6 }}
            className="cursor-pointer"
            onClick={() => openGallery(planBImages)}
          >
            <div className="relative overflow-hidden rounded-2xl shadow-xl aspect-[4/3] group">

              <img
                src={planBImages[planBIndex]}
                alt="Building Plan B"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                <p className="text-white font-semibold text-lg">
                  View Building Plan B
                </p>
              </div>

            </div>

            <p className="text-center mt-4 font-semibold">
              Building Plan B
            </p>
          </motion.div>

        </div>

      </div>

      {/* LIGHTBOX */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >

            <button
              onClick={() => setOpen(false)}
              className="absolute top-6 right-6 text-white"
            >
              <X size={32} />
            </button>

            {images.length > 1 && (
              <>
                <button
                  onClick={prev}
                  className="absolute left-6 text-white"
                >
                  <ChevronLeft size={40} />
                </button>

                <button
                  onClick={next}
                  className="absolute right-6 text-white"
                >
                  <ChevronRight size={40} />
                </button>
              </>
            )}

            <img
              src={images[index]}
              className="max-h-[90vh] max-w-[95vw] rounded-xl shadow-2xl"
            />

          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
};

export default GallerySection;