import Image from "next/image";

export default function PublicHome() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center text-center px-6 relative overflow-hidden">

      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-radial opacity-40 pointer-events-none" />

      {/* Logo */}
      <div className="relative z-10 mb-6">
        <Image
          src="/logo-prstudy-final.png"
          alt="PRstudy Logo"
          width={110}
          height={110}
          priority
        />
      </div>

      {/* Title */}
      <h1 className="relative z-10 text-4xl md:text-5xl font-semibold tracking-wide neon-text">
        PRstudy
      </h1>

      {/* Sanskrit slogan */}
      <p className="relative z-10 mt-3 text-sm md:text-base opacity-70 max-w-md">
        अध्ययनं ज्ञानस्य मूलं — The foundation of true knowledge
      </p>

      {/* CTA buttons */}
      <div className="relative z-10 mt-8 flex flex-col sm:flex-row gap-4">
        <a
          href="/login"
          className="px-7 py-3 rounded-xl bg-gradient-to-r from-indigo-500 to-cyan-400 text-black font-medium hover:scale-[1.03] transition"
        >
          Access Workspace
        </a>

        <a
          href="/signup"
          className="px-7 py-3 rounded-xl border border-white/20 hover:bg-white/10 transition"
        >
          Create Account
        </a>
      </div>

      {/* Footer signature */}
      <div className="relative z-10 mt-16 text-xs opacity-50">
        Crafted & Administered by <span className="italic">Praveen Rajput</span>
      </div>

    </main>
  );
}
