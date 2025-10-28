import React from 'react'
import './services.css'

export const Services = () => {
  const services = [
    {
      title: "Frontend Development",
      description: "Bygger responsiva, användarvänliga gränssnitt i React och JavaScript."
    },
    {
      title: "Backend Development",
      description: "Utvecklar REST API:er med Node.js, Express och databaser som MongoDB."
    },
    {
      title: "UI/UX Design",
      description: "Skapar designlösningar med fokus på användarupplevelse och estetik."
    }
  ];

  return (
    <section className="services-section">
      <h2>Services</h2>
      <div className="services-list">
        {services.map((service, index) => (
          <div className="service-item" key={index}>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
