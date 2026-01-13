export default function AppLayout({ children }) {
  return (
    <section className="min-h-screen flex">
      <aside className="w-64 hidden md:block bg-black/50 border-r border-gray-800">
        <div className="p-4 font-bold text-primary">PRstudy</div>
        <nav className="px-4 space-y-2 text-sm text-gray-300">
          <a href="/dashboard" className="block hover:text-primary">Dashboard</a>
          <a href="/files" className="block hover:text-primary">Files</a>
          <a href="/tests" className="block hover:text-primary">Tests</a>
          <a href="/chat" className="block hover:text-primary">Chat</a>
          <a href="/profile" className="block hover:text-primary">Profile</a>
          <a href="/rewards" className="block hover:text-primary">Rewards</a>
        </nav>
      </aside>

      <main className="flex-1 p-6">{children}</main>
    </section>
  );
}
