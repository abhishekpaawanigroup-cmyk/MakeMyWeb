import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import CursorGlow from './components/Cursor-glow'
import Lenis from '@studio-freight/lenis'
import { useEffect } from 'react'
import Hero from './components/Hero'
import Company from './components/Company'
import Services from './components/Services'
import Work from './components/Work'
import Contact from './components/Contact'

const App = () => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      smoothWheel: true,
      lerp: 0.05,
    });
 
    function raf(time) {
      lenis.raf(time);
 
      requestAnimationFrame(raf);
    }
 
    requestAnimationFrame(raf);
 
  }, []);
  return (
    <div>
      <CursorGlow/>
      <Navbar/>
      <Hero/>
      <Company/>
      <Services/>
      <Work/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App