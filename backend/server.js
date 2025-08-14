const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// Dataset with keywords
const keywordResponses = [
    { keywords: ["hello", "hi", "hey"], reply: "Hi there! How can I help you today?" },
    { keywords: ["good morning"], reply: "Good morning! ☀️ I hope you have a fantastic day ahead." },
    { keywords: ["good evening"], reply: "Good evening! 🌙 How’s your day been?" },

    { keywords: ["how are you"], reply: "I'm doing great! Thanks for asking. How about you?" },
    { keywords: ["your name"], reply: "I'm your friendly chatbot 🤖" },
    { keywords: ["who created you"], reply: "I was created by a developer to assist and chat with you." },
    { keywords: ["what can you do"], reply: "I can answer your questions, chat with you, and provide helpful info!" },

    { keywords: ["time"], reply: () => `The current time is ${new Date().toLocaleTimeString()}` },
    { keywords: ["date"], reply: () => `Today's date is ${new Date().toLocaleDateString()}` },

    { keywords: ["weather"], reply: "I can't fetch live weather right now, but I hope it’s sunny where you are! 🌤️" },
    { keywords: ["raining"], reply: "I’m not sure, but it’s always a good idea to carry an umbrella just in case ☔" },

    { keywords: ["joke"], reply: "Why don’t skeletons fight each other? Because they don’t have the guts! 😂" },
    { keywords: ["fact"], reply: "Did you know? Honey never spoils — archaeologists have eaten 3000-year-old honey! 🍯" },

    { keywords: ["bye", "goodbye", "see you"], reply: "Goodbye! Have a great day! 👋" }
];

// API endpoint
app.post("/chat", (req, res) => {
    const userMessage = req.body.message?.toLowerCase();

    let reply = null;

    // Find a match by checking if any keyword is included in the user message
    for (let item of keywordResponses) {
        if (item.keywords.some(kw => userMessage.includes(kw))) {
            reply = typeof item.reply === "function" ? item.reply() : item.reply;
            break;
        }
    }

    // Fallback
    if (!reply) {
        reply = "Sorry, I’m not sure about that. Can you try rephrasing?";
    }

    res.json({ reply });
});

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
