'use client'
import React from 'react';
import { motion } from 'framer-motion';
const integrations = [
  // First row (7 icons)
  [
    { img: "https://framerusercontent.com/images/8jUh1QUjninpi4pqUvzsoVUPK0.png", bg: "bg-[#A493FF]" },
    { img: "https://framerusercontent.com/images/vioe7lfCx18KwSfX8DQ3KzjK2QQ.svg", bg: "bg-[#8EE6FF]" },
    { img: "https://framerusercontent.com/images/0pdda9NBTLW8FkNXDg8IguPRA.svg", bg: "bg-[#D49EFF]" },
    { img: "https://framerusercontent.com/images/uzcCWXSRAcaVnrDm7QBvTRwdS4k.svg", bg: "bg-[#FFE37B]" },
    { img: "https://framerusercontent.com/images/Aovv0fR4HopO3Wf5b40BeDOpeY.svg", bg: "bg-[#2EEB8B]" },
    { img: "https://framerusercontent.com/images/GUQnQl7VJKi8trRmkGHdS51NijM.svg", bg: "bg-[#C6FF8E]" },
    { img: "https://framerusercontent.com/images/2BIczcQfepUn10kzWjicY0p9PM.svg", bg: "bg-[#FFF37B]" }
  ],
  // Second row (6 icons)
  [
    { img: "https://framerusercontent.com/images/LcksNOeRePGtgDGnncCWzCLYuw.svg", bg: "bg-[#2EEB8B]" },
    { img: "https://framerusercontent.com/images/8jUh1QUjninpi4pqUvzsoVUPK0.png", bg: "bg-[#A493FF]" },
    { img: "https://framerusercontent.com/images/uzcCWXSRAcaVnrDm7QBvTRwdS4k.svg", bg: "bg-[#FFE37B]" },
    { img: "https://framerusercontent.com/images/vioe7lfCx18KwSfX8DQ3KzjK2QQ.svg", bg: "bg-[#8EE6FF]" },
    { img: "https://framerusercontent.com/images/0pdda9NBTLW8FkNXDg8IguPRA.svg", bg: "bg-[#D49EFF]" },
    { img: "https://framerusercontent.com/images/2BIczcQfepUn10kzWjicY0p9PM.svg", bg: "bg-[#FFF37B]" }
  ]
];

const Integrations = () => (
  <section className="w-full py-10 flex flex-col items-center">
    {/* Top badge and heading */}
    <div className="mb-2 flex items-center justify-center">
      <motion.span className="bg-[#8EE6FF] text-[#120A0B] font-semibold px-4 py-1 rounded-full text-sm mr-2" style={{ transform: 'rotate(7deg)' }} 
      
      animate={{ x: [0,-13, 0], rotate: [7] }}
      transition={{ duration: 3, repeat: Infinity, repeatType: 'loop' }}
      >
        Integrations
      </motion.span>
    </div>
    <h2 className="text-4xl md:text-6xl font-bold text-center mb-4 leading-tight">
      Integrations with<br className="hidden md:block" /> your favorite tools
    </h2>
    <p className="text-lg text-[#454140] text-center max-w-2xl mb-12">
      Simplify project planning, streamline collaboration, and boost productivity<br />
      all with TaskHub task management solution
    </p>
    {/* Integrations grid */}
    <div className="flex flex-col gap-6 w-full max-w-5xl px-4">
      {/* First row: 7 icons */}
      <div className="flex items-center justify-center gap-6">
        {integrations[0].map((item, idx) => (
          <div
            key={idx}
            className={`flex items-center justify-center rounded-2xl ${item.bg} w-18 h-18 md:w-22 md:h-22`}
          >
            <img src={item.img} alt="" className="w-8 h-8 md:w-10 md:h-10 object-contain" />
          </div>
        ))}
      </div>
      {/* Second row: 6 icons */}
      <div className="flex items-center justify-center gap-6">
        {integrations[1].map((item, idx) => (
          <div
            key={idx}
            className={`flex items-center justify-center rounded-2xl ${item.bg} w-18 h-18 md:w-22 md:h-22`}
          >
            <img src={item.img} alt="" className="w-8 h-8 md:w-10 md:h-10 object-contain" />
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Integrations;