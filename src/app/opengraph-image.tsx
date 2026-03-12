import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt = "Larissa Müller Medeiros — Advogada e Mediadora";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  // Load fonts
  const [syneBold, latoLight] = await Promise.all([
    fetch(
      "https://fonts.gstatic.com/s/syne/v24/8vIS7w4qzmVxsWxjBZRjr0FKM_24vj6k.ttf"
    ).then((res) => res.arrayBuffer()),
    fetch(
      "https://fonts.gstatic.com/s/lato/v25/S6u9w4BMUTPHh7USew8.ttf"
    ).then((res) => res.arrayBuffer()),
  ]);

  // Load hero image as base64
  const heroPath = join(process.cwd(), "public", "hero", "hero.png");
  const heroBuffer = await readFile(heroPath);
  const heroBase64 = `data:image/png;base64,${heroBuffer.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          backgroundColor: "#0F0F0F",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Hero image — right side */}
        <div
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            bottom: 0,
            width: "50%",
            display: "flex",
          }}
        >
          <img
            src={heroBase64}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "top center",
            }}
          />
          {/* Gradient fade left */}
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              bottom: 0,
              width: "60%",
              background:
                "linear-gradient(90deg, #0F0F0F 0%, rgba(15,15,15,0.7) 50%, transparent 100%)",
              display: "flex",
            }}
          />
          {/* Gradient fade bottom */}
          <div
            style={{
              position: "absolute",
              left: 0,
              right: 0,
              bottom: 0,
              height: "40%",
              background:
                "linear-gradient(180deg, transparent 0%, #0F0F0F 100%)",
              display: "flex",
            }}
          />
        </div>

        {/* Gold line at top */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: 3,
            background:
              "linear-gradient(90deg, #C9A96E 0%, #C9A96E 40%, transparent 70%)",
            display: "flex",
          }}
        />

        {/* Text content — left side */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "80px",
            width: "60%",
            position: "relative",
            zIndex: 1,
          }}
        >
          {/* Label */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              marginBottom: 32,
            }}
          >
            <div
              style={{
                width: 32,
                height: 1,
                backgroundColor: "#C9A96E",
                display: "flex",
              }}
            />
            <span
              style={{
                fontFamily: "Lato",
                fontWeight: 300,
                fontSize: 13,
                letterSpacing: "0.3em",
                textTransform: "uppercase" as const,
                color: "#C9A96E",
              }}
            >
              Advogada e Mediadora
            </span>
          </div>

          {/* Logo lockup */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 20,
              marginBottom: 40,
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-end",
              }}
            >
              <span
                style={{
                  fontFamily: "Lato",
                  fontWeight: 300,
                  fontSize: 14,
                  letterSpacing: "0.3em",
                  textTransform: "uppercase" as const,
                  color: "#888",
                }}
              >
                Larissa
              </span>
            </div>
            <div
              style={{
                width: 2,
                height: 56,
                backgroundColor: "#C9A96E",
                display: "flex",
              }}
            />
            <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
              <span
                style={{
                  fontFamily: "Syne",
                  fontWeight: 800,
                  fontSize: 52,
                  color: "#FAFAF7",
                  letterSpacing: "-0.02em",
                  lineHeight: 1.05,
                }}
              >
                MÜLLER
              </span>
              <span
                style={{
                  fontFamily: "Syne",
                  fontWeight: 800,
                  fontSize: 52,
                  color: "#FAFAF7",
                  letterSpacing: "-0.02em",
                  lineHeight: 1.05,
                }}
              >
                MEDEIROS
              </span>
            </div>
          </div>

          {/* Divider */}
          <div
            style={{
              width: 48,
              height: 2,
              background: "linear-gradient(90deg, #C9A96E, #6B4C9A)",
              marginBottom: 24,
              display: "flex",
            }}
          />

          {/* Description */}
          <span
            style={{
              fontFamily: "Lato",
              fontWeight: 300,
              fontSize: 18,
              color: "#E8E4DE",
              lineHeight: 1.6,
              maxWidth: 420,
            }}
          >
            Direito da Família, Sucessório e Mediação. Atendimento
            humanizado em Braço do Norte, SC.
          </span>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "20px 80px",
            borderTop: "1px solid rgba(255,255,255,0.06)",
          }}
        >
          <span
            style={{
              fontFamily: "Lato",
              fontWeight: 300,
              fontSize: 12,
              color: "#555",
              letterSpacing: "0.1em",
            }}
          >
            mullermedeiros.adv.br
          </span>
          <span
            style={{
              fontFamily: "Lato",
              fontWeight: 300,
              fontSize: 12,
              color: "#555",
              letterSpacing: "0.1em",
            }}
          >
            Atendimento online para todo o Brasil
          </span>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: "Syne",
          data: syneBold,
          weight: 800,
          style: "normal",
        },
        {
          name: "Lato",
          data: latoLight,
          weight: 300,
          style: "normal",
        },
      ],
    }
  );
}
