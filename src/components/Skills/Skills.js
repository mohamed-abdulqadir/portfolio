import React from "react";
import { stackList } from "../../data/ProjectData";
import {
  Image,
  Technologies,
  Tech,
  TechImg,
  TechName,
  ContactWrapper,
} from "../About/AboutElements";
const Skills = () => {
  return (
    <ContactWrapper id="skills">
      <div className="container">
        <div className="SectionTitle" style={{ textAlign: "center" }}>
          Skills
        </div>
        <div
          className="BigCard"
          style={{ width: "fit-content", margin: "0 auto" }}
        >
          <Technologies>
            {stackList.map((stack, index) => (
              <Tech key={index} className="tech">
                <TechImg src={stack.img} alt={stack.name} />
                <TechName>{stack.name}</TechName>
              </Tech>
            ))}
          </Technologies>
        </div>
      </div>
    </ContactWrapper>
  );
};

export default Skills;
