'use client'
import { motion } from 'framer-motion';
import React, { useState } from 'react';

const plans = [
  {
    name: 'Starter',
    monthly: '$79.99',
    yearly: '$799.99',
    period: 'per month',
    periodYear: 'per year',
    description: 'For small teams & startups',
    features: [
      'Up to 5 users',
      'Unlimited Tasks & Projects',
      'Basic Task Board & Calendar View',
      'File Sharing & Attachments',
      'Real-Time Notifications',
    ],
    highlight: false,
  },
  {
    name: 'Enterprise',
    monthly: '$149.99',
    yearly: '$1499.99',
    period: 'per month',
    periodYear: 'per year',
    description: 'For large teams & enterprises',
    features: [
      'Unlimited Users',
      'All Growth Features',
      'Custom Workflows & Dashboards',
      'Dedicated Account Manager',
      '24/7 Priority Support',
    ],
    highlight: true,
  },
];

const checkIcon = (
  <svg width="22" height="22" fill="none" viewBox="0 0 22 22"><circle cx="11" cy="11" r="11" fill="#FFD86F"/><path stroke="#120A0B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6.5 11.5l3 3 6-6"/></svg>
);

const Pricing = () => {
  const [isMonthly, setIsMonthly] = useState(true);
  return (
    <section className="w-full py-10 flex flex-col items-center ">
      {/* Badge */}
      <div className="mb-2 flex items-center justify-center">
        <motion.span className="bg-[#C9FF85] text-[#120A0B] font-semibold px-4 py-1 rounded-full text-sm mr-2" 
        animate={{ x: [0, -13, 0],rotate: [7] }}
        transition={{ duration: 3, repeat: Infinity, repeatType: 'loop' }}>
          Pricing
        </motion.span>
      </div>
      {/* Title */}
      <h2 className="text-4xl md:text-6xl font-bold text-center mb-4 leading-tight">
        Flexible pricing plans
      </h2>
      {/* Subtitle */}
      <p className="text-lg text-[#454140] text-center max-w-2xl mb-10">
        Simplify project planning, streamline collaboration, and boost productivity<br />
        all with TaskHub task management solution
      </p>
      {/* Toggle */}
      <div className="flex items-center gap-4 mb-10">
        <span className="font-medium text-[#454140]">Monthly</span>
        <div
          className="relative w-12 h-7 flex items-center bg-[#F8F4F1] rounded-full p-1 cursor-pointer"
          onClick={() => setIsMonthly((prev) => !prev)}
        >
          <motion.div
            className="absolute top-1 w-5 h-5 bg-[#2BD886] rounded-full"
            animate={{ x: isMonthly ? 0 : 20 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          />
        </div>
        <span className="font-medium text-[#454140]">Yearly</span>
        <span className="ml-2 bg-[#5952FF] text-white text-xs px-3 py-1 rounded-full">Save 20%</span>
      </div>
      {/* <div className="flex relative flex-col items-center left-100" style={{ minWidth: 200 }}>
            <motion.div className='relative top-12 left-10' animate={{rotate:10}} >
                <span className=" relative font-bold text-lg text-[#120A0B] text-right left-5 whitespace-nowrap">
                    most<br />
                </span>
            
                <span className='font-bold text-lg text-[#120A0B] relative bottom-2'>popular plan</span>

            </motion.div>
          
          <motion.img
            src="https://framerusercontent.com/images/DpgNE8gvOStUIR9igkNISCjMYTw.png"
            alt="Right Arrow"
            className="w-20 h-15 relative right-16 bottom-10"
            
            animate={{ x: [0, -13, 0] }}
            transition={{ duration: 3, repeat: Infinity, repeatType: 'loop' }}
          />
        </div> */}
      {/* Pricing Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl px-4 relative">
        {plans.map((plan, idx) => (
          <motion.div
            key={plan.name}
            className={`flex flex-col bg-[#F7F3EF] rounded-3xl p-6 md:p-10 relative `}
           
          >
            {/* Most popular label */}
            {/* {plan.highlight && (
              <span className="absolute -top-8 right-6 bg-white text-black text-xs px-3 py-1 rounded-full shadow-md font-semibold flex items-center gap-1">
                <svg width="18" height="18" fill="none" viewBox="0 0 18 18"><path d="M9 0l2.763 5.604L18 6.527l-4.5 4.389L14.027 18 9 14.727 3.973 18 4.5 10.916 0 6.527l6.237-.923L9 0z" fill="#FFD86F"/></svg>
                Most popular plan
              </span>
            )} */}
            {/* Card inner */}
            <div className="bg-white rounded-2xl p-6 mb-6">
              <span className="bg-[#FFD86F] text-[#120A0B] font-semibold px-4 py-1 rounded-full text-sm mb-2 inline-block">{plan.name}</span>
              <div className="text-[#454140] mb-1">{plan.description}</div>
              <div className="text-4xl font-bold mb-1">
                {isMonthly ? plan.monthly : plan.yearly}
              </div>
              <span className="text-[#454140] text-base">
                {isMonthly ? plan.period : plan.periodYear}
              </span>
            </div>
            {/* Features */}
            <ul className="mb-8 space-y-3">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-center gap-2 text-[#454140] text-base">
                  {checkIcon}
                  {feature}
                </li>
              ))}
            </ul>
            {/* Button */}
            <button className="w-full bg-black text-white py-3 rounded-full font-semibold text-lg hover:bg-[#120A0B] transition-colors">
              Select Plan
            </button>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Pricing;

