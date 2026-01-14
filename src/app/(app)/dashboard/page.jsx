import { branding } from "../../../config/branding";

export const metadata = {
  title: `Dashboard | ${branding.name}`,
};

export default function DashboardPage() {
  return (
    <section>
      <h1>Dashboard</h1>
      <p>{branding.slogan}</p>

      <ul>
        <li>Live tests & upcoming exams</li>
        <li>Recent activity</li>
        <li>Quick access shortcuts</li>
      </ul>
    </section>
  );
}
