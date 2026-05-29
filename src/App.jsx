import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import CursorGlow from './components/Cursor-glow'
import Lenis from '@studio-freight/lenis'
import { useEffect } from 'react'

const App = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const container = scrollRef.current;

    if (!container) return;

    const handleWheel = (e) => {
      e.preventDefault();

      container.scrollBy({
        left: e.deltaY * 2,
        behavior: "smooth",
      });
    };

    container.addEventListener("wheel", handleWheel, {
      passive: false,
    });

    return () => {
      container.removeEventListener("wheel", handleWheel);
    };
  }, []);

  return (
    <div>
      <CursorGlow/>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer/>
    </div>
  );
};

export default App;