import { useEffect, useState } from 'react'
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from 'framer-motion'
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
          stroke={dark ? '#f2f3f2' : '#5b8ec7'}
          strokeWidth="2.4"
          fill="none"
          strokeLinecap="round"
        />
      </svg>
      VDF
    </span>
  )
}

const menuLink = {
  hidden: { y: 36, opacity: 0 },
  show: (i) => ({
    y: 0,
    opacity: 1,
    transition: { duration: 0.55, delay: 0.15 + i * 0.07, ease: [0.22, 1, 0.36, 1] },
  }),
}

export default function Navbar() {
  const [hidden, setHidden] = useState(false)
  const [solid, setSolid] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, 'change', (latest) => {
    const previous = scrollY.getPrevious() ?? 0
    setHidden(latest > previous && latest > 160 && !menuOpen)
    setSolid(latest > window.innerHeight - 90)
  })

  // Lock page scroll while the fullscreen menu is open.
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  return (
    <>
      <motion.header
        className={`nav ${solid && !menuOpen ? 'nav--solid' : ''}`}
        initial={{ y: -90 }}
        animate={{ y: hidden ? '-110%' : 0 }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      >
        <LogoMark dark={solid && !menuOpen} />
        <nav className="nav__links">
          {NAV_LINKS.map((link) => (
            <a key={link.label} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>
        <a className="nav__cta" href="#contact">
          Liên hệ
        </a>
        <button
          type="button"
          className={`nav__burger ${menuOpen ? 'is-open' : ''}`}
          aria-label={menuOpen ? 'Đóng menu' : 'Mở menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
        </button>
      </motion.header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0, y: '-4%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-4%' }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <nav>
              {NAV_LINKS.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  variants={menuLink}
                  initial="hidden"
                  animate="show"
                  custom={i}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.a
                className="mobile-menu__cta"
                href="#contact"
                variants={menuLink}
                initial="hidden"
                animate="show"
                custom={NAV_LINKS.length}
                onClick={() => setMenuOpen(false)}
              >
                Liên hệ
              </motion.a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
