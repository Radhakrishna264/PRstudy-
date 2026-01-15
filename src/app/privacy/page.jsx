import { branding } from "../../config/branding";

export const metadata = {
  title: `Privacy Policy | ${branding.name}`,
};

export default function PrivacyPage() {
  return (
    <section className="public-page">
      <h1>Privacy Policy</h1>

      <p className="public-slogan">{branding.slogan.text}</p>

      <p>
        {branding.name} respects your privacy and follows a strict
        privacy-first approach.
      </p>

      <ul>
        <li>We do not sell user data.</li>
        <li>Analytics are aggregated by default.</li>
        <li>Sensitive actions are logged securely.</li>
        <li>Admins have limited visibility.</li>
        <li>SuperAdmin access is audited.</li>
      </ul>

      <p>
        By using this platform, you agree to our data handling policies
        designed to protect fairness and trust.
      </p>
    </section>
  );
}
