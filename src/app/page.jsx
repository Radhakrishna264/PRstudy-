'use client';

import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center
      bg-gradient-to-b from-[#050510] via-[#07071a] to-[#050510]
      text-white px-4">

      {/* LOGO */}
      <img
        src="/logo-prstudy-final.png"
        alt="PRstudy Logo"
        className="w-20 h-20 rounded-2xl mb-4
        shadow-[0_0_35px_rgba(120,90,255,0.65)]"
      />

      {/* BRAND NAME */}
      <h1 className="text-4xl font-bold mb-2 text-center
        bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400
        bg-clip-text text-transparent drop-shadow-lg">
        PRstudy
      </h1>

      {/* TAGLINE */}
      <p className="text-gray-400 text-center max-w-md mb-8">
        A premium workspace for focused learning, files, and collaboration
      </p>

      {/* ACTION BUTTONS */}
      <div className="flex gap-4 mb-10">
        <Link
          href="/login"
          className="px-6 py-2 rounded-lg bg-indigo-600
          hover:bg-indigo-500 transition shadow-lg">
          Enter Workspace
        </Link>

        <Link
          href="/login"
          className="px-6 py-2 rounded-lg border border-white/20
          hover:bg-white/5 transition">
          Login
        </Link>
      </div>

      {/* FEATURE CARDS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl w-full">

        <div className="bg-white/5 border border-white/10 rounded-xl p-4
          backdrop-blur-md">
          <h3 className="font-semibold mb-1">📁 Files Hub</h3>
          <p className="text-sm text-gray-400">
            Organize, access and manage study files in one place
          </p>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-xl p-4
          backdrop-blur-md">
          <h3 className="font-semibold mb-1">💬 Chat & DM</h3>
          <p className="text-sm text-gray-400">
            Public chat and private messaging with full control
          </p>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-xl p-4
          backdrop-blur-md">
          <h3 className="font-semibold mb-1">🛡 Admin Panel</h3>
          <p className="text-sm text-gray-400">
            Powerful admin dashboard with silent access
          </p>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-xl p-4
          backdrop-blur-md">
          <h3 className="font-semibold mb-1">🤖 AI Help</h3>
          <p className="text-sm text-gray-400">
            Smart assistance for study and files (coming soon)
          </p>
        </div>

      </div>

      {/* FOOTER */}
      <p className="text-xs text-gray-500 mt-10">
        © 2026 PRstudy · Built for focus
      </p>

    </main>
  );
}
