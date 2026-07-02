import { useEffect } from 'react'
import Lenis from 'lenis'
import './App.css'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Stats from './components/Stats.jsx'
import About from './components/About.jsx'
import RevealHeading from './components/RevealHeading.jsx'
import Services from './components/Services.jsx'
import Projects from './components/Projects.jsx'
import Articles from './components/Articles.jsx'
import Cta from './components/Cta.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  // Smooth scrolling (Lenis).
  useEffect(() => {
    const lenis = new Lenis({ duration: 1.15, smoothWheel: true })
    let rafId
    const raf = (time) => {
      lenis.raf(time)
      rafId = requestAnimationFrame(raf)
    }
    rafId = requestAnimationFrame(raf)
    return () => {
      cancelAnimationFrame(rafId)
      lenis.destroy()
    }
  }, [])

  return (
    <div className="page">
      <Navbar />
      <Hero />
      <Stats />
      <About />
      <RevealHeading />
      <Services />
      <Projects />
      <Articles />
      <Cta />
      <Footer />
    </div>
  )
}
