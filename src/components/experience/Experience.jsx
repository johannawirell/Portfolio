import React from 'react';
import './experience.css';

export const Experience = () => {
  const experiences = [
    {
      company: "Saab AB",
      role: "Software Engineer & Teamledare",
      period: "2023 – Nuvarande",
      description:
        "Utvecklar mjukvara och simuleringsmodeller för flygplanssystem. Ansvarar för planering, handledning och kvalitet i ett mindre utvecklingsteam. Arbetar med C++, Fortran, Ada och Git.",
    },
    {
      company: "Olivia Personlig Assistans",
      role: "Samordnare & personlig assistent",
      period: "2017 – 2023",
      description:
        "Ledde personalgrupp, ansvarade för schema och personalfrågor samt bistod i vård och stöd i vardagen.",
    },
    {
      company: "Cloetta / Danske Finans / PostNord",
      role: "Administrativa & kundnära roller",
      period: "2016 – 2020",
      description:
        "Utvecklade färdigheter inom kundservice, kommunikation och administration under flera uppdrag.",
    },
  ];

  return (
    <section className="experience-section" id="experience">
      <h2>Arbetslivserfarenhet</h2>
      <div className="experience-list">
        {experiences.map((exp, i) => (
          <div className="experience-item" key={i}>
            <h3>{exp.role}</h3>
            <h4>{exp.company}</h4>
            <p className="period">{exp.period}</p>
            <p>{exp.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
