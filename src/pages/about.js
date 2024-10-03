// Step 1: Import React
import * as React from "react";
import { Link } from "gatsby";

// Step 2: Define your component
const AboutPage = () => {
  return (
    <main className="abaout-me">
      <Link to="/">Go home</Link>
      <h1>About Me</h1>
      <div className="about-me-text">
        {" "}
        <p>
          Always thought animal science would be my career path. Growing up with
          two little dogs, I imagined working with animals would be my future.
          This belief stayed with me through to my graduation with a degree in
          animal science. However, after completing my studies, I decided to
          re-ignite my passion for coding. It wasn't just the growing trend of
          AI that drew me back in, but also the genuine happiness I felt when
          solving coding challenges and encountering problems that pushed me to
          think creatively.
        </p>
        <p className="mt-5">
          With a unique foundation in animal science, I bring strong analytical
          skills, logical thinking from scientific research, and the ability to
          work with large datasets to my current work in full-stack development.
          Having recently completed an intensive software engineering course at
          the Institute of Data, I’ve honed my skills in HTML, CSS, JavaScript,
          React, and databases. One of my proudest projects is a medical
          appointment system that implements a real-time chat interface using
          Shadcn UI, NextAuth for authentication, and Cloudinary for photo
          uploads. This project demonstrates my ability to learn quickly and
          implement modern solutions in web development. I'm driven by the goal
          of creating scalable and impactful applications that streamline
          processes and solve real-world problems. By combining my analytical
          mindset with my growing software expertise, I’m eager to take on new
          challenges in the IT field and make a lasting impact.
        </p>
      </div>
    </main>
  );
};
export const Head = () => <title>About Me</title>;

// Step 3: Export your component
export default AboutPage;
