import Header from "../components/Header";
import Watermark from "../components/Watermark";
import { getSession } from "../../../lib/session";

export default async function AdminLayout({ children }) {
  const session = await getSession();
  const role = session?.user?.role;

  return (
    <div className="min-h-screen flex">
      {/* Admin Sidebar */}
      <aside className="w-64 border-r p-4">
        <h2 className="font-semibold mb-4">Admin Panel</h2>
        <ul className="space-y-2 text-sm opacity-80">
          <li>Dashboard</li>
          <li>Users</li>
          <li>Files Control</li>
          <li>Tests Control</li>
          <li>Payments</li>
          <li>Analytics</li>
        </ul>
      </aside>

      {/* Main Area */}
      <div className="flex-1 relative">
        <Header />
        <Watermark role={role} />
        <main className="p-6">{children}</main>
      </div>
    </div>
  );
}
