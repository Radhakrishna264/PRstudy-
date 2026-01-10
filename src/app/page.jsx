import Link from "next/link";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#05070f] via-[#0b0f1a] to-[#05070f] text-white">

      {/* NAVBAR */}
      <nav className="flex items-center justify-between px-6 py-4 border-b border-white/10">
        <div className="flex items-center gap-3">
          {/* Logo A+D */}
          <div className="h-9 w-9 rounded-xl bg-[#0b0f1a] border border-white/10 flex items-center justify-center
                          shadow-[0_0_20px_rgba(99,102,241,0.35)]">
            <span className="text-sm font-bold bg-gradient-to-br from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
              PR
            </span>
          </div>
          <span className="font-semibold tracking-wide">PRstudy</span>
        </div>

        <Link
          href="/login"
          className="px-4 py-2 rounded-lg border border-white/20 hover:bg-white/5 transition text-sm"
        >
          Login
        </Link>
      </nav>

      {/* HERO */}
      <section className="flex flex-col items-center justify-center text-center px-6 py-20 relative">
        <div className="absolute inset-0 blur-3xl opacity-30 bg-gradient-to-r from-indigo-500/30 to-cyan-400/20 rounded-full"></div>

        <div className="relative max-w-xl">
          <div className="flex justify-center mb-6">
            <div className="h-20 w-20 rounded-2xl bg-[#0b0f1a] border border-white/10 flex items-center justify-center
                            shadow-[0_0_40px_rgba(99,102,241,0.35)]">
              <span className="text-3xl font-bold bg-gradient-to-br from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
                PR
              </span>
            </div>
          </div>

          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4
                         bg-gradient-to-r from-indigo-400 via-cyan-400 to-indigo-500
                         bg-clip-text text-transparent">
            PRstudy
          </h1>

          <p className="text-gray-400 mb-10">
            A premium workspace for focused learning, files, and collaboration
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/login"
              className="px-7 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 transition
                         text-white font-medium shadow-lg shadow-indigo-600/30"
            >
              Enter Workspace
            </Link>

            <Link
              href="/login"
              className="px-7 py-3 rounded-xl border border-white/20 hover:bg-white/5 transition"
            >
              Login
            </Link>
          </div>
        </div>
      </section>

      {/* FEATURES PREVIEW */}
      <section className="px-6 pb-20">
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

          <FeatureCard
            title="Files Hub"
            desc="Organize, access and manage study files in one place"
          />

          <FeatureCard
            title="Chat & DM"
            desc="Public chat and private messaging with full control"
          />

          <FeatureCard
            title="Admin Panel"
            desc="Powerful admin dashboard with silent access"
          />

          <FeatureCard
            title="AI Help"
            desc="Smart assistance for study and files (coming soon)"
          />

        </div>
      </section>

      {/* FOOTER */}
      <footer className="text-center text-xs text-gray-500 py-6 border-t border-white/10">
        © {new Date().getFullYear()} PRstudy · Built for focus
      </footer>
    </div>
  );
}

function FeatureCard({ title, desc }) {
  return (
    <div className="bg-[#111827] border border-white/10 rounded-xl p-5 hover:border-indigo-500/40 transition">
      <h3 className="font-semibold mb-2">{title}</h3>
      <p className="text-sm text-gray-400">{desc}</p>
    </div>
  );
}
