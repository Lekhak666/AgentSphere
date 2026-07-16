export default function ActivityPanel({ logs }) {
  return (
    <div className="bg-[#121A2F] rounded-xl border border-white/10 p-6">

      <h2 className="text-xl font-semibold mb-5">
        ⚡ Live Agent Activity
      </h2>

      <div className="space-y-3">

        {logs.map((log, index) => (

          <div
            key={index}
            className="
            flex
            items-center
            gap-3
            bg-[#0B1020]
            rounded-lg
            px-4
            py-3
            border
            border-white/5
            "
          >
            <div className="w-2 h-2 rounded-full bg-indigo-400" />

            <p className="text-gray-300 text-sm">
              {log}
            </p>

          </div>

        ))}

      </div>

    </div>
  );
}