import * as React from "react";
import { Link } from "gatsby";
import PersonalMsg from "../components/PersonalMsg";
import Intro from "../components/Intro";

import Project from "../components/Project";

const IndexPage = () => {
  return (
    <div className=" index-wrapper ">
      <div className="left-index">
        <PersonalMsg />
      </div>
      <div className="right-index">
        <Intro />
        <Project />
      </div>
      <div className=" text-slate-500 mt-8 ">
        <p> This is a testing version. Actual content might be different</p>
        <p> Last updated on 04/10/2024</p>{" "}
      </div>
    </div>
  );
};

export const Head = () => <title>Home Page</title>;

export default IndexPage;
