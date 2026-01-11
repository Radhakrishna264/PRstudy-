"use client";

import Link from "next/link";

export default function SearchAccountPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-black px-4 text-white">
      <div className="w-full max-w-sm bg-[#0b0f1a] border border-purple-500/20 rounded-2xl p-6">

        <h1 className="text-xl font-semibold text-center text-purple-400">
          Find Your Account
        </h1>

        <p className="text-xs text-center text-gray-400 mt-1">
          We’ll help you locate your PRstudy account
        </p>

        <input
          type="text"
          placeholder="Email or Mobile"
          className="w-full mt-6 px-4 py-2 rounded-lg bg-black border border-gray-700 focus:border-purple-500 outline-none text-sm"
        />

        <button className="w-full mt-4 py-2 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 text-sm">
          Search Account
        </button>

        <p className="mt-6 text-center text-xs text-gray-400">
          Remembered details?{" "}
          <Link href="/login" className="text-purple-400 hover:underline">
            Login
          </Link>
        </p>
      </div>
    </main>
  );
}
