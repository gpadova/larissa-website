import { ScrollReveal } from "@/components/scroll-reveal";
import { Timeline } from "@/components/ui/timeline";
import { LampSection } from "@/components/ui/lamp-effect";

const TIMELINE_DATA = [
  {
    title: "2018 — 2022",
    content: (
      <div>
        <h3
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "var(--font-size-xl)",
            fontWeight: 600,
            color: "var(--color-white)",
            lineHeight: "var(--leading-snug)",
            marginBottom: "var(--space-2)",
          }}
        >
          Bacharelado em Direito
        </h3>
        <p className="text-small" style={{ color: "var(--color-primary-light)", marginBottom: "var(--space-3)" }}>
          Universidade do Sul de Santa Catarina — UNISUL
        </p>
        <p className="text-body" style={{ color: "var(--color-white-60)" }}>
          Formação acadêmica sólida com foco em Direito Civil, Processual Civil e áreas correlatas.
        </p>
      </div>
    ),
  },
  {
    title: "2020 — 2021",
    content: (
      <div>
        <h3
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "var(--font-size-xl)",
            fontWeight: 600,
            color: "var(--color-white)",
            lineHeight: "var(--leading-snug)",
            marginBottom: "var(--space-2)",
          }}
        >
          Estagiária
        </h3>
        <p className="text-small" style={{ color: "var(--color-primary-light)", marginBottom: "var(--space-3)" }}>
          Samira Oenning Domingos Advocacia
        </p>
        <p className="text-body" style={{ color: "var(--color-white-60)" }}>
          Primeiro contato prático com a advocacia. Atendimento ao público, confecção de peças processuais e auxílio nos afazeres do escritório.
        </p>
      </div>
    ),
  },
  {
    title: "2021 — 2022",
    content: (
      <div>
        <h3
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "var(--font-size-xl)",
            fontWeight: 600,
            color: "var(--color-white)",
            lineHeight: "var(--leading-snug)",
            marginBottom: "var(--space-2)",
          }}
        >
          Estagiária
        </h3>
        <p className="text-small" style={{ color: "var(--color-primary-light)", marginBottom: "var(--space-3)" }}>
          Tribunal de Justiça de Santa Catarina — TJSC
        </p>
        <p className="text-body" style={{ color: "var(--color-white-60)" }}>
          Atuação no gabinete da 1ª Vara Cível da Comarca de Braço do Norte. Atendimentos ao público e confecção de minutas.
        </p>
      </div>
    ),
  },
  {
    title: "2023",
    content: (
      <div>
        <h3
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "var(--font-size-xl)",
            fontWeight: 600,
            color: "var(--color-white)",
            lineHeight: "var(--leading-snug)",
            marginBottom: "var(--space-2)",
          }}
        >
          Auxiliar Jurídica
        </h3>
        <p className="text-small" style={{ color: "var(--color-primary-light)", marginBottom: "var(--space-3)" }}>
          Kürten & Veronezi Advocacia
        </p>
        <p className="text-body" style={{ color: "var(--color-white-60)" }}>
          Transição para atuação profissional em escritório de advocacia, com aprofundamento em Direito Civil e Processual Civil.
        </p>
      </div>
    ),
  },
  {
    title: "2023 — 2024",
    content: (
      <div>
        <h3
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "var(--font-size-xl)",
            fontWeight: 600,
            color: "var(--color-white)",
            lineHeight: "var(--leading-snug)",
            marginBottom: "var(--space-2)",
          }}
        >
          Advogada
        </h3>
        <p className="text-small" style={{ color: "var(--color-primary-light)", marginBottom: "var(--space-3)" }}>
          Kürten & Veronezi Advocacia
        </p>
        <p className="text-body" style={{ color: "var(--color-white-60)" }}>
          Atuação plena como advogada com foco em Direito da Família, Sucessório e Processual Civil.
        </p>
      </div>
    ),
  },
  {
    title: "2025 — Presente",
    content: (
      <div>
        <h3
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "var(--font-size-xl)",
            fontWeight: 600,
            color: "var(--color-white)",
            lineHeight: "var(--leading-snug)",
            marginBottom: "var(--space-2)",
          }}
        >
          Advogada Autônoma
        </h3>
        <p className="text-small" style={{ color: "var(--color-primary-light)", marginBottom: "var(--space-3)" }}>
          Müller Medeiros Advocacia
        </p>
        <p className="text-body" style={{ color: "var(--color-white-60)" }}>
          Início da atuação independente com escritório próprio, dedicada ao Direito da Família e Sucessório. Atendimento humanizado e online para todo o Brasil.
        </p>
      </div>
    ),
  },
  {
    title: "2026 — Presente",
    content: (
      <div>
        <h3
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "var(--font-size-xl)",
            fontWeight: 600,
            color: "var(--color-white)",
            lineHeight: "var(--leading-snug)",
            marginBottom: "var(--space-2)",
          }}
        >
          Mediadora e Conciliadora
        </h3>
        <p className="text-small" style={{ color: "var(--color-primary-light)", marginBottom: "var(--space-3)" }}>
          Tribunal de Justiça de Santa Catarina — TJSC
        </p>
        <p className="text-body" style={{ color: "var(--color-white-60)" }}>
          Credenciada como mediadora e conciliadora judicial, atuando na resolução consensual de conflitos com foco em diálogo e equilíbrio entre as partes.
        </p>
      </div>
    ),
  },
];

export function TrajetoriaSection() {
  return (
    <section id="trajetoria" style={{ backgroundColor: "var(--color-dark)" }}>
      <div className="container-global section-padding">
        <LampSection color="var(--color-gold)">
          <ScrollReveal animation="fade-up">
            <p
              className="text-tiny"
              style={{
                color: "var(--color-gold)",
                marginBottom: "var(--space-3)",
                textAlign: "center",
              }}
            >
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
                textAlign: "center",
                marginInline: "auto",
              }}
            >
              Uma carreira construída com{" "}
              <span style={{ color: "var(--color-gold)" }}>propósito</span>
            </h2>
          </ScrollReveal>
        </LampSection>

        <Timeline data={TIMELINE_DATA} />
      </div>
    </section>
  );
}
