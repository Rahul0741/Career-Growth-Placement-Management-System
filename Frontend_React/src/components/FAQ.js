import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/FAQ.css';

const FAQ = () => {
  const [activeQuestion, setActiveQuestion] = useState(null);
  const navigate = useNavigate();

  const toggleQuestion = (index) => {
    setActiveQuestion(activeQuestion === index ? null : index);
  };

  const questions = [
    {
      question: "How do I apply for placements through the portal?",
      answer: "To apply for placements, go to the 'Job Listings' section, browse through available opportunities, and submit your application directly through the portal.",
    },
    {
      question: "How can I update my resume on the portal?",
      answer: "You can update your resume by navigating to the 'Profile' section, where you'll find an option to upload your latest resume.",
    },
    {
      question: "What should I do if I forget my login credentials?",
      answer: "Click on the 'Forgot Password' link on the login page and follow the instructions to reset your password.",
    },
    {
      question: "Are there any fees associated with using the placement portal?",
      answer: "No, the placement portal is free for all registered students of the institution.",
    },
    {
      question: "How do I know if I am eligible for a specific job posting?",
      answer: "Each job posting includes eligibility criteria. Please read the job description carefully to see if you meet the requirements.",
    },
    {
      question: "Can I view my application status?",
      answer: "Yes, you can view the status of your applications in the 'My Applications' section under your profile.",
    },
    {
      question: "Who do I contact if I encounter issues on the portal?",
      answer: "If you face any technical issues, please reach out to our support team through the 'Contact Us' page for assistance.",
    },
  ];

  return (
    
    <div className="faq-container">
    <header className="faq-header">
        <button className="home-button" onClick={() => navigate('/')}>Home</button>
        <h1 className="logo">Welcome to Career Growth </h1>
    </header>
      <h2>Frequently Asked Questions</h2>
      <div className="faq-list">
        {questions.map((item, index) => (
          <div key={index} className="faq-item">
            <div className="faq-question" onClick={() => toggleQuestion(index)}>
              {item.question}
              <span className={`arrow ${activeQuestion === index ? 'open' : ''}`}>▼</span>
            </div>
            <div
              className={`faq-answer ${activeQuestion === index ? 'show' : ''}`}
              style={{ maxHeight: activeQuestion === index ? '200px' : '0px' }}
            >
              {item.answer}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
