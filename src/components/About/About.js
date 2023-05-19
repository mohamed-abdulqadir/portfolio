import React from "react";
import { FaArrowDown } from "react-icons/fa";

import { Image, ContactWrapper } from "./AboutElements";
function About() {
  return (
    <ContactWrapper id="about">
      <div className="Container">
        <div className="SectionTitle">About Me</div>
        <div className="BigCard">
          <Image
            src="https://cdn-icons-png.flaticon.com/512/2409/2409387.png"
            alt="man-svgrepo"
          />
          <div className="AboutBio">
            A passionate Front-End Developer located in London, England, with a
            serious devotion for web development and creating intuitive, dynamic
            user experiences. Experienced working with teams to produce
            impactful, leading-edge websites that engage customers and deliver
            business results.
          </div>
          <div className="AboutBio tagline2">
            I have become confident using the following technologies{" "}
            <FaArrowDown />
          </div>
        </div>
      </div>
    </ContactWrapper>
  );
}

export default About;
