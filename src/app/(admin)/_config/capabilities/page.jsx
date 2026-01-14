// src/app/(admin)/_config/capabilities/page.jsx

import { redirect } from "next/navigation";
import { getSession } from "../../../lib/session";
import Watermark from "../../components/Watermark";

export default async function CapabilitiesPage() {
  const session = await getSession();

  if (!session) redirect("/login");

  if (session.user?.role !== "superadmin") {
    redirect("/admin-dashboard");
  }

  const capabilities = [
    { key: "payments", label: "Payments System", enabled: true },
    { key: "ai_help", label: "AI Help Engine", enabled: true },
    { key: "community", label: "Public Community", enabled: true },
    { key: "dm_monitor", label: "SuperAdmin DM Oversight", enabled: true },
    { key: "rewards", label: "Rewards & GF Ideas", enabled: true },
  ];

  return (
    <div className="p-6">
      <Watermark role="superadmin" />

      <h1 className="text-2xl font-bold mb-4">System Capabilities</h1>

      <div className="space-y-3">
        {capabilities.map((cap) => (
          <div
            key={cap.key}
            className="flex items-center justify-between border p-3 rounded"
          >
            <span>{cap.label}</span>
            <span
              className={`text-xs px-2 py-1 rounded ${
                cap.enabled
                  ? "bg-green-100 text-green-700"
                  : "bg-red-100 text-red-700"
              }`}
            >
              {cap.enabled ? "ENABLED" : "DISABLED"}
            </span>
          </div>
        ))}
      </div>

      <p className="text-xs text-gray-500 mt-4">
        Capability changes take effect immediately system-wide.
      </p>
    </div>
  );
}
