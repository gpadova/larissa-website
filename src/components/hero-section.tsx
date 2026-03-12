"use client";

import Image from "next/image";
import { ScrollReveal } from "@/components/scroll-reveal";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { motion } from "framer-motion";
import { Spotlight } from "@/components/ui/spotlight";

export function HeroSection() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden"
      style={{
        minHeight: "100vh",
        backgroundColor: "var(--color-dark)",
        display: "flex",
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

      {/* Spotlight glow on text area */}
      <Spotlight
        fill="#C9A96E"
        size={1000}
        className="-top-40 -left-20 hidden lg:block"
      />

      {/* Image — bleeds to right edge on desktop */}
      <div
        className="absolute hidden lg:block"
        style={{
          top: 0,
          right: 0,
          bottom: 0,
          width: "50%",
        }}
      >
        <Image
          src="/hero/hero.png"
          alt="Retrato profissional de Larissa Müller Medeiros, advogada"
          fill
          sizes="50vw"
          priority
          style={{ objectFit: "cover", objectPosition: "top center" }}
        />
        {/* Gradient fade into dark background */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, var(--color-dark) 0%, rgba(15,15,15,0.4) 30%, transparent 60%)",
          }}
        />
        {/* Bottom fade */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, transparent 60%, var(--color-dark) 100%)",
          }}
        />
      </div>

      {/* Content */}
      <div
        className="container-global relative flex flex-col justify-center"
        style={{ zIndex: 1, minHeight: "100vh" }}
      >
        <div style={{ maxWidth: 560, paddingTop: 80, paddingBottom: "var(--space-16)" }}>
          <ScrollReveal animation="fade-up">
            <p
              className="text-tiny"
              style={{ color: "var(--color-gold)", marginBottom: "var(--space-5)" }}
            >
              Advocacia &mdash; Atendimento em todo o Brasil
            </p>
          </ScrollReveal>

          <motion.h1
            className="heading-1"
            style={{ color: "var(--color-white)", marginBottom: "var(--space-6)" }}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            Larissa
            <br />
            <span style={{ color: "var(--color-gold)" }}>Müller</span>
            <br />
            Medeiros
          </motion.h1>

          <motion.div
            initial={{ width: 0 }}
            animate={{ width: 60 }}
            transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
            style={{
              height: 3,
              background: "linear-gradient(90deg, var(--color-gold), var(--color-primary))",
              marginBottom: "var(--space-5)",
            }}
          />

          <TextGenerateEffect
            words="Atuação dedicada em Direito das Famílias, Direito Sucessório, Judicialmente e Extrajudicialmente. Comprometida em oferecer soluções jurídicas seguras, humanas e eficientes para cada cliente."
            className="text-body-large"
            style={{ color: "var(--color-white)", maxWidth: 480 }}
            duration={0.4}
            filter={false}
          />

          <motion.div
            className="flex flex-wrap items-center"
            style={{ gap: "var(--space-4)", marginTop: "var(--space-8)" }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.4, ease: "easeOut" }}
          >
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
          </motion.div>
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

      {/* Mobile: Image as subtle background */}
      <div
        className="lg:hidden absolute inset-0"
        style={{ opacity: 0.15 }}
      >
        <Image
          src="/hero/hero.png"
          alt=""
          fill
          sizes="100vw"
          style={{ objectFit: "cover", objectPosition: "top center" }}
        />
      </div>
    </section>
  );
}
