export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-black text-white">
      <h1 className="text-6xl font-bold">PR</h1>
      <h2 className="text-3xl mt-2">PRstudy</h2>
      <p className="mt-3 text-orange-400 text-lg">🇮🇳 INDIA YAAD RAKHE 🇮🇳</p>
      <div className="mt-10 flex gap-4">
        <a href="/files" className="px-5 py-3 bg-blue-600 rounded">Files Hub</a>
        <a href="/chat" className="px-5 py-3 bg-green-600 rounded">Chat</a>
        <a href="/login" className="px-5 py-3 bg-purple-600 rounded">Login</a>
      </div>
    </main>
  );
}
