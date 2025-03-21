import React from "react";
import styled from "styled-components";

const ServiceCardContainer = styled.div`
  width: 28.3%;

  h5 {
    font-size: 2vw;
    color: #858585;
    border-bottom: 1px solid #858585;
    padding-bottom: 0.8vw;
    font-weight: 300;
    margin-bottom: 0.8vw;
  }

  h3 {
    font-size: 2.2vw;
    margin-top: 1.5vw;
  }

  p {
    font-size: 1.4vw;
    font-weight: 100;
    margin-top: 1.5vw;
    width: 90%;
    line-height: 120%;
  }
`;

const ServiceCard = ({ index, title, description }) => {
  return (
    <ServiceCardContainer className="service-card">
      <h5>{index}</h5>
      <h3>{title}</h3>
      <p>{description}</p>
    </ServiceCardContainer>
  );
};

export default ServiceCard;
