import React, { useState } from "react";
import Dropdown from "../Dropdown/Dropdown";
import Header from "../Header/Header";
import {
  HeroContainer,
  HeroWrapper,
  HeroLeft,
  HeroRight,
  Image,
  ScrollDown,
  ScrollLink,
  Span,
} from "./HeroElements";
function Hero() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <main>
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <Header toggle={toggle} />
      <HeroContainer className="hero">
        <HeroWrapper>
          <HeroLeft>
            <h1>
              Hi, I'm{" "}
              <span className="name" style={{ fontWeight: "900" }}>
                Mohamed Abdulqadir
              </span>{" "}
            </h1>
            <h5 className="frontend">Frontend Developer</h5>
            <p style={{ color: "white" }}>
              I am a{" "}
              <Span className="bold" style={{ fontWeight: "900" }}>
                Software Engineer
              </Span>{" "}
              specializing in{" "}
              <Span className="bold" style={{ fontWeight: "900" }}>
                Front-End Development
              </Span>{" "}
              and love what I do.
            </p>
          </HeroLeft>
          <HeroRight>
            <Image
              src="https://cdn-icons-png.flaticon.com/512/2409/2409387.png"
              alt="man-svgrepo"
            />
          </HeroRight>
        </HeroWrapper>
        <ScrollDown to="projects">
          <ScrollLink>
            Check out my work
            <img
              src="https://raw.githubusercontent.com/gurupawar/website/main/src/Assets/scroll-down.svg"
              alt="scroll-down"
            />
          </ScrollLink>
        </ScrollDown>
      </HeroContainer>
    </main>
  );
}

export default Hero;
