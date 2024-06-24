import React, { useRef } from "react";
import '@fortawesome/fontawesome-free/css/all.min.css';
import "./Contact.css";
import emailjs from "@emailjs/browser"

function Contact() {
  const message = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
     .sendform(
      ""
      ""
      message.current,
      ""

     )
     .then(
      (result) => {
        console.log(result.text);
        console.log("message send")
      },
      (error) => {
        console.log(error.text);
      }
     )
  }
  return (
    <div className="contact-container">
      <div className="contact-div">
        <div className="contact-detail">
        <h2 className="contact-name">Hafiz Adnan</h2>
        <p className="contact-msg">
          Looking to discuss a project? Please get in touch using the form on this page. Generally, I’m able to reply to all inquiries within 48hours.
        </p>
        <h4 className="contact-email">email@example.com</h4>
        <h5 className="contact-num">(555) 555-5555</h5>
        <a className="contact-icon" href="https://www.instagram.com/"><i className="fa-brands fa-instagram"></i></a>
        <a className="contact-icon" href="https://x.com/"><i className="fa-brands fa-x"></i></a>
        </div>
        <div className="contact-form">
          <form ref={message} onSubmit={sendEmail} className="contact-form">
            <label className="form-label">Full Name:</label>
            <input className="form-input" type="text" name="user_name" />
            <label className="form-label">Email:</label>
            <input className="form-input" typeof="email" name="user_email" />
            <label className="form-label">Subject:</label>
            <select className="select-form">
              <option value="">Select a Subject</option>
              <option value="Booking Inquiry">Outdoor Shoot</option>
              <option value="Photo Shoot">Wedding</option>
              <option value="Collaboration">Event</option>
              <option value="Other">Other</option>
            </select>
            <label className="form-label">Message</label>
            <textarea name= "message" />
          </form>
          <button className="contact-button" type="submit" value={send}>Send Message</button>
        </div>
      </div>
    </div>
  );
}

export default Contact;
