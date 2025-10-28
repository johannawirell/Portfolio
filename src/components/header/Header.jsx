import React from 'react';
import './header.css';
import ME_PATH from '../../assets/me.jpeg';

export const Header = () => {
 

  return (
    <>
      <div className="container-header">
        <div className="profile">
          <h3>Hej, Jag heter</h3>
          <h1>Johanna Wirell</h1>
          <h3>Fullstack developer</h3>
          <h4>Jag arbetar idag som mjukvaruutvecklare och teamledare på Saab AB, där jag utvecklar avancerade 
            modeller och mjukvara för flygplanssimulering. I mitt arbete kombinerar jag teknisk precision med 
            ett strukturerat och analytiskt arbetssätt för att skapa pålitliga och innovativa lösningar.
          </h4>
          <h4>Jag trivs i rollen som problemlösare och brinner för att förena teknik, struktur 
            och kreativ utveckling – både i kod och i samarbetet med kollegor.
          </h4>
        </div>
        <div className="image">
          <img src={ME_PATH} alt="Couldn't find asset" />
        </div>
      </div>
      </>

  );
};
