// src/components/Contact.jsx
import React from "react";
import { FaGithub, FaEnvelope } from "react-icons/fa";
import "./contact.css";

export const Contact = () => {
  return (
    <section className="contact-section" id="contact">
      <h2>Kontakta mig</h2>
      <p>Jag är öppen för nya möjligheter, samarbeten och spännande projekt!</p>

      <div className="contact-links">
        <a
          href="mailto:wirelljohanna@gmail.com"
          className="contact-btn"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaEnvelope className="contact-icon" />
          Skicka mail
        </a>

        <a
          href="https://github.com/johannawirell"
          className="contact-btn"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className="contact-icon" />
          GitHub
        </a>
      </div>
    </section>
  );
};
