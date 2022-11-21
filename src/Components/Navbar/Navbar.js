import React, { useState } from "react";
import "./Navbar.css";
import logo from "../../Assets/Icons/sensei-logo.png";
import { NavLink, useNavigate } from "react-router-dom";
import { Drawer, List, ListItemButton } from "@mui/material";
import menu from "../../Assets/Icons/white-menu.jpg";

export function Navbar() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const links = [
    {
      id: 0,
      name: "Home",
      link: "/",
    },
    {
      id: 1,
      name: `About${" "}me`,
      link: "/about",
    },
    {
      id: 2,
      name: `My${" "}Projects`,
      link: "/my_projects",
    },
    {
      id: 3,
      name: "Contact",
      link: "/Contacts",
    },
  ];

  return (
    <div id="navbar">
      <figure
        className="nav-logo"
        onClick={(e) => {
          e.preventDefault();
          navigate("/");
          window.scrollTo(0, 0);
        }}
      >
        <img src={logo} alt="" />
      </figure>

      <div className="nav-links">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About me</NavLink>
        <NavLink to="/my_projects">My Projects</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </div>

      <figure
        className="nav-menu"
        onClick={() => {
          setOpen(!open);
        }}
      >
        <img src={menu} alt="" />
      </figure>

      <Drawer
        open={open}
        onClose={() => {
          setOpen(false);
        }}
        anchor="right"
      >
        <List id="List" className="drawer">
          <figure
            className="nav-logo-drawer"
            onClick={(e) => {
              e.preventDefault();
              navigate("/");
              window.scrollTo(0, 0);
              setOpen(false);
            }}
          >
            <img src={logo} alt="" />
          </figure>

          {links.map((item) => {
            return (
              <NavLink to={item.link} key={item.id}>
                <ListItemButton
                  onClick={() => {
                    setOpen(false);
                    window.scrollTo(0, 0);
                  }}
                  className="drawer-text"
                >
                  {item.name}
                </ListItemButton>
              </NavLink>
            );
          })}
        </List>
      </Drawer>
    </div>
  );
}
