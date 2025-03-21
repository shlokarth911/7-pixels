import React, { useRef } from "react";
import styled from "styled-components";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Container = styled.div`
  height: 90vh;
  width: 100vw;
  overflow: hidden;
  position: relative;

  #svg-1 {
    position: absolute;
    top: 50%;
    left: 20%;
    width: 20%;
    transform: rotate(90deg) translate(-50%, -50%);
    height: auto;
    z-index: 1;
  }
`;

const GiantText = styled.h1`
  color: white;
  font-size: 80vh;
  font-weight: 700;
  white-space: nowrap;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 50%;
  margin: 0;
  display: inline-block;
`;

const HorizontalScroll = () => {
  const containerRef = useRef(null);
  const textRef = useRef(null);

  useGSAP(() => {
    gsap.to(textRef.current, {
      xPercent: -100,
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 10%",
        end: "400%",
        scrub: true,
        pin: true,
        anticipatePin: 1,
      },
    });
  });
  return (
    <Container ref={containerRef}>
      <GiantText ref={textRef}>MY IDEAS...</GiantText>
    </Container>
  );
};

export default HorizontalScroll;
