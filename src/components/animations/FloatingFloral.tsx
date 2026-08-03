"use client";

import { motion } from "framer-motion";

type FloatingFloralProps = {
  className?: string;
};

export function FloatingFloral({ className = "" }: FloatingFloralProps) {
  return (
    <motion.div
      className={`floating-floral ${className}`}
      aria-hidden="true"
      animate={{ y: [0, -12, 0], rotate: [0, 1.5, 0] }}
      transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
    >
      <span />
      <span />
      <span />
    </motion.div>
  );
}
