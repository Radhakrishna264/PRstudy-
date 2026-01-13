export default function LoginPage() {
  return (
    <main className="min-h-screen flex items-center justify-center px-6">
      <div className="w-full max-w-md bg-black/40 p-6 rounded-xl">
        <h1 className="text-2xl font-bold mb-6">Login</h1>
        <input
          placeholder="Email / Mobile / PR-ID"
          className="w-full mb-3 p-3 rounded bg-black/60 border border-gray-700"
        />
        <input
          placeholder="Password / OTP"
          type="password"
          className="w-full mb-4 p-3 rounded bg-black/60 border border-gray-700"
        />
        <button className="w-full py-3 bg-primary text-black rounded font-semibold">
          Login
        </button>
      </div>
    </main>
  );
}
