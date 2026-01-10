export default function Home() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center bg-gradient-to-b from-[#05050a] via-[#070718] to-black px-4">

      {/* LOGO */}
      <img
        src="/prstudy-logo.png"
        alt="PRstudy Logo"
        className="w-24 h-24 mb-4 rounded-2xl
        shadow-[0_0_60px_rgba(139,92,246,0.9)]"
      />

      {/* TITLE */}
      <h1 className="text-3xl font-bold tracking-wide
        bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400
        text-transparent bg-clip-text">
        PRstudy
      </h1>

      {/* SANSKRIT TAGLINE */}
      <p className="mt-1 text-sm text-purple-300">
        अध्ययनं विकासस्य मूलम्
      </p>

      {/* DESCRIPTION */}
      <p className="mt-3 max-w-md text-xs text-gray-400">
        A premium, admin-controlled study workspace for files, practice,
        tests, and focused learning.
      </p>

      {/* CTA BUTTONS */}
      <div className="mt-6 flex gap-3">
        <a
          href="/files"
          className="px-5 py-2 text-sm rounded-xl
          bg-purple-600 hover:bg-purple-700
          shadow-[0_0_25px_rgba(139,92,246,0.6)] transition"
        >
          Explore Free Files
        </a>

        <a
          href="/login"
          className="px-5 py-2 text-sm rounded-xl
          border border-purple-500/40 hover:bg-purple-500/10 transition"
        >
          Login / Signup
        </a>
      </div>

      {/* FOOTER SIGNATURE */}
      <footer className="mt-10 text-[11px] text-gray-500">
        © 2026 PRstudy · Built for focus  
        <br />
        <span className="italic text-purple-400">
          — Praveen Rajput
        </span>
      </footer>
    </section>
  );
}
