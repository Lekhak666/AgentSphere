import { askGemini } from "../utils/gemini.js";

export async function writerAgent(research) {

  return await askGemini(
`You are the Writer Agent.

Write a polished solution using the research.`,
research);

}