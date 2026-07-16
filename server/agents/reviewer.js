import { askGemini } from "../utils/gemini.js";

export async function reviewerAgent(content) {

  return await askGemini(
`You are the Reviewer Agent.

Improve grammar, structure and clarity.`,
content);

}