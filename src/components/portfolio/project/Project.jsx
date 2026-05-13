import React, { useState } from 'react';
import './project.css';

export const Project = ({ title, description, techStack, link, video, details }) => {
  const [open, setOpen] = useState(false);
  const isYouTubeVideo = video?.includes('youtube.com') || video?.includes('youtu.be');
  const videoType = video?.toLowerCase().endsWith('.mov') ? 'video/quicktime' : 'video/mp4';

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
              isYouTubeVideo ? (
                <div className="video-container">
                  <iframe
                    src={video.replace('watch?v=', 'embed/').replace('youtu.be/', 'youtube.com/embed/')}
                    title={`${title} demo`}
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                  />
                </div>
              ) : (
                <video className="video-container" controls preload="metadata">
                  <source src={video} type={videoType} />
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
