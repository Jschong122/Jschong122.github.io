import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";

const PersonalMsg = () => {
  return (
    <div className="  personal-msg-wrapper w-[30%] h-[100%]">
      <h1 className="text-6xl mb-4">Hello, I'm Jess</h1>
      <h5 className=" font-normal mb-4">
        Graduate Front-end / Software Developer
      </h5>
      <div className="social-media-wrapper">
        <Link to="https://github.com/Jschong122">
          <StaticImage
            width={30}
            height={30}
            src="../assets/icons/github-mark-white.png"
            alt="github logo"
          />
        </Link>
        <Link to="https://github.com/Jschong122">
          <StaticImage
            width={30}
            height={30}
            src="../assets/icons/Linkedin-logo.png"
            alt="LinkedIn logo"
          />
        </Link>
      </div>
    </div>
  );
};

export default PersonalMsg;
