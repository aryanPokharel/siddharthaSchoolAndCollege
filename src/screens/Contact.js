import React, { useState } from "react";
import emailjs from "emailjs-com";

function Contact() {
  const [name, setName] = useState("N/A");
  const [email, setEmail] = useState("N/A");
  const [message, setMessage] = useState("N/A");

  const handleSubmit = (name, email, message) => {
    // Configure EmailJS parameters
    const templateParams = {
      to_email: "aryanpokharel417@gmail.com",
      message: `From : ${name} , Email : ${email} , Message : ${message}`,
    };

    // Send email using EmailJS
    emailjs
      .send(
        "service_m81ixxo",
        "template_yodd6ds",
        templateParams,
        "27Atwx8Pml0UN-x8i"
      )
      .then((result) => {
        console.log("Email sent successfully!", result.text);
      })
      .catch((error) => {
        console.error("Error sending email:", error);
      });
  };

  return (
    <div>
      <h2>Feel free to put forth your queries!</h2>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Your name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Your email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  required
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="form-label">
                  Your message
                </label>
                <textarea
                  className="form-control"
                  id="message"
                  name="message"
                  rows="3"
                  required
                  onChange={(e) => {
                    setMessage(e.target.value);
                  }}
                />
              </div>
              <button
                type="submit"
                className="btn btn-primary"
                onClick={() => {
                  handleSubmit(name, email, message);
                }}
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
