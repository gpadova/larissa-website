import { Navbar } from "@/components/navbar";
import { ScrollReveal } from "@/components/scroll-reveal";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <AreasSection />
        <TrajetoriaSection />
        <DepoimentosSection />
        <CTASection />
        <ContatoSection />
      </main>
      <Footer />
    </>
  );
}

/* ═══════════════════════════════════════════
   HERO
   ═══════════════════════════════════════════ */

function HeroSection() {
  return (
    <section
      id="inicio"
      className="relative flex items-end overflow-hidden"
      style={{
        minHeight: "100vh",
        backgroundColor: "var(--color-dark)",
      }}
    >
      {/* Background grain texture */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          opacity: 0.03,
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
        }}
      />

      {/* Subtle gradient overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(180deg, rgba(15,15,15,0.3) 0%, rgba(15,15,15,0.1) 40%, rgba(15,15,15,0.7) 100%)",
        }}
      />

      {/* Gold decorative line */}
      <div
        className="absolute hidden lg:block"
        style={{
          top: 0,
          right: "8%",
          width: 1,
          height: "40%",
          background:
            "linear-gradient(180deg, transparent 0%, var(--color-gold) 40%, var(--color-gold) 60%, transparent 100%)",
          opacity: 0.25,
        }}
      />

      <div className="container-global relative" style={{ zIndex: 1 }}>
        <div
          className="grid grid-cols-1 lg:grid-cols-2 items-end"
          style={{ gap: "var(--space-8)", paddingBottom: "var(--space-12)" }}
        >
          {/* Left: Text content */}
          <div style={{ paddingTop: "calc(80px + var(--space-16))" }}>
            <ScrollReveal animation="fade-up">
              <p className="text-tiny" style={{ color: "var(--color-gold)", marginBottom: "var(--space-5)" }}>
                Advocacia &mdash; Braço do Norte, SC
              </p>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={100}>
              <h1
                className="heading-1"
                style={{ color: "var(--color-white)", marginBottom: "var(--space-6)" }}
              >
                Larissa
                <br />
                Muller
                <br />
                <span style={{ color: "var(--color-gold)" }}>Medeiros</span>
              </h1>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={200}>
              <div
                style={{
                  width: 60,
                  height: 3,
                  background: "linear-gradient(90deg, var(--color-gold), var(--color-primary))",
                  marginBottom: "var(--space-5)",
                }}
              />
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={300}>
              <p
                className="text-body-large"
                style={{
                  color: "var(--color-white-60)",
                  maxWidth: 480,
                  marginBottom: "var(--space-8)",
                }}
              >
                Atuação dedicada em Direito da Família, Sucessório e Trabalhista.
                Comprometida em oferecer soluções jurídicas seguras, humanas e
                eficientes para cada cliente.
              </p>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={400}>
              <div className="flex flex-wrap items-center" style={{ gap: "var(--space-4)" }}>
                <a href="#contato" className="btn-primary" style={{ textDecoration: "none" }}>
                  Agende uma Consulta
                </a>
                <a
                  href="#areas"
                  className="btn-text"
                  style={{ color: "var(--color-white-80)", textDecoration: "none" }}
                >
                  Conheça minhas áreas <span aria-hidden="true">&rarr;</span>
                </a>
              </div>
            </ScrollReveal>
          </div>

          {/* Right: Hero portrait placeholder */}
          <ScrollReveal animation="scale-in" delay={300}>
            <div
              className="relative hidden lg:block"
              style={{ paddingTop: "calc(80px + var(--space-10))" }}
            >
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  aspectRatio: "3/4",
                  maxWidth: 520,
                  marginLeft: "auto",
                }}
              >
                {/* Gold frame accent */}
                <div
                  className="absolute"
                  style={{
                    top: -12,
                    right: -12,
                    width: "60%",
                    height: "40%",
                    border: "1px solid var(--color-gold)",
                    opacity: 0.3,
                  }}
                />
                {/* Image placeholder */}
                <div
                  style={{
                    width: "100%",
                    height: "100%",
                    backgroundColor: "var(--color-dark-surface)",
                    border: "1px solid rgba(255,255,255,0.06)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  <img
                    src=""
                    alt="REFERÊNCIA FACIAL OBRIGATÓRIA: usar a foto enviada como referência absoluta. Preservar com máxima fidelidade: formato exato do rosto, formato do nariz, formato dos olhos, formato da boca, linha do maxilar, sobrancelhas, cor e textura do cabelo, tom de pele, todas as proporções faciais. NÃO alterar, embelezar ou estilizar nenhum traço facial. A pessoa gerada DEVE ser visualmente idêntica e reconhecível como a mesma pessoa da foto. Cena: fotografia editorial de retrato corporativo, essa pessoa vestindo blazer escuro sobre blusa de seda creme, expressão confiante com sorriso sutil, enquadramento de cintura para cima em formato retrato 3:4, fundo escuro neutro desfocado, iluminação de estúdio com softbox lateral criando sombra suave no rosto, lente 85mm f/1.8, profundidade de campo rasa, câmera Canon EOS R5, pele natural com textura real visível, tom de pele quente, grão fotográfico sutil, qualidade 8K, estilo revista Vogue Brasil"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      display: "none",
                    }}
                  />
                  <div style={{ textAlign: "center", padding: "var(--space-6)" }}>
                    <div
                      style={{
                        width: 48,
                        height: 48,
                        border: "1px solid var(--color-gold)",
                        borderRadius: "var(--radius-full)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        margin: "0 auto var(--space-3)",
                        opacity: 0.4,
                      }}
                    >
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-gold)" strokeWidth="1.5">
                        <rect x="3" y="3" width="18" height="18" rx="2" />
                        <circle cx="8.5" cy="8.5" r="1.5" />
                        <path d="M21 15l-5-5L5 21" />
                      </svg>
                    </div>
                    <p className="text-tiny" style={{ color: "var(--color-white-60)" }}>
                      Foto de retrato
                    </p>
                  </div>
                </div>
                {/* Purple accent bottom */}
                <div
                  className="absolute"
                  style={{
                    bottom: -8,
                    left: -8,
                    width: 80,
                    height: 80,
                    backgroundColor: "var(--color-primary)",
                    opacity: 0.15,
                  }}
                />
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Scroll indicator */}
        <ScrollReveal animation="fade-in" delay={800}>
          <div
            className="hidden lg:flex items-center"
            style={{
              gap: "var(--space-3)",
              paddingBottom: "var(--space-8)",
            }}
          >
            <div
              style={{
                width: 1,
                height: 40,
                backgroundColor: "var(--color-gold)",
                opacity: 0.4,
              }}
            />
            <span className="text-tiny" style={{ color: "var(--color-white-60)" }}>
              Role para baixo
            </span>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════
   SOBRE
   ═══════════════════════════════════════════ */

