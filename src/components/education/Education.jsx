import React from 'react';
import '../experience/experience.css';

export const Education = () => {
  const experiences = [
    {
      company: "Linnéuniversitetet",
      role: "Webbprogrammerare 180 hp",
      period: "2020 – 2023"
    },
    {
      company: "Högskolan i Gävle",
      role: "Inledande programmering i Java 7.5 hp",
      period: "2020"
    },
    {
      company: "Högskolan i Skövde",
      role: "Inledande programmering i C++ 7.5 hp",
      period: "2020"
    },
    {
      company: "Hermods",
      role: "Webbutveckling gymnasiekurs",
      period: "2019"
    },
    {
      company: "Linköpings Universitet",
      role: "Handlingsrättslig översiktskurs 15 hp",
      period: "2019"
    },
  ];

  return (
    <section className="experience-section" id="experience">
      <h2>Utbildning</h2>
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
