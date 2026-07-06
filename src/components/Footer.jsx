import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, useScroll, useTransform } from 'framer-motion'
import { CONTACT, FOOTER_COLUMNS } from '../data.js'
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
          <Link to="/" aria-label="Về trang chủ">
            <LogoMark dark />
          </Link>
          <p>{CONTACT.address}</p>
          <p>
            <a href={`tel:${CONTACT.phone.replace(/[^+\d]/g, '')}`}>
              {CONTACT.phone}
            </a>
          </p>
          <p>
            <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
          </p>
        </div>
        <div className="footer__columns">
          {FOOTER_COLUMNS.map((column) => (
            <div className="footer__column" key={column.title}>
              <h4>{column.title}</h4>
              <ul>
                {column.links.map((link) => (
                  <li key={link.label}>
                    {link.to.startsWith('http') ? (
                      <a href={link.to} target="_blank" rel="noreferrer">
                        {link.label}
                      </a>
                    ) : (
                      <Link to={link.to}>{link.label}</Link>
                    )}
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
