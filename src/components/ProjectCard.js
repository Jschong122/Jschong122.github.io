import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";

const ProjectCard = ({ title, caption, skills = "", link, demo, children }) => {
  const skillArray = skills.split(",").map((skill) => skill.trim());
  return (
    <div>
      <div className="bg-slate-600/40 rounded-lg max-h-200 p-5 my-5">
        <div className="project-title text-xl font-bold ">{title}</div>
        <ul>
          <li className="project-body text-gray-400 my-2 ">{caption}</li>
          <li className="project-skills mt-3 flex flex-wrap gap-2">
            {skillArray.map((skill, index) => (
              <span
                key={index}
                className=" text-emerald-200 bg-emerald-400/40 px-2 rounded-lg"
              >
                {skill}
              </span>
            ))}
          </li>
        </ul>
        <div className="div-link-demo mt-5 ">
          {(link && link.includes("http") && (
            <span className=" font-bold inline-block">
              <a href={link} className="text-inherit ">
                {" "}
                <StaticImage
                  src="../assets/icons/github-mark-white.png"
                  alt="github logo"
                  width={25}
                  className="mr-2"
                />
                View on GitHub
              </a>
            </span>
          )) || <p style={{ display: "block" }}> {link} </p>}
          {(demo && (
            <span className="inline-block outline outline-2 ml-5  px-3 outline-[#2c8a75] rounded-md">
              <a href={demo} className="demo-link">
                Demo
              </a>
            </span>
          )) ||
            " "}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
