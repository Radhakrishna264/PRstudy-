import { branding } from "../../../config/branding";

export const metadata = {
  title: `Tests | ${branding.name}`,
};

export default function TestsPage() {
  return (
    <section className="app-page">
      <h1>Tests & Exams</h1>
      <p className="app-slogan">{branding.slogan.text}</p>

      <ul className="feature-list">
        <li>📝 Exam-wise Practice Tests</li>
        <li>⏱️ Weekly Competitive Tests</li>
        <li>📊 Results & Analysis</li>
        <li>🔒 Anti-cheat Protected Attempts</li>
      </ul>
    </section>
  );
}
