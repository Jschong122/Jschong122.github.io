import React from "react";
import global from "../styles/global.css";
import { Link } from "gatsby";
import { MoveRight } from "lucide-react";

const Intro = () => {
  return (
    <div className=" intro-wrapper w-[60%] h-[100%]  ">
      <p className="">
        I’m a software engineer with experience in building full-stack
        applications using modern technologies like HTML, CSS, JavaScript,
        React, and databases. Recently, I developed a medical appointment system
        with a real-time chat interface, using Shadcn UI, NextAuth for
        authentication, and Cloudinary for photo uploads. My focus is on
        creating scalable, impactful applications that streamline processes and
        improve user experience. I thrive on solving complex problems and
        continuously learning new technologies to deliver high-quality
        solutions.
      </p>

      <Link to="/about" className="">
        <MoveRight />
        <span className="ml-2 "> Learn more about me </span>
      </Link>
    </div>
  );
};

export default Intro;
