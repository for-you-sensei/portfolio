import React from "react";
import "./MyProjectsCard.css";
import xpress from "../../Assets/Icons/MyProjects/xpress.png";
import honey from "../../Assets/Icons/MyProjects/honey.png";

export function MyProjectsCard() {
  const completed = [
    {
      id: 0,
      img: xpress,
      name: "Xpress",
      about: "shopping. user side",
      link: "https://xpress-webstore.netlify.app/",
    },
    {
      id: 1,
      img: honey,
      name: "Honey",
      about: "honey shopping. user side",
      link: "https://honey-user.netlify.app/",
    },
    {
      id: 2,
      img: xpress,
      name: "Xpress",
      about: "shopping. user side",
      link: "https://xpress-webstore.netlify.app/",
    },
    {
      id: 3,
      img: honey,
      name: "Honey",
      about: "honey shopping. user side",
      link: "https://honey-user.netlify.app/",
    },
    {
      id: 4,
      img: xpress,
      name: "Xpress",
      about: "shopping. user side",
      link: "https://xpress-webstore.netlify.app/",
    },
    {
      id: 5,
      img: honey,
      name: "Honey",
      about: "honey shopping. user side",
      link: "https://honey-user.netlify.app/",
    },
  ];

  return (
    <div id="my-projects">
      <div className="about-pages">
        <p>/ My Projects</p>
      </div>

      <div className="my-projects-container">
        {completed.map((item) => {
          return (
            <div key={item.id} className="my-projects-card">
              <figure className="my-projects-figure">
                <img src={item.img} alt="" />
              </figure>

              <div className="my-projects-card-texts">
                <div className="my-projects-text-1">
                  <p>{item.name}</p>
                  <p>{item.about}</p>
                </div>

                <a href={item.link} target="blank">
                  <button className="my-projects-link">Live</button>
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
