"use client";

import { motion } from "framer-motion";
import { type ReactNode } from "react";

interface LampSectionProps {
  children: ReactNode;
  color?: string;
}

export function LampSection({ children, color = "var(--color-gold)" }: LampSectionProps) {
  return (
    <div
      style={{
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Lamp glow container */}
      <div
        style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "100%",
          overflow: "hidden",
        }}
      >
        {/* Upper conic gradient - the "lamp beam" */}
        <motion.div
          initial={{ opacity: 0, width: "8rem" }}
          whileInView={{ opacity: 1, width: "20rem" }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ delay: 0.2, duration: 0.8, ease: "easeInOut" }}
          style={{
            position: "absolute",
            top: 0,
            left: "50%",
            transform: "translateX(-50%)",
            height: "14rem",
            background: `conic-gradient(from 90deg at 50% 0%, transparent 40%, ${color} 50%, transparent 60%)`,
            opacity: 0.15,
            filter: "blur(40px)",
          }}
        />

        {/* Elliptical glow at bottom of lamp */}
        <motion.div
          initial={{ opacity: 0, width: "10rem" }}
          whileInView={{ opacity: 1, width: "24rem" }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ delay: 0.4, duration: 0.8, ease: "easeInOut" }}
          style={{
            position: "absolute",
            top: "6rem",
            left: "50%",
            transform: "translateX(-50%)",
            height: "4rem",
            borderRadius: "50%",
            background: color,
            opacity: 0.08,
            filter: "blur(30px)",
          }}
        />

        {/* Horizontal line */}
        <motion.div
          initial={{ width: 0, opacity: 0 }}
          whileInView={{ width: "16rem", opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }}
          style={{
            height: 1,
            marginTop: "1rem",
            marginBottom: "var(--space-8)",
            background: `linear-gradient(90deg, transparent, ${color}, transparent)`,
            opacity: 0.3,
          }}
        />
      </div>

      {/* Content below the lamp */}
      <div style={{ position: "relative", zIndex: 1 }}>{children}</div>
    </div>
  );
}
