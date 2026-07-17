# 🤖 AgentSphere

> **An Autonomous Multi-Agent AI Platform powered by Groq & Llama 3.3 70B**

![React](https://img.shields.io/badge/React-19-blue?logo=react)
![Express](https://img.shields.io/badge/Express.js-black?logo=express)
![NodeJS](https://img.shields.io/badge/Node.js-22-green?logo=node.js)
![Groq](https://img.shields.io/badge/Groq-Llama%203.3%2070B-orange)
![License](https://img.shields.io/badge/License-MIT-purple)

---

## 🚀 Overview

AgentSphere is an **Agentic AI platform** that demonstrates how multiple AI agents collaborate to solve complex tasks.

Instead of generating a response in one step, AgentSphere breaks the problem into multiple stages, where each specialized AI agent contributes its expertise before producing the final polished answer.

The project simulates a real-world autonomous AI workflow inspired by modern AI orchestration systems.

---

# ✨ Features

- 🧠 Planner Agent
  - Breaks complex tasks into actionable steps.

- 🔎 Research Agent
  - Expands the execution plan with relevant ideas and technologies.

- ✍️ Writer Agent
  - Converts research into structured content.

- ✅ Reviewer Agent
  - Refines grammar, clarity, and overall quality.

- ⚡ Live Agent Activity Panel

- 🎯 Real-time Mission Control Dashboard

- 🎨 Modern UI built with React & Tailwind CSS

- 🚀 Powered by Groq Llama 3.3 70B

---

# 🏗️ System Architecture

```
                User Prompt
                     │
                     ▼
             Planner Agent
                     │
                     ▼
           Research Agent
                     │
                     ▼
             Writer Agent
                     │
                     ▼
            Reviewer Agent
                     │
                     ▼
              Final Response
```

---

# 📁 Project Structure

```
AgentSphere/

├── client/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   └── App.jsx
│   │
│   └── package.json
│
├── server/
│   ├── agents/
│   │   ├── planner.js
│   │   ├── researcher.js
│   │   ├── writer.js
│   │   └── reviewer.js
│   │
│   ├── utils/
│   │   └── groq.js
│   │
│   ├── server.js
│   └── package.json
│
└── README.md
```

---

# 🛠 Tech Stack

### Frontend

- React
- Vite
- Tailwind CSS
- Framer Motion

### Backend

- Node.js
- Express.js
- Groq SDK

### AI Model

- **Llama 3.3 70B Versatile**
- Served using **Groq API**

---

# ⚙️ Installation

## Clone Repository

```bash
git clone https://github.com/Lekhak666/AgentSphere.git
```

```
cd AgentSphere
```

---

## Install Frontend

```bash
cd client

npm install
```

---

## Install Backend

```bash
cd ../server

npm install
```

---

# 🔑 Environment Variables

Create a file named

```
server/.env
```

Add

```env
GROQ_API_KEY=your_api_key_here

PORT=5000
```

---

# ▶️ Running the Project

### Backend

```bash
cd server

npm run dev
```

---

### Frontend

```bash
cd client

npm run dev
```

---

Open

```
http://localhost:5173
```

---

# 📸 Preview

## Dashboard

- Mission Control UI
- Live Agent Status
- Activity Timeline
- AI Generated Output

*(Add screenshots here after deployment.)*

---

# 🧠 Agent Workflow

```
Planner
   ↓
Researcher
   ↓
Writer
   ↓
Reviewer
   ↓
Final Output
```

Each agent has a dedicated responsibility, making the workflow modular and easy to extend.

---

# 🌟 Future Improvements

- Streaming AI responses
- Parallel agent execution
- Tool Calling
- Memory-enabled agents
- RAG integration
- Multi-model support
- Voice interaction
- Authentication
- Docker deployment

---

# 📚 Learning Outcomes

This project demonstrates:

- Agentic AI concepts
- AI workflow orchestration
- Multi-agent collaboration
- REST API development
- React state management
- Backend integration
- Prompt engineering
- LLM API integration
- Modern dashboard development

---

# 👨‍💻 Author

**Nayab Khan**

GitHub:
https://github.com/Lekhak666

---

# ⭐ Support

If you found this project interesting,

⭐ Star the repository!

It helps the project grow and motivates future improvements.

---

## ̶A̶̶L̶̶L̶ ̶H̶̶A̶̶I̶̶L̶ ̶T̶̶E̶̶A̶̶M̶ ̶S̶̶P̶̶H̶̶E̶̶R̶̶E̶

## Thank You ❤️
