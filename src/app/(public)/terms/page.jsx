import branding from "../../../config/branding";

export default function TermsPage() {
  return (
    <section className="public-page">
      <h1>Terms & Conditions</h1>

      <p>
        By using {branding.name}, users agree to follow platform rules,
        discipline, and ethical usage policies.
      </p>

      <blockquote className="public-slogan">
        {branding.slogan.text}
      </blockquote>
    </section>
  );
}
