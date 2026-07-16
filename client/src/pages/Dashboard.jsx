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
      status: "Idle",
    },
    {
      id: "researcher",
      icon: "🔎",
      name: "Researcher",
      role: "Information Gatherer",
      status: "Idle",
    },
    {
      id: "writer",
      icon: "✍️",
      name: "Writer",
      role: "Content Generator",
      status: "Idle",
    },
    {
      id: "reviewer",
      icon: "✅",
      name: "Reviewer",
      role: "Quality Checker",
      status: "Idle",
    },
  ]);

  const [logs, setLogs] = useState([
    "System initialized.",
    "Waiting for your command...",
  ]);

  const [prompt, setPrompt] = useState("");
  const [output, setOutput] = useState("");

  const updateAgentStatus = (id, status) => {
    setAgents((prev) =>
      prev.map((agent) =>
        agent.id === id ? { ...agent, status } : agent
      )
    );
  };

  const delay = (ms) =>
    new Promise((resolve) => setTimeout(resolve, ms));

  const executeTask = async () => {
    if (!prompt.trim()) return;

    setOutput("");

    setLogs([
      "🚀 AgentSphere initialized...",
      "Waiting for Planner...",
    ]);

    setAgents((prev) =>
      prev.map((agent) => ({
        ...agent,
        status: "Idle",
      }))
    );

    try {
      // Planner
      updateAgentStatus("planner", "Working");
      setLogs((prev) => [...prev, "🧠 Planner is analyzing the task..."]);
      await delay(900);
      updateAgentStatus("planner", "Completed");

      // Researcher
      updateAgentStatus("researcher", "Working");
      setLogs((prev) => [...prev, "🔎 Researcher is gathering information..."]);
      await delay(900);
      updateAgentStatus("researcher", "Completed");

      // Writer
      updateAgentStatus("writer", "Working");
      setLogs((prev) => [...prev, "✍️ Writer is generating content..."]);
      await delay(900);
      updateAgentStatus("writer", "Completed");

      // Reviewer
      updateAgentStatus("reviewer", "Working");
      setLogs((prev) => [...prev, "✅ Reviewer is reviewing the response..."]);
      await delay(900);
      updateAgentStatus("reviewer", "Completed");

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
        "🎉 Task completed successfully.",
      ]);
    } catch (error) {
      console.error(error);

      setLogs((prev) => [
        ...prev,
        "❌ Something went wrong.",
      ]);

      setOutput("Unable to complete the task.");
    }

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