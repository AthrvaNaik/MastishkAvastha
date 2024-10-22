// AIChatbot.jsx
import { useState } from "react";

const AIChatbot = () => {
  const [message, setMessage] = useState("");
  const [chatHistory, setChatHistory] = useState([]);

  const handleSendMessage = () => {
    if (message.trim()) {
      setChatHistory([...chatHistory, { fromUser: true, text: message }]);
      setMessage(""); // Clear input after sending
    }
  };

  return (
    <div className="bg-white shadow-md p-6 rounded-lg h-full">
      <h2 className="text-xl font-semibold mb-4">AI Chatbot</h2>
      <div className="border rounded-lg p-4 h-64 overflow-y-scroll mb-4">
        {chatHistory.map((chat, index) => (
          <p key={index} className={chat.fromUser ? "text-right" : "text-left"}>
            {chat.text}
          </p>
        ))}
      </div>
      <div className="flex">
        <input
          type="text"
          className="border rounded-l-lg w-full p-2"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button
          className="bg-blue-500 text-white px-4 rounded-r-lg"
          onClick={handleSendMessage}
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default AIChatbot;
