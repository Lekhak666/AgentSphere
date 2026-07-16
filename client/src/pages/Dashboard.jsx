import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import CommandBox from "../components/CommandBox";
import ActivityPanel from "../components/ActivityPanel";
import OutputPanel from "../components/OutputPanel";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-[#050816] text-white">
      <Navbar />

      <div className="flex h-[calc(100vh-76px)]">

        <Sidebar />

        <main className="flex-1 p-6 overflow-auto">

          <CommandBox />

          <ActivityPanel />

          <OutputPanel />

        </main>

      </div>
    </div>
  );
}