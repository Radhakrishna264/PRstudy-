// src/app/(admin)/_flags/features/page.jsx

import { redirect } from "next/navigation";
import { getSession } from "../../../lib/session";
import Watermark from "../../components/Watermark";

export default async function FeaturesFlagPage() {
  const session = await getSession();
  if (!session) redirect("/login");

  if (session.user?.role !== "superadmin") {
    redirect("/admin-dashboard");
  }

  const features = [
    { key: "community", label: "Public Community", enabled: true },
    { key: "dm", label: "Private Messaging", enabled: true },
    { key: "payments", label: "Payments System", enabled: false },
    { key: "ai_help", label: "AI Help", enabled: true },
    { key: "rewards", label: "GF Rewards System", enabled: true },
  ];

  return (
    <div className="p-6">
      <Watermark role="superadmin" />

      <h1 className="text-2xl font-bold mb-4">Feature Flags</h1>

      <div className="space-y-3">
        {features.map((f) => (
          <div
            key={f.key}
            className="flex items-center justify-between border p-3 rounded"
          >
            <span>{f.label}</span>
            <span
              className={`text-xs px-3 py-1 rounded ${
                f.enabled
                  ? "bg-green-100 text-green-700"
                  : "bg-red-100 text-red-700"
              }`}
            >
              {f.enabled ? "ON" : "OFF"}
            </span>
          </div>
        ))}
      </div>

      <p className="text-xs text-gray-500 mt-4">
        Disabling a feature immediately affects the entire platform.
      </p>
    </div>
  );
}
