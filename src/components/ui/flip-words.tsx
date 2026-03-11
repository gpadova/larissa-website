"use client";

import { useEffect, useState, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";

interface FlipWordsProps {
  words: string[];
  duration?: number;
  className?: string;
  style?: React.CSSProperties;
}

export function FlipWords({
  words,
  duration = 3000,
  className = "",
  style,
}: FlipWordsProps) {
  const [index, setIndex] = useState(0);

  const next = useCallback(() => {
    setIndex((prev) => (prev + 1) % words.length);
  }, [words.length]);

  useEffect(() => {
    const timer = setInterval(next, duration);
    return () => clearInterval(timer);
  }, [next, duration]);

  return (
    <span className={className} style={{ display: "inline-block", position: "relative", ...style }}>
      <AnimatePresence mode="wait">
        <motion.span
          key={words[index]}
          initial={{ opacity: 0, y: 10, filter: "blur(4px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          exit={{ opacity: 0, y: -10, filter: "blur(4px)" }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          style={{ display: "inline-block" }}
        >
          {words[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}
