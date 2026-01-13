export default function SearchAccountPage() {
  return (
    <main className="min-h-screen flex items-center justify-center px-6">
      <div className="w-full max-w-md bg-black/40 p-6 rounded-xl">
        <h1 className="text-2xl font-bold mb-2">Find your account</h1>
        <p className="text-sm text-gray-400 mb-6">
          Enter Email, Mobile number, or PR-ID to search your account.
        </p>

        <input
          placeholder="Email / Mobile / PR-ID"
          className="w-full mb-4 p-3 rounded bg-black/60 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-primary"
        />

        <button className="w-full py-3 bg-primary text-black rounded font-semibold hover:opacity-90 transition">
          Search Account
        </button>

        <div className="mt-4 text-sm text-center text-gray-400">
          Remembered your password?{" "}
          <a href="/login" className="text-primary hover:underline">
            Login
          </a>
        </div>
      </div>
    </main>
  );
}
