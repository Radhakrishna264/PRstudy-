import Link from "next/link";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#0b0f1a] flex items-center justify-center px-6">
      
      <div className="max-w-xl w-full text-center">
        
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <div className="h-16 w-16 rounded-2xl bg-indigo-600 flex items-center justify-center text-white text-2xl font-bold shadow-lg shadow-indigo-500/30">
            PR
          </div>
        </div>

        {/* Brand */}
        <h1 className="text-3xl sm:text-4xl font-bold text-white mb-3">
          PRstudy
        </h1>

        <p className="text-gray-400 text-sm sm:text-base mb-10">
          A focused workspace for learning, files, and collaboration
        </p>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          
          <Link
            href="/login"
            className="px-6 py-3 rounded-lg bg-indigo-600 hover:bg-indigo-500 transition text-white font-medium text-center"
          >
            Enter Workspace
          </Link>

          <Link
            href="/login"
            className="px-6 py-3 rounded-lg border border-white/20 text-white hover:bg-white/5 transition text-center"
          >
            Login
          </Link>

        </div>

        {/* Footer note */}
        <p className="text-xs text-gray-500 mt-12">
          © {new Date().getFullYear()} PRstudy · Built for focus
        </p>

      </div>
    </div>
  );
}
