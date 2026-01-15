import { branding } from "../../../config/branding";

export const metadata = {
  title: `User Dashboard | ${branding.name}`,
};

export default function DashboardPage() {
  return (
    <section className="dashboard-page">
      <h1>Welcome to {branding.name}</h1>

      <p className="dashboard-slogan">
        {branding.slogan.text}
      </p>

      <div className="dashboard-grid">
        <div className="dashboard-card">
          <h2>📘 Tests</h2>
          <p>Live exams, practice tests, previous papers</p>
        </div>

        <div className="dashboard-card">
          <h2>📂 Files Hub</h2>
          <p>Notes, PDFs, downloads, saved resources</p>
        </div>

        <div className="dashboard-card">
          <h2>💬 Community</h2>
          <p>Public chat, discussions, announcements</p>
        </div>

        <div className="dashboard-card">
          <h2>🎁 Rewards</h2>
          <p>Points, badges, streaks, VIP benefits</p>
        </div>

        <div className="dashboard-card">
          <h2>👤 Profile</h2>
          <p>Account details, plan, history, settings</p>
        </div>
      </div>
    </section>
  );
}
