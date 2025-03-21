import React from "react";
import styled from "styled-components";
import Navbar from "../components/Common/Navbar";
import WorkBox from "../components/Works/WorkBox";

const MainContainer = styled.div`
  padding-top: 4vw;

  .header {
    padding: 7vw 8vw;
    padding-bottom: 0;
    font-size: 5vw;
    line-height: 100%;
  }

  #declaimer {
    padding: 3vw 9vw;
    font-size: 1vw;
  }
`;

const WorksContainer = styled.div`
  padding: 0 8vw;
  padding-bottom: 3vw;
`;

const Works = () => {
  return (
    <div>
      <Navbar />
      <MainContainer>
        <h1 className="header">
          Here are my some <br />
          of the works...
        </h1>
        <h5 id="declaimer">
          Every design is my ideas just to showcase my talent**
        </h5>

        <WorksContainer>
          <WorkBox />
          <WorkBox />
          <WorkBox />
          <WorkBox />
        </WorksContainer>
      </MainContainer>
    </div>
  );
};

export default Works;
