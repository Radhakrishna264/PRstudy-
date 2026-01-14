// src/app/(admin)/_config/audits/page.jsx

import { redirect } from "next/navigation";
import { getSession } from "../../../lib/session";
import Watermark from "../../components/Watermark";

export default async function AuditLogsPage() {
  const session = await getSession();

  if (!session) redirect("/login");

  const role = session.user?.role;
  if (role !== "admin" && role !== "superadmin") {
    redirect("/dashboard");
  }

  // NOTE: Static safe data — real logs come from DB in production
  const auditLogs = [
    {
      id: 1,
      actor: "superadmin",
      action: "UPDATED PAYMENT RULES",
      timestamp: "2026-01-14 09:32",
    },
    {
      id: 2,
      actor: "admin",
      action: "FLAGGED USER FOR REVIEW",
      timestamp: "2026-01-14 10:11",
    },
  ];

  return (
    <div className="p-6">
      <Watermark role={role} />

      <h1 className="text-2xl font-bold mb-4">Audit Logs</h1>

      <div className="border rounded-lg overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-3 text-left">Actor</th>
              <th className="p-3 text-left">Action</th>
              <th className="p-3 text-left">Time</th>
            </tr>
          </thead>
          <tbody>
            {auditLogs.map((log) => (
              <tr key={log.id} className="border-t">
                <td className="p-3 capitalize">{log.actor}</td>
                <td className="p-3">{log.action}</td>
                <td className="p-3">{log.timestamp}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="text-xs text-gray-500 mt-3">
        Logs are immutable. Deletion is not allowed under any role.
      </p>
    </div>
  );
}
