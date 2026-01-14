import { redirect } from "next/navigation";
import { getSession } from "../../../lib/session";

export default async function TestsControlPage() {
  const session = await getSession();
  if (!session) redirect("/login");

  const role = session.user?.role;
  if (role !== "admin" && role !== "superadmin") redirect("/dashboard");

  return (
    <section>
      <h1 className="text-2xl font-bold mb-4">Tests Control</h1>

      <p className="text-sm text-gray-600 mb-6">
        Upload, configure, and manage all test types: Live, Weekly Paid,
        VIP Online Attempts.
      </p>

      <div className="grid gap-4 md:grid-cols-2">
        <Action title="Upload New Test" desc="PDF based bulk upload with answer matching" />
        <Action title="Configure Rules" desc="Attempts, limits, time window, recheck" />
        <Action title="Test Modes" desc="Normal / Weekly Paid / VIP Online" />
        <Action title="Anti-Cheat & Flags" desc="Detect & log suspicious behavior" />
      </div>
    </section>
  );
}

function Action({ title, desc }) {
  return (
    <div className="border rounded p-4 bg-white">
      <h3 className="font-semibold">{title}</h3>
      <p className="text-sm text-gray-600">{desc}</p>
    </div>
  );
}
