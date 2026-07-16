import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

export async function askGemini(systemPrompt, userPrompt) {

  const delays = [1000, 2000, 4000];

  for (let attempt = 0; attempt < delays.length; attempt++) {

    try {

      const response = await ai.models.generateContent({
        model: process.env.GEMINI_MODEL,
        contents: [
          {
            role: "user",
            parts: [
              {
                text: `${systemPrompt}

User Request:
${userPrompt}`,
              },
            ],
          },
        ],
      });

      console.log(response);

      return response.text;

    } catch (error) {

      // Retry only when Google's servers are temporarily unavailable.
      if (error.status === 503 && attempt < delays.length - 1) {

        console.log(
          `Gemini busy. Retrying in ${delays[attempt]} ms...`
        );

        await new Promise(resolve =>
          setTimeout(resolve, delays[attempt])
        );

        continue;
      }

      throw error;
    }

  }

}