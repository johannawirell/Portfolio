import React from 'react';
import './about.css';

export const About = () => {
  return (
    <section className="about-section" id="about">
      <div className="section-heading">
        <span>Profil</span>
        <h2>Om mig</h2>
      </div>
      <p>Jag är en engagerad <strong>fullstackutvecklare</strong> som drivs av att bygga moderna, smarta och användarvänliga 
      lösningar. Jag gillar kombinationen av teknik, kreativitet och problemlösning — att ta en idé från koncept till en 
      färdig produkt som faktiskt känns bra att använda.</p>

      <p>Jag arbetar främst med <strong>React, Node.js, JavaScript, Java och C++</strong>, och trivs bäst i projekt där jag får kombinera 
        frontend, backend och UX för att skapa genomtänkta helheter.</p>

      <p>Det jag uppskattar mest med utveckling är möjligheten att ständigt lära mig nytt, testa idéer och hitta effektivare sätt att lösa problem. 
        Jag tycker om att bygga produkter som inte bara fungerar tekniskt, utan också har en tydlig känsla och användarupplevelse.</p>
    </section>
  );
};
