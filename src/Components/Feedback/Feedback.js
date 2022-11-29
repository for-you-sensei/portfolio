import React, { useState } from "react";
import "./Feedback.css";

export function Feedback() {
  const [feedback, setFeedback] = useState({
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
          console.log(feedback);
          setFeedback({ fullname: "", phone: "", about: "" });
        }}
      >
        <input
          type="text"
          placeholder="full name"
          autoComplete="off"
          value={feedback.fullname}
          onChange={(e) => setFeedback({ ...feedback, fullname: e.target.value })}
        />
        <input
          type="text"
          placeholder="phone number"
          autoComplete="off"
          value={feedback.phone}
          onChange={(e) => setFeedback({ ...feedback, phone: e.target.value })}
        />
        <textarea
          placeholder="about"
          value={feedback.about}
          onChange={(e) => setFeedback({ ...feedback, about: e.target.value })}
        ></textarea>
        <button type="submit" className="my-feedbacks-link">
          Send Feedback
        </button>
      </form>
    </div>
  );
}
