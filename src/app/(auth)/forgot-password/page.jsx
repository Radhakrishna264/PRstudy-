import Header from "../../components/Header";

export default function ForgotPasswordPage() {
  return (
    <main className="min-h-screen flex flex-col">
      {/* Top Brand Header */}
      <Header glow="soft" />

      {/* Content */}
      <section className="flex flex-1 items-center justify-center">
        <div className="w-full max-w-md p-6">
          <h1 className="text-2xl font-semibold mb-2">Forgot Password</h1>

          <p className="text-sm opacity-70 mb-6">
            भवत: लक्ष्यं भवत: जीवनम् अस्ति।
          </p>

          {/* Placeholder – real logic Phase-10 */}
          <div className="border rounded p-4 opacity-60">
            Password recovery form placeholder
          </div>
        </div>
      </section>
    </main>
  );
}
