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
      <Nav />
      <Hero />
      <Quick />
      <Trusted />
      <WhatMakesUsDifferent />
      <Integrations />
      <Testimonials />
      <Pricing />
      <FAQ />
      <Footer />
    </div>
  )
}

export default page
