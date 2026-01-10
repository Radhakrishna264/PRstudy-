"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const DUMMY_EMAIL = "admin@prstudy.com";
  const DUMMY_PASSWORD = "123456";

  const handleLogin = (e) => {
    e.preventDefault();

    if (email === DUMMY_EMAIL && password === DUMMY_PASSWORD) {
      setError("");
      router.push("/admin");
    } else {
      setError("Invalid email or password");
    }
  };

  const handleForgot = () => {
    alert("Forgot password feature will be available soon.");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0b0f1a] px-4">
      <div className="w-full max-w-md bg-[#111827] rounded-2xl shadow-xl p-8 border border-white/10">

        {/* Logo */}
        <div className="flex justify-center mb-6">
          <div className="h-14 w-14 rounded-xl bg-indigo-600 flex items-center justify-center text-white font-bold text-2xl">
            PR
          </div>
        </div>

        {/* Brand */}
        <div className="text-center mb-6">
          <h1 className="text-2xl font-semibold text-white">PRstudy</h1>
          <p className="text-sm text-gray-400 mt-1">
            Secure access to your workspace
          </p>
        </div>

        {error && (
          <div className="mb-4 text-sm text-red-400 text-center">
            {error}
          </div>
        )}

        <form onSubmit={handleLogin} className="space-y-5">
          <div>
            <label className="block text-sm text-gray-400 mb-1">
              Email address
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="admin@prstudy.com"
              className="w-full rounded-lg bg-[#0b0f1a] border border-white/10 px-4 py-2.5 text-white"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-400 mb-1">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="123456"
              className="w-full rounded-lg bg-[#0b0f1a] border border-white/10 px-4 py-2.5 text-white"
            />
          </div>

          <div className="flex justify-end">
            <button
              type="button"
              onClick={handleForgot}
              className="text-sm text-indigo-400 hover:underline"
            >
              Forgot password?
            </button>
          </div>

          <button
            type="submit"
            className="w-full rounded-lg bg-indigo-600 hover:bg-indigo-500 transition text-white font-medium py-2.5"
          >
            Sign in
          </button>
        </form>

        <p className="text-center text-xs text-gray-500 mt-6">
          © {new Date().getFullYear()} PRstudy. All rights reserved.
        </p>
      </div>
    </div>
  );
}
