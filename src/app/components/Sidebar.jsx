import branding from "../../config/branding";

export default function Sidebar() {
  return (
    <aside className="prstudy-sidebar">
      <div className="sidebar-brand">
        {branding.name}
      </div>

      <nav className="sidebar-nav">
        {/* routes injected later */}
      </nav>
    </aside>
  );
}
