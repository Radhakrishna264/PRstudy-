// src/app/(admin)/_config/roles/page.jsx

import { redirect } from "next/navigation";
import { getSession } from "../../../lib/session";
import Watermark from "../../components/Watermark";

export default async function RolesConfigPage() {
  const session = await getSession();

  if (!session) redirect("/login");

  if (session.user?.role !== "superadmin") {
    redirect("/admin-dashboard");
  }

  const roles = [
    {
      name: "User",
      powers: ["View content", "Attempt tests", "Join community"],
    },
    {
      name: "Admin",
      powers: [
        "Manage users",
        "Upload tests/files",
        "View reports",
        "Limited moderation",
      ],
    },
    {
      name: "SuperAdmin",
      powers: [
        "All Admin powers",
        "Payments & pricing",
        "Audit logs",
        "Feature flags",
        "System kill-switch",
      ],
    },
  ];

  return (
    <div className="p-6">
      <Watermark role="superadmin" />

      <h1 className="text-2xl font-bold mb-4">Role Definitions</h1>

      <div className="grid gap-4">
        {roles.map((role) => (
          <div
            key={role.name}
            className="border rounded-lg p-4 bg-white"
          >
            <h2 className="font-semibold text-lg mb-2">{role.name}</h2>
            <ul className="list-disc pl-6 text-sm">
              {role.powers.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <p className="text-xs text-gray-500 mt-4">
        Only SuperAdmin can modify role capabilities.
      </p>
    </div>
  );
}
