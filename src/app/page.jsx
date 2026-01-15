import { branding } from "./config/branding";

export const metadata = {
  title: branding.name,
  description: branding.description,
};

export default function HomePage() {
  return (
    <div className="public-container">

      <section className="section">
        <h1 className="section-title">{branding.name}</h1>
        <p className="section-subtitle">{branding.slogan.text}</p>
        <p className="section-text">{branding.description}</p>

        <div style={{ marginTop: "1.5rem" }}>
          <a href="/login" className="btn-primary">Login</a>{" "}
          <a href="/signup" className="btn-secondary">Get Started</a>
        </div>
      </section>

      <section className="section">
        <h2 className="section-title">What you get</h2>
        <ul className="section-text">
          <li>Smart exam-wise tests & live competitions</li>
          <li>Files hub with VIP & Pro content</li>
          <li>Rewards, levels & learning streaks</li>
          <li>Community discussion & private DMs</li>
          <li>AI learning help (Hindi + English)</li>
        </ul>
      </section>

      <section className="section">
        <h2 className="section-title">Built with control & fairness</h2>
        <p className="section-text">
          PRstudy is designed with strict exam integrity, role-based control,
          privacy-first analytics and transparent systems — so learning stays
          honest and focused.
        </p>
      </section>

      <section className="section">
        <h2 className="section-title">Start your journey today</h2>
        <a href="/signup" className="btn-primary">Create Free Account</a>
      </section>

    </div>
  );
}
