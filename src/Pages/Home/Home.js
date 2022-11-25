import React from "react";
import { AboutCard } from "../../Components/AboutCard/AboutCard";
import { MyProjectsCard } from "../../Components/MyProjectsCard/MyProjectsCard";
import { Skills } from "../../Components/Skills/Skills";
import { ContactsCard } from "../../Components/ContactsCard/ContactsCard";
import { Feedback } from "../../Components/Feedback/Feedback";

export function Home() {
  return (
    <>
      <AboutCard />
      <MyProjectsCard />
      <Skills />
      <ContactsCard />
      <Feedback />
    </>
  );
}
