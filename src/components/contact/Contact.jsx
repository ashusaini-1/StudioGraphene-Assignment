import React, { useEffect, useState } from "react";
import "./contact.css";
import { useToast } from "@chakra-ui/react";

const Contact=()=> {
  const toast = useToast();
  const { name, setName } = useState();
  const { email, setEmail } = useState();
  const { message, setMessage } = useState();
  const handleSubmit = () => {
    try {
      if (!name || !email || !message) {
        toast({
          title: "Fill all the details",

          status: "warning",
          duration: 2000,
          isClosable: true,
        });
        return;
      } else {
        toast({
          title: "Send Successfully",
          status: "success",
          duration: 2000,
          isClosable: true,
        });
      }
    } catch (error) {
      toast({
        title: { error },
        status: "Error",
        duration: 2000,
        isClosable: true,
      });
    }
  };

  return (
    <div className="contact-form">
      <div className="contact-section">
        <div className="contact-header">
          <div className="contact-title">
            <p className="contact-heading">Contact Us</p>
            <p className="contact-subheading">
              Get in touch with us for any inquiries or feedback.
            </p>
          </div>
          <div className="contact-form-container">
            <form className="contact-inputs">
              <input
                className="contact-input"
                type="text"
                name="name"
                placeholder="Your Name"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />

              <br />
              <input
                className="contact-input"
                type="email"
                name="email"
                placeholder="Your Email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />

              <br />
              <textarea
                className="contact-message"
                name="message"
                placeholder="Your Message"
                value={message}
                onChange={(e) => {
                  setMessage(e.target.value);
                }}
              ></textarea>

              <div className="contact-button">
                <button  onClick={handleSubmit} className="contact-send-button">SEND</button>
              </div>
            </form>
          </div>
        </div>
        <div className="contact-info">GET<br></br> IN TOUCH</div>
      </div>
    </div>
  );
}

export default Contact;
