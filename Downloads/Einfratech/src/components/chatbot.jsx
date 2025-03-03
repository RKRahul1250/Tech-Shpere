import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, ChevronLeft } from 'lucide-react';
import './Chatbot.css';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { id: 1, text: "Hello! Infra here, how can i assist you today?", sender: "bot" }
  ]);
  const [input, setInput] = useState("");
  const [currentView, setCurrentView] = useState("categories");
  const messagesEndRef = useRef(null);

  const categories = {
    "Products & Services": [
      "What products or solutions do you offer?",
      "Can you provide details about your specific product/service?",
      "What are the key benefits of using your solutions?",
      "Do you offer customized solutions?",
      "What technologies do you use in your products/services?"
    ],
    "Support & Help": [
      "How can I get technical support?",
      "What is your warranty policy?",
      "Do you provide on-site support?",
      "Where can I find product manuals?"
    ],
    "Contact & Pricing": [
      "How can I get a price quote?",
      "Do you offer free consultations?",
      "What payment methods do you accept?",
      "How can I schedule a demo?"
    ],
    "Company Info": [
      "Which industries do you serve?",
      "Where are you located?",
      "Are you hiring?",
      "How can I become a partner?"
    ]
  };

  const replies = {
    "what is connected workplace?": "Connected Workplace is our flagship solution handling facility management, space planning, corporate real estate, and more.",

"which industries do you serve?": "We serve Healthcare, Public Sector, Retail, Life Sciences, and Education.",

"how can i schedule a demo?": "Visit our Contact Us page to schedule a personalized demo with our team.",

"what support services do you offer?": "We provide 24x7 global customer care. Call +1 800.331.2008 (US), +91 892.904.2908 (India), or +44 808.189.1871 (UK).",

"what products or solutions do you offer?": "We offer a range of products and services, including global connectivity tools, AV equipment rentals, expert electrical repairs, AV investment protection, seamless device integration, and user training for facility tools.",

"can you provide details about your specific product/service?": "Certainly! Please specify which product or service you're interested in, and I'll provide more detailed information.",

"what are the key benefits of using your solutions?": "Our solutions offer seamless integration, tailored designs to meet specific needs, cutting-edge technology, and reliable performance, enhancing communication and operational efficiency.",

"do you offer customized solutions?": "Yes, we provide tailored solutions designed to meet your specific requirements and anticipate future demands.",

"what technologies do you use in your products/services?": "We integrate cutting-edge video, voice, and data technologies to create innovative and reliable digital experiences.",

"how can i get a price quote?": "To obtain a price quote, please contact us at sales@einfratech.com or call 080-4377 3134.",

"do you offer free consultations or demos?": "Yes, we offer free consultations and demos. Visit our Contact Us page to schedule a session with our team.",

"are there any discounts for bulk orders?": "We do offer discounts for bulk orders. Please reach out to our sales team at sales@einfratech.com for detailed information.",

"what payment methods do you accept?": "We accept various payment methods. For specific details, please contact our billing department at sales@einfratech.com.",

"how can i get technical support?": "For technical support, call us at 080-4377 3134 or email sales@einfratech.com.",

"what is your warranty policy?": "Our products come with a standard warranty. For detailed terms, please contact our support team.",

"do you provide on-site support or remote assistance?": "We offer both on-site support and remote assistance to cater to your specific needs.",

"where can i find product manuals or guides?": "Product manuals and guides are available upon request. Please contact our support team to obtain the necessary documents.",

"how can i become a partner or distributor?": "To explore partnership or distributorship opportunities, please email us at sales@einfratech.com.",

"are you hiring?": "Yes, we have current openings. Visit our Careers page for more information.",

"how can i apply for a job at einfratech?": "To apply for a position, please visit our Careers page and submit your application."
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = (text = input) => {
    if (text.trim() === "") return;

    const newMessages = [
      ...messages,
      { id: messages.length + 1, text: text, sender: "user" }
    ];

    const botReply = replies[text.toLowerCase()] || "I'll connect you with our team for more specific information.";
    
    setTimeout(() => {
      setMessages([
        ...newMessages,
        { id: messages.length + 2, text: botReply, sender: "bot" }
      ]);
    }, 500);

    setInput("");
  };

  return (
    <>
      <motion.button
        className="chatbot-toggle"
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <MessageCircle size={24} />
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="chatbot-container"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
          >
            <div className="chatbot-header">
              <h3>Infra</h3>
              <motion.button
                onClick={() => setIsOpen(false)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <X size={20} />
              </motion.button>
            </div>

            <div className="chatbot-messages">
              {messages.map((msg) => (
                <motion.div
                  key={msg.id}
                  className={`message ${msg.sender}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  {msg.text}
                </motion.div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            <div className="chatbot-categories">
              {currentView === "categories" ? (
                <div className="categories-grid">
                  {Object.entries(categories).map(([category, questions]) => (
                    <motion.button
                      key={category}
                      className="category-button"
                      onClick={() => setCurrentView(category)}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {category}
                    </motion.button>
                  ))}
                </div>
              ) : (
                <div className="questions-list">
                  <motion.button
                    className="back-button"
                    onClick={() => setCurrentView("categories")}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <ChevronLeft size={20} />
                    Back
                  </motion.button>
                  {categories[currentView].map((question, index) => (
                    <motion.button
                      key={index}
                      className="question-button"
                      onClick={() => handleSendMessage(question)}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {question}
                    </motion.button>
                  ))}
                </div>
              )}
            </div>

            <div className="chatbot-input">
              <input
                type="text"
                placeholder="Type your message..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
              />
              <motion.button
                onClick={() => handleSendMessage()}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Send size={20} />
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Chatbot;