"use client";

import { useEffect, useRef, useState } from "react";
import { motion, stagger, useAnimate, useInView } from "framer-motion";

interface TextGenerateEffectProps {
  words: string;
  className?: string;
  style?: React.CSSProperties;
  filter?: boolean;
  duration?: number;
}

export function TextGenerateEffect({
  words,
  className = "",
  style,
  filter = true,
  duration = 0.5,
}: TextGenerateEffectProps) {
  const [scope, animate] = useAnimate();
  const isInView = useInView(scope, { once: true, margin: "-100px" });
  const [hasAnimated, setHasAnimated] = useState(false);
  const wordsArray = words.split(" ");

  useEffect(() => {
    if (isInView && !hasAnimated) {
      animate(
        "span",
        { opacity: 1, filter: filter ? "blur(0px)" : "none" },
        { duration, delay: stagger(0.08) }
      );
      setHasAnimated(true);
    }
  }, [isInView, hasAnimated, animate, duration, filter]);

  return (
    <div ref={scope} className={className} style={style}>
      {wordsArray.map((word, idx) => (
        <motion.span
          key={word + idx}
          style={{
            opacity: 0,
            filter: filter ? "blur(10px)" : "none",
            display: "inline-block",
            marginRight: "0.3em",
          }}
        >
          {word}
        </motion.span>
      ))}
    </div>
  );
}
