import React from 'react';
import './project.css';

export const Project = ({ title, description, techStack, link }) => {
  return (
    <div className="project">
      <h3>{title}</h3>
      <p>{description}</p>
      <p><strong>Tech Stack:</strong> {techStack}</p>
      <a href={link} target="_blank" rel="noopener noreferrer" className="github-link">Se på GitHub</a>
    </div>
  );
};

