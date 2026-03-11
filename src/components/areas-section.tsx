import { ScrollReveal } from "@/components/scroll-reveal";

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
    imgAlt:
      "Fotografia documental em close de duas mãos entrelaçadas — uma mão de pessoa idosa segurando a mão de uma pessoa jovem — sobre uma mesa de madeira clara, luz natural suave vinda de janela, formato paisagem 4:3, lente macro 100mm f/2.8, profundidade de campo muito rasa com bokeh cremoso no fundo, tons quentes de bege e dourado, sem saturação artificial, textura real da pele com veias e rugas visíveis, fotografia analógica com filme Kodak Portra 400, grão de filme visível, sem efeitos digitais, sem brilho artificial, qualidade 8K",
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
    imgAlt:
      "Fotografia still life de natureza morta jurídica: caneta tinteiro dourada sobre testamento antigo de papel amarelado com selo de cera, ao lado de óculos de leitura e um livro de capa de couro marrom aberto, tudo sobre mesa de mogno escuro envernizado, iluminação lateral vinda de luminária de mesa com abajur verde clássico, formato paisagem 4:3, lente 35mm f/2.0, profundidade de campo rasa, tons âmbar e marrom escuro, atmosfera de escritório tradicional, fotografia real com câmera Nikon Z8, sem pós-processamento exagerado, texturas naturais do papel e couro visíveis, grão fotográfico sutil, qualidade 8K",
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
    imgAlt:
      "Fotografia editorial de ambiente de trabalho moderno: laptop aberto sobre mesa branca ao lado de xícara de café, caderno de anotações com caneta, e carteira de trabalho brasileira (CTPS) azul parcialmente visível, planta pequena suculenta no canto, luz natural difusa de janela grande ao fundo com cortina branca translúcida, formato paisagem 4:3, lente 28mm f/2.8, composição minimalista com bastante espaço negativo, tons neutros de branco, cinza claro e toques de azul, fotografia de produto real com câmera Fujifilm X-T5, simulação de filme Fuji Pro 400H, sem HDR, sem cores neon, texturas reais visíveis na madeira e no tecido, qualidade 8K",
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
                    {/* Replace with Image from next/image when photos are available:
                        <Image src={area.imgSrc} alt={area.imgAlt} fill sizes="(max-width: 1024px) 100vw, 33vw" style={{ objectFit: "cover" }} />
                    */}
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
