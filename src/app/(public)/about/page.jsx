import branding from "../../../config/branding";

export default function AboutPage() {
  return (
    <section className="public-page">
      <h1>About {branding.name}</h1>

      <p>
        {branding.name} is a smart learning and test platform designed
        for focused, disciplined, and goal-oriented students.
      </p>

      <blockquote className="public-slogan">
        {branding.slogan.text}
      </blockquote>
    </section>
  );
}
