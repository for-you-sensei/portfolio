import React from "react";
import { AboutCard } from "../../Components/AboutCard/AboutCard";
import { MyProjectsCard } from "../../Components/MyProjectsCard/MyProjectsCard";
import { Skills } from "../../Components/Skills/Skills";

export function Home() {
  return (
    <>
      <AboutCard />
      <MyProjectsCard/>
      <Skills />
    </>
  );
}
