import React, { useLayoutEffect, useRef } from "react";
import styled from "styled-components";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import ServiceCard from "./ServiceCard";

gsap.registerPlugin(ScrollTrigger);

const ServicesContainer = styled.div`
  padding: 0 3vw;
  margin-bottom: 15vw;
  margin-top: 10vw;

  h1 {
    font-size: 3.628vw;
    font-weight: 300;
  }
`;

const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 3vw;
  margin-top: 3vw;
`;

const Services = () => {
  const servicesProvided = [
    {
      title: "Design",
      description:
        "I make web designs that engage your audience and create the user experience you want",
    },
    {
      title: "Development",
      description:
        "Bringing visuals to life through developing highly functional web solutions.",
    },
    {
      title: "The Full Package",
      description:
        "Get the best of both worlds for your website, capture your brand identity and get fully functional features.",
    },
  ];

  // Reference to the container that holds all the cards.
  const containerRef = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      // Animate all elements with the .service-card class with a stagger effect.
      gsap.from(".service-card", {
        y: 100,
        opacity: 0,
        stagger: 0.1, // Adjust the stagger delay as needed.
        scrollTrigger: {
          trigger: containerRef.current,
          scrub: true,
          start: "top 60%",
          end: "top 20%",
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <ServicesContainer ref={containerRef}>
      <h1>I can help you with...</h1>
      <CardContainer>
        {servicesProvided.map((service, i) => (
          <ServiceCard
            key={i}
            index={i + 1}
            title={service.title}
            description={service.description}
          />
        ))}
      </CardContainer>
    </ServicesContainer>
  );
};

export default Services;
