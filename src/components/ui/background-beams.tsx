"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

interface BackgroundBeamsProps {
  className?: string;
  beamCount?: number;
  color?: string;
}

export function BackgroundBeams({
  className = "",
  beamCount = 6,
  color = "rgba(255,255,255,0.06)",
}: BackgroundBeamsProps) {
  const beams = Array.from({ length: beamCount }, (_, i) => ({
    id: i,
    x: `${10 + (i * 80) / beamCount}%`,
    width: 1.5 + Math.random() * 2.5,
    delay: i * 0.4 + Math.random() * 0.5,
    duration: 3 + Math.random() * 2,
  }));

  return (
    <div
      className={className}
      style={{
        position: "absolute",
        inset: 0,
        overflow: "hidden",
        pointerEvents: "none",
      }}
    >
      {beams.map((beam) => (
        <motion.div
          key={beam.id}
          initial={{ height: 0, opacity: 0 }}
          animate={{
            height: ["0%", "100%", "100%", "0%"],
            opacity: [0, 1, 1, 0],
            top: ["0%", "0%", "0%", "100%"],
          }}
          transition={{
            duration: beam.duration,
            delay: beam.delay,
            repeat: Infinity,
            repeatDelay: 1 + Math.random() * 2,
            ease: "easeInOut",
          }}
          style={{
            position: "absolute",
            left: beam.x,
            width: beam.width,
            background: `linear-gradient(180deg, transparent, ${color}, transparent)`,
          }}
        />
      ))}

      {/* Diagonal beams for more depth */}
      {beams.slice(0, 4).map((beam) => (
        <motion.div
          key={`diag-${beam.id}`}
          initial={{ opacity: 0 }}
          animate={{
            opacity: [0, 0.8, 0.8, 0],
            x: ["-100px", "200px"],
          }}
          transition={{
            duration: beam.duration + 2,
            delay: beam.delay + 1,
            repeat: Infinity,
            repeatDelay: 4 + Math.random() * 3,
            ease: "easeInOut",
          }}
          style={{
            position: "absolute",
            top: `${20 + beam.id * 25}%`,
            left: beam.x,
            width: 250 + beam.id * 60,
            height: beam.width,
            background: `linear-gradient(90deg, transparent, ${color}, transparent)`,
            transform: "rotate(-15deg)",
            transformOrigin: "left center",
          }}
        />
      ))}
    </div>
  );
}
