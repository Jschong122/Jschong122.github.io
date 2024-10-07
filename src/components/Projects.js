import React from "react";
import Title from "./Title";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <div>
      <Title title="PROJECTS" />
      <div className="projects-wrapper content-inside-div">
        <ul>
          <li>
            <ProjectCard
              title="Dog Breeds Search Tool"
              caption="A simple static website project to demonstrate foundational web development skills using HTML, CSS, and JavaScript."
              skills="HTML, CSS, JavaScript"
            />
          </li>
          <li>
            <ProjectCard
              title="Medical Appointment System with real time chat interface"
              caption="The Capstone Project is a Medical Appointment System that enables real-time chat and note sharing between patients and doctors, using technologies like NextAuth and Socket.io."
              skills="Next.js, NextAuth, Tailwind CSS, Express.js, Socket.io, Mongodb"
              link="https://github.com/Jschong122/capstone"
            />
          </li>
          <li>
            <ProjectCard
              title="Online Leave Form System"
              caption="The online leave form system streamlines employee leave requests. Employees can submit, view, edit, or delete their requests before a manager decides. Managers can review and approve or reject requests, ensuring an efficient process."
              skills=" Next.js, NextAuth, Express.js, Sequelize"
              link="https://github.com/Jschong122/IOD-mini-project-2"
            />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Projects;
