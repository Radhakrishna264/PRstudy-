import { branding } from "../../../config/branding";

export const metadata = {
  title: `Profile | ${branding.name}`,
};

export default function ProfilePage() {
  return (
    <section className="app-page">
      <h1>Your Profile</h1>
      <p className="app-slogan">{branding.slogan.text}</p>

      <ul className="feature-list">
        <li>👤 Account Information</li>
        <li>📜 Activity History</li>
        <li>💳 Plan & Subscription</li>
        <li>⚙️ Settings & Security</li>
      </ul>
    </section>
  );
}
