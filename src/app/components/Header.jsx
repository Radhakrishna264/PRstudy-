"use client";

import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full px-4 py-3 bg-black/40 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto flex items-center justify-between">

        <div className="flex items-center gap-3">
          <img
            src="/logo.png"
            alt="PRstudy Logo"
            width={28}
            height={28}
          />
          <span className="text-lg font-semibold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            PRstudy
          </span>
        </div>

        <Link
          href="/login"
          className="text-sm text-gray-300 hover:text-white transition"
        >
          Login
        </Link>

      </div>
    </header>
  );
}
