export default function AdminGuard({ role, children }) {
  if (role !== "ADMIN" && role !== "SUPERADMIN") {
    return null;
  }

  return children;
}
