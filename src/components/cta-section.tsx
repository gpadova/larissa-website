import { ScrollReveal } from "@/components/scroll-reveal";
import { FlipWords } from "@/components/ui/flip-words";
import { BackgroundBeams } from "@/components/ui/background-beams";

const FLIP_WORDS = [
  "de orientação jurídica?",
  "de segurança para sua família?",
  "defender seus direitos?",
  "planejar sua sucessão?",
];

export function CTASection() {
  return (
    <section
      className="relative"
      style={{ backgroundColor: "var(--color-primary)", overflow: "hidden" }}
    >
      <BackgroundBeams
        beamCount={12}
        color="rgba(255,255,255,0.18)"
      />
      <div className="container-global section-padding relative" style={{ zIndex: 1 }}>
        <div
          className="grid grid-cols-1 lg:grid-cols-2 items-center"
          style={{ gap: "var(--space-8)" }}
        >
          <ScrollReveal animation="fade-up">
            <h2 className="heading-2" style={{ color: "var(--color-white)" }}>
              Precisa
              <span style={{ display: "block", height: "1.3em" }}>
                <FlipWords
                  words={FLIP_WORDS}
                  duration={3000}
                  style={{ color: "var(--color-gold)" }}
                />
              </span>
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
                Entre em contato e vamos entender juntos a melhor solução para o seu caso.
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
