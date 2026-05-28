import React from 'react'
import Hero from '../components/Hero'
import Company from '../components/Company'
import Services from '../components/Services'
import Work from '../components/Work'
import Contact from '../components/Contact'

const Home = () => {
  return (
    <div>
        <Hero />
        <Company />
        <Services />
        <Work />
        <Contact />
    </div>
  )
}

export default Home