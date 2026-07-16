import { askGemini } from "../utils/gemini.js";

export async function researcherAgent(plan) {

  return await askGemini(
`You are the Research Agent.

Expand the execution plan with useful technologies and ideas.`,
plan);

}