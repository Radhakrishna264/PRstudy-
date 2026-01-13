import { redirect } from "next/navigation";
import { getSession } from "../../../lib/session";

export default async function DashboardPage() {
  const session = await getSession();

  if (!session?.user) {
    redirect("/auth/login");
  }

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      <p className="text-gray-400">
        Overview of your activity, tests, rewards, and progress.
      </p>
    </div>
  );
}
