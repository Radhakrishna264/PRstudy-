import { branding } from "../../../config/branding";

export const metadata = {
  title: `Terms & Conditions | ${branding.name}`,
};

export default function TermsPage() {
  return (
    <section className="public-page">
      <h1>Terms & Conditions</h1>

      <p className="public-slogan">{branding.slogan}</p>

      <p>
        By accessing or using {branding.name}, you agree to follow these terms.
      </p>

      <ul>
        <li>Misuse, cheating, or abuse is strictly prohibited.</li>
        <li>Paid services follow defined refund and retry rules.</li>
        <li>Admin decisions may be audited.</li>
        <li>SuperAdmin decisions are final.</li>
      </ul>

      <p>
        These terms exist to maintain discipline, fairness, and platform
        integrity for all users.
      </p>
    </section>
  );
}
