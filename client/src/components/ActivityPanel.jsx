import { motion } from "framer-motion";

export default function ActivityPanel({ logs }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="bg-[#121A2F] rounded-2xl border border-white/10 p-6"
    >
      <h2 className="text-xl font-bold mb-5">
        ⚡ Live Agent Activity
      </h2>

      <div className="space-y-3 max-h-72 overflow-y-auto">

        {logs.map((log, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -15 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.05 }}
            className="bg-[#0A1024] rounded-lg px-4 py-3 border border-white/5"
          >
            {log}
          </motion.div>
        ))}

      </div>
    </motion.div>
  );
}