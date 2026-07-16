export default function ActivityPanel() {
  return (
    <div className="bg-[#121A2F] rounded-xl border border-white/10 p-6 mb-6">

      <h2 className="text-xl font-semibold mb-4">
        ⚡ Live Agent Activity
      </h2>

      <div className="space-y-3 text-gray-300">

        <p>🧠 Planner — Waiting...</p>

        <p>🔎 Researcher — Waiting...</p>

        <p>✍ Writer — Waiting...</p>

        <p>✅ Reviewer — Waiting...</p>

      </div>

    </div>
  );
}