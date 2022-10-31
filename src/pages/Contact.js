import React, { useRef } from "react";
import emailjs from "emailjs-com";

import "./Contact.css";

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_USER_ID
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <div className="contact">
      <h1>Contact</h1>
      <div className="contactContainer">
        <div className="contactInfo">
          <p>Email:</p>
          <p>sean.clifton.dev@gmail.com</p>
          <p>LinkedIn:</p>
          <p>linkedin.com/in/seanclifton91</p>
          <p>Github:</p>
          <p>github.com/Seanclifton</p>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <div>
            <input
              name="user_name"
              type="text"
              className="feedback-input"
              placeholder="Name"
            />
            <input
              name="user_email"
              type="text"
              className="feedback-input"
              placeholder="Email"
            />
            <textarea
              name="message"
              className="feedback-input"
              placeholder="Message"
            ></textarea>
            <input type="submit" value="SUBMIT" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
