// src/components/Contact.jsx
import React from "react";
import "./contact.css";

export const Contact = () => {
  return (
    <section className="contact-section" id="contact">
      <h2>Kontakta mig</h2>
      <p>Jag är öppen för nya möjligheter och samarbeten!</p>
      <a href="mailto:wirelljohanna@gmail.com" className="contact-btn">
        📧 Skicka ett mail
      </a>
    </section>
  );
};
