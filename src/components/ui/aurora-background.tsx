"use client";

import { type ReactNode } from "react";

interface AuroraBackgroundProps {
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
  showRadialGradient?: boolean;
  primaryColor?: string;
  secondaryColor?: string;
}

export function AuroraBackground({
  children,
  className = "",
  style,
  showRadialGradient = true,
  primaryColor = "rgba(201,169,110,0.3)",
  secondaryColor = "rgba(255,255,255,0.15)",
}: AuroraBackgroundProps) {
  return (
    <div
      className={className}
      style={{
        position: "relative",
        overflow: "hidden",
        ...style,
      }}
    >
      {/* Aurora effect layer */}
      <div
        style={{
          position: "absolute",
          inset: "-50%",
          pointerEvents: "none",
          opacity: 0.6,
          willChange: "transform",
          backgroundImage: `
            repeating-linear-gradient(
              100deg,
              ${primaryColor} 0%,
              ${primaryColor} 7%,
              transparent 10%,
              transparent 12%,
              ${primaryColor} 16%
            ),
            repeating-linear-gradient(
              100deg,
              ${secondaryColor} 0%,
              ${secondaryColor} 7%,
              transparent 10%,
              transparent 12%,
              ${secondaryColor} 16%
            )
          `,
          backgroundSize: "300% 200%, 200% 200%",
          animation: "aurora 30s linear infinite",
          filter: "blur(60px) saturate(1.2)",
        }}
      />

      {/* Secondary aurora layer for depth */}
      <div
        style={{
          position: "absolute",
          inset: "-30%",
          pointerEvents: "none",
          opacity: 0.35,
          willChange: "transform",
          backgroundImage: `
            repeating-linear-gradient(
              145deg,
              ${secondaryColor} 0%,
              ${primaryColor} 5%,
              transparent 8%,
              transparent 14%,
              ${secondaryColor} 18%
            )
          `,
          backgroundSize: "250% 250%",
          animation: "aurora 20s linear infinite reverse",
          filter: "blur(80px)",
        }}
      />

      {/* Radial gradient for vignette/focus */}
      {showRadialGradient && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            pointerEvents: "none",
            background:
              "radial-gradient(ellipse 80% 60% at 50% 50%, transparent 30%, rgba(107,76,154,0.4) 100%)",
          }}
        />
      )}

      {/* Content */}
      <div style={{ position: "relative", zIndex: 1 }}>{children}</div>
    </div>
  );
}
