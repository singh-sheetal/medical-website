import Link from "next/link";

export default function Home() {
  return (
    <main style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "var(--color-bg)" }}>
      <div style={{ textAlign: "center", padding: "2rem" }}>

        <span className="badge badge-secondary" style={{ marginBottom: "1.5rem", display: "inline-block" }}>
          M2 Complete — Design tokens live
        </span>

        <h1 style={{ fontFamily: "var(--font-display)", color: "var(--color-text-heading)", marginBottom: "1rem" }}>
          MedicalOS
        </h1>

        <p style={{ color: "var(--color-text-muted)", marginBottom: "2rem", maxWidth: "40ch", margin: "0 auto 2rem" }}>
          Next.js 14 · TypeScript · Tailwind CSS · Lora + Inter · Framer Motion
        </p>

        <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}>
          <Link href="/design-system" className="btn btn-primary btn-lg">
            View Design System →
          </Link>
          <Link href="/design-system" className="btn btn-ghost btn-lg">
            M3: Components next
          </Link>
        </div>

      </div>
    </main>
  );
}
