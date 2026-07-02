import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { FOOTER_COLUMNS } from '../data.js'
import { LogoMark } from './Navbar.jsx'

export default function Footer() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end end'],
  })
  const watermarkY = useTransform(scrollYProgress, [0, 1], ['38%', '0%'])

  return (
    <footer className="footer" ref={ref}>
      <div className="footer__watermark" aria-hidden="true">
        <motion.span style={{ y: watermarkY }}>VDF.</motion.span>
      </div>
      <div className="shell footer__grid">
        <div className="footer__brand">
          <LogoMark dark />
          <p>Turen, Malang East Java, Indonesia</p>
        </div>
        <div className="footer__columns">
          {FOOTER_COLUMNS.map((column) => (
            <div className="footer__column" key={column.title}>
              <h4>{column.title}</h4>
              <ul>
                {column.links.map((link) => (
                  <li key={link}>
                    <a href="#home">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  )
}
