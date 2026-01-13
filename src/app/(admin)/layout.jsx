export default function AdminLayout({ children }) {
  return (
    <section className="min-h-screen flex bg-black text-gray-200">
      <aside className="w-64 bg-black/60 border-r border-gray-800">
        <div className="p-4 font-bold text-primary tracking-wide">
          Admin Panel
        </div>

        <nav className="px-4 space-y-2 text-sm">
          <div className="text-xs text-gray-500 mt-4 uppercase">
            Overview
          </div>
          <a href="/admin/dashboard" className="block hover:text-primary">
            Dashboard
          </a>

          <div className="text-xs text-gray-500 mt-4 uppercase">
            Management
          </div>
          <a href="/admin/users" className="block hover:text-primary">
            Users
          </a>
          <a href="/admin/files-control" className="block hover:text-primary">
            Files Control
          </a>
          <a href="/admin/tests-control" className="block hover:text-primary">
            Tests Control
          </a>

          <div className="text-xs text-gray-500 mt-4 uppercase">
            Finance
          </div>
          <a href="/admin/payments" className="block hover:text-primary">
            Payments
          </a>

          <div className="text-xs text-gray-500 mt-4 uppercase">
            Insights
          </div>
          <a href="/admin/analytics" className="block hover:text-primary">
            Analytics
          </a>
        </nav>
      </aside>

      <main className="flex-1 p-6">
        {children}
      </main>
    </section>
  );
}
