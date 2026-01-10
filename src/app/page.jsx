'use client';

import Link from "next/link";

export default function HomePage() {
  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center
      bg-[#050510] text-white px-4 overflow-hidden">

      {/* NEON BACKGROUND GLOW */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px]
          -translate-x-1/2 -translate-y-1/2
          bg-gradient-to-r from-purple-600/30 via-pink-500/30 to-cyan-400/30
          blur-[140px] rounded-full" />
      </div>

      {/* LOGO */}
      <img
        src="/logo-prstudy-final.png"
        alt="PRstudy Logo"
        className="w-20 h-20 rounded-2xl mb-4
        shadow-[0_0_40px_rgba(160,120,255,0.85)]"
      />

      {/* BRAND */}
      <h1 className="text-4xl font-bold mb-2 text-center
        bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400
        bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(150,120,255,0.6)]">
        PRstudy
      </h1>

      <p className="text-gray-400 text-center max-w-md mb-8">
        A premium workspace for focused learning, files, and collaboration
      </p>

      {/* BUTTONS */}
      <div className="flex gap-4 mb-10">
        <Link
          href="/login"
          className="px-6 py-2 rounded-lg bg-indigo-600
          hover:bg-indigo-500 transition shadow-[0_0_25px_rgba(99,102,241,0.6)]">
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

        {[
          ["📁 Files Hub", "Organize, access and manage study files in one place"],
          ["💬 Chat & DM", "Public chat and private messaging with full control"],
          ["🛡 Admin Panel", "Powerful admin dashboard with silent access"],
          ["🤖 AI Help", "Smart assistance for study and files (coming soon)"],
        ].map(([title, desc]) => (
          <div
            key={title}
            className="bg-white/5 border border-white/10 rounded-xl p-4
            backdrop-blur-md hover:bg-white/10 transition">
            <h3 className="font-semibold mb-1">{title}</h3>
            <p className="text-sm text-gray-400">{desc}</p>
          </div>
        ))}
      </div>

      <p className="text-xs text-gray-500 mt-10">
        © 2026 PRstudy · Built for focus
      </p>
    </main>
  );
}
