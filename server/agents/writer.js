import { askLLM } from "../utils/groq.js";

export async function writerAgent(research) {

  return await askLLM(
`You are the Writer Agent.

Write a polished solution using the research.`,
research);

}