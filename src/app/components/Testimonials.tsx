'use client'
import React from 'react';
import {motion} from 'framer-motion'
const testimonials = [
  {
    stars: 5,
    img: "https://framerusercontent.com/images/eKMVAPLnSIH0dO3Q2sAbp43k00.png",
    name: "Martin J.",
    role: "Co-Founder, Gradepie",
    title: "It's a total game-changer for our startup so far.",
    desc: "TaskHub has transformed how my team collaborates! The intuitive task board and real-time update."
  },
  {
    stars: 5,
    img: "https://framerusercontent.com/images/gr1chktixBNI8GLiTJGSYHGxgvo.png",
    name: "James P.",
    role: "Software Engineer",
    title: "Our team collaboration has improved drastically!",
    desc: "The dashboard gives us a clear view of tasks and deadlines, helping us deliver projects on time, every time."
  },
  {
    stars: 5,
    img: "https://framerusercontent.com/images/qHJ7VeMbWDGI9WSEUWRQZzSsiQ.png",
    name: "Emily R",
    role: "CMO, Artican",
    title: "The recurring task feature has been a lifesaver for me!",
    desc: "TaskHub takes care of the small details so we can focus on what matters most. It's truly a productivity."
  }
];

const starImg = "https://framerusercontent.com/images/tL8avdiXVdQ0SWTBtkuREC5LP48.svg";

const Testimonials = () => (
  <section className="w-full py-16 flex flex-col items-center ">
    {/* Top badge and heading */}
    <div className="mb-2 flex items-center justify-center">
      <motion.span className="bg-[#8EE6FF] text-[#120A0B] font-semibold px-4 py-1 rounded-full text-sm mr-2" style={{ transform: 'rotate(7deg)' }}
      animate={{ x: [0,-13, 0], rotate: [-7] }}
      transition={{ duration: 3, repeat: Infinity, repeatType: 'loop' }}
      >
        Testimonials
      </motion.span>
    </div>
    <h2 className="text-4xl md:text-6xl font-bold text-center mb-4 leading-tight">
      What our users are saying
    </h2>
    <p className="text-lg text-[#454140] text-center max-w-2xl mb-12">
      Simplify project planning, streamline collaboration, and boost productivity<br />
      all with TaskHub task management solution
    </p>
    {/* Testimonials grid */}
    <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-12 w-full max-w-6xl pl-10">
      {testimonials.map((t, idx) => (
        <motion.div
          key={idx}
          className="flex flex-col items-start text-left bg-white rounded-xl"
          whileHover={{ backgroundColor: "#EFEBE9"}}
        >
          {/* Stars */}
          <div className="flex gap-1 mb-6 justify-start">
            {Array.from({ length: t.stars }).map((_, i) => (
              <img key={i} src={starImg} alt="star" className="w-7 h-7" />
            ))}
          </div>
          {/* Title */}
          <h3 className="font-semibold text-2xl mb-4">{t.title}</h3>
          {/* Description */}
          <p className="text-[#454140] mb-8">{t.desc}</p>
          {/* User */}
          <div className="flex items-center gap-4 mt-auto">
            <img src={t.img} alt={t.name} className="w-12 h-12 rounded-full object-cover" />
            <div className="text-left">
              <div className="font-bold">{t.name}</div>
              <div className="text-[#454140] text-sm">{t.role}</div>
            </div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  </section>
);

export default Testimonials; 