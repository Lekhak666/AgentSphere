export default function ActivityPanel({ logs }) {
  return (
    <div className="bg-[#121A2F] rounded-xl border border-white/10 p-6">

      <h2 className="text-xl font-semibold mb-4">
        ⚡ Live Agent Activity
      </h2>

      <div className="space-y-2 text-gray-300">

        {logs.map((log, index) => (
          <p key={index}>➜ {log}</p>
        ))}

      </div>

    </div>
  );
}