import Header from "../../components/Header";

export default function SearchAccountPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header glow="soft" />

      <section className="flex flex-1 items-center justify-center">
        <div className="w-full max-w-md p-6">
          <h1 className="text-2xl font-semibold mb-2">Search Account</h1>
          <p className="text-sm opacity-70 mb-6">
            भवत: लक्ष्यं भवत: जीवनम् अस्ति।
          </p>

          <div className="border rounded p-4 opacity-60">
            Search account placeholder
          </div>
        </div>
      </section>
    </main>
  );
}
