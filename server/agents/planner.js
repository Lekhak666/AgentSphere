import { askLLM } from "../utils/groq.js";

export async function plannerAgent(prompt) {

  return await askLLM(
`You are the Planner Agent.

Break the user's request into numbered execution steps.`,
prompt);

}
