"use client";

import { motion } from "framer-motion";
import { Button } from "../ui/Button";
import { ImageWithFallback } from "../ui/ImageWithFallback";
import { siteImages } from "@/src/data/images";
import { createWhatsAppUrl } from "@/src/config/contact";

export function FinalCTA() {
  return (
    <section className="final-cta" id="contato">
      <div className="container final-cta-grid">
        <div className="final-cta-copy">
          <span className="eyebrow">Agendamento</span>
          <h2>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55 }}
            >
              Sua melhor versão
            </motion.span>
            <motion.span
              className="gold-text"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.12 }}
            >
              começa com um clique
            </motion.span>
          </h2>
          <p>
            Agende sua avaliação e descubra um plano de cuidado pensado
            especialmente para você.
          </p>
          <Button href={createWhatsAppUrl()}>Agendar minha avaliação</Button>
        </div>
        <motion.div
          className="final-cta-image"
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.75 }}
        >
          <span className="final-cta-logo-fill" aria-hidden="true" />
          <span className="final-cta-floral-fill" aria-hidden="true" />
          <span className="final-cta-gold-arc" aria-hidden="true" />
          <ImageWithFallback
            image={siteImages.draAnaHeroJaleco}
            className="final-cta-doctor"
          />
        </motion.div>
      </div>
    </section>
  );
}
