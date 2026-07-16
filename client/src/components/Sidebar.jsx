import AgentCard from "./AgentCard";

export default function Sidebar({ agents }) {
  return (
    <div className="w-80 p-5 bg-[#0B1020] border-r border-white/10 overflow-y-auto">

      <h2 className="text-xs uppercase tracking-[0.25em] text-gray-500 mb-6">
        AI AGENTS
      </h2>

      <div className="space-y-4">

        {agents.map((agent) => (
          <AgentCard
            key={agent.id}
            {...agent}
          />
        ))}

      </div>

    </div>
  );
}