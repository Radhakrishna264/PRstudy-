export default function AdminPage() {
  return (
    <div className="min-h-screen bg-[#0b0f1a] text-white p-6">
      
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-2xl font-bold">Admin Dashboard</h1>
        <span className="text-sm text-gray-400">
          PRstudy Control Panel
        </span>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="bg-[#111827] border border-white/10 rounded-xl p-5">
          <h2 className="text-sm text-gray-400">Total Users</h2>
          <p className="text-2xl font-semibold mt-2">1</p>
        </div>

        <div className="bg-[#111827] border border-white/10 rounded-xl p-5">
          <h2 className="text-sm text-gray-400">Files Uploaded</h2>
          <p className="text-2xl font-semibold mt-2">0</p>
        </div>
      </div>

      {/* Coming soon */}
      <div className="mt-10 bg-[#111827] border border-white/10 rounded-xl p-6 text-center">
        <p className="text-gray-400">
          More admin tools coming soon 🚀
        </p>
      </div>
    </div>
  );
}
