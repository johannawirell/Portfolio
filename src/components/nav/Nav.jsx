import React from 'react'
import './nav.css'

export const Nav = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className='container-nav'>
      <div className='header-item'>Johanna Wirell</div>
      <div className='nav-links'>
        <span onClick={() => scrollToSection('about')}>Om</span>
        <span onClick={() => scrollToSection('experience')}>Erfarenheter</span>
        <span onClick={() => scrollToSection('skills')}>Tekniker</span>
        <span onClick={() => scrollToSection('portfolio')}>Projekt</span>
        <span onClick={() => scrollToSection('contact')}>Kontakt</span>
      </div>
    </nav>
  )
}
