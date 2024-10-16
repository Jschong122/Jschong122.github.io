import * as React from "react";

import PersonalMsg from "../components/PersonalMsg";
import Intro from "../components/Intro";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Education from "../components/Education";

const IndexPage = () => {
  return (
    <div className="m-5">
      <div className="index-wrapper">
        <div className="left-index">
          <PersonalMsg />
          <Education />
        </div>
        <div className="right-index">
          <Intro />
          <Projects />
          <Skills />
        </div>
      </div>

      <div className="  ">
        <p> Last updated on 10/10/2024</p>
      </div>
    </div>
  );
};

export const Head = () => <title>Jess Chong's portfolio</title>;

export default IndexPage;
