import { redirect } from "next/navigation";
import { getSession } from "../../../lib/session";

export default async function AdminDashboardPage() {
  const session = await getSession();

  if (!session?.user) {
    redirect("/auth/login");
  }

  if (
    session.user.role !== "ADMIN" &&
    session.user.role !== "SUPERADMIN"
  ) {
    redirect("/dashboard");
  }

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>
      <p className="text-gray-400">
        System overview and administrative controls.
      </p>
    </div>
  );
}
