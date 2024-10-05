import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";

const ProjectCard = ({ title, caption, skills = "", link }) => {
  const skillArray = skills.split(",").map((skill) => skill.trim());
  return (
    <div>
      <div className="bg-slate-600/40 rounded-lg max-h-200 p-5 my-5">
        <div className="project-title text-xl font-bold ">{title}</div>
        <ul>
          <li className="project-body text-gray-400 m-3">{caption}</li>
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
        {(link && (
          <a href={link} className=" link my-3 text-inherit">
            <span className=" font-bold ">
              <StaticImage
                src="../assets/icons/github-mark-white.png"
                alt="github logo"
                width={30}
                height={30}
                className="mr-2"
              />
            </span>
            View on GitHub
          </a>
        )) || <p className="  my-3 text-inherit">GitHub Link coming soon</p>}
      </div>
    </div>
  );
};

export default ProjectCard;
