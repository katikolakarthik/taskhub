'use client'
import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

const logos = [
  "https://framerusercontent.com/images/m2iRqc0vjWCAjaKDXwpBZLHL6Q.svg",
  "https://framerusercontent.com/images/PrE34uenPJZDQexxT2w8id9mN0.svg",
  "https://framerusercontent.com/images/z5fRaFVV36hlMpbcgIeNIFBCs.svg",
  "https://framerusercontent.com/images/54zZDCErP56bz06CFc8rgyRqJbI.svg",
  "https://framerusercontent.com/images/yC2iV2rmFwuP2ByxGcZkd2o4k6Y.svg"
];

const Trusted = () => {
  // Duplicate the logos for seamless infinite scroll
  const allLogos = [...logos, ...logos];

  return (
    <div className="w-full py-8 flex flex-col items-center pl-[120px] pr-[120px]">
      <h2 className="text-xl md:text-2xl font-medium mb-8 text-center">
        Trusted by the world&apos;s most innovative teams
      </h2>
      <div className="overflow-hidden w-full">
        <motion.div
          className="flex items-center gap-15"
          style={{ width: 'max-content' }}
          animate={{ x: ['0%', '-50%'] }}
          transition={{
            repeat: Infinity,
            repeatType: 'loop',
            duration: 26,
            ease: 'linear'
          }}
        >
          {allLogos.map((logo, idx) => (
            <div key={idx} style={{ minWidth: 120, height: 48 }}>
              <Image
                src={logo}
                alt={`Trusted logo ${idx + 1}`}
                width={120}
                height={48}
                className="object-contain opacity-90"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}

export default Trusted
