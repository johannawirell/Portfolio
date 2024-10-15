import React from 'react';
import './header.css';
import IMAGE_PATH from '../../assets/me.jpeg';

export const Header = () => {
  return (
    <header>
      <div className="container">
      
        <div className="profile">
          <h3>Hello! I'm</h3>
          <h1>Johanna Wirell</h1>
          <h3>Fullstack developer</h3>
          <h4>I have experience in building and designing websites, Mobile applicationss, and Desktop applications. 
            I also have a background in other programming languages and technologies, such as Java and C++.</h4>
        </div>
        <div className="image">
          <img src={IMAGE_PATH} alt="Couldn't find asset" />
        </div>
      </div>
    </header>


  );
};
