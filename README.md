# React + Vite
User-Friendly Chatbot

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.
A simple yet impressive chatbot built with React (frontend) and Node.js/Express (backend) for seamless, human-like conversations.  
Designed with a clean UI, keyword-based natural matching, and instant responses to common queries like greetings, jokes, facts, date/time, and more.

Currently, two official plugins are available:
Features
Natural keyword-based responses** – understands variations (e.g., "Hey there!" or "Can you tell me the time?")
Dynamic information – fetches current date & time
Fun interactions – tells jokes and random facts
Clean & responsive UI – built with React
Secure backend – Node.js with Express API

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
 Tech Stack
**Frontend**:
- React (Vite)
- HTML, CSS

## Expanding the ESLint configuration
**Backend**:
- Node.js
- Express.js
- CORS

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
📂 Project Structure
user-friendly-chatbot/
├── backend/
│ ├── server.js
│ ├── package.json
└── frontend/
├── package.json
├── src/
│ ├── App.jsx
│ ├── Chatbot.jsx
│ ├── index.css
│ └── main.jsx

Backend setup
--cd backend
--npm install
--node server.js

Frontend setup
--cd frontend
--npm install
--npm run dev
