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
        isUser ? "bg-blue-500 self-end" : "bg-gray-100 self-start"
      }`}
    >
      {/* Render message as HTML, allowing links */}
      <span
        dangerouslySetInnerHTML={{
          __html: message,
        }}
      />
    </div>
  );
};

const App: React.FC = () => {
  const [textToSend, setTextToSend] = useState<string>("");
  const [messages, setMessages] = useState<Message[]>([]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const fetchChatGPTResponse = async (userMessage: string) => {
    const API_KEY =
      "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"; // Replace with your API key
    const API_URL = "https://api.openai.com/v1/chat/completions";

    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${API_KEY}`,
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo", // Using GPT-3.5 Turbo
        messages: [
          {
            role: "system",
            content:
              'Your name is Kayden Bot and you are an AI assistant for Ferris Wheel Press users and are focused only on providing information related to Ferris Wheel Press, such as products, history, and any relevant details about their offerings. Here\'s the website: https://ferriswheelpress.com/, look through the entire site and make note of only products that currently exist on their site. If asked for recommendations, provide hyperlinked products best suited and make sure the product exists. Please make sure the hyperlink does not link to a site that says "page not found". Keep responses short.',
          },
          { role: "user", content: userMessage }, // User message
        ],
        max_tokens: 100,
      }),
    });

    const data = await response.json();
    console.log(data);
    return data.choices[0]?.message?.content || "I didn't get that.";
  };

  const handleSendClick = async () => {
    if (textToSend.trim() !== "") {
      const userMessage: Message = { text: textToSend, isUser: true };
      setMessages((prevMessages) => [...prevMessages, userMessage]);
      setTextToSend("");

      const botResponseText = await fetchChatGPTResponse(textToSend);
      const botMessage: Message = { text: botResponseText, isUser: false };

      setMessages((prevMessages) => [...prevMessages, botMessage]);
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
