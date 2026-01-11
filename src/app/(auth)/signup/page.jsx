"use client";

import Link from "next/link";

export default function SignupPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-black px-4 text-white">
      <div className="w-full max-w-sm bg-[#0b0f1a] border border-purple-500/20 rounded-2xl p-6 shadow-xl">

        <h1 className="text-2xl font-semibold text-center text-purple-400">
          Create PRstudy Account
        </h1>

        <p className="text-xs text-center text-gray-400 mt-1">
          Email & Mobile required
        </p>

        <form className="mt-6 space-y-4">
          <input
            type="email"
            placeholder="Email address"
            className="w-full px-4 py-2 rounded-lg bg-black border border-gray-700 focus:border-purple-500 outline-none text-sm"
          />

          <input
            type="tel"
            placeholder="Mobile number"
            className="w-full px-4 py-2 rounded-lg bg-black border border-gray-700 focus:border-purple-500 outline-none text-sm"
          />

          <input
            type="password"
            placeholder="Password (optional)"
            className="w-full px-4 py-2 rounded-lg bg-black border border-gray-700 focus:border-purple-500 outline-none text-sm"
          />

          <button
            type="submit"
            className="w-full py-2 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 text-sm font-medium hover:opacity-90 transition"
          >
            Sign up
          </button>
        </form>

        <p className="mt-6 text-center text-xs text-gray-400">
          Already have an account?{" "}
          <Link href="/login" className="text-purple-400 hover:underline">
            Login
          </Link>
        </p>
      </div>
    </main>
  );
}
