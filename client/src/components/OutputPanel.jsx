export default function OutputPanel({ output }) {
  return (
    <div className="bg-[#121A2F] rounded-xl border border-white/10 p-6">

      <div className="flex items-center justify-between mb-5">

        <h2 className="text-2xl font-bold flex items-center gap-2">
          📄 Final Output
        </h2>

        <span className="text-xs px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
          AI Generated
        </span>

      </div>

      {output ? (
        <div
          className="
            bg-[#0B1020]
            border
            border-white/10
            rounded-xl
            p-5
            whitespace-pre-wrap
            leading-8
            text-gray-200
            shadow-inner
          "
        >
          {output}
        </div>
      ) : (
        <div
          className="
            bg-[#0B1020]
            border
            border-dashed
            border-white/10
            rounded-xl
            p-10
            text-center
          "
        >
          <div className="text-5xl mb-4">
            🤖
          </div>

          <h3 className="text-lg font-semibold mb-2">
            Awaiting Instructions
          </h3>

          <p className="text-gray-400 max-w-lg mx-auto">
            Your AI team is standing by.
            Submit a task from the Command Center and the Planner,
            Researcher, Writer, and Reviewer will collaborate here.
          </p>
        </div>
      )}

    </div>
  );
}