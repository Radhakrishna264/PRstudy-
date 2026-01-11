import "./globals.css";

export const metadata = {
  title: "PRstudy App",
  description: "PRstudy application dashboard",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="app-body">
        <div className="app-shell">

          {/* SIDEBAR */}
          <aside className="sidebar">
            <div className="sidebar-brand">
              <img src="/prstudy-logo.png" alt="PRstudy" />
              <span>PRstudy</span>
            </div>

            <nav className="sidebar-nav">
              <a href="/dashboard">Dashboard</a>
              <a href="/files">Files</a>
              <a href="/tests">Tests</a>
              <a href="/community">Community</a>
              <a href="/rewards">Rewards</a>
              <a href="/help">Help</a>
            </nav>

            <div className="sidebar-footer">
              <span className="admin-sign">— Praveen Rajput</span>
            </div>
          </aside>

          {/* MAIN CONTENT */}
          <main className="main-content">
            {children}
          </main>

        </div>
      </body>
    </html>
  );
}
