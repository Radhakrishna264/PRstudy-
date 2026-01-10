export default function HomePage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* HEADER */}
      <header
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "16px 20px",
        }}
      >
        <img
          src="/logo-prstudy-final-v2.png"
          alt="PRstudy Logo"
          style={{
            width: 38,
            height: 38,
            borderRadius: 10,
            boxShadow: "0 0 18px rgba(168,85,247,0.6)",
          }}
        />

        <a
          href="/login"
          style={{
            fontSize: 14,
            color: "#c7d2fe",
            opacity: 0.9,
          }}
        >
          Login
        </a>
      </header>

      {/* HERO */}
      <section
        className="fade-in"
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          padding: "0 18px",
        }}
      >
        {/* LOGO CENTER */}
        <img
          src="/logo-prstudy-final-v2.png"
          alt="PRstudy Logo"
          style={{
            width: 72,
            height: 72,
            borderRadius: 18,
            boxShadow: "0 0 32px rgba(59,130,246,0.55)",
            marginBottom: 18,
          }}
        />

        {/* BRAND */}
        <h1
          style={{
            fontSize: 34,
            fontWeight: 700,
            background:
              "linear-gradient(90deg,#a855f7,#38bdf8,#22d3ee)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            marginBottom: 6,
          }}
        >
          PRstudy
        </h1>

        {/* SANSKRIT TAGLINE */}
        <div
          style={{
            fontSize: 14,
            letterSpacing: "0.06em",
            color: "#94a3b8",
            marginBottom: 14,
          }}
        >
          अध्ययनं विकासस्य मूलम्
        </div>

        {/* DESCRIPTION */}
        <p
          style={{
            maxWidth: 420,
            fontSize: 14,
            lineHeight: 1.6,
            color: "#9ca3af",
            marginBottom: 26,
          }}
        >
          A premium, admin-controlled study workspace for files, practice,
          tests, and focused learning.
        </p>

        {/* CTA */}
        <div
          style={{
            display: "flex",
            gap: 12,
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          <a
            href="/files"
            style={{
              padding: "10px 18px",
              borderRadius: 10,
              background:
                "linear-gradient(90deg,#6366f1,#8b5cf6)",
              color: "#fff",
              fontSize: 14,
              boxShadow: "0 0 22px rgba(99,102,241,0.5)",
            }}
          >
            Explore Free Files
          </a>

          <a
            href="/login"
            style={{
              padding: "10px 18px",
              borderRadius: 10,
              border: "1px solid #334155",
              color: "#e5e7eb",
              fontSize: 14,
            }}
          >
            Login / Signup
          </a>
        </div>

        {/* FOOTER SIGNATURE */}
        <div
          style={{
            marginTop: 42,
            fontSize: 12,
            color: "#64748b",
          }}
        >
          © 2026 PRstudy · Built for focus
          <br />
          <span
            style={{
              fontStyle: "italic",
              color: "#a78bfa",
            }}
          >
            — Praveen Rajput
          </span>
        </div>
      </section>
    </main>
  );
}