function AboutSection() {
  return (
    <section id="sobre" style={{ backgroundColor: "var(--color-white)" }}>
      <div className="container-global section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2" style={{ gap: "var(--space-10)" }}>
          {/* Left: Image placeholder */}
          <ScrollReveal animation="fade-up">
            <div
              style={{
                position: "relative",
                width: "100%",
                aspectRatio: "4/5",
                maxWidth: 500,
              }}
            >
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  backgroundColor: "var(--color-gray-100)",
                  border: "1px solid var(--color-gray-200)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <img
                  src=""
                  alt="REFERÊNCIA FACIAL OBRIGATÓRIA: usar a foto enviada como referência absoluta. Preservar com máxima fidelidade: formato exato do rosto, formato do nariz, formato dos olhos, formato da boca, linha do maxilar, sobrancelhas, cor e textura do cabelo, tom de pele, todas as proporções faciais. NÃO alterar, embelezar ou estilizar nenhum traço facial. A pessoa gerada DEVE ser visualmente idêntica e reconhecível como a mesma pessoa da foto. Cena: fotografia lifestyle profissional, essa pessoa sentada em mesa de escritório de madeira escura com livros de Direito empilhados ao fundo, vestindo camisa branca social com mangas dobradas, expressão pensativa olhando para documentos na mesa, luz natural dourada entrando por janela lateral à esquerda, enquadramento formato retrato 4:5, lente 50mm f/2.0, profundidade de campo média com fundo levemente desfocado, tons quentes terrosos, ambiente real de escritório de advocacia com estante de livros jurídicos, câmera Sony A7IV, pele natural sem retoque excessivo, grão fotográfico sutil, qualidade 8K"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    display: "none",
                  }}
                />
                <div style={{ textAlign: "center", padding: "var(--space-6)" }}>
                  <div
                    style={{
                      width: 48,
                      height: 48,
                      border: "1px solid var(--color-gray-300)",
                      borderRadius: "var(--radius-full)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      margin: "0 auto var(--space-3)",
                    }}
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-gray-300)" strokeWidth="1.5">
                      <rect x="3" y="3" width="18" height="18" rx="2" />
                      <circle cx="8.5" cy="8.5" r="1.5" />
                      <path d="M21 15l-5-5L5 21" />
                    </svg>
                  </div>
                  <p className="text-tiny">Foto profissional</p>
                </div>
              </div>
              {/* Decorative element */}
              <div
                className="absolute hidden lg:block"
                style={{
                  bottom: -16,
                  right: -16,
                  width: 120,
                  height: 120,
                  border: "1px solid var(--color-primary)",
                  opacity: 0.15,
                  zIndex: -1,
                }}
              />
            </div>
          </ScrollReveal>

          {/* Right: Content */}
          <div className="flex flex-col justify-center">
            <ScrollReveal animation="fade-up">
              <p className="text-tiny" style={{ color: "var(--color-primary)", marginBottom: "var(--space-3)" }}>
                Sobre Mim
              </p>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={100}>
              <h2 className="heading-2" style={{ marginBottom: "var(--space-5)" }}>
                Advocacia com{" "}
                <span style={{ color: "var(--color-primary)" }}>dedicação</span> e
                sensibilidade
              </h2>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={200}>
              <p className="text-body" style={{ marginBottom: "var(--space-4)" }}>
                Sou Larissa Muller Medeiros, advogada formada pela Universidade do
                Sul de Santa Catarina (UNISUL), com atuação em Braço do Norte, SC.
                Desde o início da minha carreira, busco aliar conhecimento técnico a
                um atendimento verdadeiramente humano.
              </p>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={300}>
              <p className="text-body" style={{ marginBottom: "var(--space-6)" }}>
                Minha experiência inclui atuação no Tribunal de Justiça de Santa
                Catarina e em escritórios de advocacia renomados da região, o que me
                proporcionou uma visão ampla e prática do Direito. Hoje, dedico
                minha atuação às áreas de Direito da Família, Direito Sucessório e
                Direito Trabalhista, sempre priorizando a segurança jurídica e o
                bem-estar dos meus clientes.
              </p>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={400}>
              <div
                style={{
                  width: "100%",
                  height: 1,
                  backgroundColor: "var(--color-gray-200)",
                  marginBottom: "var(--space-6)",
                }}
              />
              <div className="grid grid-cols-3" style={{ gap: "var(--space-4)" }}>
                {[
                  { value: "3+", label: "Anos de experiência" },
                  { value: "UNISUL", label: "Bacharelado em Direito" },
                  { value: "OAB/SC", label: "Inscrita na Ordem" },
                ].map((stat) => (
                  <div key={stat.label}>
                    <div
                      style={{
                        fontFamily: "var(--font-display)",
                        fontSize: "var(--font-size-2xl)",
                        fontWeight: 700,
                        color: "var(--color-primary)",
                        lineHeight: "var(--leading-tight)",
                      }}
                    >
                      {stat.value}
                    </div>
                    <p className="text-small" style={{ marginTop: "var(--space-1)" }}>
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════
   ÁREAS DE ATUAÇÃO
   ═══════════════════════════════════════════ */

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
    title: "Direito Trabalhista",
    description:
      "Defesa dos direitos de trabalhadores e empregadores em questões como rescisão contratual, verbas trabalhistas, assédio moral, horas extras e demais demandas da relação de emprego.",
    items: [
      "Rescisão e verbas trabalhistas",
      "Assédio moral e sexual",
      "Horas extras e adicional noturno",
      "Reconhecimento de vínculo",
    ],
    imgAlt:
      "Fotografia editorial de ambiente de trabalho moderno: laptop aberto sobre mesa branca ao lado de xícara de café, caderno de anotações com caneta, e carteira de trabalho brasileira (CTPS) azul parcialmente visível, planta pequena suculenta no canto, luz natural difusa de janela grande ao fundo com cortina branca translúcida, formato paisagem 4:3, lente 28mm f/2.8, composição minimalista com bastante espaço negativo, tons neutros de branco, cinza claro e toques de azul, fotografia de produto real com câmera Fujifilm X-T5, simulação de filme Fuji Pro 400H, sem HDR, sem cores neon, texturas reais visíveis na madeira e no tecido, qualidade 8K",
  },
];

function AreasSection() {
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
                    }}
                  >
                    <img
                      src=""
                      alt={area.imgAlt}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        display: "none",
                      }}
                    />
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

