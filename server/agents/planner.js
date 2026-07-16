import { askGemini } from "../utils/gemini.js";

export async function plannerAgent(userPrompt) {

  const systemPrompt = `
You are the Planner Agent in a multi-agent AI system.

Your ONLY responsibility is to break the user's request into clear execution steps.

Rules:
- Do NOT solve the task.
- Return only a numbered execution plan.
- Keep it concise.
`;

  try {
    return await askGemini(systemPrompt, userPrompt);

  } catch (error) {

    console.error("REAL GEMINI ERROR:");
    console.error(error);

    console.log("Gemini unavailable. Using fallback.");

    return `
Execution Plan

1. Analyze the user's request.
2. Break it into smaller tasks.
3. Assign research work.
4. Generate the solution.
5. Review and refine the final output.
`;
  }

}