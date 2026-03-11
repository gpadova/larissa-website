"use client";

import { useState, type ReactNode } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface FocusCard {
  title: string;
  src: string;
  alt: string;
  children?: ReactNode;
}

interface FocusCardsProps {
  cards: FocusCard[];
}

export function FocusCards({ cards }: FocusCardsProps) {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div
      className="grid grid-cols-1 md:grid-cols-3"
      style={{ gap: "var(--space-4)" }}
    >
      {cards.map((card, i) => (
        <motion.div
          key={card.title}
          onMouseEnter={() => setHovered(i)}
          onMouseLeave={() => setHovered(null)}
          animate={{
            filter:
              hovered !== null && hovered !== i ? "blur(3px)" : "blur(0px)",
            scale: hovered === i ? 1.02 : 1,
            opacity: hovered !== null && hovered !== i ? 0.6 : 1,
          }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          style={{
            position: "relative",
            overflow: "hidden",
            aspectRatio: "3/4",
            cursor: "pointer",
          }}
        >
          <Image
            src={card.src}
            alt={card.alt}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            style={{ objectFit: "cover" }}
          />
          {/* Gradient overlay */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(180deg, transparent 40%, rgba(15,15,15,0.85) 100%)",
            }}
          />
          {/* Content */}
          <div
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              padding: "var(--space-6)",
            }}
          >
            <h3
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "var(--font-size-xl)",
                fontWeight: 700,
                color: "var(--color-white)",
                marginBottom: card.children ? "var(--space-3)" : 0,
              }}
            >
              {card.title}
            </h3>
            {card.children}
          </div>
        </motion.div>
      ))}
    </div>
  );
}
