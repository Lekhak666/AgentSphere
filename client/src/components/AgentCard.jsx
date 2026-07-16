export default function AgentCard({ icon, name, status }) {
  return (
    <div className="bg-[#121A2F] rounded-xl p-4 border border-white/10">

      <div className="flex justify-between">

        <div>
          <h3 className="font-semibold">
            {icon} {name}
          </h3>

          <p className="text-sm text-gray-400">
            {status}
          </p>

        </div>

        <span className="text-green-400">
          ●
        </span>

      </div>

    </div>
  );
}