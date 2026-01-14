
// src/app/(admin)/_flags/rollouts/page.jsx

import { redirect } from "next/navigation";
import { getSession } from "../../../lib/session";
import Watermark from "../../components/Watermark";

export default async function RolloutsPage() {
  const session = await getSession();
  if (!session) redirect("/login");

  if (session.user?.role !== "superadmin") {
    redirect("/admin-dashboard");
  }

  const rollouts = [
    { name: "New Dashboard UI", percent: 30 },
    { name: "Advanced Analytics", percent: 10 },
    { name: "Premium Test Engine", percent: 0 },
  ];

  return (
    <div className="p-6">
      <Watermark role="superadmin" />

      <h1 className="text-2xl font-bold mb-4">Rollouts</h1>

      <div className="space-y-4">
        {rollouts.map((r) => (
          <div key={r.name} className="border p-4 rounded">
            <div className="flex justify-between mb-2">
              <span>{r.name}</span>
              <span className="text-sm">{r.percent}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded h-2">
              <div
                className="bg-blue-600 h-2 rounded"
                style={{ width: `${r.percent}%` }}
              />
            </div>
          </div>
        ))}
      </div>

      <p className="text-xs text-gray-500 mt-4">
        Rollouts allow controlled exposure without downtime.
      </p>
    </div>
  );
}
