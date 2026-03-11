import { ScrollReveal } from "@/components/scroll-reveal";
import { FocusCards } from "@/components/ui/focus-cards";

const AREAS = [
  {
    title: "Direito da Família",
    src: "/areas/familia.png",
    alt: "Imagem representativa de Direito da Família",
    description:
      "Assessoria jurídica em divórcio, guarda de filhos, pensão alimentícia, reconhecimento e dissolução de união estável, adoção e demais questões familiares.",
    items: [
      "Divórcio judicial e extrajudicial",
      "Guarda e regulamentação de visitas",
      "Pensão alimentícia",
      "União estável",
    ],
  },
  {
    title: "Direito Sucessório",
    src: "/areas/sucessorio.png",
    alt: "Imagem representativa de Direito Sucessório",
    description:
      "Acompanhamento completo em processos de inventário, partilha de bens, testamentos e planejamento sucessório.",
    items: [
      "Inventário judicial e extrajudicial",
      "Testamentos e codicilos",
      "Partilha de bens",
      "Planejamento sucessório",
    ],
  },
  {
    title: "Judicial e Extrajudicial",
    src: "/areas/extra.png",
    alt: "Imagem representativa de atuação Judicial e Extrajudicial",
    description:
      "Atuação estratégica tanto na via judicial quanto na extrajudicial, com foco em prevenção de conflitos e segurança jurídica.",
    items: [
      "Mediação e acordos extrajudiciais",
      "Notificações e negociações formais",
      "Propositura e acompanhamento de ações",
      "Defesa técnica em processos judiciais",
    ],
  },
];

export function AreasSection() {
  const focusCards = AREAS.map((area) => ({
    title: area.title,
    src: area.src,
    alt: area.alt,
    children: (
      <ul
        style={{
          listStyle: "none",
          padding: 0,
          margin: 0,
          display: "flex",
          flexDirection: "column" as const,
          gap: "var(--space-1)",
        }}
      >
        {area.items.map((item) => (
          <li
            key={item}
            className="text-small"
            style={{
              color: "rgba(255,255,255,0.7)",
              paddingLeft: "var(--space-3)",
              borderLeft: "2px solid var(--color-gold)",
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    ),
  }));

  return (
    <section id="areas" style={{ backgroundColor: "var(--color-gray-50)" }}>
      <div className="container-global section-padding">
        <ScrollReveal animation="fade-up">
          <div className="flex items-center" style={{ gap: "var(--space-4)", marginBottom: "var(--space-3)" }}>
            <p className="text-tiny" style={{ color: "var(--color-primary)" }}>
              Áreas de Atuação
            </p>
            <div style={{ flex: 1, height: 1, backgroundColor: "var(--color-gray-200)" }} />
          </div>
        </ScrollReveal>

        <ScrollReveal animation="fade-up" delay={100}>
          <h2 className="heading-2" style={{ marginBottom: "var(--space-12)", maxWidth: "var(--container-md)" }}>
            Soluções jurídicas com{" "}
            <span style={{ color: "var(--color-primary)" }}>segurança</span> e{" "}
            <span style={{ color: "var(--color-primary)" }}>empatia</span>
          </h2>
        </ScrollReveal>

        <ScrollReveal animation="fade-up" delay={200}>
          <FocusCards cards={focusCards} />
        </ScrollReveal>

        {/* Detailed descriptions below cards */}
        <div
          className="grid grid-cols-1 md:grid-cols-3"
          style={{ gap: "var(--space-6)", marginTop: "var(--space-8)" }}
        >
          {AREAS.map((area, i) => (
            <ScrollReveal key={area.title} animation="fade-up" delay={300 + i * 100}>
              <div>
                <span
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "var(--font-size-sm)",
                    fontWeight: 700,
                    color: "var(--color-gold)",
                  }}
                >
                  0{i + 1}
                </span>
                <h3 className="heading-4" style={{ marginTop: "var(--space-2)", marginBottom: "var(--space-3)" }}>
                  {area.title}
                </h3>
                <p className="text-body">{area.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
