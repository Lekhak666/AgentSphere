import { askGemini } from "../utils/gemini.js";

export async function plannerAgent(prompt) {

  return await askGemini(
`You are the Planner Agent.

Break the user's request into numbered execution steps.`,
prompt);

}
