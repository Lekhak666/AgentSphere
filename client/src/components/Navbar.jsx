import { Bot } from "lucide-react";

export default function Navbar() {
  return (
    <header
      className="
        h-16
        px-8
        flex
        items-center
        justify-between
        border-b
        border-white/10
        bg-[#0B1120]
        backdrop-blur-md
      "
    >
      <div className="flex items-center gap-3">

        <div
          className="
            h-11
            w-11
            rounded-xl
            bg-cyan-500/20
            flex
            items-center
            justify-center
          "
        >
          <Bot className="text-cyan-400" size={24} />
        </div>

        <div>

          <h1 className="text-xl font-bold tracking-wide">
            AgentSphere
          </h1>

          <p className="text-xs text-gray-400">
            Autonomous Multi-Agent AI Platform
          </p>

        </div>

      </div>

      <div className="text-right">

        <div className="text-sm text-gray-400">
          Powered by
        </div>

        <div className="font-semibold text-cyan-400">
          Groq • Llama 3.3 70B
        </div>

      </div>
    </header>
  );
}