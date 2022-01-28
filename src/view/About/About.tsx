import React from "react";
import AboutMe from "../../components/About/AboutMe";
import DayCode from "../../components/About/DayCode";
import Skill from "../../components/About/Skill";
import { Tool } from "../../components/About/Tool";

export const About = () => {
  return (
    <>
      <AboutMe />
      <Skill />
      <Tool />
      <DayCode />
    </>
  );
};
