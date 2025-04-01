import React, { useState, useRef, useEffect } from "react";
import "./App.css";
import banner from "./assets/banner.png";
import nav from "./assets/nav.png";
import kayden from "./assets/kaydenBot.jpg";

interface Message {
  text: string;
  isUser: boolean;
}

interface MessageBoxProps {
  message: string;
  isUser: boolean;
}

const MessageBox: React.FC<MessageBoxProps> = ({ message, isUser }) => {
  return (
    <div
      className={`p-4 rounded-lg shadow-md max-w-xs ${
        isUser ? "bg-white self-end" : "bg-gray-100 self-start"
      }`}
    >
      {message}
    </div>
  );
};

const App: React.FC = () => {
  const [textToSend, setTextToSend] = useState<string>("");
  const [messages, setMessages] = useState<Message[]>([]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const handleSendClick = () => {
    if (textToSend.trim() !== "") {
      const newMessage: Message = { text: textToSend, isUser: true };
      setMessages((prevMessages) => [...prevMessages, newMessage]);
      setTextToSend("");

      // Simulate a bot response after a short delay
      setTimeout(() => {
        const botResponse: Message = {
          text: "This is a bot response",
          isUser: false,
        };
        setMessages((prevMessages) => [...prevMessages, botResponse]);
      }, 1000);
    }
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="App flex flex-col h-screen overflow-hidden">
      {/* Banner */}
      <div className="banner-container w-screen h-1/8 items-center pr-4">
        <img className="banner w-screen h-1/8" src={banner} alt="Banner" />
      </div>

      {/* Navigation */}
      <nav className="w-full flex items-center px-7 mt-6">
        <img className="w-16 h-12" src={nav} alt="Navigation" />
        <div className="ml-2 text-lg text-gray-100 font-medium">
          AI ASSISTANT
        </div>
      </nav>

      {/* Title */}
      <div className="w-full px-7 mt-4">
        <h1 className="text-3xl text-gray-200 font-bold">AI ASSISTANT</h1>
      </div>

      {/* Chat Area */}
      <main className="flex-1 flex flex-col justify-between p-4 overflow-hidden">
        <div className="flex-1 overflow-y-auto p-4 border border-gray-700 rounded-lg">
          <div className="flex flex-col gap-4">
            <img
              className="w-1/4 h-auto self-center mb-4 rounded-full"
              src={kayden}
              alt="Kayden Bot"
            />
            {messages.map((msg, index) => (
              <MessageBox key={index} message={msg.text} isUser={msg.isUser} />
            ))}
            <div ref={messagesEndRef} />
          </div>
        </div>

        {/* Typing Box */}
        <div className="mt-4 relative">
          <textarea
            id="message"
            placeholder="Message Kayden Bot..."
            className="w-full p-4 pr-20 bg-gray-300 border border-gray-300 rounded-full placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-100 resize-none"
            value={textToSend}
            onChange={(e) => setTextToSend(e.target.value)}
            rows={2}
          />
          <button
            onClick={handleSendClick}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-600 text-white px-4 py-2 rounded-full shadow-lg hover:bg-blue-700 transition duration-300"
          >
            Send
          </button>
        </div>
      </main>
    </div>
  );
};

export default App;
