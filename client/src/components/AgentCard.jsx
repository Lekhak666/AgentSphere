import { motion } from "framer-motion";

export default function AgentCard({
  icon,
  name,
  role,
  status,
}) {
  const getStatusColor = () => {
    switch (status) {
      case "Working":
        return "bg-yellow-400";
      case "Completed":
        return "bg-green-400";
      default:
        return "bg-gray-500";
    }
  };

  return (
    <motion.div
      whileHover={{
        scale: 1.03,
        y: -4,
      }}
      transition={{ duration: 0.2 }}
      className="
        bg-[#121A2F]
        rounded-2xl
        p-5
        border
        border-white/10
        hover:border-cyan-400
        transition-all
        duration-300
        shadow-lg
      "
    >
      <div className="flex items-center justify-between">

        <div>

          <div className="text-3xl mb-2">
            {icon}
          </div>

          <h3 className="text-lg font-bold">
            {name}
          </h3>

          <p className="text-sm text-gray-400 mt-1">
            {role}
          </p>

        </div>

        <div className="flex flex-col items-center">

          <div
            className={`w-4 h-4 rounded-full animate-pulse ${getStatusColor()}`}
          />

          <span className="text-xs mt-2 text-gray-400">
            {status}
          </span>

        </div>

      </div>
    </motion.div>
  );
}