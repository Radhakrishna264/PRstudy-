// src/app/(admin)/users/page.jsx

import { redirect } from "next/navigation";
import { getSession } from "../../../lib/session";

export default async function UsersPage() {
  const session = await getSession();
  if (!session) redirect("/login");

  const role = session.user?.role;
  if (role !== "admin" && role !== "superadmin") {
    redirect("/dashboard");
  }

  return (
    <section>
      <h1 className="text-2xl font-bold mb-4">User Management</h1>

      <p className="text-sm text-gray-600 mb-6">
        View users, manage plans, suspensions, bans, and appeals.
      </p>

      <div className="grid gap-4 md:grid-cols-2">
        <Card
          title="User Accounts"
          desc="View all registered users with PR-ID, plan & status."
        />

        <Card
          title="Suspend / Ban"
          desc="Admins can request. SuperAdmin approves & executes."
        />

        <Card
          title="Appeals"
          desc="Suspended/Banned users can submit appeals."
        />

        <Card
          title="Plans & Limits"
          desc="Plan based access, limits & overrides."
        />
      </div>

      {role === "superadmin" && (
        <div className="mt-6 p-4 bg-red-50 border rounded">
          <p className="text-sm text-red-700 font-semibold">
            SuperAdmin Controls
          </p>
          <ul className="list-disc ml-6 text-sm mt-2">
            <li>Force suspend / unban</li>
            <li>Change PR-ID</li>
            <li>Override any user limits</li>
            <li>View DM metadata (read-only, security)</li>
          </ul>
        </div>
      )}
    </section>
  );
}

function Card({ title, desc }) {
  return (
    <div className="border rounded p-4 bg-white">
      <h3 className="font-semibold mb-1">{title}</h3>
      <p className="text-sm text-gray-600">{desc}</p>
    </div>
  );
}
