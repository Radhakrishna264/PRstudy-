import { getSession } from "../../lib/session";

export default async function AdminGuard({ children }) {
  const session = await getSession();

  if (!session || (session.role !== "admin" && session.role !== "superadmin")) {
    return (
      <div className="guard-denied">
        <h2>Access Restricted</h2>
        <p>You do not have permission to access this section.</p>
      </div>
    );
  }

  return <>{children}</>;
}
