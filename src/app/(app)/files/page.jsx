import { branding } from "../../../config/branding";

export const metadata = {
  title: `Files Hub | ${branding.name}`,
};

export default function FilesPage() {
  return (
    <section className="app-page">
      <h1>Files & Resources</h1>
      <p className="app-slogan">{branding.slogan}</p>

      <ul className="feature-list">
        <li>📂 Notes & PDFs</li>
        <li>⬇️ Downloads</li>
        <li>⭐ Saved Resources</li>
        <li>🔐 VIP-only Files</li>
      </ul>
    </section>
  );
}
