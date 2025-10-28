import React from 'react'
import { Header } from './components/header/Header'
import { Nav } from './components/nav/Nav'
import { About } from './components/about/About'
import { Experience } from './components/experience/Experience'
import { Education } from './components/education/Education'
import { Skills } from './components/skills/Skills'
import { Portfolio } from './components/portfolio/Portfolio'
import { Contact } from './components/contact/Contact'
import { Footer } from './components/footer/Footer'

export const App = () => {
  return (
    <>
      <div id="nav"><Nav /></div>
      <main>
        <section id="header"><Header /></section>
        <section id="about"><About /></section>
        <section id="portfolio"><Portfolio /></section>
        <section id="experience"><Experience /></section>
        <section id="education"><Education /></section>
        <section id="skills"><Skills /></section>
        <section id="contact"><Contact /></section>
      </main>
      <Footer />
    </>
  )
}
