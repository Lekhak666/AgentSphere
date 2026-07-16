import { motion } from "framer-motion";

export default function Landing() {
  return (
    <div className="min-h-screen bg-[#050816] text-white flex flex-col items-center justify-center px-6">

      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-6xl md:text-7xl font-black"
      >
        AgentSphere
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="mt-6 text-xl text-gray-300 text-center max-w-2xl"
      >
        A Multi-Agent AI Workspace where specialized AI agents
        collaborate to solve your tasks.
      </motion.p>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="mt-10 px-8 py-4 rounded-xl bg-indigo-600 hover:bg-indigo-500 transition font-semibold text-lg"
      >
        Launch Workspace →
      </motion.button>

    </div>
  );
}