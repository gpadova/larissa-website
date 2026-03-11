import { ScrollReveal } from "@/components/scroll-reveal";

const DEPOIMENTOS = [
  {
    text: "A Larissa foi extremamente atenciosa e profissional durante todo o processo do meu divórcio. Me senti acolhida e segura em cada etapa. Recomendo de olhos fechados.",
    name: "Maria C.",
    area: "Direito da Família",
  },
  {
    text: "Precisei de orientação para o inventário do meu pai e a Dra. Larissa conduziu tudo com muita competência e sensibilidade. O processo foi muito mais tranquilo do que eu esperava.",
    name: "João P.",
    area: "Direito Sucessório",
  },
  {
    text: "Fui demitido de forma injusta e a Larissa me ajudou a entender meus direitos e buscar a compensação devida. Profissional dedicada e transparente do início ao fim.",
    name: "Roberto S.",
    area: "Direito Trabalhista",
  },
];

export function DepoimentosSection() {
  return (
    <section id="depoimentos" style={{ backgroundColor: "var(--color-white)" }}>
      <div className="container-global section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-12" style={{ gap: "var(--space-10)" }}>
          {/* Left: Sticky heading */}
          <div className="lg:col-span-4">
            <div className="lg:sticky" style={{ top: 120 }}>
              <ScrollReveal animation="fade-up">
                <p className="text-tiny" style={{ color: "var(--color-primary)", marginBottom: "var(--space-3)" }}>
                  Depoimentos
                </p>
              </ScrollReveal>
              <ScrollReveal animation="fade-up" delay={100}>
                <h2 className="heading-2" style={{ marginBottom: "var(--space-5)" }}>
                  O que dizem meus{" "}
                  <span style={{ color: "var(--color-primary)" }}>clientes</span>
                </h2>
              </ScrollReveal>
              <ScrollReveal animation="fade-up" delay={200}>
                <p className="text-body">
                  A confiança dos meus clientes é o que me motiva a dar o melhor
                  em cada caso. Aqui estão alguns relatos de quem já contou com a
                  minha assessoria jurídica.
                </p>
              </ScrollReveal>
            </div>
          </div>

          {/* Right: Testimonials */}
          <div className="lg:col-span-8 grid gap-0">
            {DEPOIMENTOS.map((dep, i) => (
              <ScrollReveal key={i} animation="fade-up" delay={i * 100}>
                <div
                  style={{
                    paddingBlock: "var(--space-8)",
                    borderBottom: "1px solid var(--color-gray-200)",
                  }}
                >
                  <p
                    style={{
                      fontSize: "var(--font-size-lg)",
                      lineHeight: "var(--leading-relaxed)",
                      color: "var(--color-black)",
                      fontStyle: "italic",
                      marginBottom: "var(--space-5)",
                    }}
                  >
                    &ldquo;{dep.text}&rdquo;
                  </p>
                  <div className="flex items-center" style={{ gap: "var(--space-3)" }}>
                    <span className="heading-6" style={{ color: "var(--color-primary)" }}>
                      {dep.name}
                    </span>
                    <div
                      style={{
                        width: 1,
                        height: 16,
                        backgroundColor: "var(--color-gray-300)",
                      }}
                    />
                    <span className="text-small">{dep.area}</span>
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
