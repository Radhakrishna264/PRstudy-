import { branding } from "../../../config/branding";

export const metadata = {
  title: `Contact | ${branding.name}`,
};

export default function ContactPage() {
  return (
    <section className="public-page">
      <h1>Contact Us</h1>

      <p className="public-slogan">{branding.slogan.text}</p>

      <p>
        For support, feedback, or official communication, please reach out
        through the appropriate channels.
      </p>

      <ul>
        <li>Email support is available for registered users.</li>
        <li>Admin & SuperAdmin communication is strictly controlled.</li>
        <li>Spam or misuse is logged and blocked.</li>
      </ul>

      <p>
        We respond responsibly to genuine queries related to learning,
        payments, and platform usage.
      </p>
    </section>
  );
}
