import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./style/contact.css";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_1mb7iij",
        "template_z1k79jq",
        form.current,
        "5XmCc-r8EYLHG0CfV"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div id="contact" className="contact-container">
      <h2>Contact</h2>
      <form className="contact__form" ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="user_name" />
        <label>Email</label>
        <input type="email" name="user_email" />
        <label>Message</label>
        <textarea name="message" />
        <input className="contact__btn" type="submit" value="Send" />
      </form>
    </div>
  );
};

export default Contact;
