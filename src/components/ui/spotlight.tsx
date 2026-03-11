"use client";

import { motion } from "framer-motion";

interface SpotlightProps {
  className?: string;
  fill?: string;
  size?: number;
}

export function Spotlight({
  className = "",
  fill = "white",
  size = 800,
}: SpotlightProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 2, delay: 0.75, ease: "easeOut" }}
      style={{
        position: "absolute",
        pointerEvents: "none",
        zIndex: 0,
      }}
    >
      <svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ width: size, height: size }}
      >
        <defs>
          <radialGradient id="spotlight-gradient" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor={fill} stopOpacity="0.15" />
            <stop offset="40%" stopColor={fill} stopOpacity="0.06" />
            <stop offset="100%" stopColor={fill} stopOpacity="0" />
          </radialGradient>
        </defs>
        <ellipse
          cx={size / 2}
          cy={size / 2}
          rx={size / 2}
          ry={size / 2.5}
          fill="url(#spotlight-gradient)"
        />
      </svg>
    </motion.div>
  );
}
