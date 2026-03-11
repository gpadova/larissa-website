import { ScrollReveal } from "@/components/scroll-reveal";
import Image from "next/image";

const AREAS = [
  {
    title: "Direito da Família",
    description:
      "Assessoria jurídica em divórcio, guarda de filhos, pensão alimentícia, reconhecimento e dissolução de união estável, adoção e demais questões familiares. Atuação com sensibilidade e busca pela melhor solução para todas as partes envolvidas.",
    items: [
      "Divórcio judicial e extrajudicial",
      "Guarda e regulamentação de visitas",
      "Pensão alimentícia",
      "União estável",
    ],
    imgSrc: "/areas/familia.png",
    imgAlt:
      "Close em duas alianças de ouro apoiadas sobre as páginas abertas de um livro antigo de capa de couro, com pétalas secas de rosa espalhadas ao redor. Mesa de madeira clara com marcas naturais de uso. Luz natural suave e dourada vinda de janela lateral, criando sombras longas e delicadas. Formato paisagem 4:3, lente macro 100mm f/2.8, profundidade de campo muito rasa com bokeh cremoso no fundo, tons quentes de bege, dourado e marfim. Fotografia analógica com filme Kodak Portra 400, grão de filme visível, texturas reais do ouro, do papel e da madeira, sem efeitos digitais, sem brilho artificial, qualidade 8K",
  },
  {
    title: "Direito Sucessório",
    description:
      "Acompanhamento completo em processos de inventário, partilha de bens, testamentos e planejamento sucessório. Orientação segura para que a transmissão de patrimônio ocorra de forma justa e dentro da legalidade.",
    items: [
      "Inventário judicial e extrajudicial",
      "Testamentos e codicilos",
      "Partilha de bens",
      "Planejamento sucessório",
    ],
    imgSrc: "/areas/sucessorio.png",
    imgAlt:
      "Caneta tinteiro dourada apoiada sobre um testamento antigo de papel amarelado com selo de cera vermelha, ao lado de óculos de leitura com armação fina e um livro grosso de capa de couro marrom aberto na metade. Tudo sobre mesa de mogno escuro envernizado com reflexos suaves. Iluminação lateral vinda de luminária de mesa com abajur verde clássico de vidro, criando sombras dramáticas. Formato paisagem 4:3, lente 35mm f/2.0, profundidade de campo rasa, tons âmbar e marrom escuro, atmosfera de escritório tradicional e clássico. Texturas naturais do papel envelhecido, do couro gasto e da madeira visíveis, sem pós-processamento exagerado, grão fotográfico sutil, qualidade 8K",
  },
  {
    title: "Judicial e Extrajudicial",
    description:
      "Atuação estratégica tanto na via judicial quanto na extrajudicial, com foco em prevenção de conflitos, resolução eficiente de demandas e segurança jurídica em todas as etapas.",
    items: [
      "Mediação e acordos extrajudiciais",
      "Notificações e negociações formais",
      "Propositura e acompanhamento de ações",
      "Defesa técnica em processos judiciais",
    ],
    imgSrc: "/areas/extra.png",
    imgAlt:
      "Martelo de juiz de madeira escura com detalhes dourados apoiado sobre sua base redonda, ao lado de uma balança da justiça de bronze polido e uma pilha organizada de documentos com clips metálicos, tudo sobre mesa de vidro com superfície limpa e reflexo sutil. Ao fundo desfocado, estante com códigos de lei de lombada escura. Luz natural difusa de janela grande com cortina branca translúcida, criando ambiente limpo e profissional. Formato paisagem 4:3, lente 28mm f/2.8, composição minimalista com bastante espaço negativo, tons neutros de cinza, branco e bronze. Texturas reais da madeira, do metal e do papel visíveis, sem HDR, sem cores artificiais, grão fotográfico sutil, qualidade 8K",
  },
];

export function AreasSection() {
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

        <div className="grid gap-0">
          {AREAS.map((area, i) => (
            <ScrollReveal key={area.title} animation="fade-up" delay={i * 100}>
              <div
                className="grid grid-cols-1 lg:grid-cols-12"
                style={{
                  borderTop: "1px solid var(--color-gray-200)",
                  paddingBlock: "var(--space-10)",
                  gap: "var(--space-8)",
                }}
              >
                {/* Number */}
                <div className="lg:col-span-1">
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
                </div>

                {/* Title & description */}
                <div className="lg:col-span-4">
                  <h3 className="heading-3" style={{ marginBottom: "var(--space-4)" }}>
                    {area.title}
                  </h3>
                  <p className="text-body">{area.description}</p>
                </div>

                {/* Services list */}
                <div className="lg:col-span-3 flex flex-col justify-center">
                  <ul
                    style={{
                      listStyle: "none",
                      padding: 0,
                      margin: 0,
                      display: "flex",
                      flexDirection: "column",
                      gap: "var(--space-3)",
                    }}
                  >
                    {area.items.map((item) => (
                      <li
                        key={item}
                        className="text-body"
                        style={{
                          paddingLeft: "var(--space-4)",
                          borderLeft: "2px solid var(--color-gold)",
                        }}
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Image placeholder */}
                <div className="lg:col-span-4">
                  <div
                    style={{
                      width: "100%",
                      aspectRatio: "4/3",
                      backgroundColor: "var(--color-gray-100)",
                      border: "1px solid var(--color-gray-200)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      position: "relative",
                    }}
                  >
                    <Image src={area.imgSrc} alt={area.imgAlt} fill sizes="(max-width: 1024px) 100vw, 33vw" style={{ objectFit: "cover" }} />
                    <div style={{ textAlign: "center", padding: "var(--space-4)" }}>
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="var(--color-gray-300)"
                        strokeWidth="1.5"
                        style={{ margin: "0 auto var(--space-2)" }}
                      >
                        <rect x="3" y="3" width="18" height="18" rx="2" />
                        <circle cx="8.5" cy="8.5" r="1.5" />
                        <path d="M21 15l-5-5L5 21" />
                      </svg>
                      <p className="text-tiny">Imagem ilustrativa</p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
