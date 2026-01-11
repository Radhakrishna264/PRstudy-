export default function DashboardPage() {
  return (
    <section className="dashboard">

      <h1 className="dash-title">Dashboard Overview</h1>

      <div className="dash-cards">

        <div className="dash-card">
          <h3>Quick Resume</h3>
          <p>Continue from your last opened file or test.</p>
        </div>

        <div className="dash-card">
          <h3>System Status</h3>
          <p>All systems are running normally.</p>
        </div>

        <div className="dash-card locked">
          <h3>Analytics</h3>
          <p>Insights will appear after activity.</p>
        </div>

      </div>

    </section>
  );
}
