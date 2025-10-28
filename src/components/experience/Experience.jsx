import React from 'react'
import './experience.css'

export const Experience = () => {
  const experiences = [
    {
      company: "Frilans / Eget",
      role: "Fullstack Developer",
      period: "2023 – pågående",
      description: "Utvecklat fullstackapplikationer, fokuserat på React, Node.js, Express och MongoDB."
    },
    {
      company: "Linnéuniversitetet",
      role: "Systemutvecklingstudent",
      period: "2021 – 2024",
      description: "Studier inom webbutveckling, programmering, databaser och mjukvarudesign."
    }
  ];

  return (
    <section className="experience-section">
      <h2>Experience</h2>
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
  )
}

export default Experience
