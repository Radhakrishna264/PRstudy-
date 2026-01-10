"use client";

export default function HomePage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background:
          "radial-gradient(circle at top, #0f1b3d 0%, #05070f 55%, #03050a 100%)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
        color: "#ffffff",
        fontFamily: "Inter, system-ui, sans-serif",
      }}
    >
      {/* HEADER */}
      <header
        style={{
          width: "100%",
          padding: "16px 20px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          backdropFilter: "blur(10px)",
        }}
      >
        <img
          src="/prstudy-logo-2026.png"
          alt="PRstudy Logo"
          style={{
            width: 36,
            height: 36,
            borderRadius: 10,
            boxShadow: "0 0 18px rgba(168,85,247,0.55)",
          }}
        />

        <button
          style={{
            background: "transparent",
            color: "#c7d2fe",
            border: "1px solid rgba(99,102,241,0.35)",
            padding: "6px 14px",
            borderRadius: 999,
            cursor: "pointer",
          }}
        >
          Login
        </button>
      </header>

      {/* HERO SECTION */}
      <section
        style={{
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          padding: "0 20px",
        }}
      >
        <img
          src="/prstudy-logo-2026.png"
          alt="PRstudy Main Logo"
          style={{
            width: 88,
            height: 88,
            borderRadius: 20,
            marginBottom: 18,
            boxShadow:
              "0 0 45px rgba(168,85,247,0.55), 0 0 80px rgba(59,130,246,0.25)",
          }}
        />

        <h1
          style={{
            fontSize: 28,
            fontWeight: 700,
            background:
              "linear-gradient(90deg, #a855f7, #38bdf8, #22d3ee)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            marginBottom: 6,
          }}
        >
          PRstudy
        </h1>

        <p
          style={{
            fontSize: 14,
            color: "#a5b4fc",
            marginBottom: 10,
          }}
        >
          अध्ययनं विकासस्य मूलम्
        </p>

        <p
          style={{
            maxWidth: 420,
            fontSize: 14,
            color: "#cbd5f5",
            lineHeight: 1.6,
            marginBottom: 24,
          }}
        >
          A premium, admin-controlled study workspace for files, practice,
          tests, and focused learning.
        </p>

        <div style={{ display: "flex", gap: 12 }}>
          <button
            style={{
              background:
                "linear-gradient(90deg, #6366f1, #8b5cf6)",
              border: "none",
              color: "#fff",
              padding: "10px 18px",
              borderRadius: 999,
              fontWeight: 500,
              cursor: "pointer",
              boxShadow: "0 0 25px rgba(99,102,241,0.45)",
            }}
          >
            Explore Free Files
          </button>

          <button
            style={{
              background: "transparent",
              border: "1px solid rgba(99,102,241,0.45)",
              color: "#c7d2fe",
              padding: "10px 18px",
              borderRadius: 999,
              cursor: "pointer",
            }}
          >
            Login / Signup
          </button>
        </div>
      </section>

      {/* FOOTER */}
      <footer
        style={{
          padding: "14px 10px",
          textAlign: "center",
          fontSize: 12,
          color: "#94a3b8",
        }}
      >
        © 2026 PRstudy · Built for focus
        <div
          style={{
            marginTop: 4,
            fontStyle: "italic",
            color: "#a78bfa",
            opacity: 0.8,
          }}
        >
          — Praveen Rajput
        </div>
      </footer>
    </main>
  );
}
