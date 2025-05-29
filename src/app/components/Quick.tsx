'use client'
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const Quick = () => {
  return (
    <div className="relative flex flex-col items-center w-full bottom-15 pl-[120px] pr-[120px]">
      {/* Annotation Row */}
      <div className="relative w-full flex justify-between items-start" style={{ maxWidth: 1200 }}>
        {/* Left Arrow and Text */}
        <div className="flex relative flex-col items-center whitespace-nowrap" style={{ minWidth: 180 }}>
          <motion.span className="relative top-6  whitespace-nowrap font-bold text-lg text-[#120A0B] text-left" animate={{rotate:-8}}>
            Quick Action<br /><motion.span className='relative left-5 bottom-2' animate={{rotate:-11}}>Buttons</motion.span>
          </motion.span>
          <motion.div 
            className="w-20 h-15 relative left-17"
            animate={{ x: [0, 13, 0] }}
            transition={{ duration: 3, repeat: Infinity, repeatType: 'loop' }}
          >
            <Image
              src="https://framerusercontent.com/images/UDlMxmAdmGIZQl1iQYqNrgjkawU.png"
              alt="Left Arrow"
              fill
              className="object-contain"
            />
          </motion.div>
        </div>
        {/* Right Arrow and Text */}
        <div className="flex relative flex-col items-center" style={{ minWidth: 200 }}>
            <motion.div className='relative top-12 left-10' animate={{rotate:10}} >
                <span className=" relative font-bold text-lg text-[#120A0B] text-right left-5 whitespace-nowrap">
                    Clean and<br />
                </span>
            
                <span className='font-bold text-lg text-[#120A0B] relative bottom-2'>Minimal Layout</span>

            </motion.div>
          
          <motion.div 
            className="w-20 h-15 relative right-16 bottom-10"
            animate={{ x: [0, -13, 0] }}
            transition={{ duration: 3, repeat: Infinity, repeatType: 'loop' }}
          >
            <Image
              src="https://framerusercontent.com/images/DpgNE8gvOStUIR9igkNISCjMYTw.png"
              alt="Right Arrow"
              fill
              className="object-contain"
            />
          </motion.div>
        </div>
      </div>
      {/* Main Image */}
      <div className="relative h-170 w-250" style={{ maxWidth: 1200 }}>
        <Image
          src="https://framerusercontent.com/images/rN7FYcaLH7ZQff8gdhHQytFe6cg.png"
          alt="Dashboard Example"
          fill
          className="rounded-3xl shadow-xl object-cover"
        />
      </div>
    </div>
  );
};

export default Quick;
