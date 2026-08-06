"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { AnimatedLogo } from "../animations/AnimatedLogo";
import { useReducedMotion } from "@/src/hooks/useReducedMotion";

export function LoadingScreen() {
  const reducedMotion = useReducedMotion();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (reducedMotion) {
      return;
    }

    const alreadyShown = sessionStorage.getItem("ana-lopes-intro");
    if (alreadyShown) {
      return;
    }

    sessionStorage.setItem("ana-lopes-intro", "shown");
    const showTimer = window.setTimeout(() => setVisible(true), 0);
    const hideTimer = window.setTimeout(() => setVisible(false), 2400);
    return () => {
      window.clearTimeout(showTimer);
      window.clearTimeout(hideTimer);
    };
  }, [reducedMotion]);

  return (
    <AnimatePresence>
      {visible ? (
        <motion.div
          className="loading-screen"
          aria-label="Carregando site Dra. Ana Lopes"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <motion.div
            className="loading-card"
            initial={{ scale: 0.96, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
          >
            <AnimatedLogo animated />
            <motion.span
              className="loading-shimmer"
              initial={{ x: "-120%", opacity: 0 }}
              animate={{ x: "120%", opacity: [0, 1, 0] }}
              transition={{ delay: 0.9, duration: 0.85, ease: "easeInOut" }}
            />
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.15, duration: 0.45 }}
            >
              Dra. Ana Lopes
            </motion.p>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
