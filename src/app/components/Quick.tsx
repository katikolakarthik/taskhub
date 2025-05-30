'use client'
import React from 'react';
import { motion } from 'framer-motion';

const Quick = () => {
  return (
    <div className="relative flex flex-col items-center w-full bottom-15 px-2 sm:px-4 ">
      {/* Annotation Row */}
      <div className="relative w-full flex flex-row justify-between items-center gap-2 sm:gap-0" style={{ maxWidth: 1200 }}>
        {/* Left Arrow and Text */}
        <div className="flex relative flex-col items-center whitespace-nowrap min-w-0 sm:min-w-[180px]">
          <motion.span className="relative top-4 sm:top-6 whitespace-nowrap font-bold text-base sm:text-lg text-[#120A0B] text-center sm:text-left" animate={{rotate:-8}}>
            Quick Action<br /><motion.span className='relative left-2 sm:left-5 bottom-1 sm:bottom-2 text-base sm:text-lg' animate={{rotate:-11}}>Buttons</motion.span>
          </motion.span>
          <motion.img
            src="https://framerusercontent.com/images/UDlMxmAdmGIZQl1iQYqNrgjkawU.png"
            alt="Left Arrow"
            className="w-12 h-8 sm:w-20 sm:h-15 relative left-4 sm:left-17"
            animate={{ x: [0, 13, 0] }}
            transition={{ duration: 3, repeat: Infinity, repeatType: 'loop' }}
          />
        </div>
        {/* Right Arrow and Text */}
        <div className="flex relative flex-col items-center min-w-0 sm:min-w-[200px]">
            <motion.div className='relative top-8 sm:top-12 sm:left-10' animate={{rotate:10}} >
                <span className="relative font-bold text-base sm:text-lg text-[#120A0B] text-center sm:text-right sm:left-2 sm:left-5 whitespace-nowrap">
                    Clean and<br />
                </span>
                <span className='font-bold text-base sm:text-lg text-[#120A0B] relative bottom-1 sm:bottom-2'>Minimal Layout</span>
            </motion.div>
          
          <motion.img
            src="https://framerusercontent.com/images/DpgNE8gvOStUIR9igkNISCjMYTw.png"
            alt="Right Arrow"
            className="w-12 h-8 sm:w-20 sm:h-15 relative right-4 sm:right-16 bottom-6 sm:bottom-10"
            animate={{ x: [0, -13, 0] }}
            transition={{ duration: 3, repeat: Infinity, repeatType: 'loop' }}
          />
        </div>
      </div>
      {/* Main Image */}
      <img
        src="https://framerusercontent.com/images/rN7FYcaLH7ZQff8gdhHQytFe6cg.png"
        alt="Dashboard Example"
        className="rounded-2xl sm:rounded-3xl shadow-xl w-full max-w-[180px] max-h-[650px] h-auto sm:max-w-[95vw] sm:lg:w-[1000px] sm:lg:h-[700px] sm:w-140 sm:h-250"
        style={{ maxWidth: 1200 }}
      />
    </div>
  );
};

export default Quick;
