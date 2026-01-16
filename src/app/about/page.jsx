import branding from "../../../config/branding";

export const metadata = {
  title: `About | ${branding.name}`,
};

export default function AboutPage() {
  return (
    <section className="public-page">
      <h1>About {branding.name}</h1>

      <p className="public-slogan">{branding.slogan.text}</p>

      <p>
        {branding.name} is a smart learning and test platform designed to help
        students prepare with clarity, discipline, and fairness.
      </p>

      <p>
        We focus on exam-oriented learning, real test environments, transparent
        systems, and long-term growth rather than shortcuts.
      </p>

      <p>
        Our platform is built with strict control systems, role-based access,
        privacy-first analytics, and ethical AI assistance.
      </p>
    </section>
  );
}
