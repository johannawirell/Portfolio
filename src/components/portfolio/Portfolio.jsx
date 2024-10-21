import React from 'react'
import {Project} from './project/Project.jsx'
import './portfolio.css'

export const Portfolio = () => {
    const projects = [
      {
        title: "Movies",
        description: "Filmstreamingtjänst",
        techStack: "JavaScript, React",
        link: "https://github.com/johannawirell/Movies"
      },
      {
        title: "Matkollen",
        description: "Webbapplikation för recepthantering",
        techStack: "Node.js, Express, React, MongoDB",
        link: "https://github.com/johannawirell/1DV613-matkollen"
      },
      {
        title: "Real Time Web Application",
        description: "...",
        techStack: "Node.js, Express",
        link: "https://github.com/johannawirell/1DV026-b2-realtime-web-application"
      },
      {
        title: "Java",
        description: "...",
        techStack: "Java, Gradle",
        link: "https://github.com/johannawirell/1DV502-a3/tree/main"
      },
      
      // Fler projekt här
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
            />
          ))}
        </div>
      </div>
    )
}
