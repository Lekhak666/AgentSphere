import { useState } from "react";
import { motion } from "framer-motion";

export default function OutputPanel({ output }) {
  const [copied, setCopied] = useState(false);

  const copyOutput = async () => {
    if (!output) return;

    await navigator.clipboard.writeText(output);

    setCopied(true);

    setTimeout(() => setCopied(false), 2000);
  };

  const downloadOutput = () => {
    if (!output) return;

    const blob = new Blob([output], {
      type: "text/plain",
    });

    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");

    a.href = url;
    a.download = "AgentSphere_Output.txt";
    a.click();

    URL.revokeObjectURL(url);
  };

  const wordCount = output
    ? output.trim().split(/\s+/).length
    : 0;

  const charCount = output
    ? output.length
    : 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="bg-[#121A2F] rounded-2xl border border-white/10 shadow-xl"
    >
      <div className="flex justify-between items-center border-b border-white/10 px-6 py-4">

        <h2 className="text-xl font-bold">
          📄 Final Output
        </h2>

        <span className="px-3 py-1 rounded-full bg-indigo-600 text-xs font-semibold">
          Powered by Groq
        </span>

      </div>

      {output ? (
        <>
          <div className="p-6">

            <div className="bg-[#0A1024] rounded-xl border border-white/10 p-5 max-h-[420px] overflow-y-auto">

              <pre className="whitespace-pre-wrap leading-7 text-gray-200 text-sm">
                {output}
              </pre>

            </div>

            <div className="flex gap-6 mt-5 text-sm text-gray-400">

              <span>
                📝 Words: <b>{wordCount}</b>
              </span>

              <span>
                🔤 Characters: <b>{charCount}</b>
              </span>

            </div>

          </div>

          <div className="border-t border-white/10 px-6 py-4 flex gap-4">

            <button
              onClick={copyOutput}
              className="px-5 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-500 transition"
            >
              {copied ? "✅ Copied" : "📋 Copy"}
            </button>

            <button
              onClick={downloadOutput}
              className="px-5 py-2 rounded-lg bg-green-600 hover:bg-green-500 transition"
            >
              💾 Download
            </button>

          </div>
        </>
      ) : (
        <div className="p-10 text-center">

          <div className="text-5xl mb-4">
            🤖
          </div>

          <h3 className="text-xl font-semibold mb-2">
            Ready for your next mission
          </h3>

          <p className="text-gray-400">
            Ask your AI team anything.
          </p>

          <div className="mt-6 bg-[#0A1024] rounded-xl p-5 border border-white/10 text-left text-sm text-gray-400">

            <p>• Write an About page for a Pizza Shop</p>

            <p>• Build a React Portfolio Website</p>

            <p>• Explain Blockchain in Simple Terms</p>

            <p>• Generate Interview Questions</p>

          </div>

        </div>
      )}
    </motion.div>
  );
}