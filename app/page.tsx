import Link from "next/link";

export default function Home() {
  return (
    <main
      style={{
        minHeight: "calc(100vh - 40px - 68px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "var(--color-bg)",
      }}
    >
      <div style={{ textAlign: "center", padding: "2rem" }}>
        <span
          className="badge badge-primary"
          style={{ marginBottom: "1.5rem", display: "inline-block" }}
        >
          M5 Complete — Footer
        </span>

        <h1
          style={{
            fontFamily: "var(--font-display)",
            color: "var(--color-text-heading)",
            marginBottom: "1rem",
          }}
        >
          MedicalOS
        </h1>

        <p
          style={{
            color: "var(--color-text-muted)",
            maxWidth: "40ch",
            margin: "0 auto 2rem",
          }}
        >
          Scroll to the bottom to see the footer. Hero section coming in M6.
        </p>

        <div
          style={{
            display: "flex",
            gap: "12px",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <Link href="/design-system" className="btn btn-primary btn-lg">
            View Design System →
          </Link>
          <Link href="#book-demo" className="btn btn-accent btn-lg">
            Book Free Demo
          </Link>
        </div>
      </div>
    </main>
  );
}
