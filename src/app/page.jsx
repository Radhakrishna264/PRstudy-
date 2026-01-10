import Link from "next/link";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#05070f] via-[#0b0f1a] to-[#05070f] flex items-center justify-center px-6">
      
      <div className="max-w-xl w-full text-center relative">
        
        {/* Glow Background */}
        <div className="absolute inset-0 blur-3xl opacity-30 bg-indigo-600/20 rounded-full"></div>

        {/* Logo */}
        <div className="relative flex justify-center mb-6">
          <div className="h-20 w-20 rounded-2xl bg-[#0b0f1a] border border-white/10 flex items-center justify-center shadow-xl">
            <span className="text-3xl font-extrabold">
              <span className="text-orange-500">P</span>
              <span className="text-green-500">R</span>
            </span>
          </div>
        </div>

        {/* Brand Name */}
        <h1 className="relative text-4xl sm:text-5xl font-extrabold mb-4 bg-gradient-to-r from-indigo-400 via-cyan-400 to-indigo-500 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(99,102,241,0.6)] tracking-wide">
          PRstudy
        </h1>

        {/* Tagline */}
        <p className="relative text-gray-400 text-sm sm:text-base mb-10">
          A focused workspace for learning, files, and collaboration
        </p>

        {/* Buttons */}
        <div className="relative flex flex-col sm:flex-row gap-4 justify-center">
          
          <Link
            href="/login"
            className="px-7 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 transition text-white font-medium shadow-lg shadow-indigo-600/30"
          >
            Enter Workspace
          </Link>

          <Link
            href="/login"
            className="px-7 py-3 rounded-xl border border-white/20 text-white hover:bg-white/5 transition"
          >
            Login
          </Link>

        </div>

        {/* Footer */}
        <p className="relative text-xs text-gray-500 mt-14">
          © {new Date().getFullYear()} PRstudy · Built for focus 🇮🇳
        </p>

      </div>
    </div>
  );
}
