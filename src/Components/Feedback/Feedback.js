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
        }}
      >
        <input
          type="text"
          placeholder="full name"
          autoComplete="off"
          onChange={(e) => setProject({ ...project, fullname: e.target.value })}
        />
        <input
          type="text"
          placeholder="phone number"
          autoComplete="off"
          onChange={(e) => setProject({ ...project, phone: e.target.value })}
        />
        <textarea
          placeholder="about"
          onChange={(e) => setProject({ ...project, about: e.target.value })}
        ></textarea>
        <button type="submit" className="my-projects-link">
          Send Feedback
        </button>
      </form>
    </div>
  );
}
