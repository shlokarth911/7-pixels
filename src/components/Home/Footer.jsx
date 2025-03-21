import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import LinkButton from "../Common/LinkButton";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

const FooterContainer = styled.div`
  footer {
    padding: 1.5vw 3vw;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  footer h1 {
    font-size: 1.5vw;
  }

  footer ul {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1vw;
  }

  footer ul li {
    list-style: none;
  }

  footer ul li a {
    text-decoration: none;
    font-size: 1.2vw;
    font-weight: 300;
    position: relative;
    padding: 0 0.5vw;
  }

  footer ul li a::after {
    mix-blend-mode: difference;
    content: "";
    height: 0.1vw;
    width: 0%;
    background-color: #ffffff;
    display: block;
    transition: all 0.3s;
    position: absolute;
    border-radius: 500px;
    top: 110%;
  }

  footer ul li a:hover::after {
    width: 100%;
  }

  .cursor {
    height: 20px;
    width: 20px;
    background-color: #fff;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    mix-blend-mode: difference;
    border-radius: 50%;
    pointer-events: none;
    z-index: 9999;
  }
`;

const Footer = () => {
  let links = [
    { name: "Instagram", link: "https://www.instagram.com/7_pixels.design/" },
  ];

  useGSAP(() => {});

  return (
    <FooterContainer>
      <footer>
        <h1>Coded with ❤️</h1>

        <ul>
          {links.map((link) => (
            <li key={link.name}>
              <LinkButton text={link.name} link={link.link} />
            </li>
          ))}
        </ul>
      </footer>
    </FooterContainer>
  );
};

export default Footer;
