import { motion } from 'framer-motion'
import { NAV_LINKS } from '../data.js'

export function LogoMark({ dark = false }) {
  return (
    <span className={`logo ${dark ? 'logo--dark' : ''}`}>
      <svg viewBox="0 0 32 32" width="26" height="26" aria-hidden="true">
        <ellipse
          cx="16"
          cy="16"
          rx="13"
          ry="9"
          transform="rotate(-24 16 16)"
          fill="currentColor"
        />
        <path
          d="M5 21c7-2 15-8 22-10"
          stroke={dark ? '#f2f3f2' : '#3d7d54'}
          strokeWidth="2.4"
          fill="none"
          strokeLinecap="round"
        />
      </svg>
      Harvest
    </span>
  )
}

export default function Navbar() {
  return (
    <motion.header
      className="nav"
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.9, delay: 0.35, ease: 'easeOut' }}
    >
      <LogoMark />
      <nav className="nav__links">
        {NAV_LINKS.map((link) => (
          <a key={link.label} href={link.href}>
            {link.label}
          </a>
        ))}
      </nav>
      <a className="nav__cta" href="#contact">
        Contact us
      </a>
    </motion.header>
  )
}
