export default function CommandBox({
  prompt,
  setPrompt,
}) {
  return (
    <div className="bg-[#121A2F] rounded-xl border border-white/10 p-6">

      <h2 className="text-xl font-semibold mb-4">
        💬 Command Center
      </h2>

      <input
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        type="text"
        placeholder="Ask your AI Team anything..."
        className="w-full bg-[#0B1020] rounded-xl p-5 border border-white/10 outline-none focus:border-indigo-500 transition"
      />

      <p className="text-sm text-gray-400 mt-3">
        Press Enter to dispatch your AI team.
      </p>

    </div>
  );
}