export default function DashboardHome() {
  return (
    <section className="dashboard">

      <h1 className="dash-title">Dashboard</h1>
      <p className="dash-sub">
        Welcome back. Resume your learning from where you left off.
      </p>

      <div className="dash-cards">
        <div className="dash-card">
          <h3>Last Activity</h3>
          <p>No recent activity yet.</p>
        </div>

        <div className="dash-card">
          <h3>Announcements</h3>
          <p>No announcements.</p>
        </div>

        <div className="dash-card locked">
          <h3>Rewards</h3>
          <p>Complete tests to earn rewards.</p>
        </div>
      </div>

    </section>
  );
}
