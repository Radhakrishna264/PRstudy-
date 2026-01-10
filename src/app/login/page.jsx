"use client";

import Link from "next/link";

export default function LoginPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-black px-4 text-white">
      <div className="w-full max-w-sm bg-[#0b0f1a] border border-purple-500/20 rounded-2xl p-6 shadow-xl">
        
        <h1 className="text-2xl font-semibold text-center text-purple-400">
          Login to PRstudy
        </h1>

        <p className="text-xs text-center text-gray-400 mt-1">
          Email / Mobile / PR ID
        </p>

        <form className="mt-6 space-y-4">
          <input
            type="text"
            placeholder="Email / Mobile / PRXXXX"
            className="w-full px-4 py-2 rounded-lg bg-black border border-gray-700 focus:border-purple-500 outline-none text-sm"
          />

          <input
            type="password"
            placeholder="Password or OTP"
            className="w-full px-4 py-2 rounded-lg bg-black border border-gray-700 focus:border-purple-500 outline-none text-sm"
          />

          <button
            type="submit"
            className="w-full py-2 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 text-sm font-medium hover:opacity-90 transition"
          >
            Login
          </button>
        </form>

        <div className="flex justify-between mt-4 text-xs text-gray-400">
          <button className="hover:text-purple-400">
            Use OTP instead
          </button>
          <button className="hover:text-purple-400">
            Forgot password?
          </button>
        </div>

        <p className="mt-6 text-center text-xs text-gray-400">
          Don’t have an account?{" "}
          <Link href="/signup" className="text-purple-400 hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    </main>
  );
}
