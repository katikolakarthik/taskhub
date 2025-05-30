'use client'
import React from 'react';
import {motion} from 'framer-motion'

const features = [
  {
    iconBg: 'bg-[#FFD86F]',
    icon: 'https://framerusercontent.com/images/iea21zZiEUNB7QBlnhdIEYhx0A.svg',
    title: 'Activity tracking & insights',
    desc: 'TaskHub is built to work seamlessly on mobile devices, ensuring you can connected.',
    cardImg: 'https://framerusercontent.com/images/YPgjPAy1QiIkqz5L5IxV0topg.png?scale-down-to=512',
    cardImg2: 'https://framerusercontent.com/images/eKfVv1H2QQeHuYlwvynZKnvyfI.svg'
  },
  {
    iconBg: 'bg-[#7CE1FF]',
    icon: 'https://framerusercontent.com/images/c49xdNrkpz0kfcdgzCgBuiNvMhc.svg',
    title: 'Task prioritization',
    desc: 'Organize your tasks by priority levels to make sure you focus on what matters most.',
    cardImg: 'https://framerusercontent.com/images/MPUxlfpqCiewF3hh4ESdIzZxwQ.png?scale-down-to=512'
  },
  {
    iconBg: 'bg-[#9886FE]',
    icon: 'https://framerusercontent.com/images/8pGrn7vkpsghfWzLkSfgAdy3Y.svg',
    title: 'Team collaboration',
    desc: 'Collaborate effortlessly with your team, no matter where they are on real-time.',
    cardImg: 'https://framerusercontent.com/images/tdq1Wb7i4WfoAxgNMUqBf6tqVM.png?scale-down-to=512'
  }
];

const WhatMakesUsDifferent = () => (
  <section className="w-full py-16 flex flex-col items-center">
    {/* Top badge and heading */}
    <div className="mb-2 flex items-center justify-center">
      <motion.span className="bg-[#FFD86F] text-[#120A0B] font-semibold px-4 py-1 rounded-full text-sm mr-2" style={{ transform: 'rotate(-7deg)' }}
      animate={{ x: [0, -13, 0], rotate: [-10,] }}
      transition={{ duration: 3, repeat: Infinity, repeatType: 'loop' }}
      
      >
        
        Why choose us
      </motion.span>
    </div>
    <h2 className="text-4xl md:text-6xl font-bold text-center mb-4 leading-tight">
      What makes us different
    </h2>
    <p className="text-lg text-[#454140] text-center max-w-2xl mb-12">
      Simplify project planning, streamline collaboration, and boost productivity all with TaskHub task management solution
    </p>
    {/* Feature cards */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl px-4">
      {/* Card 1 */}
      <div className="bg-[#F9F6F2] rounded-3xl p-8 flex flex-col items-start shadow-sm">
        <div className="mb-4 p-3 rounded-xl bg-[#FFEFAF] flex items-center justify-center">
          <img src={features[0].icon} alt="" className="w-7 h-7" />
        </div>
        <h3 className="font-bold text-xl mb-2">{features[0].title}</h3>
        <p className="text-[#454140] mb-6">{features[0].desc}</p>
        <div className="w-full flex flex-col gap-4">
          <img src={features[0].cardImg} alt="" className="rounded-xl w-full object-cover" />
          <img src={features[0].cardImg2} alt="" className="w-40 mt-2" />
        </div>
      </div>
      {/* Card 2 */}
      <div className="bg-[#F9F6F2] rounded-3xl p-8 flex flex-col items-start shadow-sm">
        <div className="mb-4 p-3 rounded-xl bg-[#C9F1FF] flex items-center justify-center">
          <img src={features[1].icon} alt="" className="w-7 h-7" />
        </div>
        <h3 className="font-bold text-xl mb-2">{features[1].title}</h3>
        <p className="text-[#454140] mb-6">{features[1].desc}</p>
        <img src={features[1].cardImg} alt="" className="rounded-xl w-full object-cover" />
      </div>
      {/* Card 3 */}
      <div className="bg-[#F9F6F2] rounded-3xl p-8 flex flex-col items-start shadow-sm">
        <div className="mb-4 p-3 rounded-xl bg-[#E6DEFF] flex items-center justify-center">
          <img src={features[2].icon} alt="" className="w-7 h-7" />
        </div>
        <h3 className="font-bold text-xl mb-2">{features[2].title}</h3>
        <p className="text-[#454140] mb-6">{features[2].desc}</p>
        <img src={features[2].cardImg} alt="" className="rounded-xl w-full object-cover" />
      </div>
    </div>
  </section>
);

export default WhatMakesUsDifferent;