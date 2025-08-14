import React, { useState } from "react";
import axios from "axios";
import "./index.css";

function Chatbot() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const sendMessage = async () => {
    if (!input.trim()) return;

    const newMessages = [...messages, { sender: "user", text: input }];
    setMessages(newMessages);

    try {
      const res = await axios.post("http://localhost:5000/chat", { message: input });
      setMessages([...newMessages, { sender: "bot", text: res.data.reply }]);
    } catch (error) {
      setMessages([...newMessages, { sender: "bot", text: "Error connecting to server." }]);
    }

    setInput("");
  };

  return (
    <div className="chat-container">
      <h2>User-Friendly Chatbot 🤖</h2>
      <div className="chat-box">
        {messages.map((msg, i) => (
          <div key={i} className={`message ${msg.sender}`}>
            {msg.text}
          </div>
        ))}
      </div>
      <div className="input-box">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type a message..."
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
}

export default Chatbot;
