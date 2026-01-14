import { redirect } from "next/navigation";
import { getSession } from "../../../lib/session";

export default async function AnalyticsPage() {
  const session = await getSession();
  if (!session) redirect("/login");

  const role = session.user?.role;
  if (role !== "admin" && role !== "superadmin") redirect("/dashboard");

  return (
    <section>
      <h1 className="text-2xl font-bold mb-4">Analytics</h1>

      <p className="text-sm text-gray-600 mb-6">
        Privacy-first analytics. Aggregated by default.
      </p>

      <ul className="list-disc ml-6 text-sm">
        <li>User behavior & engagement</li>
        <li>Test performance & abuse signals</li>
        <li>Revenue insights (SuperAdmin only)</li>
        <li>AI misuse flags</li>
      </ul>

      {role === "superadmin" && (
        <div className="mt-4 p-3 bg-yellow-50 border rounded">
          Drill-down access enabled for SuperAdmin.
        </div>
      )}
    </section>
  );
}
