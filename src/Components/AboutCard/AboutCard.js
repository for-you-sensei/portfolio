import React from "react";
import "./AboutCard.css";
import TelegramIcon from "@mui/icons-material/Telegram";
import GitHubIcon from "@mui/icons-material/GitHub";

export function AboutCard() {
  return (
    <div id="about">
      <div className="about-pages">
        <p>/ About Me</p>
      </div>

      <div className="about-texts">
        <p>Hasanbayev Behruz</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
          minima illo doloribus saepe commodi quas similique temporibus debitis
          laudantium, ipsum soluta asperiores voluptatum expedita qui incidunt
          quidem sequi odit quasi enim recusandae tenetur? Eos omnis eaque fuga
          exercitationem, illum minus commodi vero porro suscipit ducimus animi
          vitae odio voluptate quasi dolor magni facilis recusandae aperiam sunt
          dolorum soluta? Mollitia, impedit, dignissimos aut at magnam rerum
          aperiam quas animi assumenda reiciendis vitae tempore est facere,
          voluptatibus aliquam velit neque optio minus quisquam atque veniam?
          Accusantium, animi odit. Earum, assumenda quos officiis sint expedita
          animi, dicta quo inventore, nemo corporis deserunt cupiditate.
        </p>
        <div className="about-texts-social">
          <a
            href="https://t.me/for_you_sensei"
            target="blank"
            className="home-social-link"
          >
            <TelegramIcon />
          </a>
          <a
            href="https://github.com/for-you-sensei"
            target="blank"
            className="home-social-link"
          >
            <GitHubIcon />
          </a>
        </div>
      </div>
    </div>
  );
}
