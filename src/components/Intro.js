import React from "react";
import global from "../styles/global.css";
import { Link } from "gatsby";
import { MoveRight } from "lucide-react";
import Title from "../components/Title";

const Intro = () => {
  return (
    <div>
      <Title title="INTRODUCTION" />
      <div className="content-inside-div ">
        <p className="">
          I am a graduate web developdfer who transitioned from animal science
          to software engineering. I completed a{" "}
          <span className="font-extrabold">
            {" "}
            six-month coding bootcamp, gaining skills in HTML, CSS, React,
            Next.js, Express.js
          </span>
          , and more. My analytical skills from animal science have been
          invaluable in optimizing web projects. I build projects that make
          tasks more efficient, such as a leave management system for employees
          and managers, and a medical appointment system for real-time
          communication between patients and doctors. My experience includes
          front-end development with React, back-end development with
          Express.js, and creating responsive web designs.
        </p>
        <Link to="/about" id="intro-link">
          <MoveRight />
          <span className="ml-2 ">Learn more about me</span>
        </Link>
      </div>
    </div>
  );
};

export default Intro;
