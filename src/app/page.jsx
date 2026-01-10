export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0b0f1a] px-4">
      <div className="w-full max-w-md bg-[#111827] rounded-2xl shadow-xl p-8 border border-white/10">
        
        {/* Logo / Brand */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-white">PRstudy</h1>
          <p className="text-sm text-gray-400 mt-1">
            Secure access to your workspace
          </p>
        </div>

        {/* Login Form */}
        <form className="space-y-5">
          
          {/* Email */}
          <div>
            <label className="block text-sm text-gray-400 mb-1">
              Email address
            </label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full rounded-lg bg-[#0b0f1a] border border-white/10 px-4 py-2.5 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm text-gray-400 mb-1">
              Password
            </label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full rounded-lg bg-[#0b0f1a] border border-white/10 px-4 py-2.5 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Forgot */}
          <div className="flex justify-end">
            <a href="#" className="text-sm text-indigo-400 hover:underline">
              Forgot password?
            </a>
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full rounded-lg bg-indigo-600 hover:bg-indigo-500 transition text-white font-medium py-2.5"
          >
            Sign in
          </button>
        </form>

        {/* Footer */}
        <p className="text-center text-xs text-gray-500 mt-6">
          © {new Date().getFullYear()} PRstudy. All rights reserved.
        </p>
      </div>
    </div>
  );
}
