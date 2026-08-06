"use client";

import { motion } from "framer-motion";
import { AnimatedLogo } from "./AnimatedLogo";
import { ImageWithFallback } from "../ui/ImageWithFallback";
import { siteImages } from "@/src/data/images";

export function ImageTransformation() {
  return (
    <div className="transformation-shell" aria-label="Retrato profissional da Dra. Ana Lopes">
      <motion.div
        className="hero-photo-stage"
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <span className="hero-logo-watermark" aria-hidden="true" />
        <figure className="hero-portrait-card">
          <ImageWithFallback image={siteImages.draAnaHeroJaleco} className="hero-portrait-image" priority />
        </figure>
        <div className="hero-logo-badge" aria-hidden="true">
          <AnimatedLogo compact />
        </div>
      </motion.div>
    </div>
  );
}
