import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="home-wrapper">
      {/* Top Bar */}
      <header className="top-bar">
        <div className="logo-left">
          <Image
            src="/prstudy-logo.png"
            alt="PRstudy Logo"
            width={34}
            height={34}
            priority
          />
          <span className="brand-text">PRstudy</span>
        </div>

        <Link href="/login" className="login-btn">
          Login
        </Link>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-logo">
          <Image
            src="/prstudy-logo.png"
            alt="PRstudy Logo"
            width={96}
            height={96}
            priority
          />
        </div>

        <h1 className="hero-title">PRstudy</h1>
        <p className="hero-sanskrit">अध्ययनं विकासस्य मूलम्</p>

        <p className="hero-desc">
          A premium, admin-controlled study workspace for files, practice,
          tests, and focused learning.
        </p>

        <div className="hero-actions">
          <Link href="/files" className="btn primary">
            Explore Free Files
          </Link>
          <Link href="/login" className="btn secondary">
            Login / Signup
          </Link>
        </div>

        <footer className="hero-footer">
          © 2026 PRstudy · Built for focus  
          <br />
          <span className="admin-sign">— Praveen Rajput</span>
        </footer>
      </section>
    </main>
  );
}
