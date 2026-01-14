// src/app/(admin)/admin-dashboard/layout.jsx

import { redirect } from "next/navigation";
import { getSession } from "../../../lib/session";
import Sidebar from "../../components/Sidebar";
import Header from "../../components/Header";
import Watermark from "../../components/Watermark";

export default async function AdminDashboardLayout({ children }) {
  const session = await getSession();

  if (!session) {
    redirect("/login");
  }

  const role = session.user?.role;

  if (role !== "admin" && role !== "superadmin") {
    redirect("/dashboard");
  }

  return (
    <div className="min-h-screen flex bg-gray-50">
      {/* Sidebar */}
      <Sidebar role={role} />

      {/* Main Area */}
      <div className="flex-1 flex flex-col">
        <Header />

        <main className="flex-1 p-6 relative">
          <Watermark role={role} />
          {children}
        </main>
      </div>
    </div>
  );
}
