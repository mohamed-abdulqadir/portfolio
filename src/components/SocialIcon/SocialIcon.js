import React from "react";
import { FaLinkedin, FaInstagram, FaGithub, FaEnvelope } from "react-icons/fa";

import styled from "styled-components";

export const SocialDiv = styled.div`
  margin-top: 2rem;
  display: none;
  ul {
    display: flex;
    justify-content: center;
    align-items: center;
    list-style: none;
  }

  a {
    font-size: 2.5rem;
    color: #151418;
    transition: 0.2s ease-in;
    &:hover {
      color: rgb(57, 134, 250);
    }
  }

  .item + .item {
    margin-left: 2rem;
  }

  @media screen and (max-width: 768px) {
    display: block;
  }
`;

function SocialIcon() {
  return (
    <SocialDiv>
      <ul>
        <li className="item">
          <a
            href="https://www.linkedin.com/in/mohamed-abdulqadir-b69552245/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin style={{ color: "#fff" }} />
          </a>
        </li>
        <li className="item">
          <a
            href="https://github.com/mo-hokage1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub style={{ color: "#fff" }} />
          </a>
        </li>
        <li className="item">
          <a
            href="mailto:mqadir3580@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaEnvelope style={{ color: "#fff" }} />
          </a>
        </li>
      </ul>
    </SocialDiv>
  );
}

export default SocialIcon;
