import Link from "next/link";

export default function Header({ glow = "soft" }) {
  const glowClass = glow === "hero" ? "neon-hero" : "neon-soft";

  return (
    <header className="w-full px-6 py-4 flex items-center justify-between">
      <Link href="/" className={`flex items-center gap-3 ${glowClass}`}>
        <img src="/brand/logo.svg" alt="PRstudy" className="h-10 w-auto" />
      </Link>

      <nav className="text-sm opacity-80">
        {/* keep existing nav if any */}
      </nav>
    </header>
  );
}
