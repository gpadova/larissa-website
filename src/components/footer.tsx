export function Footer() {
  return (
    <footer style={{ backgroundColor: "var(--color-dark)" }}>
      <div className="container-global" style={{ paddingBlock: "var(--space-12)" }}>
        <div
          className="grid grid-cols-1 md:grid-cols-12"
          style={{ gap: "var(--space-8)", marginBottom: "var(--space-10)" }}
        >
          {/* Brand */}
          <div className="md:col-span-5">
            <a
              href="#inicio"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "var(--font-size-2xl)",
                fontWeight: 700,
                color: "var(--color-white)",
                textDecoration: "none",
                display: "inline-block",
                marginBottom: "var(--space-4)",
              }}
            >
              Larissa<span style={{ color: "var(--color-gold)" }}>.</span>
            </a>
            <p
              className="text-body"
              style={{
                color: "var(--color-white-60)",
                maxWidth: 360,
                marginBottom: "var(--space-5)",
              }}
            >
              Advocacia com dedicação, empatia e compromisso com a justiça.
              Braço do Norte, Santa Catarina.
            </p>
            <div className="flex items-center" style={{ gap: "var(--space-3)" }}>
              <a
                href="#"
                aria-label="Instagram"
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: "var(--radius-full)",
                  border: "1px solid rgba(255,255,255,0.12)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "var(--color-white-60)",
                  textDecoration: "none",
                  transition: "border-color var(--transition-base), color var(--transition-base)",
                }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="20" x="2" y="2" rx="5" />
                  <circle cx="12" cy="12" r="5" />
                  <path d="M17.5 6.5h.01" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/larissa-muller-medeiros-2607-lmm/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: "var(--radius-full)",
                  border: "1px solid rgba(255,255,255,0.12)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "var(--color-white-60)",
                  textDecoration: "none",
                  transition: "border-color var(--transition-base), color var(--transition-base)",
                }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect width="4" height="12" x="2" y="9" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
            </div>
          </div>

          {/* Links */}
          <div className="md:col-span-3">
            <span
              className="text-tiny"
              style={{ color: "var(--color-white)", display: "block", marginBottom: "var(--space-4)" }}
            >
              Navegação
            </span>
            {[
              { label: "Início", href: "#inicio" },
              { label: "Sobre", href: "#sobre" },
              { label: "Áreas de Atuação", href: "#areas" },
              { label: "Trajetória", href: "#trajetoria" },
              { label: "Depoimentos", href: "#depoimentos" },
              { label: "Contato", href: "#contato" },
            ].map((link) => (
              <a
                key={link.href}
                href={link.href}
                style={{
                  display: "block",
                  color: "var(--color-white-60)",
                  textDecoration: "none",
                  fontSize: "var(--font-size-sm)",
                  marginBottom: "var(--space-2)",
                  transition: "color var(--transition-base)",
                }}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Areas */}
          <div className="md:col-span-4">
            <span
              className="text-tiny"
              style={{ color: "var(--color-white)", display: "block", marginBottom: "var(--space-4)" }}
            >
              Áreas de Atuação
            </span>
            {["Direito da Família", "Direito Sucessório", "Direito Trabalhista"].map((area) => (
              <a
                key={area}
                href="#areas"
                style={{
                  display: "block",
                  color: "var(--color-white-60)",
                  textDecoration: "none",
                  fontSize: "var(--font-size-sm)",
                  marginBottom: "var(--space-2)",
                  transition: "color var(--transition-base)",
                }}
              >
                {area}
              </a>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            borderTop: "1px solid rgba(255,255,255,0.06)",
            paddingTop: "var(--space-6)",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            gap: "var(--space-4)",
          }}
        >
          <p className="text-small" style={{ color: "var(--color-white-60)" }}>
            &copy; 2026 Larissa Muller Medeiros &mdash; OAB/SC. Todos os direitos reservados.
          </p>
          <p className="text-small" style={{ color: "var(--color-white-60)" }}>
            Braço do Norte, Santa Catarina, Brasil
          </p>
        </div>
      </div>
    </footer>
  );
}
