import React, { useState, useRef, useEffect } from 'react';
import { FaRobot, FaTimes, FaPaperPlane, FaQuestionCircle, FaArrowDown } from 'react-icons/fa';

const faqs = [
  {
    q: "Can I list my SaaS product for free?",
    a: "Yes! SaaSBay offers a Launchpad Listing that is completely free. It's ideal for early-stage or bootstrapped SaaS products. As part of our limited-time launch offer, the first 50 vendors will receive 1 year of Pro Access absolutely free.",
    tags: ["free", "listing", "launch", "launchpad"]
  },
  {
    q: "How many payment plans do you offer?",
    a: "We offer tiered listing plans designed to match your stage of growth and visibility needs. While our free plan is always available, our paid plans offer enhanced exposure, lead access, and branding features.",
    tags: ["payment", "plans", "pricing", "tiers"]
  },
  {
    q: "Do you offer monthly payment options?",
    a: "No. All paid plans are available on an annual basis only, allowing for sustained exposure and consistent lead engagement throughout the year.",
    tags: ["monthly", "payment", "annual", "billing"]
  },
  {
    q: "How long does it take for my product to go live?",
    a: "Once you submit your product, our team conducts a quick review to ensure quality and relevance. Listings typically go live within 24–48 hours after submission.",
    tags: ["time", "live", "review", "approval", "hours"]
  },
  {
    q: "How can I stand out against other listings?",
    a: "To increase your visibility:\n- Upgrade to a premium plan for featured placement\n- Use high-quality visuals (screenshots, explainer videos, logos)\n- Earn the 'SaaS Approved' badge (available in our top-tier plan)\n- Maintain an up-to-date, benefit-focused listing",
    tags: ["stand out", "visibility", "premium", "featured"]
  },
  {
    q: "Can I upgrade my plan later?",
    a: "Yes. You can upgrade at any time through your Vendor Dashboard. All premium features will be unlocked immediately upon upgrade.",
    tags: ["upgrade", "plan", "dashboard", "features"]
  },
  {
    q: "Can I downgrade my plan?",
    a: "Yes. You can downgrade your plan before your next renewal cycle. Downgrading will remove access to features exclusive to higher-tier plans, but your listing will remain active.",
    tags: ["downgrade", "plan", "renewal", "features"]
  },
  {
    q: "How can I get more views on my listing?",
    a: "Here are a few ways to boost visibility:\n- Add engaging visuals and product demos\n- Write clear, benefit-led descriptions\n- Upgrade to a Pro plan for homepage or featured visibility\n- Be among the first — early listings get prioritized placement",
    tags: ["views", "visibility", "boost", "demos", "pro"]
  },
  {
    q: "Are there assured monthly leads?",
    a: "We do not offer guaranteed lead volumes. However, Pro and Spotlight plans significantly boost your visibility to high-intent B2B buyers. Engagement depends on listing quality, clarity, and positioning.",
    tags: ["leads", "guaranteed", "monthly", "pro", "spotlight"]
  },
  {
    q: "Is my data secure on SaaSBay?",
    a: "Yes. We follow best-in-class security practices to protect all vendor data, product details, and user activity. Your data is never shared or sold without explicit consent.",
    tags: ["data", "security", "secure", "protection", "privacy"]
  },
  {
    q: "Can I list more than one product?",
    a: "Absolutely. You can list multiple SaaS products under one vendor account. Each product gets a dedicated page, lead funnel, and media slots.",
    tags: ["multiple", "products", "vendor", "account"]
  },
  {
    q: "Will I get analytics or insights on my listing?",
    a: "Yes. All vendors get a basic performance dashboard showing impressions and clicks. Higher-tier plans include deeper insights like traffic source, engagement patterns, and buyer actions.",
    tags: ["analytics", "insights", "dashboard", "performance", "traffic"]
  },
  {
    q: "Can I remove my listing from SaaSBay?",
    a: "Yes. If you wish to permanently remove your listing, you can do so from your dashboard or by contacting our support team. Once removed, your data will no longer be publicly visible.",
    tags: ["remove", "delete", "listing", "dashboard", "support"]
  },
  {
    q: "Do you help with onboarding or listing optimization?",
    a: "Yes. We offer onboarding guidance, listing best practices, and optimization support for Pro users — including how to present your SaaS effectively and improve buyer engagement.",
    tags: ["onboarding", "optimization", "guidance", "support", "pro"]
  },
];

const quickQuestions = [
  "Can I list for free?",
  "How to get more views?",
  "What are your plans?",
  "Is my data secure?",
  "How long to go live?"
];

