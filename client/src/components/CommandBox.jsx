export default function CommandBox() {
  return (
    <div className="bg-[#121A2F] rounded-xl border border-white/10 p-6 mb-6">

      <h2 className="text-xl font-semibold mb-4">
        💬 Command Center
      </h2>

      <input
        type="text"
        placeholder="Ask your AI Team anything..."
        className="w-full bg-[#1A233A] rounded-lg p-4 outline-none border border-white/10"
      />

      <p className="text-sm text-gray-400 mt-3">
        Press Enter to launch your AI agents.
      </p>

    </div>
  );
}