import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { plannerAgent } from "./agents/planner.js";
import { researcherAgent } from "./agents/researcher.js";
import { writerAgent } from "./agents/writer.js";
import { reviewerAgent } from "./agents/reviewer.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "🚀 AgentSphere Backend Running",
  });
});

app.post("/api/execute", async (req, res) => {

  try {

    const { prompt } = req.body;

    const plan = await plannerAgent(prompt);

    const research = await researcherAgent(plan);

    const draft = await writerAgent(research);

    const finalAnswer = await reviewerAgent(draft);

    res.json({
      success: true,
      output: finalAnswer,
    });

  } catch (error) {

    console.error(error);

    res.status(500).json({
      success: false,
      output: "Agent workflow failed.",
    });

  }

});
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});