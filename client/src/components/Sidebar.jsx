import AgentCard from "./AgentCard";

export default function Sidebar() {
  return (
    <div className="w-80 p-5 space-y-4 bg-[#0B1020] border-r border-white/10">
    
    <h2 className="text-gray-400 uppercase tracking-widest text-xs mb-4">
    AI AGENTS
    </h2>

      <AgentCard
        icon="🧠"
        name="Planner"
        status="Ready"
      />

      <AgentCard
        icon="🔎"
        name="Researcher"
        status="Ready"
      />

      <AgentCard
        icon="✍"
        name="Writer"
        status="Ready"
      />

      <AgentCard
        icon="✅"
        name="Reviewer"
        status="Ready"
      />

    </div>
  );
}