import { redirect } from "next/navigation";
import { getSession } from "../../../lib/session";

export default async function PaymentsPage() {
  const session = await getSession();
  if (!session) redirect("/login");

  const role = session.user?.role;
  if (role !== "admin" && role !== "superadmin") redirect("/dashboard");

  return (
    <section>
      <h1 className="text-2xl font-bold mb-4">Payments & Ledger</h1>

      <div className="p-4 border rounded bg-white">
        <p className="text-sm text-gray-700">
          Payment logs are immutable. Refunds, retries, pricing,
          gateways, and bank accounts are controlled by SuperAdmin.
        </p>

        {role === "superadmin" ? (
          <div className="mt-4 text-sm text-green-700">
            You can manage gateways, pricing, retries, refunds, and bank accounts.
          </div>
        ) : (
          <div className="mt-4 text-sm text-orange-700">
            View-only access. Escalate payment issues to SuperAdmin.
          </div>
        )}
      </div>
    </section>
  );
}
