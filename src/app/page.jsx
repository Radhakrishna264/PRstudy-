import Image from "next/image";
import Link from "next/link";

const isLoggedIn = false; // later real auth
const isAdmin = false;   // later role check

export default function Home() {
  return (
    <main className="home-root">
      {/* Top bar */}
      <header className="home-top">
        <div className="brand">
          <Image src="/prstudy-logo.png" alt="PRstudy" width={28} height={28} />
          <span className="brand-name">PRstudy</span>
          {isAdmin && <span className="badge">Admin Controlled</span>}
        </div>

        {isLoggedIn ? (
          <div className="avatar">PR</div>
        ) : (
          <Link href="/login" className="login-link">Login</Link>
        )}
      </header>

      {/* Hero */}
      <section className="hero enter">
        <Image
          src="/prstudy-logo.png"
          alt="PRstudy"
          width={88}
          height={88}
          className="hero-logo"
        />

        <h1 className="hero-title">PRstudy</h1>
        <p className="hero-sanskrit">अध्ययनं विकासस्य मूलम्</p>

        <p className="hero-desc">
          A focused, admin-controlled study workspace for serious learners.
        </p>

        {isLoggedIn ? (
          <button className="cta-primary">Continue Learning</button>
        ) : (
          <Link href="/login" className="cta-primary">
            Login / Signup
          </Link>
        )}
      </section>

      {/* Features */}
      <section className="features enter-delay">
        <div className="card">
          <h3>
            Free Files <span className="lock">🔓</span>
          </h3>
          <p>Limited access without login.</p>
          {isLoggedIn && <span className="hint">Open</span>}
        </div>

        <div className="card locked">
          <h3>
            Tests & Analytics <span className="lock">🔒</span>
          </h3>
          <p>Login required.</p>
          {isLoggedIn && <span className="hint">Open</span>}
        </div>

        <div className="card locked">
          <h3>
            Community & Rewards <span className="lock">🔒</span>
          </h3>
          <p>Unlock with account.</p>
          {isLoggedIn && <span className="hint">Open</span>}
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
