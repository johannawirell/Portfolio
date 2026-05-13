import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { FaGithub } from 'react-icons/fa';
import { FiArrowUpRight, FiPlayCircle, FiX } from 'react-icons/fi';
import './project.css';

export const Project = ({ title, description, techStack, link, video, details }) => {
  const [open, setOpen] = useState(false);
  const isYouTubeVideo = video?.includes('youtube.com') || video?.includes('youtu.be');
  const videoType = video?.toLowerCase().endsWith('.mov') ? 'video/quicktime' : 'video/mp4';
  const modal = (
    <div className="project-modal-overlay" onClick={() => setOpen(false)}>
      <div className="project-modal" onClick={(e) => e.stopPropagation()}>
        <button className="close-modal" onClick={() => setOpen(false)} aria-label="Stäng projekt">
          <FiX aria-hidden="true" />
        </button>
        <h2>{title}</h2>
        <p>{details || description}</p>
        <p><strong>Tekniker:</strong> {techStack}</p>
        
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
          <FaGithub aria-hidden="true" />
          Gå till GitHub
          <FiArrowUpRight aria-hidden="true" />
        </a>
      </div>
    </div>
  );

  return (
    <>
      <div className="project" onClick={() => setOpen(true)}>
        <div>
          <div className="project-topline">
            <span>{video ? 'Demo' : 'Case'}</span>
            {video && <FiPlayCircle aria-hidden="true" />}
          </div>
          <h3>{title}</h3>
          <h4>{description}</h4>
        </div>
        <p><strong>Tech Stack:</strong> {techStack}</p>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="github-link"
          onClick={(e) => e.stopPropagation()} // så klick på länken inte öppnar modalen
        >
          <FaGithub aria-hidden="true" />
          GitHub
        </a>
      </div>

      {open && createPortal(modal, document.body)}
    </>
  );
};
