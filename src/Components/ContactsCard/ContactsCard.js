import React from "react";
import "./ContactsCard.css";
import TelegramIcon from "@mui/icons-material/Telegram";
import GitHubIcon from "@mui/icons-material/GitHub";

export function ContactsCard() {
  const socials = [
    {
      id: 0,
      link: "https://t.me/for_you_sensei",
      icon: <TelegramIcon />,
    },
    {
      id: 1,
      link: "https://github.com/for-you-sensei",
      icon: <GitHubIcon />,
    },
  ];

  return (
    <div id="contacts">
      <div className="about-pages">
        <p>/ Contacts</p>
      </div>

      <div className="contacts-find">
        <p>you can find me on these social networks:</p>

        <div className="about-texts-social">
          {socials.map((item) => {
            return (
              <a
                key={item.id}
                href={item.link}
                target="blank"
                className="home-social-link"
              >
                {item.icon}
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}
