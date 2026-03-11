import { ScrollReveal } from "@/components/scroll-reveal";

const TIMELINE = [
  {
    period: "2018 — 2022",
    title: "Bacharelado em Direito",
    place: "Universidade do Sul de Santa Catarina — UNISUL",
    description:
      "Formação acadêmica sólida com foco em Direito Civil, Processual Civil e áreas correlatas.",
  },
  {
    period: "2020 — 2021",
    title: "Estagiária",
    place: "Samira Oenning Domingos Advocacia",
    description:
      "Primeiro contato prático com a advocacia. Atendimento ao público, confecção de peças processuais e auxílio nos afazeres do escritório.",
  },
  {
    period: "2021 — 2022",
    title: "Estagiária",
    place: "Tribunal de Justiça de Santa Catarina — TJSC",
    description:
      "Atuação no gabinete da 1ª Vara Cível da Comarca de Braço do Norte. Atendimentos ao público e confecção de minutas.",
  },
  {
    period: "2023",
    title: "Auxiliar Jurídica",
    place: "Kürten & Veronezi Advocacia",
    description:
      "Transição para atuação profissional em escritório de advocacia, com aprofundamento em Direito Civil e Processual Civil.",
  },
  {
    period: "2023 — Presente",
    title: "Advogada",
    place: "Kürten & Veronezi Advocacia / Atuação autônoma",
    description:
      "Atuação plena como advogada com foco em Direito da Família, Sucessório e Trabalhista. Atendimento humanizado e comprometido com cada cliente.",
  },
];

export function TrajetoriaSection() {
  return (
    <section id="trajetoria" style={{ backgroundColor: "var(--color-dark)" }}>
      <div className="container-global section-padding">
        <ScrollReveal animation="fade-up">
          <p className="text-tiny" style={{ color: "var(--color-gold)", marginBottom: "var(--space-3)" }}>
            Trajetória
          </p>
        </ScrollReveal>

        <ScrollReveal animation="fade-up" delay={100}>
          <h2
            className="heading-2"
            style={{
              color: "var(--color-white)",
              marginBottom: "var(--space-12)",
              maxWidth: "var(--container-md)",
            }}
          >
            Uma carreira construída com{" "}
            <span style={{ color: "var(--color-gold)" }}>propósito</span>
          </h2>
        </ScrollReveal>

        <div className="relative">
          {/* Vertical line */}
          <div
            className="absolute hidden lg:block"
            style={{
              left: 140,
              top: 0,
              bottom: 0,
              width: 1,
              backgroundColor: "rgba(255,255,255,0.08)",
            }}
          />

          <div className="grid gap-0">
            {TIMELINE.map((item, i) => (
              <ScrollReveal key={i} animation="fade-up" delay={i * 80}>
                <div
                  className="grid grid-cols-1 lg:grid-cols-12"
                  style={{
                    paddingBlock: "var(--space-8)",
                    borderBottom: "1px solid rgba(255,255,255,0.06)",
                    gap: "var(--space-4)",
                  }}
                >
                  <div className="lg:col-span-2">
                    <span
                      style={{
                        fontFamily: "var(--font-display)",
                        fontSize: "var(--font-size-sm)",
                        fontWeight: 600,
                        color: "var(--color-gold)",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {item.period}
                    </span>
                  </div>
                  <div className="lg:col-span-3">
                    <h3
                      style={{
                        fontFamily: "var(--font-display)",
                        fontSize: "var(--font-size-xl)",
                        fontWeight: 600,
                        color: "var(--color-white)",
                        lineHeight: "var(--leading-snug)",
                      }}
                    >
                      {item.title}
                    </h3>
                  </div>
                  <div className="lg:col-span-3">
                    <span className="text-small" style={{ color: "var(--color-primary-light)" }}>
                      {item.place}
                    </span>
                  </div>
                  <div className="lg:col-span-4">
                    <p className="text-body" style={{ color: "var(--color-white-60)" }}>
                      {item.description}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
