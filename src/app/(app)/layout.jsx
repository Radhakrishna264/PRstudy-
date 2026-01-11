export default function AppLayout({ children }) {
  return (
    <div className="flex min-h-screen bg-[#0b1020] text-white">

      {/* SIDEBAR */}
      <aside className="w-64 bg-[#0e1430] border-r border-white/10 p-4 flex flex-col">
        <div className="text-xl font-semibold mb-6">
          PRstudy
        </div>

        <nav className="space-y-3 text-sm flex-1">
          <a href="/dashboard" className="block opacity-90 hover:opacity-100">
            Dashboard
          </a>
          <a href="/files" className="block opacity-70 hover:opacity-100">
            Files
          </a>
          <a href="/community" className="block opacity-70 hover:opacity-100">
            Community
          </a>
          <a href="/profile" className="block opacity-70 hover:opacity-100">
            Profile
          </a>
          <a href="/help" className="block opacity-70 hover:opacity-100">
            Help
          </a>
        </nav>

        <div className="text-xs opacity-60 mt-6">
          — Praveen Rajput
        </div>
      </aside>

      {/* MAIN CONTENT */}
      <main className="flex-1 p-6">
        {children}
      </main>

    </div>
  );
}
