import React from 'react'
import { Project } from './project/Project.jsx'
import './portfolio.css'

export const Portfolio = () => {
  const projects = [
    {
      title: "LifeXP",
      description: "Gamifierad plattform för livet",
      techStack: "Microservices, Prisma, React Native, Expo, TypeScript, Node.js, Axios, m.m.",
      link: "https://github.com/johannawirell/LifeXP",
      video: "/project-movies/LifeXP.mov",
      details: "LifeXP är ett pågående projekt som ska underlätta användarnas vardag genom att gamifiera livet. Målet är att livets svårigheter ska bli mer hanterbara och roliga att övervinna. Appen bygger på quests, XP, levels och personlig progression, med fokus på användarupplevelse och smart design. Projektet är fortfarande under utveckling, men målet är att LifeXP inom snar framtid ska finnas tillgänglig på App Store och liknande plattformar."
    }, {
      title: "Movies",
      description: "Interaktiv filmwebbapp med sökfunktion och trailers.",
      techStack: "JavaScript, React, REST API, TMDB API, CSS",
      link: "https://github.com/johannawirell/Movies",
      video: "/project-movies/Movies.mov",
      details:
        "Movies är en filmwebbapp där användaren kan söka efter filmer, läsa information och spela trailers med hjälp av The Movie Database API. Projektet fokuserar på API-integration, dynamisk rendering och användarvänlig design."
    }, {
      title: "Matkollen",
      description: "Webbapplikation för recepthantering och matplanering.",
      techStack: "JavaScript, React, Node.js, REST API, HTML, CSS",
      link: "https://github.com/johannawirell/1DV613-matkollen",
      video: "/project-movies/Matkollen.mov",
      details:
        "Matkollen hjälper användare att skapa, spara och organisera recept med fokus på enkelhet och användarvänlighet. Projektet innehåller både frontend och backend samt REST API-kommunikation."
    },
    {
      title: "Real Time Web Application",
      description: "Realtidsapplikation med WebSocket-kommunikation.",
      techStack: "JavaScript, Node.js, Express, Socket.io, WebSockets",
      link: "https://github.com/johannawirell/1DV026-b2-realtime-web-application",
      video: "",
      details:
        "En webbapplikation där användare kan interagera i realtid genom WebSockets. Projektet fokuserar på realtidskommunikation, eventhantering och backend-utveckling med Node.js och Socket.io."
    },
    {
      title: "Java Project",
      description: "Objektorienterat projekt utvecklat i Java.",
      techStack: "Java, Gradle, OOP",
      link: "https://github.com/johannawirell/1DV502-a3/tree/main",
      video: "",
      details:
        "Ett Java-projekt med fokus på objektorienterad design, struktur och kodkvalitet. Projektet använder Gradle för bygg- och projektstrukturering."
    },
 
  ]

  return (
    <div className="projects-container">
      <div className="section-heading">
        <span>Utvalda arbeten</span>
        <h2>Projekt</h2>
      </div>
      <div className="projects">
        {projects.map((project, index) => (
          <Project
            key={index}
            title={project.title}
            description={project.description}
            techStack={project.techStack}
            link={project.link}
            video={project.video}
            details={project.details}
          />
        ))}
      </div>
    </div>
  )
}
