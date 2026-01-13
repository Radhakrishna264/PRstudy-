// src/app/(app)/dashboard/layout.jsx
import { redirect } from "next/navigation";
import { getSession } from "../../../lib/session";

export default async function DashboardLayout({ children }) {
  const session = await getSession();

  // ❌ Not logged in → login
  if (!session || !session.user) {
    redirect("/auth/login");
  }

  return <>{children}</>;
}
