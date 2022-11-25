import React from "react";
import "./Feedback.css";

export function Feedback() {
  return (
    <div id="feedback">
      <p>You can leave your feedback here</p>
      <form className="feedback-form">
        <input type="text" placeholder="full name" autoComplete="off" />
        <input type="text" placeholder="phone number" autoComplete="off" />
        <textarea placeholder="about"></textarea>
        <button type="submit" className="my-projects-link">
          Send Feedback
        </button>
      </form>
    </div>
  );
}
