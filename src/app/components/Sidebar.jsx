export default function Sidebar({ role }) {
  return (
    <aside className="sidebar">
      <nav>
        <ul>
          <li>Dashboard</li>
          <li>Tests</li>
          <li>Files</li>
          <li>Rewards</li>
          <li>Profile</li>

          {role === "superadmin" && <li>Admin Panel</li>}
        </ul>
      </nav>
    </aside>
  );
}
