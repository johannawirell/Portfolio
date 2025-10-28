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
        <span onClick={() => scrollToSection('about')}>About</span>
        <span onClick={() => scrollToSection('experience')}>Experience</span>
        <span onClick={() => scrollToSection('services')}>Services</span>
        <span onClick={() => scrollToSection('portfolio')}>Portfolio</span>
        <span onClick={() => scrollToSection('contact')}>Contact</span>
      </div>
    </nav>
  )
}
