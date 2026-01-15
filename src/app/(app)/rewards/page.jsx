import { branding } from "../../../config/branding";

export const metadata = {
  title: `Rewards | ${branding.name}`,
};

export default function RewardsPage() {
  return (
    <section className="app-page">
      <h1>Rewards & Achievements</h1>
      <p className="app-slogan">{branding.slogan.text}</p>

      <ul className="feature-list">
        <li>🎯 Points & XP System</li>
        <li>🏅 Badges & Levels</li>
        <li>🔥 Daily Streaks</li>
        <li>💎 VIP Days & Bonuses</li>
      </ul>
    </section>
  );
}
