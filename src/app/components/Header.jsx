import { BRANDING } from "../../config/branding";

export default function Header() {
  return (
    <header className="w-full border-b border-gray-800 bg-black/40">
      <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col items-center">
        <h1 className="text-2xl font-bold text-primary tracking-wide">
          {BRANDING.name}
        </h1>
        <p className="text-xs text-gray-400 mt-1 tracking-wide text-center">
          {BRANDING.slogan}
        </p>
      </div>
    </header>
  );
}
