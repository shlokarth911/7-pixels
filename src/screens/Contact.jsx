import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import Navbar from "../components/Common/Navbar";
import { Link } from "react-router-dom";
import gsap from "gsap";
import LinkButton from "../components/Common/LinkButton";

const MainContactContainer = styled.div`
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

  .contact-upper-section {
    padding: 7vw 6vw;
    padding-bottom: 0;

    h1 {
      font-size: 10vw;
      word-spacing: -2vw;
      margin-bottom: 2%;
    }
  }

  .e-mail-link {
    font-size: 2.89vw;
    margin-left: 1%;
  }

  .contact-lower-section {
    padding: 4.2vw 6vw;

    h3 {
      font-size: 2.44vw;
      font-weight: 100;
      margin-bottom: 2.2vw;
    }

    ul {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 1.5vw;

      li {
        list-style: none;
      }
    }
  }
`;

const Contact = () => {
  const EMailLink =
    "https://mail.google.com/mail/?view=cm&fs=1&to=shlokarth7@gmail.com&su=Subject&body=Body";

  let links = [
    { name: "Instagram", link: "https://www.instagram.com/7_pixels.design/" },
  ];

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
    <>
      <MainContactContainer>
        <Navbar />
        <div className="cursor" ref={cursorRef}>
          <i className="ri-arrow-right-up-line"></i>
        </div>
        <div className="contact-upper-section">
          <h1>GET IN TOUCH</h1>

          <Link
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="e-mail-link"
            to={EMailLink}
          >
            shlokarth7@gmail.com
          </Link>
        </div>
        <div className="contact-lower-section">
          <h3>Stalk Me On</h3>

          <ul>
            {links.map((link) => (
              <li key={link.name}>
                <LinkButton text={link.name} link={link.link} />
              </li>
            ))}
          </ul>
        </div>
      </MainContactContainer>
    </>
  );
};

export default Contact;
