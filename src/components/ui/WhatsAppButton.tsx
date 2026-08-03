"use client";

import { useEffect, useState } from "react";
import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import { createWhatsAppUrl } from "@/src/config/contact";

export function WhatsAppButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 360);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.a
      className={`whatsapp-float ${visible ? "is-visible" : ""}`}
      href={createWhatsAppUrl()}
      target="_blank"
      rel="noreferrer"
      aria-label="Agende pelo WhatsApp"
      initial={false}
      animate={{ opacity: visible ? 1 : 0, y: visible ? 0 : 14 }}
      transition={{ duration: 0.25 }}
    >
      <MessageCircle aria-hidden="true" size={24} strokeWidth={1.8} />
      <span>Agende pelo WhatsApp</span>
    </motion.a>
  );
}
