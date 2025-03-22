import React, { useEffect, useRef } from "react";
import BgImg from "../../assets/Images/BgImg.png";
import styled from "styled-components";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";
import { Link } from "react-router-dom";

const HeroContainer = styled.div`
  position: relative;
  height: 100vh;

  img {
    height: 110vh;
    object-fit: cover;
    position: absolute;
    left: 50%;
    transform: translate(-50%, -5%);
    z-index: -1;
    opacity: 100%;
    filter: brightness(10) drop-shadow(0 0 18px #ffffff);
    pointer-events: none;
  }
`;
const UpperCol = styled.div`
  display: flex;
  position: absolute;
  width: 100%;
  height: 50%;

  .box1 {
    width: 50%;
  }
  .box2 {
    width: 50%;
    height: 100%;
    backdrop-filter: blur(12px);
    background: linear-gradient(
          to top,
          rgba(255, 255, 255, 1) 0%,
          rgba(255, 255, 255, 0) 100%
        )
        left / 1px 100% no-repeat,
      linear-gradient(
          to right,
          rgba(255, 255, 255, 1) 0%,
          rgba(255, 255, 255, 0) 100%
        )
        bottom / 100% 1px no-repeat;

    border-left: 0;
    border-bottom: 0;
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
    padding: 20px;
    flex-direction: column;

    h1 {
      font-size: 7vw;
      font-weight: 500;
      color: #fff;
    }

    h4 {
      font-size: 1.5vw;
      font-weight: 200;
      color: #fff;
    }

    @media (max-width: 768px) {
      h1 {
        font-size: 10vw;
      }

      h4 {
        font-size: 2.5vw;
      }
    }
  }
`;
const LowerCol = styled.div`
  display: flex;
  position: absolute;
  width: 100%;
  height: 50%;
  top: 50%;

  .box1 {
    width: 50%;
    backdrop-filter: blur(12px);
    background: 
        /* Inverted vertical fade (right side) */ linear-gradient(
          to bottom,
          rgba(255, 255, 255, 1) 0%,
          rgba(255, 255, 255, 0) 100%
        )
        right / 1px 100% no-repeat,
      /* Inverted horizontal fade (top side) */
        linear-gradient(
          to left,
          rgba(255, 255, 255, 1) 0%,
          rgba(255, 255, 255, 0) 100%
        )
        top / 100% 1px no-repeat;

    display: flex;
    align-items: flex-end;
    padding: 20px;

    h1 {
      font-weight: 500;
      letter-spacing: -1px;
      line-height: 1;
      font-size: 6vw;
    }

    @media (max-width: 768px) {
      h1 {
        font-size: 7vw;
      }

      align-items: center;
    }
  }
  .box2 {
    width: 50%;
    position: relative;
    font-size: 15px;

    button {
      position: absolute;
      background-color: transparent;
      top: 75%;
      left: 55%;
      padding: 12px;
      font-size: 1.7vw;
      font-weight: 600;
      border: none;
      padding-right: 50px;
      padding-bottom: 2px;
    }

    button::after {
      content: "";
      position: absolute;
      top: 99%;
      right: 0;
      width: 100%;
      height: 1px;
      background-color: #fff;
      z-index: 9;
    }

    @media (max-width: 768px) {
      button {
        font-size: 2.5vw;
        left: 50%;
      }
    }
  }
`;

const Hero = ({ onMouseEnter, onMouseLeave }) => {
  useGSAP(() => {
    const tl = gsap.timeline();
    gsap.from("#upper .box2", {
      y: "-50vw",
      ease: "power4.out",
      duration: 1.75,
      opacity: 0,
    });
    gsap.from("#lower .box1", {
      y: "50vw",
      ease: "power4.out",
      duration: 1.75,
      opacity: 0,
    });
    tl.from("#year", {
      y: 30,
      opacity: 0,
      duration: 0.5,
    });
    tl.from("#contact::after", {
      width: "00%",
      duration: 0.5,
    });
    tl.from("#contact span", {
      y: "180%",
      opacity: 1,
      ease: "power4.out",
      duration: 1,
      delay: 0.5,
    });
  });
  return (
    <HeroContainer>
      <UpperCol id="upper">
        <div className="box1"></div>
        <div className="box2">
          <h4>Since</h4>
          <h1 id="year">2023</h1>
        </div>
      </UpperCol>

      <img src={BgImg} alt="" />

      <LowerCol id="lower">
        <div className="box1">
          <h1>Web Designer and Developer</h1>
        </div>
        <div className="box2">
          <button
            id="contact"
            style={{
              overflow: "hidden",
              display: "inline-block",
            }}
          >
            <Link
              to={"/contact"}
              onMouseEnter={onMouseEnter}
              onMouseLeave={onMouseLeave}
            >
              <span
                style={{
                  cursor: "pointer",
                  overflow: "hidden",
                  display: "inline-block",
                }}
              >
                REACH OUT
              </span>
            </Link>
          </button>
        </div>
      </LowerCol>
    </HeroContainer>
  );
};

export default Hero;
