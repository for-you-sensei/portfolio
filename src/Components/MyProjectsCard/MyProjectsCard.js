import React from "react";
import "./MyProjectsCard.css";
import xpress from "../../Assets/Icons/MyProjects/xpress.png";
import honey from "../../Assets/Icons/MyProjects/honey.png";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import VisibilityIcon from "@mui/icons-material/Visibility";

export function MyProjectsCard() {
  const completed = [
    {
      id: 0,
      img: xpress,
      name: "Xpress",
      about: "shopping. user side",
      link: "https://xpress-webstore.netlify.app/",
      typeproj: "Live",
      likes: 10,
      views: 100,
    },
    {
      id: 1,
      img: honey,
      name: "Honey",
      about: "honey shopping. user side",
      link: "https://honey-user.netlify.app/",
      typeproj: "Live",
      likes: 10,
      views: 100,
    },

    // for test

    {
      id: 2,
      img: xpress,
      name: "Xpress",
      about: "shopping. user side",
      link: "https://xpress-webstore.netlify.app/",
      typeproj: "Live",
      likes: 10,
      views: 100,
    },
    {
      id: 3,
      img: honey,
      name: "Honey",
      about: "honey shopping. user side",
      link: "https://honey-user.netlify.app/",
      typeproj: "Live",
      likes: 10,
      views: 100,
    },
    {
      id: 4,
      img: xpress,
      name: "Xpress",
      about: "shopping. user side",
      link: "https://xpress-webstore.netlify.app/",
      typeproj: "Live",
      likes: 10,
      views: 100,
    },
    {
      id: 5,
      img: honey,
      name: "Honey",
      about: "honey shopping. user side",
      link: "https://honey-user.netlify.app/",
      typeproj: "Live",
      likes: 10,
      views: 100,
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

              <div className="my-projects-actions">
                <figure
                  style={{ cursor: "pointer" }}
                  // onClick={() => {}}
                >
                  <ThumbUpIcon />
                  <p>{item.likes}</p>
                </figure>
                
                <figure>
                  <VisibilityIcon />
                  <p>{item.views}</p>
                </figure>
              </div>

              <div className="my-projects-card-texts">
                <div className="my-projects-text-1">
                  <p>{item.name}</p>
                  <p>{item.about}</p>
                </div>

                <a href={item.link} target="blank">
                  <button className="my-projects-link">{item.typeproj}</button>
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
