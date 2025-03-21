import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

// Register the plugin
gsap.registerPlugin(ScrollTrigger);

const IdeaBoxContainer = styled.div`
  height: 65vh;
  width: 100%;
  /* border-top: 1px solid white; */
  border-bottom: 1px solid #747474;
  display: flex;
  align-items: center;
  padding: 20% 2.5%;
  gap: 5%;

  .part1 {
    height: 100%;
    width: 35%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  #image-container {
    height: 25vw;

    img {
      height: 100%;
      border-radius: 20px;
    }
  }

  .part2 {
    display: flex;
    flex-direction: column;
    gap: 20px;
    height: 20vw;
    position: relative;

    h1 {
      font-size: 3vw;
      font-weight: 500;
    }

    p {
      font-size: 1.5vw;
    }

    #check {
      padding: 1.1vw 1.8vw;
      border-radius: 5000px;
      gap: 1.8vw;
      width: 30%;
      font-size: 1.25vw;
      background-color: transparent;
      text-decoration: none;
      display: flex;
      align-items: center;
      justify-content: center;
      border: 2px solid #ffffff;
      cursor: pointer;
      position: absolute;
      top: 88%;
      mix-blend-mode: difference;
      overflow: hidden;
      transition: all 0.5s;
    }

    #check::after {
      content: "";
      mix-blend-mode: difference;
      height: 20px;
      width: 20px;
      background-color: #ffffff;
      display: block;
      transition: all 0.3s;
      position: absolute;
      border-radius: 500px;
      top: 100%;
      z-index: -1;
    }

    #check:hover {
      color: black;
    }

    #check:hover::after {
      height: 100%;
      width: 100%;
      top: 0;
    }
  }
`;

const IdeaBox = ({ title, description, image }) => {
  const ideaBoxRef = useRef(null);

  useGSAP(() => {
    gsap.from(ideaBoxRef.current, {
      y: 100,
      scale: 0.7,
      opacity: 0,
      scrollTrigger: {
        trigger: ideaBoxRef.current,
        scrub: true,
        start: "top 95%",
        end: "top 50%",
      },
    });
  });

  return (
    <IdeaBoxContainer ref={ideaBoxRef} id="idea-container">
      <div className="part1">
        <div id="image-container">
          <img src={image} alt="Idea Illustration" />
        </div>
      </div>
      <div className="part2">
        <h1>{title}</h1>
        <p>{description}</p>
        <Link to="/snapfit" id="check">
          Check Out
        </Link>
      </div>
    </IdeaBoxContainer>
  );
};

export default IdeaBox;
