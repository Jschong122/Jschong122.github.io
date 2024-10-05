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
      <h5 className=" text-base  font-normal mb-4 text-gray-400">
        Graduate Front-end / Software Developer
      </h5>
      <h5 className=" text-base  font-normal mb-4 text-gray-400">
        Perth, Western Australia
      </h5>

      <div className="top-skills flex  justify-around gap-3 text-center">
        <StaticImage
          src="../assets/icons/html.png"
          alt="html logo"
          width={30}
          height={30}
        />

        <StaticImage
          src="../assets/icons/javascript.png"
          alt="javascript logo"
          width={30}
          height={30}
        />

        <StaticImage
          src="../assets/icons/tailwind-css.png"
          alt="tailwind css logo"
          width={30}
          height={30}
        />
        <StaticImage
          src="../assets/icons/react.png"
          alt="react logo"
          width={30}
          height={30}
        />
      </div>

      <div className="social-media-wrapper">
        <h6> Find me on </h6>
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
