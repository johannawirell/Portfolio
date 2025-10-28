import React from 'react'
import { Project } from './project/Project.jsx'
import './portfolio.css'

export const Portfolio = () => {
  const projects = [
    {
      title: "Movies",
      description: "Filmstreamingtjänst",
      techStack: "JavaScript, React",
      link: "https://github.com/johannawirell/Movies",
      video: "/project-movies/Movies.mov",
      details: "Movies är en filmwebbapp där användaren kan söka efter filmer, läsa info och spela trailers via The Movie DB API."
    },
    {
      title: "Matkollen",
      description: "Webbapplikation för recepthantering",
      techStack: "Node.js, Express, React, MongoDB",
      link: "https://github.com/johannawirell/1DV613-matkollen",
      video: "/project-movies/Matkollen.mov",
      details: "Matkollen hjälper användare att skapa, spara och hantera recept – med ett fokus på användarvänlighet och enkelhet."
    },
    {
      title: "Real Time Web Application",
      description: "Realtidskommunikation via WebSockets.",
      techStack: "Node.js, Express, Socket.io",
      link: "https://github.com/johannawirell/1DV026-b2-realtime-web-application",
      video: "/project-movies/Realtime.mov",
      details: "Ett projekt där användare kan interagera i realtid – exempelvis för chatt eller datavisualisering."
    },
    {
      title: "Java",
      description: "Konsolbaserat projekt i Java.",
      techStack: "Java, Gradle",
      link: "https://github.com/johannawirell/1DV502-a3/tree/main",
      video: "/project-movies/Java.mov",
      details: "Java-projekt med fokus på objektorienterad design, struktur och kodkvalitet."
    }
  ]

  return (
    <div className="projects-container">
      <h2>Projects</h2>
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
