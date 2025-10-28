import React from 'react';
import './header.css';
import ME_PATH from '../../assets/me.jpeg';
import GITHUB_PATH from '../../assets/github.jpeg';

export const Header = () => {
  const openGitHub = () => {
    window.open('https://github.com/johannawirell', '_blank');
  };

  return (
    <>
      <div className="container-header">
        <div className="profile">
          <h3>Hello! I'm</h3>
          <h1>Johanna Wirell</h1>
          <h3>Fullstack developer</h3>
          <h4>I have experience in building and designing Websites, Mobile Applications and Desktop Applications. 
            I also have a background in other programming languages and technologies, such as Java and C++.</h4>
        </div>
        <div className="image">
          <img src={ME_PATH} alt="Couldn't find asset" />
        </div>
      </div>
      <div className="contact">
        <button className="contact-btn" onClick={openGitHub}>
          <img src={GITHUB_PATH} alt="" className='github'/>
          Github
          </button>
        <button className="contact-btn">Let's talk</button>
      </div>
      </>

  );
};
