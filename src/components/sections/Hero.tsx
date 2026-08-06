"use client";

import { motion } from "framer-motion";
import { Button } from "../ui/Button";
import { FloatingFloral } from "../animations/FloatingFloral";
import { ImageTransformation } from "../animations/ImageTransformation";
import { createWhatsAppUrl } from "@/src/config/contact";

export function Hero() {
  return (
    <section className="hero-section" id="inicio">
      <div className="hero-bg-glow" aria-hidden="true" />
      <FloatingFloral className="hero-floral-left" />
      <FloatingFloral className="hero-floral-right" />
      <div className="container hero-grid">
        <div className="hero-copy">
          <motion.span
            className="eyebrow"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
          >
            Biomédica esteta
          </motion.span>
          <h1>
            <motion.span
              initial={{ opacity: 0, y: 26 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.35 }}
            >
              Realce sua melhor 
            </motion.span>
            <motion.span
              className="gold-text"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.55 }}
            >
              versão
            </motion.span>
          </h1>
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.78 }}
          >
            Harmonização, cuidado e beleza com naturalidade para você se sentir
            única.
          </motion.p>
          <motion.div
            className="hero-actions"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.95 }}
          >
            <Button href={createWhatsAppUrl()}>Agende sua consulta</Button>
          </motion.div>
          <motion.div
            className="hero-social-proof"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 1.08 }}
          >
            <span className="proof-avatars" aria-hidden="true">
              <i />
              <i />
              <i />
              <i />
            </span>
          
          </motion.div>
        </div>
        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.97, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.45 }}
        >
          <ImageTransformation />
        </motion.div>
      </div>
      <a className="scroll-indicator" href="#diferenciais" aria-label="Rolar para diferenciais">
        <span />
      </a>
    </section>
  );
}
