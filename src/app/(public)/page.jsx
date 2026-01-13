import Header from "../components/Header";

export default function PublicHome() {
  return (
    <main className="min-h-screen">
      <Header glow="soft" />

      <section className="flex flex-col items-center justify-center text-center mt-24">
        <img
          src="/brand/logo.svg"
          alt="PRstudy"
          className="h-28 w-auto neon-hero"
        />
        <p className="mt-4 brand-slogan text-lg">
          भवत: लक्ष्यं भवत: जीवनम् अस्ति।
        </p>
      </section>

      <footer className="mt-24 py-8 text-center text-sm opacity-70">
        भवत: लक्ष्यं भवत: जीवनम् अस्ति।
      </footer>
    </main>
  );
}