function ChatBot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      type: 'bot',
      content: "Hi! I'm here to help you with questions about SaaSBay. Ask me anything about listing your product, plans, or features! 😊",
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [showQuickQuestions, setShowQuickQuestions] = useState(true);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const findBestMatch = (userInput) => {
    const input = userInput.toLowerCase();
    
    // Direct question matching
    for (let faq of faqs) {
      if (faq.q.toLowerCase().includes(input) || input.includes(faq.q.toLowerCase())) {
        return faq;
      }
    }

    // Tag-based matching
    let bestMatch = null;
    let maxScore = 0;

    for (let faq of faqs) {
      let score = 0;
      for (let tag of faq.tags) {
        if (input.includes(tag.toLowerCase())) {
          score += 1;
        }
      }
      
      // Check for keywords in the question and answer
      const keywords = input.split(' ').filter(word => word.length > 2);
      for (let keyword of keywords) {
        if (faq.q.toLowerCase().includes(keyword) || faq.a.toLowerCase().includes(keyword)) {
          score += 0.5;
        }
      }

      if (score > maxScore) {
        maxScore = score;
        bestMatch = faq;
      }
    }

    return maxScore > 0 ? bestMatch : null;
  };

  const handleSendMessage = (message = inputValue) => {
    if (!message.trim()) return;

    const userMessage = {
      type: 'user',
      content: message,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);
    setShowQuickQuestions(false);

    // Simulate typing delay
    setTimeout(() => {
      const match = findBestMatch(message);
      let botResponse;

      if (match) {
        botResponse = {
          type: 'bot',
          content: match.a,
          relatedQuestion: match.q,
          timestamp: new Date()
        };
      } else {
        // Default responses for common greetings or unmatched queries
        if (message.toLowerCase().includes('hello') || message.toLowerCase().includes('hi')) {
          botResponse = {
            type: 'bot',
            content: "Hello! How can I help you with SaaSBay today? You can ask me about our plans, listing process, features, or anything else!",
            timestamp: new Date()
          };
        } else {
          botResponse = {
            type: 'bot',
            content: "I couldn't find a specific answer to that question. Here are some things you might want to know about:\n\n• Free listing options\n• Payment plans and pricing\n• How to get more visibility\n• Data security\n• Analytics and insights\n\nFeel free to ask about any of these topics, or contact our support team for more specific help!",
            timestamp: new Date()
          };
        }
      }

      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000); // Random delay between 1-2 seconds
  };

  const formatMessage = (content) => {
    return content.split('\n').map((line, index) => (
      <React.Fragment key={index}>
        {line}
        {index < content.split('\n').length - 1 && <br />}
      </React.Fragment>
    ));
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={() => setOpen(!open)}
          className={`w-14 h-14 ${open ? 'bg-red-500 hover:bg-red-600' : 'bg-blue-600 hover:bg-blue-700'} text-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 transform hover:scale-110`}
        >
          {open ? <FaTimes className="text-xl" /> : <FaRobot className="text-xl" />}
        </button>
      </div>

      {open && (
        <div className="fixed bottom-20 right-6 w-96 max-w-[calc(100vw-3rem)] bg-white shadow-2xl rounded-2xl border border-gray-200 z-50 flex flex-col max-h-[32rem]">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 rounded-t-2xl">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <FaRobot className="text-lg" />
              </div>
              <div>
                <h3 className="font-bold">SaaSBay Assistant</h3>
                <p className="text-sm opacity-90">Always here to help!</p>
              </div>
            </div>
          </div>

          {/* Messages Container */}
          <div className="flex-1 p-4 space-y-4 overflow-y-auto max-h-80">
            {messages.map((message, index) => (
              <div key={index} className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] p-3 rounded-2xl ${
                  message.type === 'user' 
                    ? 'bg-blue-600 text-white rounded-br-sm' 
                    : 'bg-gray-100 text-gray-800 rounded-bl-sm'
                }`}>
                  {message.relatedQuestion && (
                    <div className="text-xs opacity-70 mb-1 font-semibold">
                      Re: {message.relatedQuestion}
                    </div>
                  )}
                  <div className="text-sm leading-relaxed">
                    {formatMessage(message.content)}
                  </div>
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-gray-100 text-gray-800 p-3 rounded-2xl rounded-bl-sm max-w-[80%]">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                    <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                  </div>
                </div>
              </div>
            )}

            {/* Quick Questions */}
            {showQuickQuestions && messages.length === 1 && (
              <div className="space-y-2">
                <div className="text-xs text-gray-500 flex items-center gap-1">
                  <FaQuestionCircle />
                  Quick questions:
                </div>
                {quickQuestions.map((question, index) => (
                  <button
                    key={index}
                    onClick={() => handleSendMessage(question)}
                    className="block w-full text-left p-2 text-sm bg-blue-50 hover:bg-blue-100 text-blue-700 rounded-lg transition-colors duration-200"
                  >
                    {question}
                  </button>
                ))}
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="border-t border-gray-200 p-4">
            <div className="flex gap-2">
              <textarea
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask me anything about SaaSBay..."
                className="flex-1 px-3 py-2 border border-gray-300 rounded-xl resize-none focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-sm"
                rows="1"
                style={{ minHeight: '38px', maxHeight: '100px' }}
              />
              <button
                onClick={() => handleSendMessage()}
                disabled={!inputValue.trim()}
                className="w-10 h-10 bg-blue-600 text-white rounded-xl flex items-center justify-center hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
              >
                <FaPaperPlane className="text-sm" />
              </button>
            </div>
            <div className="text-xs text-gray-500 mt-2 text-center">
              Press Enter to send • Powered by SaaSBay AI
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ChatBot;