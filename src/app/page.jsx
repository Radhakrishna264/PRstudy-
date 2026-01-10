'use client';

import Link from "next/link";

export default function HomePage() {
  return (
    <main className="relative min-h-screen bg-[#04050c] text-white overflow-hidden">

      {/* ================= HEADER ================= */}
      <header className="flex items-center justify-between px-5 py-4">
        {/* Logo only */}
        <img
          src="/logo-prstudy-final.png"
          alt="PRstudy Logo"
          className="h-9 w-9"
        />

        <div className="flex items-center gap-4 text-sm">
          <Link href="/login" className="opacity-80 hover:opacity-100">
            Login
          </Link>
          <span className="text-xl cursor-pointer opacity-80">⋮</span>
        </div>
      </header>

      {/* ================= HERO ================= */}
      <section className="relative flex flex-col items-center justify-center text-center px-6 pt-24 pb-32">

        {/* Neon Background Glow */}
        <div className="absolute inset-0 -z-10 flex items-center justify-center">
          <div className="w-[560px] h-[560px] rounded-full
            bg-gradient-to-br from-purple-600/35 via-blue-500/25 to-transparent
            blur-[160px]" />
        </div>

        {/* Logo */}
        <img
          src="/logo-prstudy-final.png"
          alt="PRstudy Logo"
          className="h-20 w-20 mb-6"
        />

        {/* Brand Name */}
        <h1 className="text-4xl sm:text-5xl font-semibold tracking-wide
          bg-gradient-to-r from-purple-400 to-blue-400
          bg-clip-text text-transparent">
          PRstudy
        </h1>

        {/* Sanskrit Slogan */}
        <p className="mt-3 text-lg tracking-wide text-[#B9A7FF]">
          अध्ययनं विकासस्य मूलम्
        </p>

        {/* Description */}
        <p className="mt-6 max-w-xl text-gray-400 text-sm sm:text-base">
          A premium, admin-controlled study workspace for files,
          practice, and focused learning.
        </p>

        {/* CTA Buttons */}
        <div className="mt-10 flex gap-4">
          <Link
            href="/files"
            className="px-6 py-3 rounded-lg bg-indigo-600
            hover:bg-indigo-500 transition shadow-md">
            Explore Free Files
          </Link>

          <Link
            href="/login"
            className="px-6 py-3 rounded-lg border border-white/20
            hover:bg-white/5 transition">
            Login / Signup
          </Link>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="px-6 py-6 text-center text-xs text-gray-500">
        <p>© {new Date().getFullYear()} PRstudy · Built for focus</p>

        {/* Admin Signature */}
        <p className="mt-2 text-sm text-purple-400 opacity-80 italic">
          — Praveen Rajput
        </p>
      </footer>

    </main>
  );
}
