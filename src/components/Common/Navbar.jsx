import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Logo from "../../assets/SVGs/Logo.svg";
import LinkButton from "./LinkButton";

const Nav = styled.nav`
  display: flex;
  position: fixed;
  width: 100%;
  justify-content: space-between;
  padding: 0 30px;
  z-index: 9;
  backdrop-filter: blur(7px);
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 4vw;
  }
`;

const LinkContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 25px;
  font-weight: 500;
  cursor: pointer;

  li {
    text-decoration: none;
    list-style-type: none;
    mix-blend-mode: difference;
  }

  ul {
    display: flex;
    gap: 1vw;
  }
`;
const Navbar = () => {
  let links = [
    { name: "Home", link: "/" },
    { name: "Contact", link: "/contact" },
    { name: "Works", link: "/works" },
  ];

  return (
    <Nav>
      <LinkContainer>
        <ul>
          {links.map((link) => (
            <li key={link.name}>
              <LinkButton text={link.name} link={link.link} />
            </li>
          ))}
        </ul>
      </LinkContainer>

      <LogoContainer>
        <img src={Logo} />
      </LogoContainer>
    </Nav>
  );
};

export default Navbar;
