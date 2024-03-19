import React, { useContext, useRef, useState } from "react";
import { contextManage } from "../../context/ManageState";
import Button from "../UI/Button";

import "./Contact.css";

const Contact = () => {
  const ctx = useContext(contextManage);
  const [name, setName] = useState(ctx.userData.userName);
  const [email, setEmail] = useState(ctx.userData.email);

  const nameHandler = e => {
    setName(e.target.value);
  }
  const emailHandler = e => {
    setEmail(e.target.value);
  }

  return (
    <section className="contact-section">
      <h1 className="contact-heading">Contact me 👋</h1>

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3407.3708013821206!2d75.57348901496235!3d31.34874538142675!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391a5a7e134b8593%3A0x6046f3b6c2736340!2sSwami%20Sanitation!5e0!3m2!1sen!2sin!4v1678786898923!5m2!1sen!2sin"
        width="100%"
        height="450"
        style={{ border: 0 }}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>

      <div className="contact-form-section">
        <form action="https://formspree.io/f/mvonqvpg" method="POST">
          <input type="text" onChange={nameHandler} value={name} name="name" placeholder="Your name" required/>
          <input type="text" onChange={emailHandler} value={email} name="email" placeholder="your email" required/>
          <textarea type="text" name="message" placeholder="Send a message" required/>
          <Button type='submit' className='contact-form-section-btn'>Send</Button>
        </form>
        {ctx.userData && ctx.userData.imageUrl && <div className="user-image-section">
          <img
            src={`http://localhost:3000/${ctx.userData.imageUrl}`}
            alt=""
          />
        </div>}
      </div>
    </section>
  );
};

export default Contact;
