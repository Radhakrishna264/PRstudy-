import Header from "../../components/Header";

export default function DashboardPage() {
  return (
    <main className="min-h-screen">
      {/* User Header */}
      <Header glow="soft" />

      <section className="p-6">
        <h1 className="text-2xl font-semibold mb-2">Dashboard</h1>
        <p className="opacity-70">
          Overview of your activity, tests, rewards, and progress.
        </p>
      </section>
    </main>
  );
}
