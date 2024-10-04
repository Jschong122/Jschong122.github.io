import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";
import global from "../styles/global.css";

const PersonalMsg = () => {
  return (
    <div className="  personal-msg-wrapper  ">
      <h1 className="text-5xl justify-center text-center  mt-5">
        Hello, I'm Jess
      </h1>
      <h5 className=" text-md  font-normal mb-4 text-gray-400">
        Graduate Front-end / Software Developer
      </h5>
      <div className="social-media-wrapper">
        <a href="https://github.com/Jschong122">
          <StaticImage
            src="../assets/icons/github-mark-white.png"
            alt="github logo"
            width={30}
            height={30}
          />
        </a>
        <a href="https://www.linkedin.com/in/wai-suen-chong-887907239/">
          <StaticImage
            src="../assets/icons/LinkedIn-logo.png"
            alt="LinkedIn logo"
            width={30}
            height={30}
          />
        </a>
      </div>
    </div>
  );
};

export default PersonalMsg;
