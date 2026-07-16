export default function OutputPanel({ output }) {
  return (
    <div className="bg-[#121A2F] rounded-xl border border-white/10 p-6">

      <h2 className="text-xl font-semibold mb-4">
        📄 Final Output
      </h2>

      {output ? (
        <p>{output}</p>
      ) : (
        <p className="text-gray-500">
          Dispatch a task to begin collaboration.
        </p>
      )}

    </div>
  );
}