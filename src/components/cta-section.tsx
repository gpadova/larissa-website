import { ScrollReveal } from "@/components/scroll-reveal";

export function CTASection() {
  return (
    <section className="relative overflow-hidden" style={{ backgroundColor: "var(--color-primary)" }}>
      {/* Decorative circles */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: "-30%",
          right: "-10%",
          width: 500,
          height: 500,
          borderRadius: "var(--radius-full)",
          border: "1px solid rgba(255,255,255,0.1)",
        }}
      />
      <div
        className="absolute pointer-events-none"
        style={{
          bottom: "-40%",
          left: "-5%",
          width: 400,
          height: 400,
          borderRadius: "var(--radius-full)",
          border: "1px solid rgba(255,255,255,0.07)",
        }}
      />

      <div className="container-global section-padding relative" style={{ zIndex: 1 }}>
        <div
          className="grid grid-cols-1 lg:grid-cols-2 items-center"
          style={{ gap: "var(--space-8)" }}
        >
          <ScrollReveal animation="fade-up">
            <h2 className="heading-2" style={{ color: "var(--color-white)" }}>
              Precisa de{" "}
              <span style={{ color: "var(--color-gold)" }}>orientação jurídica</span>?
              Estou aqui para ajudar.
            </h2>
          </ScrollReveal>

          <ScrollReveal animation="fade-up" delay={150}>
            <div
              className="flex flex-col items-start lg:items-end"
              style={{ gap: "var(--space-4)" }}
            >
              <p
                className="text-body-large"
                style={{
                  color: "rgba(255,255,255,0.8)",
                  maxWidth: 400,
                }}
              >
                O primeiro passo é uma conversa. Entre em contato e vamos
                entender juntos a melhor solução para o seu caso.
              </p>
              <a
                href="#contato"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "var(--space-2)",
                  padding: "var(--space-3) var(--space-6)",
                  backgroundColor: "var(--color-white)",
                  color: "var(--color-primary)",
                  fontFamily: "var(--font-body)",
                  fontSize: "var(--font-size-sm)",
                  fontWeight: 500,
                  letterSpacing: "var(--tracking-wide)",
                  textTransform: "uppercase",
                  textDecoration: "none",
                  border: "none",
                  cursor: "pointer",
                  transition: "transform var(--transition-fast), box-shadow var(--transition-base)",
                }}
              >
                Agende uma Consulta
              </a>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
