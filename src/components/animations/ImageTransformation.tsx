"use client";

import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { ImageWithFallback } from "../ui/ImageWithFallback";
import { siteImages } from "@/src/data/images";
import { useReducedMotion } from "@/src/hooks/useReducedMotion";

const photos = [
  {
    label: "Natural",
    image: siteImages.draAnaCasual,
    className: "hero-photo-casual",
  },
  {
    label: "Profissional",
    image: siteImages.draAnaHeroJaleco,
    className: "hero-photo-jaleco",
  },
];

export function ImageTransformation() {
  const reducedMotion = useReducedMotion();

  return (
    <div className="transformation-shell" aria-label="Dra. Ana Lopes em momentos natural e profissional">
      <motion.div
        className="transformation-light"
        aria-hidden="true"
        animate={reducedMotion ? undefined : { opacity: [0.55, 0.92, 0.55], x: [-10, 10, -10] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="hero-photo-stage"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        {photos.map((photo, index) => (
          <motion.figure
            key={photo.label}
            className={`hero-photo-card ${photo.className}`}
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.18 + index * 0.18, duration: 0.65, ease: "easeOut" }}
          >
            <span className="hero-photo-label">{photo.label}</span>
            <ImageWithFallback image={photo.image} className="hero-photo-image" priority />
          </motion.figure>
        ))}
        <motion.div
          className="hero-photo-arrow"
          aria-hidden="true"
          animate={reducedMotion ? undefined : { x: [0, 5, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronRight size={30} />
        </motion.div>
      </motion.div>
    </div>
  );
}
