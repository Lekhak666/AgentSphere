import { askLLM } from "../utils/groq.js";

export async function reviewerAgent(content) {

  return await askLLM(
`You are the Reviewer Agent.

Improve grammar, structure and clarity.`,
content);

}