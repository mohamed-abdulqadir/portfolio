import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import styled from "styled-components";

const Social = styled.div`
  display: block;
  position: fixed;
  top: 48%;
  left: 1.5rem;
  transform: translateY(-50%);

  ul {
    display: block;
  }

  .item + .item {
    margin-top: 1rem;
  }

  a {
    font-size: 2rem;
    color: rgb(119, 119, 121);
    transition: 0.2s ease-in;
    &:hover {
      color: rgb(57, 134, 250);
    }
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
function FixSocialIcon() {
  return (
    <Social>
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
    </Social>
  );
}

export default FixSocialIcon;
