export default function AgentCard({
  icon,
  name,
  role,
  status,
}) {
  return (
    <div
      className="
        bg-[#121A2F]
        rounded-xl
        p-5
        border
        border-white/10
        hover:border-indigo-500
        hover:-translate-y-1
        transition-all
        duration-300
      "
    >
      <div className="flex items-start justify-between">
        <div>
          <h3 className="font-semibold text-lg">
            {icon} {name}
          </h3>

          <p className="text-xs text-gray-500 mt-1">
            {role}
          </p>

          <span className="inline-block mt-3 px-3 py-1 rounded-full bg-green-500/20 text-green-400 text-xs font-medium">
            🟢 {status.toUpperCase()}
          </span>
        </div>

        <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse" />
      </div>
    </div>
  );
}