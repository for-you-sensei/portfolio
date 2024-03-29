import React from "react";
import { Routes, Route } from "react-router-dom";
import { Navbar } from "./Components/Navbar/Navbar";
import { About } from "./Pages/About/About";
import { Contacts } from "./Pages/Contacts/Contacts";
import { Home } from "./Pages/Home/Home";
import { MyProjects } from "./Pages/MyProjects/MyProjects";

export function Router() {
  return (
    <div id="router">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/my_projects" element={<MyProjects />} />
        <Route path="/my_projects" element={<MyProjects />} />
        <Route path="/contact" element={<Contacts />} />
      </Routes>
    </div>
  );
}
