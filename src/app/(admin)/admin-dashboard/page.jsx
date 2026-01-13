import Header from "../../components/Header";

export default function AdminDashboardPage() {
  return (
    <main className="min-h-screen">
      {/* Admin Header */}
      <Header glow="soft" />

      <section className="p-6">
        <h1 className="text-2xl font-semibold mb-2">Admin Dashboard</h1>
        <p className="opacity-70">
          System overview and administrative controls.
        </p>
      </section>
    </main>
  );
}
