// components/ChatWidget.jsx
import React, { useState } from 'react';
import axios from 'axios';

const ChatWidget = () => {
  const [messages, setMessages] = useState([
    { role: 'system', content: 'Ask me anything about selling software licenses!' },
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false); // toggle state

  const sendMessage = async () => {
    if (!input.trim()) return;
    const newMessages = [...messages, { role: 'user', content: input }];
    setMessages(newMessages);
    setInput('');
    setLoading(true);

    try {
      const response = await axios.post(
        'https://api.openai.com/v1/chat/completions',
        {
          model: 'gpt-3.5-turbo',
          messages: newMessages,
        },
        {
          headers: {
            Authorization: `Bearer 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`,
            'Content-Type': 'application/json',
          },
        }
      );
      console.log(response)
      const reply = response.data.choices[0].message;
      setMessages([...newMessages, reply]);
    } catch (err) {
      setMessages([
        ...newMessages,
        { role: 'assistant', content: 'Sorry, something went wrong.' },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 text-black">
      {!isOpen ? (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full shadow-lg transition-all"
        >
          Chat with us
        </button>
      ) : (
        <div className="w-[320px] bg-white border rounded-lg shadow-lg overflow-hidden">
          {/* Header */}
          <div className="bg-blue-600 text-white p-3 flex justify-between items-center font-semibold">
            <span>SoftSell AI Chat</span>
            <button onClick={() => setIsOpen(false)} className="text-sm hover:text-gray-200">✖</button>
          </div>

          {/* Messages */}
          <div className="h-64 overflow-y-auto p-3 space-y-2 text-sm">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`${
                  msg.role === 'user' ? 'text-right' : 'text-left'
                }`}
              >
                <div
                  className={`inline-block px-3 py-2 rounded ${
                    msg.role === 'user' ? 'bg-blue-100' : 'bg-gray-100'
                  }`}
                >
                  {msg.content}
                </div>
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="p-3 border-t flex gap-2">
            <input
              className="flex-1 border rounded px-2 py-1 text-sm"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
              placeholder="Type your question..."
            />
            <button
              onClick={sendMessage}
              disabled={loading}
              className="bg-blue-600 text-white px-3 rounded text-sm"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatWidget;
