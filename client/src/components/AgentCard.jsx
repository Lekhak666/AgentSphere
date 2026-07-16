export default function AgentCard({
  icon,
  name,
  role,
  status,
}) {

  const statusStyle = {
    Idle: {
      badge: "bg-gray-500/20 text-gray-300",
      dot: "bg-gray-400",
      label: "⚪ Idle",
    },

    Working: {
      badge: "bg-yellow-500/20 text-yellow-300",
      dot: "bg-yellow-400 animate-pulse",
      label: "🟡 Working",
    },

    Completed: {
      badge: "bg-green-500/20 text-green-300",
      dot: "bg-green-400",
      label: "🟢 Completed",
    },
  };

  const current =
    statusStyle[status] || statusStyle.Idle;

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
      <div className="flex justify-between items-start">

        <div>

          <h3 className="font-semibold text-lg">
            {icon} {name}
          </h3>

          <p className="text-xs text-gray-500 mt-1">
            {role}
          </p>

          <span
            className={`
              inline-block
              mt-4
              px-3
              py-1
              rounded-full
              text-xs
              font-medium
              ${current.badge}
            `}
          >
            {current.label}
          </span>

        </div>

        <div
          className={`
            w-3
            h-3
            rounded-full
            ${current.dot}
          `}
        />
      </div>
    </div>
  );
}