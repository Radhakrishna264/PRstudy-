import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="home-root">
      {/* Top bar */}
      <header className="home-top">
        <div className="brand">
          <Image
            src="/prstudy-logo.png"
            alt="PRstudy"
            width={28}
            height={28}
            priority
          />
          <span className="brand-name">PRstudy</span>
          <span className="badge">Admin Controlled</span>
        </div>
        <Link href="/login" className="login-link">Login</Link>
      </header>

      {/* Hero */}
      <section className="hero enter">
        <div className="hero-logo">
          <Image
            src="/prstudy-logo.png"
            alt="PRstudy"
            width={88}
            height={88}
            priority
          />
        </div>

        <h1 className="hero-title">PRstudy</h1>
        <p className="hero-sanskrit">अध्ययनं विकासस्य मूलम्</p>

        <p className="hero-desc">
          A focused, admin-controlled study workspace for serious learners.
        </p>

        {/* Single CTA (locked) */}
        <Link href="/login" className="cta-primary">
          Login / Signup
        </Link>
      </section>

      {/* Feature cards (explain, not open) */}
      <section className="features enter-delay">
        <div className="card">
          <h3>Free Files</h3>
          <p>Limited access without login.</p>
        </div>
        <div className="card locked">
          <h3>Tests & Analytics</h3>
          <p>Login required.</p>
        </div>
        <div className="card locked">
          <h3>Community & Rewards</h3>
          <p>Unlock with account.</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="home-footer">
        <div className="links">
          <Link href="/about">About</Link>
          <Link href="/help">Help</Link>
          <Link href="/privacy">Privacy</Link>
          <Link href="/terms">Terms</Link>
        </div>
        <div className="sign">
          © 2026 PRstudy · <span>— Praveen Rajput</span>
        </div>
      </footer>
    </main>
  );
}
