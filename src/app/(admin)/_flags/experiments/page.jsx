// src/app/(admin)/_flags/experiments/page.jsx

import { redirect } from "next/navigation";
import { getSession } from "../../../lib/session";
import Watermark from "../../components/Watermark";

export default async function ExperimentsPage() {
  const session = await getSession();
  if (!session) redirect("/login");

  if (session.user?.role !== "superadmin") {
    redirect("/admin-dashboard");
  }

  const experiments = [
    { id: 1, name: "AI Smart Analytics", status: "ACTIVE" },
    { id: 2, name: "Adaptive Test Difficulty", status: "PAUSED" },
    { id: 3, name: "Next-Gen Rewards Engine", status: "ACTIVE" },
  ];

  return (
    <div className="p-6">
      <Watermark role="superadmin" />

      <h1 className="text-2xl font-bold mb-4">Experiments</h1>

      <div className="space-y-3">
        {experiments.map((exp) => (
          <div
            key={exp.id}
            className="flex justify-between items-center border rounded p-4"
          >
            <span>{exp.name}</span>
            <span
              className={`text-xs px-3 py-1 rounded ${
                exp.status === "ACTIVE"
                  ? "bg-green-100 text-green-700"
                  : "bg-yellow-100 text-yellow-700"
              }`}
            >
              {exp.status}
            </span>
          </div>
        ))}
      </div>

      <p className="text-xs text-gray-500 mt-4">
        Experiments are isolated and never affect live users without approval.
      </p>
    </div>
  );
}
