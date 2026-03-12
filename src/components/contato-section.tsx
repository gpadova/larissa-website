"use client";

import { useState } from "react";
import { ScrollReveal } from "@/components/scroll-reveal";
import { VanishInput } from "@/components/ui/vanish-input";
import { InputMask } from "@react-input/mask";
import { CONTACT } from "@/lib/constants";

const WEB3FORMS_KEY = "cd8443f6-09da-4403-872b-6a5e237b3a1d";

export function ContatoSection() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const formData = new FormData(e.currentTarget);
    const subject = formData.get("subject") || "Geral";
    formData.set("subject", `Novo contato do site — ${subject}`);
    formData.append("from_name", "Site Müller Medeiros");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();
      if (data.success) {
        setStatus("success");
        (e.target as HTMLFormElement).reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

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
                clientes de todo o Brasil de forma online, com a mesma
                dedicação e qualidade de um atendimento presencial.
              </p>
            </ScrollReveal>

            <div className="grid gap-6">
              {[
                {
                  label: "Atendimento",
                  value: CONTACT.location,
                  icon: (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10" />
                      <path d="M2 12h20" />
                      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                    </svg>
                  ),
                },
                {
                  label: "E-mail",
                  value: CONTACT.email,
                  href: `mailto:${CONTACT.email}`,
                  icon: (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <rect width="20" height="16" x="2" y="4" rx="2" />
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                    </svg>
                  ),
                },
                {
                  label: "Telefone / WhatsApp",
                  value: CONTACT.whatsapp.display,
                  href: CONTACT.whatsapp.url,
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
                      {"href" in info && info.href ? (
                        <a
                          href={info.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{
                            fontSize: "var(--font-size-base)",
                            fontWeight: 500,
                            color: "var(--color-black)",
                            textDecoration: "none",
                            transition: "color var(--transition-base)",
                          }}
                        >
                          {info.value}
                        </a>
                      ) : (
                        <span
                          style={{
                            fontSize: "var(--font-size-base)",
                            fontWeight: 500,
                            color: "var(--color-black)",
                          }}
                        >
                          {info.value}
                        </span>
                      )}
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

              {status === "success" ? (
                <div
                  style={{
                    padding: "var(--space-8) var(--space-6)",
                    textAlign: "center",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "var(--space-4)",
                  }}
                >
                  <div
                    style={{
                      width: 56,
                      height: 56,
                      borderRadius: "var(--radius-full)",
                      backgroundColor: "rgba(107, 76, 154, 0.1)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "var(--color-primary)",
                    }}
                  >
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                  </div>
                  <p className="heading-4">Mensagem enviada!</p>
                  <p className="text-body" style={{ maxWidth: 320 }}>
                    Obrigada pelo contato. Responderei em até 24 horas úteis.
                  </p>
                  <button
                    type="button"
                    className="btn-primary"
                    style={{ marginTop: "var(--space-2)" }}
                    onClick={() => setStatus("idle")}
                  >
                    Enviar outra mensagem
                  </button>
                </div>
              ) : (
                <form className="grid gap-5" onSubmit={handleSubmit}>
                  <input type="hidden" name="access_key" value={WEB3FORMS_KEY} />
                  <div>
                    <label
                      htmlFor="name"
                      className="text-small"
                      style={{ display: "block", marginBottom: "var(--space-2)", fontWeight: 500 }}
                    >
                      Nome completo
                    </label>
                    <VanishInput
                      id="name"
                      type="text"
                      name="name"
                      required
                      placeholders={[
                        "Seu nome completo",
                        "Como podemos te chamar?",
                        "Digite seu nome...",
                      ]}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="text-small"
                      style={{ display: "block", marginBottom: "var(--space-2)", fontWeight: 500 }}
                    >
                      E-mail
                    </label>
                    <VanishInput
                      id="email"
                      type="email"
                      name="email"
                      required
                      placeholders={[
                        "seu@email.com",
                        "Para retornarmos o contato",
                        "Seu melhor e-mail...",
                      ]}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="text-small"
                      style={{ display: "block", marginBottom: "var(--space-2)", fontWeight: 500 }}
                    >
                      Telefone / WhatsApp
                    </label>
                    <InputMask
                      id="phone"
                      type="tel"
                      name="phone"
                      mask="(__) _____-____"
                      replacement={{ _: /\d/ }}
                      showMask
                      placeholder="(48) 99999-9999"
                      style={{
                        width: "100%",
                        padding: "var(--space-3) var(--space-4)",
                        border: "1px solid var(--color-gray-200)",
                        backgroundColor: "var(--color-gray-50)",
                        fontSize: "var(--font-size-base)",
                        fontFamily: "var(--font-body)",
                        color: "var(--color-black)",
                        outline: "none",
                        transition: "border-color 0.3s ease, box-shadow 0.3s ease",
                      }}
                    />
                  </div>
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
                      name="subject"
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
                        transition: "border-color 0.3s ease, box-shadow 0.3s ease",
                      }}
                    >
                      <option value="">Selecione uma área</option>
                      <option value="Direito da Família">Direito da Família</option>
                      <option value="Direito Sucessório">Direito Sucessório</option>
                      <option value="Mediação e Conciliação">Mediação e Conciliação</option>
                      <option value="Outro assunto">Outro assunto</option>
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
                      name="message"
                      required
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
                        transition: "border-color 0.3s ease, box-shadow 0.3s ease",
                      }}
                    />
                  </div>
                  <button
                    type="submit"
                    className="btn-primary"
                    disabled={status === "sending"}
                    style={{
                      width: "100%",
                      marginTop: "var(--space-2)",
                      opacity: status === "sending" ? 0.7 : 1,
                      cursor: status === "sending" ? "not-allowed" : "pointer",
                    }}
                  >
                    {status === "sending" ? "Enviando..." : "Enviar Mensagem"}
                  </button>
                  {status === "error" && (
                    <p className="text-small" style={{ textAlign: "center", color: "#c44" }}>
                      Erro ao enviar. Tente novamente ou entre em contato pelo WhatsApp.
                    </p>
                  )}
                  <p className="text-small" style={{ textAlign: "center" }}>
                    Responderei em até 24 horas úteis.
                  </p>
                </form>
              )}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
