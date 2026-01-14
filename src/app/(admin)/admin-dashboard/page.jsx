// src/app/(admin)/admin-dashboard/page.jsx

import { redirect } from "next/navigation";
import { getSession } from "../../../lib/session";

export default async function AdminDashboardPage() {
  const session = await getSession();

  if (!session) {
    redirect("/login");
  }

  const role = session.user?.role;

  if (role !== "admin" && role !== "superadmin") {
    redirect("/dashboard");
  }

  const stats = {
    users: 1240,
    activeUsers: 312,
    tests: 86,
    revenue: role === "superadmin" ? "₹1,24,000" : "Restricted",
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">
        {role === "superadmin" ? "SuperAdmin Dashboard" : "Admin Dashboard"}
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card title="Total Users" value={stats.users} />
        <Card title="Active Users" value={stats.activeUsers} />
        <Card title="Total Tests" value={stats.tests} />
        <Card title="Revenue" value={stats.revenue} />
      </div>

      {role === "superadmin" && (
        <div className="mt-8 p-4 border rounded bg-yellow-50">
          <h2 className="font-semibold mb-2">SuperAdmin Controls</h2>
          <p className="text-sm text-gray-700">
            You have absolute authority over features, payments, users,
            experiments, rollouts, and audits.
          </p>
        </div>
      )}
    </div>
  );
}

function Card({ title, value }) {
  return (
    <div className="border rounded p-4 bg-white">
      <div className="text-sm text-gray-500">{title}</div>
      <div className="text-xl font-bold">{value}</div>
    </div>
  );
}
