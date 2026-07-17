import { askLLM } from "../utils/groq.js";

export async function researcherAgent(plan) {

  return await askLLM(
`You are the Research Agent.

Expand the execution plan with useful technologies and ideas.`,
plan);

}