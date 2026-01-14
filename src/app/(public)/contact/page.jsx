import branding from "../../../config/branding";

export default function ContactPage() {
  return (
    <section className="public-page">
      <h1>Contact Us</h1>

      <p>
        For support and official communication related to {branding.name},
        please use authorized channels only.
      </p>

      <blockquote className="public-slogan">
        {branding.slogan.text}
      </blockquote>
    </section>
  );
}
