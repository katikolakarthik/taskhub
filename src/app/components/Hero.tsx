'use client'
import { motion } from 'framer-motion'
import React from 'react'

const Hero = () => {
  return (
    <div className='flex flex-col justify-center items-center min-h-[80vh] bg-gradient-to-b'>
      {/* Review avatars and text */}
      <div className='flex flex-row items-center gap-2 mt-8 mb-6 bg-white px-8 py-1 rounded-full shadow-sm'>
        <span className='flex -space-x-2'>
          <img src="https://framerusercontent.com/images/0XIOoF2Oain1ymw3aK4KMS8VDE.png" alt="" className='w-8 h-8 rounded-full border-2 border-white'/>
          <img src="https://framerusercontent.com/images/DxODa2XczEyPpL800pUZkXcDCY.png" alt="" className='w-8 h-8 rounded-full border-2 border-white'/>
          <img src="https://framerusercontent.com/images/kK54VVzwxoCJrm6zaFFsJ9qWJNo.png" alt="" className='w-8 h-8 rounded-full border-2 border-white'/>
        </span>
        <p className='ml-3 text-medium font-medium'>4900+ 5 Stars Reviews</p>
      </div>
      {/* Headline */}
      <div className='flex flex-col items-center text-center mb-4 w-full relative'>
        <h1 className='text-4xl md:text-7xl font-bold leading-tight text-[#120A0B]'>Easy task management</h1>
        <div className="relative flex items-center justify-center w-full mt-2" style={{minHeight: '80px'}}>
          {/* Left animated tag/arrow */}
          <motion.div
            className="md:absolute md:left-35 flex items-center sm:absolute sm:left-0 "
            style={{ top: '50%', transform: 'translateY(-50%)' }}
            animate={{ x: [0, -13, 0] }}
            transition={{ duration: 3, repeat: Infinity, repeatType: 'loop' }}
          >
            <span className="text-[#120A0B] text-base  px-4 py-1 rounded-full font-medium shadow mr-2" style={{ background: 'var(--token-cd9072b7-2fb7-4ada-9f08-fb301d6a65e0, #c9ff85)' }}>
              Charles
            </span>
            <img
              src="https://framerusercontent.com/images/rVGeJPrHuP3L4RRBJtCkydMASs.png"
              alt="arrow"
              className="w-7 h-7 -ml-2 mb-10"
            />
          </motion.div>

          {/* Headline */}
          <h1 className="text-4xl md:text-7xl font-bold leading-tight z-10 text-[#120A0B]">
            for your remote team
          </h1>

          {/* Right animated tag/arrow */}
          <motion.div
            className="md:absolute md:right-45 flex items-center  sm:absolute sm:right-0"
            style={{ top: '50%', transform: 'translateY(-50%)' }}
            animate={{ x: [0, 13, 0] }}
            transition={{ duration: 3, repeat: Infinity, repeatType: 'loop' }}
          >
            <img
              src="https://framerusercontent.com/images/wOHUYMcwMKL2vRlhqyCKvAIzsYI.png"
              alt="arrow"
              className="w-7 h-7 -mr-2 mb-9"
            />
            <span className="bg-[#9886fe] text-white text-small px-4 py-1 rounded-full font-medium shadow ml-2">
              You
            </span>
          </motion.div>
        </div>
      </div>
      {/* Subheading */}
      <div className='mb-7 max-w-2xl text-center'>
        <p
          className="framer-text"
          style={{
            textAlign: "center",
            color: "var(--framer-text-color, #454140)"
          }}
        >
          Streamline your workflow, manage projects, and empower your team with{' '}
          <span>
            TaskHub the all-in-one task management solution
          </span>
        </p>
      </div>
      {/* Call to action buttons */}
      <div className='flex md:flex-row sm:flex-col md:gap-4'>
        <button className=' text-[#120A0B] font-semibold px-8 py-4 rounded-full text-lg shadow' style={{ background: 'var(--token-5b864cb5-f3a0-4913-a245-1c1b51c03711, rgb(255, 216, 111))' }}>Book a Demo</button>
        <button className='bg-white text-[#120A0B] font-semibold px-8 py-4 rounded-full text-lg border border-gray-300 shadow sm:mt-4 md:mt-0 '>Contact Sales</button>
      </div>
    </div>
  )
}

export default Hero