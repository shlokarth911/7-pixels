import React from "react";
import styled from "styled-components";
import LinkButton from "../Common/LinkButton";
import Footer from "./Footer";
import { Link } from "react-router-dom";

const Contianer = styled.div`
  margin-top: 120px;

  .contact {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .get-in-touch-button {
    text-decoration: none;
    font-size: 15vw;
    font-weight: 300;
    width: 90%;
    padding-bottom: 1.5vw;
    text-align: center;
    border-bottom: 1px solid #858585;
    margin: 0;
    padding: 0;
  }
`;

const Contact = ({ onMouseEnter, onMouseLeave }) => {
  return (
    <Contianer>
      <section className="contact">
        <a
          className="get-in-touch-button"
          href="https://mail.google.com/mail/?view=cm&fs=1&to=shlokarth7@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        >
          Get in Touch
        </a>
      </section>

      <Footer />
    </Contianer>
  );
};

export default Contact;
