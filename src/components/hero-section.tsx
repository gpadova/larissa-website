import Image from "next/image";
import { ScrollReveal } from "@/components/scroll-reveal";

export function HeroSection() {
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
                <div
                  style={{
                    width: "100%",
                    height: "100%",
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  <Image
                    src="/hero/hero.png"
                    alt="Retrato profissional de Larissa Muller Medeiros, advogada"
                    fill
                    sizes="(max-width: 1024px) 100vw, 520px"
                    priority
                    style={{ objectFit: "cover" }}
                  />
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
