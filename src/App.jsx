import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
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

// Intro timeline (seconds): hold the miniature mockup, then zoom into the hero.
const INTRO_HOLD = 0.9
const INTRO_ZOOM = 1.7

export default function App() {
  const [introDone, setIntroDone] = useState(false)

  // Lock scrolling while the intro plays.
  useEffect(() => {
    window.scrollTo(0, 0)
    if (!introDone) {
      document.body.classList.add('no-scroll')
    } else {
      document.body.classList.remove('no-scroll')
    }
    return () => document.body.classList.remove('no-scroll')
  }, [introDone])

  // Smooth scrolling (Lenis) once the intro has finished.
  useEffect(() => {
    if (!introDone) return
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
  }, [introDone])

  return (
    <div className="intro-stage" data-intro-done={introDone}>
      <motion.div
        className="page"
        initial={{ scale: 0.42, y: '6vh', borderRadius: 18 }}
        animate={{ scale: 1, y: 0, borderRadius: 0 }}
        transition={{
          duration: INTRO_ZOOM,
          delay: INTRO_HOLD,
          ease: [0.76, 0, 0.24, 1],
        }}
        onAnimationComplete={() => setIntroDone(true)}
        style={{ transformOrigin: '50% 0%' }}
      >
        <Hero>
          <Navbar />
        </Hero>
        <Stats />
        <About />
        <RevealHeading />
        <Services />
        <Projects />
        <Articles />
        <Cta />
        <Footer />
      </motion.div>
    </div>
  )
}
