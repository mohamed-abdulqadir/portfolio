import React from "react";
import { FaBook, FaBookOpen, FaGithub, FaHandPaper } from "react-icons/fa";
import { ProjectList } from "../../../data/ProjectData";
import {
  Card,
  CardLeft,
  CardRight,
  Stack,
  BtnGroup,
} from "./ProjectCardElements";
function ProjectCard() {
  return (
    <>
      {ProjectList.map((list, index) => (
        <Card key={index}>
          <CardLeft>
            <img src={list.img} alt={list.name} />
          </CardLeft>
          <CardRight>
            <h4>{list.title}</h4>
            <p>{list.description}</p>
            <Stack>
              <span className="stackTitle">Tech Stack ➜</span>
              <span className="tags">{list.tech_stack}</span>
            </Stack>
            <BtnGroup>
              <a
                className="btn btn2 SecondarBtn"
                href={list.github_url}
                target="_blank"
                rel="noopener noreferrer"
              >
                Github <FaGithub />
              </a>
              <a
                className="btn PrimaryBtn"
                href={list.demo_url}
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit Website ➜
              </a>
              {list.title === "2. Snap Share Consult" && (
                <a
                  className="btn PrimaryBtn"
                  style={{ marginLeft: "1rem" }}
                  href={
                    "https://drive.google.com/file/d/1DUWmXPXNOgVwOLE6rhkF9AnGSLfhOCqU/view?usp=share_link"
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Dissertation <FaBookOpen />
                </a>
              )}
            </BtnGroup>
          </CardRight>
        </Card>
      ))}
    </>
  );
}

export default ProjectCard;
