"use client";

import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import { createWhatsAppUrl } from "@/src/config/contact";

export function WhatsAppButton() {
  return (
    <motion.a
      className="whatsapp-float"
      href={createWhatsAppUrl()}
      target="_blank"
      rel="noreferrer"
      aria-label="Agende pelo WhatsApp"
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.1, duration: 0.45 }}
    >
      <MessageCircle aria-hidden="true" size={24} strokeWidth={1.8} />
      <span>Agende pelo WhatsApp</span>
    </motion.a>
  );
}
