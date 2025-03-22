import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const LinkButtonContainer = styled.div`
  li {
    list-style: none;
  }

  ul li a {
    text-decoration: none;
    font-size: 1.2vw;
    font-weight: 300;
    position: relative;
    padding: 0 0.5vw;
  }

  li a::after {
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

  li a:hover::after {
    width: 100%;
  }

  .linker {
    text-decoration: none;
  }

  @media (max-width: 768px) {
    .linker {
      font-size: 2vw;
    }
  }
`;

const LinkButton = (props) => {
  return (
    <LinkButtonContainer>
      <ul>
        <li>
          <Link className="linker" to={props.link}>
            {props.text}
          </Link>
        </li>
      </ul>
    </LinkButtonContainer>
  );
};

export default LinkButton;
