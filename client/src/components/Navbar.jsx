import { Bot } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="h-16 border-b border-white/10 bg-[#0B1020] flex items-center justify-between px-8">

      <div className="flex items-center gap-3">

        <div className="bg-indigo-600 p-2 rounded-xl">
          <Bot size={22}/>
        </div>

        <div>
          <h1 className="font-bold text-xl">
            AgentSphere
          </h1>

          <p className="text-xs text-gray-400">
            Multi-Agent AI Workspace
          </p>
        </div>

      </div>

      <span className="text-sm text-gray-500">
        Powered by Gemini
      </span>

    </nav>
  );
}