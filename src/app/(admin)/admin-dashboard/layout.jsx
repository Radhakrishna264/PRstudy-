// src/app/(admin)/admin-dashboard/layout.jsx
import { redirect } from "next/navigation";
import { getSession } from "@/lib/session";

export default async function AdminDashboardLayout({ children }) {
  const session = await getSession();

  // ❌ Not logged in
  if (!session?.user) {
    redirect("/auth/login");
  }

  // ❌ Logged in but not admin
  if (
    session.user.role !== "ADMIN" &&
    session.user.role !== "SUPERADMIN"
  ) {
    redirect("/dashboard");
  }

  return <>{children}</>;
}
