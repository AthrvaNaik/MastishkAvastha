import { useState, useEffect, useRef } from "react";

const AIChatbot = () => {
  const [message, setMessage] = useState("");
  const [chatHistory, setChatHistory] = useState([]);
  const chatEndRef = useRef(null);

  const handleSendMessage = () => {
    if (message.trim()) {
      setChatHistory([...chatHistory, { fromUser: true, text: message }]);
      setMessage(""); // Clear input after sending
    }
  };

  // Scroll to the bottom of the chat history when a new message is sent
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chatHistory]);

  return (
    <div className="bg-gradient-to-r from-indigo-100 to-blue-100 shadow-lg p-6 rounded-lg h-full max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">AI Chatbot</h2>
      <div className="border border-gray-300 rounded-lg p-4 h-64 overflow-y-scroll mb-4 bg-white shadow-md">
        {chatHistory.map((chat, index) => (
          <div
            key={index}
            className={`p-3 rounded-lg my-1 ${
              chat.fromUser ? "bg-blue-200 text-right ml-auto" : "bg-gray-200 text-left mr-auto"
            } transition duration-300`}
            style={{ maxWidth: "75%", wordWrap: "break-word" }}
          >
            {chat.text}
          </div>
        ))}
        <div ref={chatEndRef} /> {/* Scroll to this div */}
      </div>
      <div className="flex">
        <input
          type="text"
          className="border border-gray-300 rounded-l-lg w-full p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type your message..."
        />
        <button
          className="bg-blue-500 text-white px-4 rounded-r-lg hover:bg-blue-600 transition duration-300"
          onClick={handleSendMessage}
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default AIChatbot;
