import React, { useState } from "react";
import "./ContactForm.css";
import axios from "axios";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleChange = (e) =>{
    e.preventDefault();
    if(e.target.id === "name"){
      setName(e.target.value);
    }
    if(e.target.id === "email"){
      setEmail(e.target.value);
    }
    if(e.target.id === "message"){
      setMessage(e.target.value);
    }
  }

  const handleSubmit = (e) =>{
    e.preventDefault();

    const dataToSubmit ={
      name,
      email,
      message
    }

    axios.post("api/sendMail", dataToSubmit)
  }

  return (
    <form id="contact-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          className="form-control"
          placeholder="Your name.."
          value={name}
          onChange={handleChange}
          id="name"
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="inputEmail1">Email address</label>
        <input
          type="email"
          className="form-control"
          aria-describedby="emailHelp"
          placeholder="Your Email.."
          value={email}
          onChange={handleChange}
          id="email"
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="message">Message</label>
        <textarea
          className="form-control"
          rows="5"
          placeholder="Your message.."
          value={message}
          onClick={handleChange}
          id="message"
          required
        ></textarea>
      </div>
      <button type="submit" className="btn btn-primary"
      onClick={handleSubmit}>
        Send us Email
      </button>
    </form>
  );
}
