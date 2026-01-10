export default function HomePage() {
  return (
    <main className="hero-wrapper">

      {/* HERO LOGO – CENTER */}
      <div className="hero-logo">
        <img
          src="/prstudy-logo.png"
          alt="PRstudy Logo"
        />
      </div>

      {/* TITLE */}
      <h1 className="hero-title">PRstudy</h1>

      {/* SANSKRIT TAGLINE */}
      <p className="hero-sanskrit">
        अध्ययनं विकासस्य मूलम्
      </p>

      {/* DESCRIPTION (MICRO-IMPROVED COPY) */}
      <p className="hero-desc">
        A focused learning workspace designed for clarity, control, and steady progress.
      </p>

      {/* CTA */}
      <div className="hero-actions">
        <a href="/login" className="btn-primary">
          Access Workspace
        </a>
      </div>

      {/* FEATURE CARDS */}
      <div className="feature-row">
        <div className="feature-card">
          <h3>Free Files 🔓</h3>
          <p>Access selected resources without signing in.</p>
        </div>

        <div className="feature-card">
          <h3>Tests & Analytics 🔒</h3>
          <p>Track performance with structured tests.</p>
        </div>

        <div className="feature-card">
          <h3>Community & Rewards 🔒</h3>
          <p>Learn together. Grow with recognition.</p>
        </div>
      </div>

      {/* FOOTER */}
      <footer className="footer">
        © 2026 PRstudy · Built with focus
        <br />
        <span className="admin-sign">— Praveen Rajput</span>
      </footer>

    </main>
  );
}
