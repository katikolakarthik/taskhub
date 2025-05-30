import React from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Quick from './components/Quick'
import Trusted from './components/Trusted'
import WhatMakesUsDifferent from './components/WhatMakesUsDifferent'
import Integrations from './components/Integrations'
import Testimonials from './components/Testimonials'
import Pricing from './components/Pricing'
import FAQ from './components/FAQ'
import Footer from './components/Footer'
const page = () => {
  return (
    <div>
  
      <div className="px-2 sm:px-4 lg:px-[120px]">
        <Nav />
        <Hero />
        <Quick />
        <Trusted />
        <WhatMakesUsDifferent />
        <Integrations />
        <Testimonials />
        <Pricing />
        <FAQ />
      </div>
      <Footer />
    </div>
  )
}

export default page
