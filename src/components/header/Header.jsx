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
          <h3>Hej! Jag heter</h3>
          <h1>Johanna Wirell</h1>
          <h3>Fullstack developer</h3>
          <h4>Jag arbetar idag som mjukvaruutvecklare och teamledare på Saab AB, där jag utvecklar
            modeller och mjukvara för flygplanssimulering. Jag trivs i rollen som problemlösare och 
            brinner för teknik, struktur och kreativ utveckling.</h4>
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
        <button className="contact-btn">Kontakt</button>
      </div>
      </>

  );
};
