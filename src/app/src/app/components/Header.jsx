"use client";

import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full px-4 py-3 bg-black/40 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto flex items-center justify-between">

        {/* LOGO */}
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-purple-600 to-blue-500 p-[2px] shadow-lg shadow-purple-500/30">
            <div className="h-full w-full rounded-xl bg-black flex items-center justify-center">
              <Image
                src="/logo.png"
                alt="PR Logo"
                width={24}
                height={24}
              />
            </div>
          </div>

          <span className="text-lg font-semibold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            PRstudy
          </span>
        </div>

        {/* ACTIONS */}
        <div className="flex items-center gap-3">
          <Link
            href="/login"
            className="text-sm text-gray-300 hover:text-white transition"
          >
            Login
          </Link>
        </div>

      </div>
    </header>
  );
}
