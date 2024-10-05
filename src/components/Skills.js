import React from "react";
import Title from "./Title";

const Skills = () => {
  return (
    <div>
      <Title title="SKILLS" />

      <div className="content-inside-div xl:grid lg:grid-cols-4 lg:grid-rows-2 items-start gap-7 ">
        <div className="grid grid-cols-1    p-5">
          <h4>Front-end</h4>
          <ul className=" list-disc ml-5">
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>Tailwind CSS (Styling)</li>
            <li>Bootstrap (Styling)</li>
            <li>Shadcn UI (Component Library)</li>
          </ul>
        </div>

        <div className="grid grid-cols-1   p-5">
          <h4>Back-end</h4>
          <ul className=" list-disc flex flex-col ml-5">
            <li>Node.js (Runtime)</li>
            <li>Express (Framework)</li>
            <li>MongoDB (Database)</li>
            <li>Socket.io (Real-time Communication)</li>
          </ul>
        </div>
        <div className="grid grid-cols-1   p-5">
          <h4>Frameworks</h4>
          <ul className=" list-disc flex flex-col ml-5">
            <li>React (Front-end)</li>
            <li>Next.js (Full-stack Framework)</li>
            <li>Gatsby (Static Site Generator)</li>
          </ul>
        </div>
        <div className="grid   p-5">
          <h4>Tools</h4>
          <ul className=" list-disc flex flex-col ml-5 ">
            <li>Mongoose (Database ODM)</li>
            <li>Cloudinary (Media Storage)</li>
            <li>NextAuth (Authentication)</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Skills;
