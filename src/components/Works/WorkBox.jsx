import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";
import styled from "styled-components";

const Container = styled.div`
  border-bottom: 1px solid #a1a1a1;
  padding: 2.3vw 1vw;
  display: flex;
  overflow: hidden;
  position: relative;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  transition: all 0.4s;

  h1 {
    font-size: 2.5vw;
    font-weight: 500;
    position: relative;

    span {
      font-weight: 300;
      font-size: 1.5vw;
      color: #868686;
      margin-right: 1vw;
    }
  }

  i {
    font-size: 2.8vw;
    font-weight: 300;
    position: relative;
  }

  .layer {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 100%;
    left: 0;
    background-color: #2b2b2b;
    z-index: -1;
  }

  &:hover {
    padding: 2.3vw 2.5vw;
  }
`;

const WorkBox = ({ title, link, index }) => {
  const layerRef = useRef();
  const animation = useRef();

  useGSAP(() => {
    animation.current = gsap.to(layerRef.current, {
      top: 0,
      duration: 0.3,
      ease: "power4.InOut",
      paused: true, // Start the animation in a paused state
    });
  });

  const handleMouseEnter = () => {
    animation.current.play();
  };

  const handleMouseLeave = () => {
    animation.current.reverse();
  };

  const handleOnClick = () => {
    window.open(link, "_blank");
  };

  return (
    <Container
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleOnClick}
    >
      <div className="layer" ref={layerRef} />
      <h1>
        <span>{index}</span>
        {title}
      </h1>
      <i className="ri-arrow-right-up-line"></i>
    </Container>
  );
};

export default WorkBox;
