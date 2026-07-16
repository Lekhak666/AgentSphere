import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

export async function askGemini(systemPrompt, userPrompt) {
  try {
    const response = await ai.models.generateContent({
      model: process.env.GEMINI_MODEL,
      contents: `${systemPrompt}\n\n${userPrompt}`,
    });

    return response.text;

  } catch (err) {

    console.log("REAL GEMINI ERROR:");
    console.log(err);

    console.log("Gemini unavailable. Using fallback.");

    return `
Execution Plan

1. Analyze the user's request.
2. Break the task into smaller steps.
3. Research technologies.
4. Generate the solution.
5. Review and polish the final answer.
`;

  }
}