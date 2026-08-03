"use client";

import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "../ui/Button";
import { siteConfig } from "@/src/config/site";
import { createWhatsAppUrl } from "@/src/config/contact";
import { AnimatedLogo } from "../animations/AnimatedLogo";

type MobileMenuProps = {
  open: boolean;
  activeId: string;
  onClose: () => void;
};

export function MobileMenu({ open, activeId, onClose }: MobileMenuProps) {
  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          className="mobile-menu-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.aside
            className="mobile-menu"
            aria-label="Menu principal"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            onClick={(event) => event.stopPropagation()}
          >
            <div className="mobile-menu-top">
              <AnimatedLogo compact />
              <button type="button" aria-label="Fechar menu" onClick={onClose}>
                <X aria-hidden="true" size={24} />
              </button>
            </div>
            <nav>
              {siteConfig.nav.map((item) => {
                const id = item.href.replace("#", "");
                return (
                  <a
                    key={item.href}
                    href={item.href}
                    aria-current={activeId === id ? "page" : undefined}
                    onClick={onClose}
                  >
                    {item.label}
                  </a>
                );
              })}
            </nav>
            <Button href={createWhatsAppUrl()} className="mobile-menu-cta">
              Agende sua consulta
            </Button>
          </motion.aside>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
