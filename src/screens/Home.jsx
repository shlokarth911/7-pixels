import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import Navbar from "../components/Common/Navbar";
import Hero from "../components/Home/Hero";
import Contact from "../components/Home/Contact";
import AboutUs from "../components/Home/AboutUs";
import HorizontalScoll from "../components/Home/HorizontalScoll";
import MyIdeas from "../components/Home/MyIdeas";
import Services from "../components/Home/Services";
import styled from "styled-components";

const MainContainer = styled.div`
  .cursor {
    width: 1rem;
    height: 1rem;
    background-color: white;
    border-radius: 50%;
    position: fixed;
    pointer-events: none;
    z-index: 9999;
    mix-blend-mode: difference;
    transform: translate(-50%, -50%) scale(1);
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
  }

  .cursor i {
    font-size: 0vw;
    color: #000;
    transition: transform 0.3s ease-out; /* Smooth transition for icon */
  }
`;

const Home = () => {
  const cursorRef = useRef(null);

  useEffect(() => {
    if (!cursorRef.current) return;

    const moveCursor = (e) => {
      gsap.to(cursorRef.current, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.5,
        ease: "power3.out",
      });
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  const handleMouseEnter = () => {
    if (!cursorRef.current) return;
    gsap.to(cursorRef.current, {
      scale: 5,
      duration: 0.3,
      cursor: "pointer",
      ease: "power3.out",
    });
    gsap.to(cursorRef.current.querySelector("i"), {
      transform: "rotate(45deg) scale(1.3)",
      fontSize: "0.5vw",
      duration: 0.3,
    });
  };

  const handleMouseLeave = () => {
    if (!cursorRef.current) return;
    gsap.to(cursorRef.current, { scale: 1, duration: 0.3, ease: "power3.out" });
    gsap.to(cursorRef.current.querySelector("i"), {
      transform: "rotate(0deg) scale(1)",
      fontSize: 0,
      duration: 0.3,
    });
  };

  return (
    <MainContainer>
      <div className="cursor" ref={cursorRef}>
        <i className="ri-arrow-right-up-line"></i>
      </div>
      <Navbar onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} />
      <Hero onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} />
      <AboutUs
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      />
      <Services
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      />
      <HorizontalScoll
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      />
      <MyIdeas
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      />
      <Contact
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      />
    </MainContainer>
  );
};

export default Home;
