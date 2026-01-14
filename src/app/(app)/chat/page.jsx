import { branding } from "../../../config/branding";

export const metadata = {
  title: `Community Chat | ${branding.name}`,
};

export default function ChatPage() {
  return (
    <section>
      <h1>Community Chat</h1>
      <p>{branding.slogan}</p>

      <p>Public discussion, doubts, announcements.</p>
    </section>
  );
}
