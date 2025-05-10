import { useState } from "react";

const ChatWidget = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessages([...messages, { text: input, sender: "user" }]);
    setInput("");
    setTimeout(() => {
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: "How can I help you with selling your license?", sender: "bot" },
      ]);
    }, 1000);
  };

  return (
    <div className="chat-widget fixed bottom-4 right-4 p-4 bg-white rounded-lg shadow-lg">
      <div className="messages space-y-2 h-60 overflow-auto">
        {messages.map((message, index) => (
          <div
            key={index}
            className={message.sender === "user" ? "text-right" : "text-left"}
          >
            <div className="bg-gray-200 p-2 rounded-xl inline-block">
              {message.text}
            </div>
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit} className="mt-4">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="w-full p-2 border rounded-lg"
          placeholder="Type a message..."
        />
      </form>
    </div>
  );
};

export default ChatWidget;
