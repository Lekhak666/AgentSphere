import express from "express";
import cors from "cors";
import dotenv from "dotenv";

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
  const { prompt } = req.body;

  console.log(prompt);

  res.json({
    success: true,
    output: `Received task: ${prompt}`,
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});