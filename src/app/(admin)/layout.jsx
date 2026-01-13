import Watermark from "../components/Watermark";
import { getSession } from "../../lib/session";

export default async function AdminLayout({ children }) {
  const session = await getSession();
  const role = session?.user?.role;

  return (
    <section className="min-h-screen flex bg-black text-gray-200 relative">
      {/* Watermark for Admin / SuperAdmin */}
      <Watermark role={role} />

      {/* Sidebar */}
      <aside className="w-64 bg-black/60 border-r border-gray-800">
        <div className="p-4 font-bold text-primary tracking-wide">
          Admin Panel
        </div>

        <nav className="px-4 space-y-2 text-sm">
          <a href="/admin/admin-dashboard" className="block hover:text-primary">
            Dashboard
          </a>
          <a href="/admin/users" className="block hover:text-primary">
            Users
          </a>
          <a href="/admin/files-control" className="block hover:text-primary">
            Files Control
          </a>
          <a href="/admin/tests-control" className="block hover:text-primary">
            Tests Control
          </a>
          <a href="/admin/payments" className="block hover:text-primary">
            Payments
          </a>
          <a href="/admin/analytics" className="block hover:text-primary">
            Analytics
          </a>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
        {children}
      </main>
    </section>
  );
}
