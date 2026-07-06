import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
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
      <img src="/images/vdf-logo.png" alt="VDF INVEST" />
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
  const location = useLocation()
  const isHome = location.pathname === '/'
  const [hidden, setHidden] = useState(false)
  const [scrolledPastHero, setScrolledPastHero] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const { scrollY } = useScroll()

  // Trang con không có hero tối nên navbar luôn ở trạng thái nền trắng.
  const solid = !isHome || scrolledPastHero

  useMotionValueEvent(scrollY, 'change', (latest) => {
    const previous = scrollY.getPrevious() ?? 0
    setHidden(latest > previous && latest > 160 && !menuOpen)
    setScrolledPastHero(latest > window.innerHeight - 90)
  })

  // Link neo (#...) hoạt động từ trang con bằng cách quay về trang chủ trước.
  const anchor = (href) => (isHome ? href : `/${href}`)

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
        <Link to="/" aria-label="Về trang chủ">
          <LogoMark dark={solid && !menuOpen} />
        </Link>
        <nav className="nav__links">
          {NAV_LINKS.map((link) => (
            <a key={link.label} href={anchor(link.href)}>
              {link.label}
            </a>
          ))}
        </nav>
        <a className="nav__cta" href={anchor('#contact')}>
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
                  href={anchor(link.href)}
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
                href={anchor('#contact')}
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
