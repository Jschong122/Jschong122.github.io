import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";

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
          />
        </a>
        <a href="https://www.linkedin.com/in/wai-suen-chong-887907239/">
          <StaticImage
            src="../assets/icons/LinkedIn-logo.png"
            alt="LinkedIn logo"
          />
        </a>
      </div>
    </div>
  );
};

export default PersonalMsg;
