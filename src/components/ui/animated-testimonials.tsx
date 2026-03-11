"use client";

import { useEffect, useState, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";

interface Testimonial {
  quote: string;
  name: string;
  designation: string;
}

interface AnimatedTestimonialsProps {
  testimonials: Testimonial[];
  autoplay?: boolean;
  interval?: number;
}

export function AnimatedTestimonials({
  testimonials,
  autoplay = true,
  interval = 5000,
}: AnimatedTestimonialsProps) {
  const [active, setActive] = useState(0);

  const handleNext = useCallback(() => {
    setActive((prev) => (prev + 1) % testimonials.length);
  }, [testimonials.length]);

  const handlePrev = useCallback(() => {
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, [testimonials.length]);

  useEffect(() => {
    if (!autoplay) return;
    const timer = setInterval(handleNext, interval);
    return () => clearInterval(timer);
  }, [autoplay, interval, handleNext]);

  const current = testimonials[active];

  return (
    <div style={{ position: "relative", maxWidth: 640 }}>
      {/* Quote */}
      <div style={{ minHeight: 160, position: "relative" }}>
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            <p
              style={{
                fontSize: "var(--font-size-xl)",
                lineHeight: "var(--leading-relaxed)",
                color: "var(--color-black)",
                fontStyle: "italic",
                marginBottom: "var(--space-6)",
              }}
            >
              &ldquo;{current.quote}&rdquo;
            </p>
            <div className="flex items-center" style={{ gap: "var(--space-3)" }}>
              <span
                className="heading-6"
                style={{ color: "var(--color-primary)" }}
              >
                {current.name}
              </span>
              <div
                style={{
                  width: 1,
                  height: 16,
                  backgroundColor: "var(--color-gray-300)",
                }}
              />
              <span className="text-small">{current.designation}</span>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Controls */}
      <div
        className="flex items-center"
        style={{ gap: "var(--space-4)", marginTop: "var(--space-8)" }}
      >
        {/* Dots */}
        <div className="flex items-center" style={{ gap: "var(--space-2)" }}>
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              aria-label={`Depoimento ${i + 1}`}
              style={{
                width: i === active ? 24 : 8,
                height: 8,
                borderRadius: 4,
                border: "none",
                backgroundColor:
                  i === active
                    ? "var(--color-primary)"
                    : "var(--color-gray-300)",
                cursor: "pointer",
                transition: "all 0.3s ease",
                padding: 0,
              }}
            />
          ))}
        </div>

        {/* Arrows */}
        <div className="flex items-center" style={{ gap: "var(--space-2)", marginLeft: "auto" }}>
          <button
            onClick={handlePrev}
            aria-label="Depoimento anterior"
            style={{
              width: 40,
              height: 40,
              borderRadius: "var(--radius-full)",
              border: "1px solid var(--color-gray-200)",
              backgroundColor: "var(--color-white)",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transition: "border-color 0.2s ease",
            }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--color-black)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
          <button
            onClick={handleNext}
            aria-label="Próximo depoimento"
            style={{
              width: 40,
              height: 40,
              borderRadius: "var(--radius-full)",
              border: "1px solid var(--color-primary)",
              backgroundColor: "var(--color-primary)",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transition: "background-color 0.2s ease",
            }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
