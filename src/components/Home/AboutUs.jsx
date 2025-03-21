import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const AboutUsContainer = styled.div`
  margin-top: 100px;
  padding: 30px 50px;

  h1 {
    font-size: 3vw;
    font-weight: 300;
  }

  p {
    font-size: 2vw;
    margin: 5vw 0;
    width: 55vw;
  }

  button {
    margin-top: 3.5vw;
    padding: 1.3vw 1.8vw;
    border-radius: 5000px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1.8vw;
  }

  button a {
    color: #111;
    text-decoration: none;
    font-size: 1.5vw;
    font-weight: 500;
  }

  .icon-container {
    height: 0.9vw;
    width: 0.9vw;
    border-radius: 50%;
    background-color: black;
    transition: all 0.2s;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .icon-container i {
    font-size: 0.5vw;
    font-weight: 100;
    opacity: 0;
    transition: all 0.4s;
  }

  button:hover .icon-container {
    scale: 4;
  }

  button:hover .icon-container i {
    opacity: 1;
  }

  #reach-out-link {
    text-decoration: none;
  }
`;

const AboutUs = () => {
  return (
    <AboutUsContainer>
      <h1>A Breif Introduction</h1>

      <p>
        Merging design and code to craft dynamic, functional websites.
        Problem-solving through intuitive interfaces, responsive builds. Let’s
        transform your vision into digital impact. 🚀
      </p>

      <Link id="reach-out-link" to="mailto:shlokarth911@gmail.com">
        <button>
          <a href="mailto:shlokarth911@gmail.com">Reach Out</a>
          <div class="icon-container">
            <i class="ri-arrow-right-up-line"></i>
          </div>
        </button>
      </Link>
    </AboutUsContainer>
  );
};

export default AboutUs;
