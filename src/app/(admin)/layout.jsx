// src/app/(admin)/layout.jsx

import { redirect } from "next/navigation";
import { getSession } from "../../lib/session";
import Header from "../components/Header";
import Sidebar from "./components/Sidebar";
import Watermark from "../components/Watermark";

export default async function AdminLayout({ children }) {
  const session = await getSession();
  if (!session) redirect("/login");

  const role = session.user?.role;
  if (role !== "admin" && role !== "superadmin") {
    redirect("/dashboard");
  }

  return (
    <div className="min-h-screen flex bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 border-r bg-white">
        <Sidebar role={role} />
      </aside>

      {/* Main Area */}
      <div className="flex-1 flex flex-col">
        <Header role={role} />

        <main className="flex-1 p-6">
          {children}
        </main>
      </div>

      {/* Role-based watermark */}
      <Watermark role={role} />
    </div>
  );
}
