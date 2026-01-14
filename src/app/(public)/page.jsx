import { branding } from "../../config/branding";

export const metadata = {
  title: branding.name,
  description: branding.description,
};

export default function PublicHomePage() {
  return (
    <div className="public-home">

      {/* Hero Section */}
      <section className="public-hero">
        <h1 className="public-title">{branding.name}</h1>

        <p className="public-slogan">
          {branding.slogan}
        </p>

        <p className="public-description">
          {branding.description}
        </p>

        <div className="public-actions">
          <a href="/login" className="btn-primary">
            Login
          </a>
          <a href="/signup" className="btn-secondary">
            Get Started
          </a>
        </div>
      </section>

      {/* Features Preview */}
      <section className="public-features">
        <h2>What you get</h2>

        <ul>
          <li>Smart exam-wise tests & live competitions</li>
          <li>Files hub with VIP & Pro content</li>
          <li>Rewards, levels & learning streaks</li>
          <li>Community discussion & private DMs</li>
          <li>AI learning help (Hindi + English)</li>
        </ul>
      </section>

      {/* Trust / Control Section */}
      <section className="public-trust">
        <h2>Built with control & fairness</h2>

        <p>
          PRstudy is designed with strict exam integrity, role-based control,
          privacy-first analytics and transparent systems — so learning stays
          honest and focused.
        </p>
      </section>

      {/* Footer CTA */}
      <section className="public-cta">
        <h2>Start your journey today</h2>

        <a href="/signup" className="btn-primary">
          Create Free Account
        </a>
      </section>

    </div>
  );
}
