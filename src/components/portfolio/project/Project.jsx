import React, { useState } from 'react';
import './project.css';

export const Project = ({ title, description, techStack, link, video, details }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="project" onClick={() => setOpen(true)}>
        <h3>{title}</h3>
        <h4>{description}</h4>
        <p><strong>Tech Stack:</strong> {techStack}</p>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="github-link"
          onClick={(e) => e.stopPropagation()} // så klick på länken inte öppnar modalen
        >
          Se på GitHub
        </a>
      </div>

      {open && (
        <div className="project-modal-overlay" onClick={() => setOpen(false)}>
          <div className="project-modal" onClick={(e) => e.stopPropagation()}>
            <button className="close-modal" onClick={() => setOpen(false)}>✕</button>
            <h2>{title}</h2>
            <p>{details || description}</p>
            <p><strong>Teknik:</strong> {techStack}</p>
            
            {video ? (
              video.includes('youtube.com') ? (
                <div className="video-container">
                  <iframe
                    src={video.replace('watch?v=', 'embed/')}
                    title={`${title} demo`}
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                  />
                </div>
              ) : (
                <video className="video-container" controls>
                  <source src={video} type="video/mp4" />
                  Din webbläsare stödjer inte videouppspelning.
                </video>
              )
            ) : (
              <p className="no-video">Ingen video tillgänglig</p>
            )}

            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="github-link"
            >
              Gå till GitHub
            </a>
          </div>
        </div>
      )}
    </>
  );
};
