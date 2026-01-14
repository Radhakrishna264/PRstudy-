import branding from "../../config/branding";

export default function PublicHome() {
  return (
    <section className="public-page">
      <h1>{branding.name}</h1>

      <p className="public-tagline">
        {branding.tagline}
      </p>

      <blockquote className="public-slogan">
        {branding.slogan.text}
      </blockquote>
    </section>
  );
}
