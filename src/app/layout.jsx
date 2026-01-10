import "./globals.css";

export const metadata = {
  title: "PRstudy",
  description: "A premium admin-controlled study workspace",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-black text-white">
        {/* Global Header */}
        <header className="fixed top-0 left-0 w-full flex items-center justify-between px-4 py-3 z-50">
          <div className="flex items-center gap-2">
            <img
              src="/prstudy-logo.png"
              alt="PRstudy Logo"
              className="w-8 h-8 rounded-lg shadow-[0_0_20px_rgba(139,92,246,0.9)]"
            />
            <span className="font-semibold text-sm text-purple-300">
              PRstudy
            </span>
          </div>

          <a
            href="/login"
            className="text-xs px-3 py-1 rounded-full border border-purple-500/40 hover:bg-purple-600/20 transition"
          >
            Login
          </a>
        </header>

        {/* Page Content */}
        <main className="pt-20">{children}</main>
      </body>
    </html>
  );
}
