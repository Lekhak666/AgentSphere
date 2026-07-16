import { useState } from "react";

import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import CommandBox from "../components/CommandBox";
import ActivityPanel from "../components/ActivityPanel";
import OutputPanel from "../components/OutputPanel";

export default function Dashboard() {

  const [agents, setAgents] = useState([
    {
      id: "planner",
      icon: "🧠",
      name: "Planner",
      role: "Task Decomposer",
      status: "Ready",
    },
    {
      id: "researcher",
      icon: "🔎",
      name: "Researcher",
      role: "Information Gatherer",
      status: "Ready",
    },
    {
      id: "writer",
      icon: "✍️",
      name: "Writer",
      role: "Content Generator",
      status: "Ready",
    },
    {
      id: "reviewer",
      icon: "✅",
      name: "Reviewer",
      role: "Quality Checker",
      status: "Ready",
    },
  ]);

  const [logs, setLogs] = useState([
    "System initialized.",
    "Waiting for your command...",
  ]);

  const [prompt, setPrompt] = useState("");

  const [output, setOutput] = useState("");

        const executeTask = async () => {
        if (!prompt.trim()) return;

        const response = await fetch("http://localhost:5000/api/execute", {
            method: "POST",
            headers: {
            "Content-Type": "application/json",
            },
            body: JSON.stringify({
            prompt,
            }),
        });

        const data = await response.json();

        setOutput(data.output);

        setLogs((prev) => [
            ...prev,
            `Task received: ${prompt}`,
        ]);

        setPrompt("");
        };

  return (
    <div className="min-h-screen bg-[#050816] text-white">

      <Navbar />

      <div className="flex h-[calc(100vh-64px)]">

        <Sidebar agents={agents} />

        <main className="flex-1 p-6 space-y-6 overflow-auto">

          <CommandBox
            prompt={prompt}
            setPrompt={setPrompt}
            executeTask={executeTask}
          />

          <ActivityPanel logs={logs} />

          <OutputPanel output={output} />

        </main>

      </div>

    </div>
  );
}