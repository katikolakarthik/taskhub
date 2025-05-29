'use client'
import React, { useState } from 'react';
import { motion } from 'framer-motion';
const faqs = [
  {
    question: 'What is TaskHub?',
    answer: 'TaskHub is a task management platform designed for startups and growing teams. It helps you organize projects.'
  },
  {
    question: 'Can I integrate TaskHub with other tools',
    answer: 'Yes, TaskHub offers integrations with popular tools to streamline your workflow.'
  },
  {
    question: 'Is TaskHub mobile-friendly?',
    answer: 'Absolutely! TaskHub is designed to work seamlessly on all devices, including mobile.'
  },
  {
    question: 'What kind of support does TaskHub offer?',
    answer: 'We offer 24/7 support via email and chat to assist you with any questions or issues.'
  },
  {
    question: 'Can I try TaskHub for free?',
    answer: 'Yes, we offer a free trial so you can experience TaskHub before committing.'
  },
];

const FAQ = () => {
  const [openIdx, setOpenIdx] = useState(0);
  return (
    <section className="w-full py-10 flex flex-col items-center pl-[120px] pr-[120px]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full max-w-5xl px-4 items-start">
        {/* Left: Heading and description */}
        <div className="flex flex-col items-start justify-center mb-8 md:mb-0">
          <motion.span className="bg-[#8EE6FF] text-[#120A0B] font-semibold px-4 py-1 rounded-full text-sm mb-4" style={{ transform: 'rotate(7deg)' }}
          animate={{ x: [0,-13, 0], rotate: [-7] }}
          transition={{ duration: 3, repeat: Infinity, repeatType: 'loop' }}
          >
            FAQ
          </motion.span>
          <h2 className="text-4xl md:text-6xl font-bold text-left mb-4 leading-tight">
            Frequently<br />asked questions
          </h2>
          <p className="text-lg text-[#454140] text-left max-w-xl">
            For any unanswered questions, reach out to our support team via email. We'll respond as soon as possible to assist you.
          </p>
        </div>
        {/* Right: Accordion */}
        <div className="flex flex-col gap-4">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className={`rounded-2xl  bg-white transition-shadow ${openIdx === idx ? 'shadow-lg' : ''}`}
            >
              <button
                className="w-full flex justify-between items-center p-6 text-left font-semibold text-lg focus:outline-none"
                onClick={() => setOpenIdx(openIdx === idx ? -1 : idx)}
              >
                <span>{faq.question}</span>
                <span className="text-3xl font-light">{openIdx === idx ? '−' : '+'}</span>
              </button>
              {openIdx === idx && (
                <div className="px-6 pb-6 text-[#454140] text-base animate-fade-in">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ; 