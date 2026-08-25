import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt     = "MedicalOS — AI-Powered Practice Management";
export const size    = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#FDF8F5",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "Georgia, serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Background gradient blobs */}
        <div style={{
          position: "absolute",
          top: "-10%",
          left: "-5%",
          width: "50%",
          height: "70%",
          background: "radial-gradient(circle, rgba(232,97,26,0.08) 0%, transparent 70%)",
          borderRadius: "50%",
          display: "flex",
        }} />
        <div style={{
          position: "absolute",
          bottom: "-10%",
          right: "-5%",
          width: "50%",
          height: "70%",
          background: "radial-gradient(circle, rgba(107,189,212,0.08) 0%, transparent 70%)",
          borderRadius: "50%",
          display: "flex",
        }} />

        {/* Logo */}
        <div style={{
          fontSize: 52,
          fontWeight: 700,
          color: "#3D5A9E",
          marginBottom: 24,
          display: "flex",
          letterSpacing: "-1px",
        }}>
          Medical<span style={{ color: "#E8916A" }}>OS</span>
        </div>

        {/* Headline */}
        <div style={{
          fontSize: 56,
          fontWeight: 700,
          color: "#1A2040",
          textAlign: "center",
          lineHeight: 1.15,
          letterSpacing: "-2px",
          maxWidth: 900,
          marginBottom: 20,
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
        }}>
          AI-Powered Practice Management
        </div>

        {/* Subtext */}
        <div style={{
          fontSize: 26,
          color: "#4A5270",
          textAlign: "center",
          maxWidth: 780,
          lineHeight: 1.5,
          fontFamily: "system-ui, sans-serif",
          fontWeight: 400,
          marginBottom: 48,
          display: "flex",
        }}>
          Automate clinical notes, scheduling, and billing. Built for modern practices.
        </div>

        {/* Stats row */}
        <div style={{
          display: "flex",
          gap: 48,
          backgroundColor: "white",
          padding: "20px 40px",
          borderRadius: 16,
          border: "1px solid #E0D8D0",
        }}>
          {[
            { value: "5,000+", label: "Practices" },
            { value: "2.4 hrs", label: "Saved daily" },
            { value: "30 days", label: "Free trial" },
          ].map((stat) => (
            <div key={stat.label} style={{ textAlign: "center", display: "flex", flexDirection: "column", gap: 4 }}>
              <div style={{ fontSize: 28, fontWeight: 700, color: "#3D5A9E", fontFamily: "system-ui", display: "flex" }}>
                {stat.value}
              </div>
              <div style={{ fontSize: 14, color: "#7A84A8", fontFamily: "system-ui", display: "flex" }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size }
  );
}
