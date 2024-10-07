// Step 1: Import React
import * as React from "react";
import { Link } from "gatsby";

// Step 2: Define your component
const AboutPage = () => {
  return (
    <main className="about-me">
      <Link to="/">Go home</Link>
      <h1>About Me</h1>
      <div className="about-me-text">
        <h2>Animal Science Beginnings</h2>
        <p className="font-light">
          I always thought animal science would be my career path. Growing up
          with two little dogs, I imagined my future working with animals. This
          belief carried me through to my graduation with a degree in animal
          science. However, after finishing my studies, I reignited my passion
          for coding. It wasn't just the rise of AI that drew me back. After the
          failure of opening an online Shopify and WordPress (WooCommerce)
          store, as I couldn't achieve the look and features I wanted, I gave up
          on that idea. This made me rethink my path and ultimately led me to
          put my foot into coding.
        </p>

        <h3>A New Path: Coding</h3>
        <p className="font-light">
          After spending six months in an intensive coding environment, I felt
          incredibly happy when I completed my own project—finally turning my
          ideas into something real. My background in animal science gives me
          strong analytical skills, logical thinking from research, and
          experience working with large datasets—skills I now bring to
          full-stack development. After completing an intensive software
          engineering course at the Institute of Data, I've honed my skills in
          HTML, CSS, JavaScript, React, and databases.
        </p>

        <h3>Notable Project: Medical Appointment System</h3>
        <p className="font-light">
          One of my proudest projects is a medical appointment system that
          includes a real-time chat feature using Shadcn UI, NextAuth for
          authentication, and Cloudinary for photo uploads. In this project, I
          learned a lot of new tools and started almost everything from scratch.
          I am glad about the result, even though it is not perfect; it is
          undoubtedly an unforgettable experience. This project shows my ability
          to learn quickly and apply modern web development solutions.
        </p>

        <h3>Looking Ahead</h3>
        <p className="font-light">
          I'm passionate about creating scalable, impactful applications that
          streamline processes and solve real-world problems. By combining my
          analytical mindset with growing software expertise, I’m ready to take
          on new challenges in the IT field and make a meaningful impact.
        </p>
      </div>
    </main>
  );
};
export const Head = () => <title>About Me</title>;

// Step 3: Export your component
export default AboutPage;
