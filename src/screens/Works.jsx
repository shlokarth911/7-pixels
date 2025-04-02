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
  const works = [
    {
      title: "Optimus",
      link: "https://www.instagram.com/p/DD2f25PTsqf/",
    },
    {
      title: "Incredible India",
      link: "https://www.instagram.com/p/DD5LT08zxta/?img_index=1",
    },

    {
      title: "RS Chrono",
      link: "https://www.instagram.com/p/DEBHd20TjNL/?img_index=1",
    },

    {
      title: "Squid Game",
      link: "https://www.instagram.com/p/DES-wehTYpC/",
    },

    {
      title: "National Geographic",
      link: "https://www.instagram.com/p/DEe9Q5Fz7Z6/?img_index=1",
    },
    {
      title: "poperties",
      link: "https://www.instagram.com/p/DEowZhdT303/",
    },
    {
      title: "Arche",
      link: "https://www.instagram.com/p/DE7261ITWPV/",
    },
    {
      title: "Noise Headphones",
      link: "https://www.instagram.com/p/DFQsZIBTByE/?img_index=1",
    },
    {
      title: "ISRO",
      link: "https://www.instagram.com/p/DHihXgyTGZw/?img_index=1",
    },
  ];

  return (
    <div>
      <Navbar />
      <MainContainer>
        <h1 className="header">
          Here are my some <br />
          of the Ideas...
        </h1>
        <h5 id="declaimer">
          Every design is my idea just to showcase my talent**
          <br />
          The links would redirect you to my Instagram**
        </h5>

        <WorksContainer>
          {works
            .slice()
            .reverse()
            .map((work, index) => (
              <WorkBox title={work.title} link={work.link} index={index + 1} />
            ))}
        </WorksContainer>
      </MainContainer>
    </div>
  );
};

export default Works;
