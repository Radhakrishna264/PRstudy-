import "./globals.css";

export const metadata = {
  title: "PRstudy — Focused Learning Workspace",
  description:
    "PRstudy is a premium, admin-controlled learning workspace built for clarity, control, and steady progress.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* Header */}
        <header className="site-header">
          <div className="header-left">
            <img
              src="/prstudy-logo.png"
              alt="PRstudy"
              className="header-logo"
            />
            <span className="header-title">PRstudy</span>
          </div>

          <div className="header-right">
            <a href="/login" className="login-btn">
              Login
            </a>
          </div>
        </header>

        {children}
      </body>
    </html>
  );
}
