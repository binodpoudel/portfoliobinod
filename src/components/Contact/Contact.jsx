import React, { useContext, useRef, useState } from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser";
import { themeContext } from "../../Context";

const Contact = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const form = useRef();
  const [done, setDone] = useState(false)
  

  const sendEmail = (e) => {
    e.preventDefault();
      
    emailjs
      .sendForm(
        "service_tt8zgza",
        "template_l86zmba",
        form.current,
        'deyD_1plxi5XmaQ5M'
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
        
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="contact-form" id="contact">
      {/* left side from work section */}
      <div className="w-left">
        <div className="awesome">
          {/* darkMode */}
          <span style={{color: darkMode?'white': ''}}>Get in Touch</span>
          <span>Contact me</span>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>
      </div>
      {/* right side form */}
      <div className="c-right">
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="user_name" className="user"  placeholder="Name"/>
          <input type="email" name="user_email" className="user" placeholder="Email"/>
          <textarea name="message" className="user" placeholder="Message"/>
          <input onClick={() => setDone(true)} type="submit" value="Send" className="button"/> 
          <span>{done && "Please contact me via LinkedIn, xing, email, or mobile number."}</span>
          <p className='' style={{ color: "#FFBF00" }}> "Please contact me via LinkedIn, xing, email, or mobile number."</p>
          <div
            className="blur c-blur1"
            style={{ background: "var(--purple)" }}
            
          ></div>
          <div>
          
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;


