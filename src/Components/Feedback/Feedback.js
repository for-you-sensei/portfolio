import React, { useState } from "react";
import "./Feedback.css";

export function Feedback() {
  const [project, setProject] = useState({
    fullname: "",
    phone: "",
    about: "",
  });

  return (
    <div id="feedback">
      <p>You can leave your feedback here</p>
      <form
        className="feedback-form"
        onSubmit={(e) => {
          e.preventDefault();
          console.log(project);
          setProject({ fullname: "", phone: "", about: "" });
        }}
      >
        <input
          type="text"
          placeholder="full name"
          autoComplete="off"
          value={project.fullname}
          onChange={(e) => setProject({ ...project, fullname: e.target.value })}
        />
        <input
          type="text"
          placeholder="phone number"
          autoComplete="off"
          value={project.phone}
          onChange={(e) => setProject({ ...project, phone: e.target.value })}
        />
        <textarea
          placeholder="about"
          value={project.about}
          onChange={(e) => setProject({ ...project, about: e.target.value })}
        ></textarea>
        <button type="submit" className="my-projects-link">
          Send Feedback
        </button>
      </form>
    </div>
  );
}
