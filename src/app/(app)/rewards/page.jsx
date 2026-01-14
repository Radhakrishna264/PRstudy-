import { branding } from "../../../config/branding";

export const metadata = {
  title: `Rewards | ${branding.name}`,
};

export default function RewardsPage() {
  return (
    <section>
      <h1>Rewards & Points</h1>
      <p>{branding.slogan}</p>

      <p>Points, badges, streaks, VIP benefits.</p>
    </section>
  );
}
