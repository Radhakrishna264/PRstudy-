export default function DashboardPage() {
  return (
    <section className="space-y-6">

      <div>
        <h1 className="text-2xl font-semibold">
          Welcome to PRstudy
        </h1>
        <p className="mt-1 text-white/60">
          Resume your learning from where you left off.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

        <div className="card">
          <p className="text-sm opacity-60">Last Activity</p>
          <p className="mt-2">No activity yet</p>
        </div>

        <div className="card">
          <p className="text-sm opacity-60">Announcements</p>
          <p className="mt-2">No announcements</p>
        </div>

        <div className="card opacity-70">
          <p className="text-sm opacity-60">Rewards</p>
          <p className="mt-2">Unlock by completing tests</p>
        </div>

      </div>

    </section>
  );
}
