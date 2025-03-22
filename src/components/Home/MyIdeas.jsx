import React from "react";
import IdeaBox from "./IdeaBox";
import styled from "styled-components";
import Image1 from "../../assets/Images/Ideas/SnapFit.png";
import Image2 from "../../assets/Images/Ideas/IncredibleIndia.png";
import Image3 from "../../assets/Images/Ideas/NationalGeographic.png";
import { Link } from "react-router-dom";

const IdeasContainer = styled.div`
  padding: 0 5%;

  h1 {
    font-size: 1.2vw;
    display: inline-block;
    transform: translateY(-25%);
  }

  span {
    font-size: 3vw;
    margin: 0 0.5vw;
  }

  button {
    margin-top: 3.5vw;
    padding: 1.3vw 1.8vw;
    border-radius: 5000px;
    display: flex;
    align-items: center;
    width: 20%;
    font-size: 22px;
    justify-content: center;
    gap: 1.8vw;
    background-color: transparent;
    border: 3px solid #3f3f3f;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    overflow: hidden;
    transition: all 0.5s;
  }

  button::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 0;
    height: 100%;
    background-color: #fff;
    transition: width 0.3s ease-in-out;
    z-index: -1;
  }

  button:hover::after {
    width: 100%;
  }

  button:hover {
    cursor: pointer;
    color: #000;
  }

  @media (max-width: 768px) {
    padding: 0 3%;

    h1 {
      font-size: 2vw;
    }

    span {
      font-size: 4.5vw;
    }
  }
`;

const IdeaBoxGrid = styled.div`
  margin-top: 8%;
`;

const MyIdeas = () => {
  let data = [
    {
      title: "SnapFit",
      description:
        "A fitness app that helps users track their fitness goals and progress.",
      image: Image1,
    },

    {
      title: "Incredible India",
      description:
        "A travel app that helps users plan their trips to different destinations.",
      image: Image2,
    },

    {
      title: "National Geographic",
      description:
        "A travel app that helps users plan their trips to different destinations.",
      image: Image3,
    },
  ];

  return (
    <IdeasContainer>
      <span>{"{"}</span>
      <h1>Examples</h1>
      <span>{"}"}</span>
      <IdeaBoxGrid>
        {data.map((item, index) => (
          <IdeaBox
            key={index}
            title={item.title}
            description={item.description}
            image={item.image}
          />
        ))}
      </IdeaBoxGrid>

      <Link to="/works">
        <button>See More</button>
      </Link>
    </IdeasContainer>
  );
};

export default MyIdeas;