/* ═══════════════════════════════════════════
   TRAJETÓRIA
   ═══════════════════════════════════════════ */

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

function TrajetoriaSection() {
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

/* ═══════════════════════════════════════════
   DEPOIMENTOS
   ═══════════════════════════════════════════ */

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

function DepoimentosSection() {
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

/* ═══════════════════════════════════════════
   CTA (Call to Action)
   ═══════════════════════════════════════════ */

function CTASection() {
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

/* ═══════════════════════════════════════════
   CONTATO
   ═══════════════════════════════════════════ */

function ContatoSection() {
  return (
    <section id="contato" style={{ backgroundColor: "var(--color-gray-50)" }}>
      <div className="container-global section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2" style={{ gap: "var(--space-12)" }}>
          {/* Left: Info */}
          <div>
            <ScrollReveal animation="fade-up">
              <p className="text-tiny" style={{ color: "var(--color-primary)", marginBottom: "var(--space-3)" }}>
                Contato
              </p>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={100}>
              <h2 className="heading-2" style={{ marginBottom: "var(--space-5)" }}>
                Vamos conversar sobre o seu{" "}
                <span style={{ color: "var(--color-primary)" }}>caso</span>
              </h2>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={200}>
              <p className="text-body" style={{ marginBottom: "var(--space-8)", maxWidth: 480 }}>
                Entre em contato para agendar uma consulta. Atendo
                presencialmente em Braço do Norte, SC, e também de forma
                remota para sua comodidade.
              </p>
            </ScrollReveal>

            <div className="grid gap-6">
              {[
                {
                  label: "Localização",
                  value: "Braço do Norte, Santa Catarina",
                  icon: (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  ),
                },
                {
                  label: "E-mail",
                  value: "contato@larissamedeiros.adv.br",
                  icon: (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <rect width="20" height="16" x="2" y="4" rx="2" />
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                    </svg>
                  ),
                },
                {
                  label: "Telefone / WhatsApp",
                  value: "(48) 99999-9999",
                  icon: (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                  ),
                },
              ].map((info, i) => (
                <ScrollReveal key={info.label} animation="fade-up" delay={300 + i * 80}>
                  <div className="flex items-start" style={{ gap: "var(--space-4)" }}>
                    <div
                      style={{
                        width: 44,
                        height: 44,
                        borderRadius: "var(--radius-full)",
                        backgroundColor: "var(--color-white)",
                        border: "1px solid var(--color-gray-200)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "var(--color-primary)",
                        flexShrink: 0,
                      }}
                    >
                      {info.icon}
                    </div>
                    <div>
                      <span className="text-small" style={{ display: "block" }}>
                        {info.label}
                      </span>
                      <span
                        style={{
                          fontSize: "var(--font-size-base)",
                          fontWeight: 500,
                          color: "var(--color-black)",
                        }}
                      >
                        {info.value}
                      </span>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>

          {/* Right: Form */}
          <ScrollReveal animation="fade-up" delay={200}>
            <div
              style={{
                backgroundColor: "var(--color-white)",
                padding: "var(--space-8)",
                border: "1px solid var(--color-gray-200)",
              }}
            >
              <h3 className="heading-4" style={{ marginBottom: "var(--space-6)" }}>
                Envie uma mensagem
              </h3>
              <form className="grid gap-5">
                {[
                  { id: "name", label: "Nome completo", type: "text", placeholder: "Seu nome" },
                  { id: "email", label: "E-mail", type: "email", placeholder: "seu@email.com" },
                  { id: "phone", label: "Telefone / WhatsApp", type: "tel", placeholder: "(48) 99999-9999" },
                ].map((field) => (
                  <div key={field.id}>
                    <label
                      htmlFor={field.id}
                      className="text-small"
                      style={{ display: "block", marginBottom: "var(--space-2)", fontWeight: 500 }}
                    >
                      {field.label}
                    </label>
                    <input
                      type={field.type}
                      id={field.id}
                      placeholder={field.placeholder}
                      style={{
                        width: "100%",
                        padding: "var(--space-3) var(--space-4)",
                        border: "1px solid var(--color-gray-200)",
                        backgroundColor: "var(--color-gray-50)",
                        fontSize: "var(--font-size-base)",
                        fontFamily: "var(--font-body)",
                        color: "var(--color-black)",
                        outline: "none",
                        transition: "border-color var(--transition-base)",
                      }}
                    />
                  </div>
                ))}
                <div>
                  <label
                    htmlFor="subject"
                    className="text-small"
                    style={{ display: "block", marginBottom: "var(--space-2)", fontWeight: 500 }}
                  >
                    Assunto
                  </label>
                  <select
                    id="subject"
                    style={{
                      width: "100%",
                      padding: "var(--space-3) var(--space-4)",
                      border: "1px solid var(--color-gray-200)",
                      backgroundColor: "var(--color-gray-50)",
                      fontSize: "var(--font-size-base)",
                      fontFamily: "var(--font-body)",
                      color: "var(--color-black)",
                      outline: "none",
                      cursor: "pointer",
                    }}
                  >
                    <option value="">Selecione uma área</option>
                    <option value="familia">Direito da Família</option>
                    <option value="sucessorio">Direito Sucessório</option>
                    <option value="trabalhista">Direito Trabalhista</option>
                    <option value="outro">Outro assunto</option>
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="text-small"
                    style={{ display: "block", marginBottom: "var(--space-2)", fontWeight: 500 }}
                  >
                    Mensagem
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    placeholder="Descreva brevemente o seu caso..."
                    style={{
                      width: "100%",
                      padding: "var(--space-3) var(--space-4)",
                      border: "1px solid var(--color-gray-200)",
                      backgroundColor: "var(--color-gray-50)",
                      fontSize: "var(--font-size-base)",
                      fontFamily: "var(--font-body)",
                      color: "var(--color-black)",
                      outline: "none",
                      resize: "vertical",
                      transition: "border-color var(--transition-base)",
                    }}
                  />
                </div>
                <button
                  type="submit"
                  className="btn-primary"
                  style={{ width: "100%", marginTop: "var(--space-2)" }}
                >
                  Enviar Mensagem
                </button>
                <p className="text-small" style={{ textAlign: "center" }}>
                  Responderei em até 24 horas úteis.
                </p>
              </form>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════
   FOOTER
   ═══════════════════════════════════════════ */

function Footer() {
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
