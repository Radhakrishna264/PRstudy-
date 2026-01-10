"use client";

import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-[#070b16] text-white px-4">
      
      {/* LOGO + BRAND */}
      <div className="flex flex-col items-center mb-10">
        <div className="h-20 w-20 rounded-2xl bg-[#0b0f1a] flex items-center justify-center
          shadow-[0_0_35px_rgba(99,102,241,0.7)] mb-4">
          <img
            src="/logo.png"
            alt="PRstudy Logo"
            className="h-14 w-14 object-contain"
          />
        </div>

        <h1
          className="text-4xl font-semibold tracking-wide text-transparent bg-clip-text
          bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400
          drop-shadow-[0_0_20px_rgba(139,92,246,0.6)]"
        >
          PRstudy
        </h1>

        <p className="text-gray-400 mt-2 text-center max-w-md">
          A premium workspace for focused learning, files, and collaboration
        </p>
      </div>

      {/* ACTION BUTTONS */}
      <div className="flex gap-4 mb-12">
        <Link
          href="/login"
          className="px-6 py-3 rounded-lg bg-indigo-600 hover:bg-indigo-500
          transition shadow-[0_0_20px_rgba(99,102,241,0.6)]"
        >
          Enter Workspace
        </Link>

        <Link
          href="/login"
          className="px-6 py-3 rounded-lg border border-white/20
          hover:bg-white/10 transition"
        >
          Login
        </Link>
      </div>

      {/* FEATURE CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl w-full">
        {[
          {
            title: "Files Hub",
            desc: "Organize and manage study files in one place",
          },
          {
            title: "Chat & DM",
            desc: "Public chat and private messaging with full control",
          },
          {
            title: "Admin Panel",
            desc: "Powerful admin dashboard with silent access",
          },
          {
            title: "AI Help",
            desc: "Smart assistance for study and files (coming soon)",
          },
        ].map((item, i) => (
          <div
            key={i}
            className="rounded-xl bg-[#0b0f1a] border border-white/10
            p-5 hover:shadow-[0_0_25px_rgba(99,102,241,0.4)]
            transition"
          >
            <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
            <p className="text-sm text-gray-400">{item.desc}</p>
          </div>
        ))}
      </div>

      {/* FOOTER */}
      <footer className="mt-14 text-xs text-gray-500">
        © {new Date().getFullYear()} PRstudy · Built for focus
      </footer>
    </main>
  );
}}
