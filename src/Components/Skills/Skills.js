import React from "react";
import "./Skills.css";

export function Skills() {
  // const Skill = [
  //   {
  //     id: 0,
  //     type: "Languages",
  //     name: "Javascipt Nothing",
  //   },
  //   {
  //     id: 1,
  //     type: "Other",
  //     name: "Html Css",
  //   },
  //   {
  //     id: 2,
  //     type: "Tools",
  //     name: "VSCode Figma GitHub",
  //   },
  // ];

  return (
    <div className="skills">
      {/* {Skill.map((item) => {
          return (
            <div key={item.id} className="skills-card">
              <p>{item.type}</p>

              <div className="skills-texts">
                <p>{item.name}</p>
              </div>
            </div>
          );
        })} */}

      <div className="about-pages">
        <p>/ Skills</p>
      </div>

      <div className="skills-container">
        <div className="skills-card">
          <p>Languages</p>

          <div className="skills-texts">
            <p>Javascipt</p>
            <p>Nothing</p>
          </div>
        </div>

        <div className="skills-card">
          <p>Other</p>

          <div className="skills-texts">
            <p>Html</p>
            <p>Css</p>
          </div>
        </div>

        <div className="skills-card">
          <p>Tools</p>

          <div className="skills-texts">
            <p>VSCode</p>
            <p>Figma</p>
            <p>GitHub</p>
          </div>
        </div>
      </div>
    </div>
  );
}
