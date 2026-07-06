import { useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Lenis from 'lenis'
import './App.css'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import ServicesPage from './pages/ServicesPage.jsx'
import ProjectsPage from './pages/ProjectsPage.jsx'
import NewsPage from './pages/NewsPage.jsx'

export default function App() {
  const location = useLocation()

  // Cuộn mượt (Lenis).
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
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/linh-vuc" element={<ServicesPage />} />
          <Route path="/du-an" element={<ProjectsPage />} />
          <Route path="/tin-tuc" element={<NewsPage />} />
        </Routes>
      </AnimatePresence>
      <Footer />
    </div>
  )
}
