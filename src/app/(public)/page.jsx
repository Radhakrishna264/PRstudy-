export default function PublicHome() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
      <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
        PRstudy
      </h1>
      <p className="text-lg text-gray-300 max-w-xl mb-8">
        Premium SaaS learning platform for exams, tests, and growth.
      </p>
      <div className="flex gap-4">
        <a
          href="/login"
          className="px-6 py-3 rounded-lg bg-primary text-black font-semibold hover:opacity-90 transition"
        >
          Login
        </a>
        <a
          href="/signup"
          className="px-6 py-3 rounded-lg border border-primary text-primary hover:bg-primary hover:text-black transition"
        >
          Sign Up
        </a>
      </div>
    </main>
  );
}
