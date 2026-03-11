"use client";

import { useState, useEffect } from "react";

const NAV_LINKS = [
  { label: "Início", href: "#inicio" },
  { label: "Sobre", href: "#sobre" },
  { label: "Áreas de Atuação", href: "#areas" },
  { label: "Trajetória", href: "#trajetoria" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "Contato", href: "#contato" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header
      className="fixed top-0 left-0 right-0"
      style={{
        zIndex: "var(--z-sticky)" as unknown as number,
        backgroundColor: scrolled
          ? "rgba(15, 15, 15, 0.95)"
          : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled
          ? "1px solid rgba(255,255,255,0.06)"
          : "1px solid transparent",
        transition:
          "background-color var(--transition-base), border-color var(--transition-base), backdrop-filter var(--transition-base)",
      }}
    >
      <div className="container-global">
        <nav
          className="flex items-center justify-between"
          style={{ height: scrolled ? 64 : 80, transition: "height var(--transition-base)" }}
        >
          {/* Logo */}
          <a
            href="#inicio"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "var(--font-size-xl)",
              fontWeight: 700,
              color: "var(--color-white)",
              textDecoration: "none",
              letterSpacing: "var(--tracking-tight)",
            }}
          >
            Larissa<span style={{ color: "var(--color-gold)" }}>.</span>
          </a>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center" style={{ gap: "var(--space-6)" }}>
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                style={{
                  color: "var(--color-white-80)",
                  textDecoration: "none",
                  fontSize: "var(--font-size-sm)",
                  fontWeight: 400,
                  transition: "color var(--transition-base)",
                  letterSpacing: "var(--tracking-wide)",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = "var(--color-gold)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = "var(--color-white-80)")
                }
              >
                {link.label}
              </a>
            ))}
            <a href="#contato" className="btn-primary" style={{ padding: "var(--space-2) var(--space-5)", textDecoration: "none" }}>
              Fale Comigo
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: "var(--space-2)",
              display: "flex",
              flexDirection: "column",
              gap: 5,
              width: 32,
            }}
          >
            <span
              style={{
                display: "block",
                width: "100%",
                height: 2,
                backgroundColor: "var(--color-white)",
                transition: "transform var(--transition-base), opacity var(--transition-base)",
                transform: mobileOpen
                  ? "translateY(7px) rotate(45deg)"
                  : "none",
              }}
            />
            <span
              style={{
                display: "block",
                width: "100%",
                height: 2,
                backgroundColor: "var(--color-white)",
                transition: "opacity var(--transition-base)",
                opacity: mobileOpen ? 0 : 1,
              }}
            />
            <span
              style={{
                display: "block",
                width: "100%",
                height: 2,
                backgroundColor: "var(--color-white)",
                transition: "transform var(--transition-base), opacity var(--transition-base)",
                transform: mobileOpen
                  ? "translateY(-7px) rotate(-45deg)"
                  : "none",
              }}
            />
          </button>
        </nav>
      </div>

      {/* Mobile menu overlay */}
      <div
        className="lg:hidden"
        style={{
          position: "fixed",
          inset: 0,
          top: 0,
          backgroundColor: "rgba(15, 15, 15, 0.98)",
          backdropFilter: "blur(20px)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "var(--space-6)",
          opacity: mobileOpen ? 1 : 0,
          pointerEvents: mobileOpen ? "auto" : "none",
          transition: "opacity var(--transition-base)",
          zIndex: 19,
        }}
      >
        {NAV_LINKS.map((link, i) => (
          <a
            key={link.href}
            href={link.href}
            onClick={() => setMobileOpen(false)}
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "var(--font-size-2xl)",
              fontWeight: 600,
              color: "var(--color-white)",
              textDecoration: "none",
              opacity: mobileOpen ? 1 : 0,
              transform: mobileOpen ? "translateY(0)" : "translateY(20px)",
              transition: `opacity 400ms ease ${i * 60}ms, transform 400ms ease ${i * 60}ms`,
            }}
          >
            {link.label}
          </a>
        ))}
        <a
          href="#contato"
          onClick={() => setMobileOpen(false)}
          className="btn-primary"
          style={{
            marginTop: "var(--space-4)",
            textDecoration: "none",
            opacity: mobileOpen ? 1 : 0,
            transition: `opacity 400ms ease ${NAV_LINKS.length * 60}ms`,
          }}
        >
          Fale Comigo
        </a>
      </div>
    </header>
  );
}
