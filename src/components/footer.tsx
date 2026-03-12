import Image from "next/image";
import { CONTACT } from "@/lib/constants";

export function Footer() {
  return (
    <footer style={{ backgroundColor: "var(--color-dark)" }}>
      {/* Gold separator line */}
      <div
        style={{
          height: 1,
          background: "linear-gradient(90deg, transparent, var(--color-gold), transparent)",
          opacity: 0.3,
        }}
      />
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
                display: "block",
                width: "min(100%, 340px)",
                marginBottom: "var(--space-5)",
              }}
            >
              <Image
                src="/logo/logo-dark-without-footer.png"
                alt="Larissa Müller Medeiros"
                width={680}
                height={180}
                className="h-auto w-full object-contain"
                priority
              />
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
              Atendimento online para todo o Brasil.
            </p>
            <div className="flex items-center" style={{ gap: "var(--space-3)" }}>
              <a
                href={CONTACT.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
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
                href={CONTACT.linkedin.url}
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
            {["Direito da Família", "Direito Sucessório", "Mediação e Conciliação"].map((area) => (
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
            &copy; 2026 Larissa Müller Medeiros &mdash; OAB/SC. Todos os direitos reservados.
          </p>
          <p className="text-small" style={{ color: "var(--color-white-60)" }}>
            Base em Braço do Norte, SC &mdash; Atendimento online para todo o Brasil
          </p>
        </div>
      </div>
    </footer>
  );
}
