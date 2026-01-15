import { branding } from "../../../config/branding";

export const metadata = {
  title: `Community Chat | ${branding.name}`,
};

export default function ChatPage() {
  return (
    <section className="app-page">
      <h1>Community & Chat</h1>
      <p className="app-slogan">{branding.slogan.text}</p>

      <ul className="feature-list">
        <li>💬 Public Discussions</li>
        <li>👥 Topic-based Communities</li>
        <li>🚫 Explicit-content Protection</li>
        <li>🛡️ Admin Moderation System</li>
      </ul>
    </section>
  );
}
