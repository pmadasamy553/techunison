import React, { useState } from 'react';
import { BsChatSquare } from 'react-icons/bs';
import 'bootstrap/dist/css/bootstrap.min.css';

const Chatbot = () => {
  const [messages, setMessages] = useState([
    { text: 'Hello! How can I assist you today?', sender: 'bot' },
  ]);
  const [input, setInput] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const handleSend = () => {
    if (input.trim() === '') return;

    setMessages([...messages, { text: input, sender: 'user' }]);
    setInput('');

    const botResponses = {
      'hello': 'Hi there! How can I help you?',
      'services': 'We offer a variety of IT services including web development, app development, and more.',
      'contact': 'You can contact us at  +91 9047708470',
      'hours': 'Our office hours are Monday to Friday, 9 AM to 6 PM.',
      'location': 'We are located at No 77 Ganesh Nagar Third Street, GN Mills Post Coimbatore 641029 Landmark: Backside to Bharath Electronics and Appliances',
      'about us': 'We are a leading IT company specializing in innovative technology solutions to help businesses grow.',
      'web development': 'Our web development services include building responsive and scalable websites using the latest technologies.',
      'app development': 'We develop mobile applications for both Android and iOS platforms.',
      'cloud computing': 'Our cloud computing services help you migrate, manage, and optimize your cloud infrastructure.',
      'cybersecurity': 'We provide comprehensive cybersecurity services to protect your business from cyber threats.',
      'it consulting': 'Our IT consulting services help you strategize and implement the best IT solutions for your business needs.'
    };

    const userMessage = input.trim().toLowerCase();
    const botMessage = botResponses[userMessage] || "I'm sorry, I don't understand that. Can you please rephrase?";

    setTimeout(() => {
      setMessages(prevMessages => [...prevMessages, { text: botMessage, sender: 'bot' }]);
    }, 1000);
  };

  const handleSelect = (question) => {
    setInput(question);
    handleSend();
  };

  return (
    <>
      <button className="chatbot-toggle btn btn-primary btn6 mr10" onClick={() => setIsOpen(!isOpen)}>
        <BsChatSquare /> ChatBox
      </button>
      {isOpen && (
        <div className="chatbot">
          <div className="chatbot-messages">
            {messages.map((msg, index) => (
              <div key={index} className={`chatbot-message ${msg.sender}`}>
                {msg.text}
              </div>
            ))}
          </div>
          <div className="chatbot-questions">
            <p style={{ color: "red" }}>Select a question:</p>
            <button className="btn btn-outline-primary" onClick={() => handleSelect('hello')}>Hello</button>
            <button className="btn btn-outline-primary" onClick={() => handleSelect('services')}>Services</button>
              <button className="btn btn-outline-primary" onClick={() => handleSelect('contact')}>Contact</button>
              <button className="btn btn-outline-primary" onClick={() => handleSelect('hours')}>Office Hours</button>
              <button className="btn btn-outline-primary" onClick={() => handleSelect('location')}>Location</button>
              <button className="btn btn-outline-primary" onClick={() => handleSelect('about us')}>About Us</button>
              <button className="btn btn-outline-primary" onClick={() => handleSelect('web development')}>web development</button>
              <button className="btn btn-outline-primary" onClick={() => handleSelect('app development')}>app development</button>
              <button className="btn btn-outline-primary" onClick={() => handleSelect('cloud computing')}>cloud computing</button>
              <button className="btn btn-outline-primary" onClick={() => handleSelect('cybersecurity')}>cybersecurity</button>
              <button className="btn btn-outline-primary" onClick={() => handleSelect('it consulting')}>it consulting</button>
          </div>
          <div className="chatbot-input">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type a message..."
            />
            <button className="btn btn-primary" onClick={handleSend}>Send</button>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;
