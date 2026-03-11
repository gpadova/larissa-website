"use client";

import { useEffect, useState, useRef, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";

interface VanishInputProps {
  placeholders: string[];
  id?: string;
  type?: string;
  name?: string;
  required?: boolean;
  interval?: number;
}

export function VanishInput({
  placeholders,
  id,
  type = "text",
  name,
  required,
  interval = 3000,
}: VanishInputProps) {
  const [currentPlaceholder, setCurrentPlaceholder] = useState(0);
  const [value, setValue] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  useEffect(() => {
    if (isFocused || value) return;
    const timer = setInterval(() => {
      setCurrentPlaceholder((prev) => (prev + 1) % placeholders.length);
    }, interval);
    return () => clearInterval(timer);
  }, [placeholders.length, interval, isFocused, value]);

  return (
    <div style={{ position: "relative" }}>
      <input
        type={type}
        id={id}
        name={name}
        required={required}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        style={{
          width: "100%",
          padding: "var(--space-3) var(--space-4)",
          border: "1px solid var(--color-gray-200)",
          backgroundColor: "var(--color-gray-50)",
          fontSize: "var(--font-size-base)",
          fontFamily: "var(--font-body)",
          color: "var(--color-black)",
          outline: "none",
          transition: "border-color 0.3s ease, box-shadow 0.3s ease",
          borderColor: isFocused ? "var(--color-primary)" : "var(--color-gray-200)",
          boxShadow: isFocused ? "0 0 0 3px rgba(107, 76, 154, 0.08)" : "none",
        }}
      />
      {/* Animated placeholder overlay */}
      {!value && (
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            display: "flex",
            alignItems: "center",
            paddingLeft: "var(--space-4)",
            pointerEvents: "none",
            overflow: "hidden",
          }}
        >
          <AnimatePresence mode="wait">
            <motion.span
              key={currentPlaceholder}
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 0.45 }}
              exit={{ y: -10, opacity: 0 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
              style={{
                fontSize: "var(--font-size-base)",
                fontFamily: "var(--font-body)",
                color: "var(--color-black)",
                whiteSpace: "nowrap",
              }}
            >
              {placeholders[currentPlaceholder]}
            </motion.span>
          </AnimatePresence>
        </div>
      )}
    </div>
  );
}
