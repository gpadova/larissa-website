import { ScrollReveal } from "@/components/scroll-reveal";
import Image from "next/image";

export function AboutSection() {
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
                    <Image src="/sobre/sobre.png" alt="Larissa Müller Medeiros em seu escritório" fill sizes="(max-width: 1024px) 100vw, 500px" style={{ objectFit: "cover" }} />
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
                Sou Larissa Müller Medeiros, advogada formada pela Universidade do
                Sul de Santa Catarina (UNISUL), especializada em Direito das Famílias e Sucessões pela FMP/RS. Com atendimento online para todo o Brasil.
                Desde o início da minha carreira, busco aliar conhecimento técnico a
                um atendimento verdadeiramente humano.
              </p>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={300}>
              <p className="text-body" style={{ marginBottom: "var(--space-6)" }}>
                Minha experiência inclui atuação no Tribunal de Justiça de Santa
                Catarina e em escritórios de advocacia renomados, o que me
                proporcionou uma visão ampla e prática do Direito. Hoje, dedico
                minha atuação às áreas de Direito da Família, Direito Sucessório,
                sempre priorizando a segurança jurídica e o
                bem-estar dos meus clientes, com atendimentos humanizados. 
                Atualmente estou cursando o curso de Mediação e Conciliação pela ESMESC.
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
