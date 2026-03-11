"use client";

import { useRef, type ReactNode } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface TimelineEntry {
  title: string;
  content: ReactNode;
}

interface TimelineProps {
  data: TimelineEntry[];
}

export function Timeline({ data }: TimelineProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 80%", "end 50%"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div ref={containerRef} className="relative">
      {/* Background line */}
      <div
        className="absolute hidden lg:block"
        style={{
          left: 18,
          top: 0,
          bottom: 0,
          width: 2,
          backgroundColor: "rgba(255,255,255,0.06)",
        }}
      />

      {/* Animated progress line */}
      <motion.div
        className="absolute hidden lg:block"
        style={{
          left: 18,
          top: 0,
          width: 2,
          height: lineHeight,
          background:
            "linear-gradient(180deg, var(--color-gold), var(--color-primary))",
        }}
      />

      <div style={{ display: "flex", flexDirection: "column" }}>
        {data.map((item, i) => (
          <TimelineItem key={i} item={item} index={i} />
        ))}
      </div>
    </div>
  );
}

function TimelineItem({ item, index }: { item: TimelineEntry; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 80%", "start 50%"],
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [0.3, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [30, 0]);

  return (
    <motion.div
      ref={ref}
      style={{
        opacity,
        y,
        paddingBlock: "var(--space-8)",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      <div
        className="grid grid-cols-1 lg:grid-cols-12"
        style={{ gap: "var(--space-4)" }}
      >
        {/* Dot */}
        <div
          className="lg:col-span-1 hidden lg:flex"
          style={{ alignItems: "flex-start", paddingTop: 4 }}
        >
          <div
            style={{
              width: 12,
              height: 12,
              borderRadius: "var(--radius-full)",
              border: "2px solid var(--color-gold)",
              backgroundColor: "var(--color-dark)",
              marginLeft: 13,
              flexShrink: 0,
            }}
          />
        </div>

        {/* Title (sticky on scroll) */}
        <div className="lg:col-span-2">
          <div className="lg:sticky" style={{ top: 100 }}>
            <span
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "var(--font-size-sm)",
                fontWeight: 600,
                color: "var(--color-gold)",
                whiteSpace: "nowrap",
              }}
            >
              {item.title}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="lg:col-span-9">{item.content}</div>
      </div>
    </motion.div>
  );
}
