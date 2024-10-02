import * as React from "react";
import { Link } from "gatsby";
import PersonalMsg from "../components/PersonalMsg";
import Intro from "../components/Intro";

const IndexPage = () => {
  return (
    <div className="flex flex-2 h-screen w-screen m-5 justify-center">
      <PersonalMsg />
      <Intro />
    </div>
  );
};

export const Head = () => <title>Home Page</title>;

export default IndexPage;
