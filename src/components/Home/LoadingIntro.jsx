import React, { useEffect } from "react";
import styled from "styled-components";
import { gsap } from "gsap";

const LoaderOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #111; /* Dark background for contrast */
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10000;
`;

const LoaderContent = styled.div`
  text-align: center;
  color: #fff;
`;

const LogoContainer = styled.div`
  width: 100px;
  height: 100px;
  margin: 0 auto 20px;
  position: relative;
`;

const LogoCircle = styled.div`
  width: 100%;
  height: 100%;
  border: 3px solid #fff;
  border-radius: 50%;
`;

const PlusSymbol = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100px;
  height: 100px;
  pointer-events: none;
`;

const LoadingIntro = ({ onFinish }) => {
  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        if (onFinish) onFinish(); // Callback to signal the loader is finished
      },
    });

    // Animate the vertical line of the plus from 0 to 40px in height
    tl.fromTo(
      ".vertical-line",
      { height: 0 },
      { height: 40, duration: 0.8, ease: "power2.out" },
      0
    );
    // Animate the horizontal line of the plus from 0 to 40px in width
    tl.fromTo(
      ".horizontal-line",
      { width: 0 },
      { width: 40, duration: 0.8, ease: "power2.out" },
      0
    );
    // Add a subtle pulse to the whole logo container
    tl.to(
      ".logo-container",
      {
        scale: 1.1,
        duration: 0.5,
        ease: "power2.inOut",
        yoyo: true,
        repeat: 1,
      },
      "-=0.3"
    );
    // Fade out the loader overlay to reveal the site
    tl.to(
      ".loader-overlay",
      { opacity: 0, duration: 0.5, ease: "power2.inOut" },
      "+=0.3"
    );
  }, [onFinish]);

  return (
    <LoaderOverlay className="loader-overlay">
      <LoaderContent>
        <LogoContainer className="logo-container">
          <LogoCircle />
          <PlusSymbol>
            <div
              className="vertical-line"
              style={{
                position: "absolute",
                left: "50%",
                transform: "translateX(-50%)",
                width: "2px",
                background: "#fff",
                top: "30%",
              }}
            />
            <div
              className="horizontal-line"
              style={{
                position: "absolute",
                top: "50%",
                transform: "translateY(-50%)",
                height: "2px",
                background: "#fff",
                left: "30%",
              }}
            />
          </PlusSymbol>
        </LogoContainer>
        <h2>Loading...</h2>
      </LoaderContent>
    </LoaderOverlay>
  );
};

export default LoadingIntro;
