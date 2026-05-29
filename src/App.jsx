import React, { useEffect, useRef } from "react";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import CursorGlow from "./components/Cursor-glow";

import Hero from "./components/Hero";
import Company from "./components/Company";
import Work from "./components/Work";
import Contact from "./components/Contact";
import Services from "./components/Services";

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
    <div className="w-screen h-screen overflow-hidden">
      <CursorGlow />

      <Navbar />

      {/* SCROLL CONTAINER */}
      <div
        ref={scrollRef}
        className="w-screen h-screen overflow-x-scroll overflow-y-hidden scroll-smooth"
      >
        {/* HORIZONTAL WRAPPER */}
        <div className="flex h-screen w-[500vw]">
          
          <section
            id="hero"
            className="w-screen h-screen shrink-0"
          >
            <Hero />
          </section>

          <section
            id="company"
            className="w-screen h-screen shrink-0"
          >
            <Company />
          </section>

          <section
            id="services"
            className="w-screen h-screen shrink-0"
          >
            <Services />
          </section>

          <section
            id="work"
            className="w-screen h-screen shrink-0"
          >
            <Work />
          </section>

          <section
            id="contact"
            className="w-screen h-screen shrink-0"
          >
            <Contact />
          </section>

          <section
            id="footer"
            className="w-screen h-screen shrink-0"
          >
            <Footer />
          </section>

        </div>
      </div>
    </div>
  );
};

export default App;