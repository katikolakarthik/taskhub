"use client"
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

const Nav = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <motion.div className='h-20 w-full bg-white flex justify-between items-center mt-4 rounded-3xl cursor-pointer px-2 sm:px-5'>
      <div className='flex items-center'>
          <Image src="https://framerusercontent.com/images/6pk41POQwzRkqFLgLX6UKDZxEo.png" alt="Logo" width={140} height={24} className='h-6 w-35' />
          <div
            className="relative hidden md:flex items-center"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <motion.p
              className='text-black text-[15.5px] font-medium pl-4 md:pl-19 flex items-center'
              whileHover={{ color: '#A991FF' }}
              transition={{ duration: 0.2 }}
            >
              All Pages
              <motion.span className='ml-1 flex items-center'>
                <Image
                  src="https://res.cloudinary.com/dnomrmyzh/image/upload/v1748431076/down-arrow_db12qi.png"
                  alt="Dropdown Arrow"
                  width={28}
                  height={32}
                  className='w-7 h-8'
                  style={{ display: 'inline-block' }}
                  />
              </motion.span>
            </motion.p>
            
            {dropdownOpen && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                className="absolute z-50 bg-white rounded-xl p-5 ml-0 sm:ml-9 left-1/2 -translate-x-1/2 top-10.5 w-[90vw] max-w-sm h-[70vh] md:left-0 md:translate-x-0 md:top-12 md:w-auto md:max-w-none md:h-auto md:min-w-[700px] scrollbar-hide"
                // style={{ boxShadow: '0 8px 32px rgba(80, 80, 80, 0.10)' }}
              >
                <div className="grid grid-cols-1 w-full right-0 md:grid-cols-4 gap-8 md:gap-12">
                  <div>
                    <div className="font-bold mb-6">Home Pages</div>
                    <div className="flex flex-col gap-2">
                      <span className="hover:text-[#A991FF] cursor-pointer">Home 1</span>
                      <span className="hover:text-[#A991FF] cursor-pointer">Home 2</span>
                      <span className="hover:text-[#A991FF] cursor-pointer">Home 3</span>
                    </div>
                  </div>
                  <div>
                    <div className="font-bold mb-6">Inner Pages</div>
                    <div className="flex flex-col gap-3">
                      <span className="hover:text-[#A991FF] cursor-pointer">Pricing</span>
                      <span className="hover:text-[#A991FF] cursor-pointer">Company</span>
                      <span className="hover:text-[#A991FF] cursor-pointer">Features</span>
                      <span className="hover:text-[#A991FF] cursor-pointer">Request a demo</span>
                      <span className="hover:text-[#A991FF] cursor-pointer">Case study</span>
                      <span className="hover:text-[#A991FF] cursor-pointer">Features</span>
                      <span className="hover:text-[#A991FF] cursor-pointer sm:block hidden">Blog</span>
                      
                    </div>
                  </div>
                  <div>
                    
                    <div className="md:flex md:flex-col md:gap-3 md:mt-10 sm:hidden  md:block ">
                      <span className="hover:text-[#A991FF] cursor-pointer">Blog</span>
                      <span className="hover:text-[#A991FF] cursor-pointer">Blog details</span>
                      <span className="hover:text-[#A991FF] cursor-pointer">Contact us</span>
                      <span className="hover:text-[#A991FF] cursor-pointer">Integration</span>
                      <span className="hover:text-[#A991FF] cursor-pointer">details</span>
                      <span className="hover:text-[#A991FF] cursor-pointer">Review</span>
                    </div>
                  </div>
                  <div>
                  
                    <div className="md:flex md:flex-col md:gap-3 md:mt-10 sm:hidden  md:block ">
                      <span className="hover:text-[#A991FF] cursor-pointer">Changelog</span>
                      <span className="hover:text-[#A991FF] cursor-pointer">Privacy policy</span>
                      <span className="hover:text-[#A991FF] cursor-pointer">Terms of service</span>
                      <span className="hover:text-[#A991FF] cursor-pointer">Sign up</span>
                      <span className="hover:text-[#A991FF] cursor-pointer">Sign in</span>
                      <span className="hover:text-[#A991FF] cursor-pointer">404</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </div>
          <motion.p
            className='text-black text-[15.5px] font-medium pl-4 md:pl-8 md:block sm:hidden hidden md:flex items-center'
            whileHover={{ color: '#A991FF' }}
            transition={{ duration: 0.2 }}
          >
            Features
          </motion.p>
          <motion.p
            className='text-black text-[15.5px] font-medium pl-4 md:pl-8 md:block sm:hidden hidden md:flex items-center'
            whileHover={{ color: '#A991FF' }}
            transition={{ duration: 0.2 }}
          >
            Contacts
          </motion.p>
      </div>
      <div className='flex items-center gap-4 md:gap-6'>
        <motion.p
            className='text-black text-[16px] font-medium hidden md:block'
            whileHover={{ color: '#A991FF' }}
            transition={{ duration: 0.2 }}
          >
            Login
          </motion.p>
        <motion.p
            className='bg-black text-white text-[16px] px-6 py-2 rounded-4xl hidden md:block'
            whileHover={{ backgroundColor: '#393333' }}
            transition={{ duration: 0.2 }}
          >
            Get This Template
          </motion.p>
      </div>

      <div className='md:hidden'>
        {dropdownOpen ?  (
          <Image
            onClick={() => setDropdownOpen(false)}
            src="https://img.icons8.com/material-rounded/24/multiply--v1.png"
            alt="close menu"
            width={32}
            height={32}
            className='h-8 w-8 ml-4 cursor-pointer'
          />
        ) : (
          <Image
            onClick={() => setDropdownOpen(true)}
            src="https://img.icons8.com/ios-filled/50/menu--v6.png"
            alt="open menu"
            width={32}
            height={32}
            className='h-8 w-8 ml-4 cursor-pointer'
          />
        )}
      </div>
    </motion.div>
  )
}

export default Nav
