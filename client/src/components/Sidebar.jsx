import AgentCard from "./AgentCard";

export default function Sidebar({ agents }) {
  return (
    <aside className="w-80 p-5 bg-[#0B1020] border-r border-white/10">

      <h2 className="text-gray-400 uppercase tracking-widest text-xs mb-4">
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

    </aside>
  );
}