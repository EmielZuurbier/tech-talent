import { ImageResponse } from "next/og";

export const alt = "Welkom bij Tech-talent";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#2c2e61",
          padding: "72px",
          color: "white",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", fontSize: 36, fontWeight: 800 }}>
          Tech-talent.nu
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 68,
              fontWeight: 800,
              color: "#6ebd90",
              lineHeight: 1.05,
            }}
          >
            Welkom bij Tech-talent
          </div>
          <div
            style={{
              marginTop: 24,
              fontSize: 30,
              lineHeight: 1.35,
              maxWidth: 860,
            }}
          >
            Dé plek voor de Kop van Noord-Holland en omstreken waar
            uitdagende vacatures en tech-professionals elkaar treffen.
          </div>
        </div>
        <div style={{ display: "flex", gap: 16 }}>
          <div
            style={{
              background: "#029eda",
              color: "#ffffff",
              borderRadius: 16,
              padding: "14px 22px",
              fontSize: 24,
              fontWeight: 800,
            }}
          >
            Voor werkgevers
          </div>
          <div
            style={{
              background: "#6ebd90",
              color: "#ffffff",
              borderRadius: 16,
              padding: "14px 22px",
              fontSize: 24,
              fontWeight: 800,
            }}
          >
            Voor professionals
          </div>
        </div>
      </div>
    ),
    size,
  );
}
