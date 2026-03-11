export default function DesignSystemPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "var(--color-white)" }}>
      {/* Header */}
      <header
        className="sticky top-0 z-20 border-b"
        style={{
          backgroundColor: "var(--color-white)",
          borderColor: "var(--color-gray-200)",
        }}
      >
        <div className="container-global">
          <div className="flex items-center justify-between py-4">
            <h1 className="heading-4" style={{ margin: 0 }}>
              Design System
            </h1>
            <nav className="hidden md:flex gap-6">
              {[
                "Colors",
                "Typography",
                "Spacing",
                "Buttons",
                "Components",
                "Animations",
              ].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-small hover:text-accent"
                  style={{
                    textDecoration: "none",
                    transition: "color var(--transition-base)",
                  }}
                >
                  {item}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </header>

      <main>
        {/* Hero */}
        <section className="section-padding" style={{ backgroundColor: "var(--color-dark)" }}>
          <div className="container-global">
            <p className="text-tiny" style={{ color: "var(--color-gold)", marginBottom: "var(--space-4)" }}>
              Larissa &mdash; Design System
            </p>
            <h2
              className="heading-1"
              style={{ color: "var(--color-white)", maxWidth: "var(--container-lg)" }}
            >
              A sophisticated, elegant design language for a{" "}
              <span style={{ color: "var(--color-gold)" }}>personal brand</span>.
            </h2>
            <p
              className="text-body-large"
              style={{
                color: "var(--color-white-60)",
                marginTop: "var(--space-5)",
                maxWidth: "var(--container-md)",
              }}
            >
              Built from three refined inspirations — combining bold display typography,
              a restrained purple & gold palette, and smooth motion design.
            </p>
          </div>
        </section>

        {/* Colors */}
        <Section id="colors" title="Colors" subtitle="Core palette with primary, accent, neutral, and semantic tones.">
          <div className="grid grid-cols-1 gap-12">
            <ColorGroup
              label="Primary"
              colors={[
                { name: "Primary", var: "--color-primary", hex: "#6B4C9A" },
                { name: "Primary Light", var: "--color-primary-light", hex: "#8B6FBB" },
                { name: "Primary Dark", var: "--color-primary-dark", hex: "#4A3170" },
              ]}
            />
            <ColorGroup
              label="Accent"
              colors={[
                { name: "Gold", var: "--color-gold", hex: "#C9A96E" },
                { name: "Gold Light", var: "--color-gold-light", hex: "#D4BC8E" },
              ]}
            />
            <ColorGroup
              label="Neutrals"
              colors={[
                { name: "Black", var: "--color-black", hex: "#1A1A1A" },
                { name: "Dark", var: "--color-dark", hex: "#0F0F0F" },
                { name: "Dark Surface", var: "--color-dark-surface", hex: "#1C1C1C" },
                { name: "Gray 300", var: "--color-gray-300", hex: "#D4D4D4" },
                { name: "Gray 200", var: "--color-gray-200", hex: "#E5E5E5" },
                { name: "Gray 100", var: "--color-gray-100", hex: "#F5F5F5" },
                { name: "Gray 50", var: "--color-gray-50", hex: "#FAFAFA" },
                { name: "White", var: "--color-white", hex: "#FFFFFF" },
              ]}
            />
            <ColorGroup
              label="Semantic"
              colors={[
                { name: "Success", var: "--color-success", hex: "#4A7C59" },
                { name: "Error", var: "--color-error", hex: "#C0392B" },
              ]}
            />
          </div>
        </Section>

        {/* Typography */}
        <Section
          id="typography"
          title="Typography"
          subtitle="Syne for display & headings. Lato for body text. Fluid scaling with clamp()."
          dark
        >
          <div className="grid gap-10">
            <TypographyRow label="Display" className="heading-display" style={{ fontSize: "clamp(3rem, 6vw, 4.5rem)" }}>
              Syne Display
            </TypographyRow>
            <TypographyRow label="Heading 1" className="heading-1">
              The quick brown fox
            </TypographyRow>
            <TypographyRow label="Heading 2" className="heading-2">
              The quick brown fox jumps
            </TypographyRow>
            <TypographyRow label="Heading 3" className="heading-3">
              The quick brown fox jumps over
            </TypographyRow>
            <TypographyRow label="Heading 4" className="heading-4">
              The quick brown fox jumps over the lazy dog
            </TypographyRow>
            <TypographyRow label="Heading 5" className="heading-5">
              The quick brown fox jumps over the lazy dog
            </TypographyRow>
            <TypographyRow label="Heading 6" className="heading-6">
              The quick brown fox jumps over the lazy dog
            </TypographyRow>
            <div style={{ height: "1px", backgroundColor: "var(--color-dark-surface)" }} />
            <TypographyRow label="Body Large" className="text-body-large">
              We are building a sophisticated design language that blends elegance
              with clarity. Every element serves a purpose.
            </TypographyRow>
            <TypographyRow label="Body" className="text-body">
              We are building a sophisticated design language that blends elegance
              with clarity. Every element serves a purpose. The typography scale
              creates a clear visual hierarchy from display headings down to small
              captions.
            </TypographyRow>
            <TypographyRow label="Small" className="text-small">
              Secondary text for captions, metadata, and supporting information.
            </TypographyRow>
            <TypographyRow label="Tiny" className="text-tiny">
              Labels, badges, and micro-copy
            </TypographyRow>
          </div>
        </Section>

        {/* Spacing */}
        <Section id="spacing" title="Spacing" subtitle="8px-based scale for consistent rhythm throughout the layout.">
          <div className="grid gap-4">
            {[
              { name: "space-1", value: "4px", var: "--space-1" },
              { name: "space-2", value: "8px", var: "--space-2" },
              { name: "space-3", value: "12px", var: "--space-3" },
              { name: "space-4", value: "16px", var: "--space-4" },
              { name: "space-5", value: "24px", var: "--space-5" },
              { name: "space-6", value: "32px", var: "--space-6" },
              { name: "space-8", value: "48px", var: "--space-8" },
              { name: "space-10", value: "64px", var: "--space-10" },
              { name: "space-12", value: "80px", var: "--space-12" },
              { name: "space-16", value: "96px", var: "--space-16" },
              { name: "space-20", value: "128px", var: "--space-20" },
              { name: "space-24", value: "160px", var: "--space-24" },
            ].map((s) => (
              <div key={s.name} className="flex items-center gap-4">
                <span
                  className="text-small shrink-0"
                  style={{ width: 100, textAlign: "right", fontFamily: "monospace" }}
                >
                  {s.name}
                </span>
                <div
                  style={{
                    width: `var(${s.var})`,
                    height: 24,
                    backgroundColor: "var(--color-primary)",
                    borderRadius: "var(--radius-sm)",
                    minWidth: 4,
                  }}
                />
                <span className="text-small" style={{ fontFamily: "monospace" }}>
                  {s.value}
                </span>
              </div>
            ))}
          </div>
        </Section>

        {/* Buttons */}
        <Section
          id="buttons"
          title="Buttons"
          subtitle="Three button variants for different levels of visual hierarchy."
          dark
        >
          <div className="grid gap-12">
            {/* Primary buttons */}
            <div>
              <p className="text-tiny" style={{ color: "var(--color-gold)", marginBottom: "var(--space-5)" }}>
                Primary
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <button className="btn-primary">Get in Touch</button>
                <button className="btn-primary" style={{ fontSize: "var(--font-size-xs)", padding: "var(--space-2) var(--space-4)" }}>
                  Small Primary
                </button>
                <button className="btn-primary" disabled style={{ opacity: 0.4, cursor: "not-allowed" }}>
                  Disabled
                </button>
              </div>
            </div>

            {/* Secondary buttons */}
            <div>
              <p className="text-tiny" style={{ color: "var(--color-gold)", marginBottom: "var(--space-5)" }}>
                Secondary
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <button className="btn-secondary" style={{ borderColor: "var(--color-white-60)", color: "var(--color-white)" }}>
                  Learn More
                </button>
                <button className="btn-secondary" style={{ borderColor: "var(--color-white-60)", color: "var(--color-white)", fontSize: "var(--font-size-xs)", padding: "var(--space-2) var(--space-4)" }}>
                  Small Secondary
                </button>
              </div>
            </div>

            {/* Text buttons */}
            <div>
              <p className="text-tiny" style={{ color: "var(--color-gold)", marginBottom: "var(--space-5)" }}>
                Text
              </p>
              <div className="flex flex-wrap items-center gap-6">
                <button className="btn-text" style={{ color: "var(--color-white)" }}>
                  View all <span aria-hidden="true">&rarr;</span>
                </button>
                <button className="btn-text" style={{ color: "var(--color-gold)" }}>
                  Read more <span aria-hidden="true">&rarr;</span>
                </button>
              </div>
            </div>

            {/* Light background preview */}
            <div
              style={{
                backgroundColor: "var(--color-white)",
                borderRadius: "var(--radius-md)",
                padding: "var(--space-8)",
              }}
            >
              <p className="text-tiny" style={{ marginBottom: "var(--space-5)" }}>
                On Light Background
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <button className="btn-primary">Primary Action</button>
                <button className="btn-secondary">Secondary Action</button>
                <button className="btn-text">
                  Text Link <span aria-hidden="true">&rarr;</span>
                </button>
              </div>
            </div>
          </div>
        </Section>

        {/* Components */}
        <Section id="components" title="Components" subtitle="Reusable patterns extracted from the inspiration templates.">
          <div className="grid gap-16">
            {/* Dividers */}
            <div>
              <p className="text-tiny" style={{ marginBottom: "var(--space-6)" }}>Dividers & Lines</p>
              <div className="grid gap-8">
                <div>
                  <span className="text-small" style={{ display: "block", marginBottom: "var(--space-2)" }}>Standard Divider</span>
                  <div className="divider" />
                </div>
                <div>
                  <span className="text-small" style={{ display: "block", marginBottom: "var(--space-2)" }}>Accent Line</span>
                  <div className="accent-line" />
                </div>
              </div>
            </div>

            {/* Cards */}
            <div>
              <p className="text-tiny" style={{ marginBottom: "var(--space-6)" }}>Cards</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  { title: "Service Card", desc: "A card pattern used for listing services or practice areas with a subtle bottom link." },
                  { title: "Feature Card", desc: "Highlight a key metric or benefit with a large number and supporting description." },
                  { title: "Blog Card", desc: "Article preview with image area, title, excerpt, and metadata row." },
                ].map((card) => (
                  <div
                    key={card.title}
                    style={{
                      border: "1px solid var(--color-gray-200)",
                      padding: "var(--space-6)",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                      gap: "var(--space-5)",
                    }}
                  >
                    <div>
                      <h4 className="heading-4">{card.title}</h4>
                      <p
                        className="text-body"
                        style={{ marginTop: "var(--space-3)" }}
                      >
                        {card.desc}
                      </p>
                    </div>
                    <button className="btn-text" style={{ alignSelf: "flex-start" }}>
                      Learn more <span aria-hidden="true">&rarr;</span>
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Testimonial */}
            <div>
              <p className="text-tiny" style={{ marginBottom: "var(--space-6)" }}>Testimonial</p>
              <div
                style={{
                  maxWidth: "var(--container-md)",
                  padding: "var(--space-8)",
                  backgroundColor: "var(--color-gray-50)",
                }}
              >
                <p
                  className="text-body-large"
                  style={{ fontStyle: "italic", color: "var(--color-black)" }}
                >
                  &ldquo;Working with Larissa was an exceptional experience.
                  Her attention to detail and dedication surpassed all expectations.
                  Highly recommended!&rdquo;
                </p>
                <div className="divider" style={{ margin: "var(--space-5) 0" }} />
                <div>
                  <span
                    className="heading-6"
                    style={{ color: "var(--color-primary)", display: "block" }}
                  >
                    Maria Silva
                  </span>
                  <span className="text-small">Client</span>
                </div>
              </div>
            </div>

            {/* Stats Row */}
            <div>
              <p className="text-tiny" style={{ marginBottom: "var(--space-6)" }}>Stats / Key Figures</p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {[
                  { value: "10+", label: "Years Experience" },
                  { value: "200+", label: "Projects Delivered" },
                  { value: "98%", label: "Client Satisfaction" },
                  { value: "50+", label: "Happy Clients" },
                ].map((stat) => (
                  <div key={stat.label}>
                    <div
                      className="heading-2"
                      style={{ color: "var(--color-primary)" }}
                    >
                      {stat.value}
                    </div>
                    <div className="text-small" style={{ marginTop: "var(--space-1)" }}>
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Pattern */}
            <div>
              <p className="text-tiny" style={{ marginBottom: "var(--space-6)" }}>Navigation Bar</p>
              <div
                style={{
                  border: "1px solid var(--color-gray-200)",
                  padding: "var(--space-4) var(--space-6)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <span className="heading-5" style={{ color: "var(--color-primary)" }}>
                  Larissa
                </span>
                <nav className="hidden md:flex items-center gap-8">
                  {["Home", "About", "Services", "Contact"].map((item) => (
                    <a
                      key={item}
                      href="#"
                      style={{
                        color: "var(--color-black-80)",
                        textDecoration: "none",
                        fontSize: "var(--font-size-sm)",
                        fontWeight: 500,
                        transition: "color var(--transition-base)",
                      }}
                    >
                      {item}
                    </a>
                  ))}
                  <button className="btn-primary" style={{ padding: "var(--space-2) var(--space-5)" }}>
                    Get in Touch
                  </button>
                </nav>
              </div>
            </div>

            {/* Footer Pattern */}
            <div>
              <p className="text-tiny" style={{ marginBottom: "var(--space-6)" }}>Footer</p>
              <div
                style={{
                  backgroundColor: "var(--color-dark)",
                  padding: "var(--space-8) var(--space-6)",
                  borderRadius: "var(--radius-md)",
                }}
              >
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div>
                    <span className="heading-5" style={{ color: "var(--color-white)" }}>
                      Larissa
                    </span>
                    <p className="text-small" style={{ color: "var(--color-white-60)", marginTop: "var(--space-3)" }}>
                      Professional. Dedicated. Exceptional.
                    </p>
                  </div>
                  <div>
                    <span
                      className="text-tiny"
                      style={{ color: "var(--color-white)", display: "block", marginBottom: "var(--space-3)" }}
                    >
                      Links
                    </span>
                    {["Home", "About", "Services", "Contact"].map((link) => (
                      <a
                        key={link}
                        href="#"
                        style={{
                          display: "block",
                          color: "var(--color-white-60)",
                          textDecoration: "none",
                          fontSize: "var(--font-size-sm)",
                          marginBottom: "var(--space-2)",
                          transition: "color var(--transition-base)",
                        }}
                      >
                        {link}
                      </a>
                    ))}
                  </div>
                  <div>
                    <span
                      className="text-tiny"
                      style={{ color: "var(--color-white)", display: "block", marginBottom: "var(--space-3)" }}
                    >
                      Contact
                    </span>
                    <a
                      href="#"
                      style={{
                        display: "block",
                        color: "var(--color-white-60)",
                        textDecoration: "none",
                        fontSize: "var(--font-size-sm)",
                        marginBottom: "var(--space-2)",
                      }}
                    >
                      hello@larissa.com
                    </a>
                  </div>
                </div>
                <div
                  style={{
                    height: 1,
                    backgroundColor: "var(--color-dark-surface)",
                    margin: "var(--space-6) 0 var(--space-4)",
                  }}
                />
                <p className="text-small" style={{ color: "var(--color-white-60)" }}>
                  &copy; 2026 Larissa. All rights reserved.
                </p>
              </div>
            </div>
          </div>
        </Section>

        {/* Animations */}
        <AnimationsSection />

        {/* Shadows & Radius */}
        <Section id="shadows" title="Shadows & Radius" subtitle="Elevation and rounding tokens.">
          <div className="grid gap-12">
            <div>
              <p className="text-tiny" style={{ marginBottom: "var(--space-6)" }}>Shadows</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  { name: "shadow-sm", desc: "Subtle" },
                  { name: "shadow-md", desc: "Medium" },
                  { name: "shadow-lg", desc: "Large" },
                ].map((s) => (
                  <div
                    key={s.name}
                    style={{
                      padding: "var(--space-6)",
                      backgroundColor: "var(--color-white)",
                      boxShadow: `var(--${s.name})`,
                      textAlign: "center" as const,
                    }}
                  >
                    <span className="text-small" style={{ fontFamily: "monospace" }}>{s.name}</span>
                    <br />
                    <span className="text-small">{s.desc}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <p className="text-tiny" style={{ marginBottom: "var(--space-6)" }}>Border Radius</p>
              <div className="flex flex-wrap items-end gap-6">
                {[
                  { name: "none", size: 64 },
                  { name: "sm", size: 64 },
                  { name: "md", size: 64 },
                  { name: "lg", size: 64 },
                  { name: "full", size: 64 },
                ].map((r) => (
                  <div key={r.name} className="flex flex-col items-center gap-2">
                    <div
                      style={{
                        width: r.size,
                        height: r.size,
                        backgroundColor: "var(--color-primary)",
                        borderRadius: `var(--radius-${r.name})`,
                      }}
                    />
                    <span className="text-small" style={{ fontFamily: "monospace" }}>
                      {r.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Section>
      </main>
    </div>
  );
}

/* ---- Sub-components ---- */

function Section({
  id,
  title,
  subtitle,
  dark,
  children,
}: {
  id: string;
  title: string;
  subtitle: string;
  dark?: boolean;
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      className="section-padding"
      style={{
        backgroundColor: dark ? "var(--color-dark)" : "var(--color-white)",
      }}
    >
      <div className="container-global">
        <div style={{ marginBottom: "var(--space-10)" }}>
          <p
            className="text-tiny"
            style={{
              color: dark ? "var(--color-gold)" : "var(--color-primary)",
              marginBottom: "var(--space-3)",
            }}
          >
            {title}
          </p>
          <h2
            className="heading-2"
            style={{ color: dark ? "var(--color-white)" : "var(--color-black)" }}
          >
            {title}
          </h2>
          <p
            className="text-body"
            style={{
              color: dark ? "var(--color-white-60)" : "var(--color-black-60)",
              marginTop: "var(--space-3)",
              maxWidth: "var(--container-md)",
            }}
          >
            {subtitle}
          </p>
        </div>
        {children}
      </div>
    </section>
  );
}

function ColorGroup({
  label,
  colors,
}: {
  label: string;
  colors: { name: string; var: string; hex: string }[];
}) {
  return (
    <div>
      <p className="text-tiny" style={{ marginBottom: "var(--space-4)" }}>{label}</p>
      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
        {colors.map((c) => (
          <div key={c.var}>
            <div
              style={{
                width: "100%",
                aspectRatio: "1",
                backgroundColor: `var(${c.var})`,
                borderRadius: "var(--radius-sm)",
                border: c.hex === "#FFFFFF" ? "1px solid var(--color-gray-200)" : "none",
              }}
            />
            <p
              className="text-small"
              style={{ marginTop: "var(--space-2)", fontWeight: 500 }}
            >
              {c.name}
            </p>
            <p className="text-small" style={{ fontFamily: "monospace" }}>
              {c.hex}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

function TypographyRow({
  label,
  className,
  style,
  children,
}: {
  label: string;
  className: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
}) {
  const isDark = [
    "heading-display",
    "heading-1",
    "heading-2",
    "heading-3",
    "heading-4",
    "heading-5",
    "heading-6",
  ].includes(className);

  return (
    <div>
      <p
        className="text-tiny"
        style={{
          color: "var(--color-gold)",
          marginBottom: "var(--space-2)",
        }}
      >
        {label}
      </p>
      <div
        className={className}
        style={{
          color: isDark ? "var(--color-white)" : "var(--color-white-80)",
          ...style,
        }}
      >
        {children}
      </div>
    </div>
  );
}

function AnimationsSection() {
  return (
    <section
      id="animations"
      className="section-padding"
      style={{ backgroundColor: "var(--color-gray-50)" }}
    >
      <div className="container-global">
        <div style={{ marginBottom: "var(--space-10)" }}>
          <p
            className="text-tiny"
            style={{ color: "var(--color-primary)", marginBottom: "var(--space-3)" }}
          >
            Animations
          </p>
          <h2 className="heading-2">Animations</h2>
          <p
            className="text-body"
            style={{
              color: "var(--color-black-60)",
              marginTop: "var(--space-3)",
              maxWidth: "var(--container-md)",
            }}
          >
            Scroll-triggered entrance animations. Add the <code style={{ fontFamily: "monospace", backgroundColor: "var(--color-gray-200)", padding: "2px 6px", borderRadius: "var(--radius-sm)" }}>visible</code> class
            via Intersection Observer to trigger them.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { name: "fade-up", label: "Fade Up" },
            { name: "fade-in", label: "Fade In" },
            { name: "slide-left", label: "Slide Left" },
            { name: "scale-in", label: "Scale In" },
          ].map((anim) => (
            <AnimationCard key={anim.name} name={anim.name} label={anim.label} />
          ))}
        </div>

        <div style={{ marginTop: "var(--space-10)" }}>
          <p className="text-tiny" style={{ marginBottom: "var(--space-4)" }}>Transitions</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { name: "fast", value: "150ms ease" },
              { name: "base", value: "300ms ease" },
              { name: "slow", value: "500ms ease" },
              { name: "smooth", value: "600ms cubic-bezier" },
            ].map((t) => (
              <div
                key={t.name}
                style={{
                  padding: "var(--space-4)",
                  border: "1px solid var(--color-gray-200)",
                  backgroundColor: "var(--color-white)",
                }}
              >
                <span className="text-small" style={{ fontWeight: 600 }}>
                  {t.name}
                </span>
                <br />
                <span className="text-small" style={{ fontFamily: "monospace" }}>
                  {t.value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function AnimationCard({ name, label }: { name: string; label: string }) {
  return (
    <AnimationCardClient name={name} label={label} />
  );
}

function AnimationCardClient({ name, label }: { name: string; label: string }) {
  return (
    <div
      style={{
        border: "1px solid var(--color-gray-200)",
        backgroundColor: "var(--color-white)",
        padding: "var(--space-6)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "var(--space-4)",
      }}
    >
      <div
        className={`${name} visible`}
        style={{
          width: 80,
          height: 80,
          backgroundColor: "var(--color-primary)",
          borderRadius: "var(--radius-sm)",
        }}
      />
      <div style={{ textAlign: "center" as const }}>
        <span className="text-small" style={{ fontWeight: 600 }}>
          {label}
        </span>
        <br />
        <code
          style={{
            fontFamily: "monospace",
            fontSize: "var(--font-size-xs)",
            color: "var(--color-black-60)",
          }}
        >
          .{name}
        </code>
      </div>
    </div>
  );
}
