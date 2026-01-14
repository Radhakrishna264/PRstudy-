import branding from "../../../config/branding";

export default function PrivacyPage() {
  return (
    <section className="public-page">
      <h1>Privacy Policy</h1>

      <p>
        {branding.name} respects user privacy.
        All data handling follows strict security and compliance rules.
      </p>

      <blockquote className="public-slogan">
        {branding.slogan.text}
      </blockquote>
    </section>
  );
}
