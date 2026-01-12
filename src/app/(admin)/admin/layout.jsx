"use client";

export default function AdminLayout({ children }) {
  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      <aside style={{ width: 240, background: "#111", color: "#fff" }}>
        <h3 style={{ padding: 16 }}>Admin Panel</h3>
      </aside>
      <main style={{ flex: 1, padding: 24 }}>
        {children}
      </main>
    </div>
  );
}
