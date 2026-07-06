import { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { AnimatePresence, motion, useScroll, useTransform } from 'framer-motion'
import { PROJECTS } from '../data.js'

const pad = (n) => String(n).padStart(2, '0')

export default function Projects() {
  const [[index, direction], setIndex] = useState([0, 0])
  const [open, setOpen] = useState(false)
  const project = PROJECTS[index]

  const bannerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: bannerRef,
    offset: ['start end', 'end start'],
  })
  const parallaxY = useTransform(scrollYProgress, [0, 1], ['-12%', '12%'])

  const paginate = (dir) => {
    setOpen(false)
    setIndex(([current]) => [
      (current + dir + PROJECTS.length) % PROJECTS.length,
      dir,
    ])
  }

  const onDragEnd = (_, info) => {
    if (info.offset.x < -80) paginate(1)
    else if (info.offset.x > 80) paginate(-1)
  }

  const slide = {
    enter: (dir) => ({ opacity: 0, x: dir >= 0 ? 60 : -60 }),
    center: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
    },
    exit: (dir) => ({
      opacity: 0,
      x: dir >= 0 ? -60 : 60,
      transition: { duration: 0.4, ease: 'easeIn' },
    }),
  }

  return (
    <section className="projects" id="project">
      <div className="shell">
        <div className="section-head">
          <span className="label">Dự án</span>
          <Link className="see-all" to="/du-an">
            Xem tất cả
          </Link>
        </div>
        <motion.div
          className="projects__banner"
          ref={bannerRef}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-10% 0px' }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.div className="projects__banner-track" style={{ y: parallaxY }}>
            <AnimatePresence initial={false}>
              <motion.img
                key={project.banner}
                src={project.banner}
                alt={project.name}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8, ease: 'easeInOut' }}
              />
            </AnimatePresence>
          </motion.div>
        </motion.div>

        <div className="projects__carousel">
          <AnimatePresence mode="wait" custom={direction} initial={false}>
            <motion.div
              key={project.name}
              className="projects__slide"
              custom={direction}
              variants={slide}
              initial="enter"
              animate="center"
              exit="exit"
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.15}
              onDragEnd={onDragEnd}
            >
              <div className="projects__media">
                <img src={project.image} alt={project.name} loading="lazy" />
              </div>
              <div className="projects__body">
                <span className="projects__tag">{project.tag}</span>
                <h3>{project.name}</h3>
                <p>{project.text}</p>
                <button
                  className={`btn-pill ${open ? 'is-open' : ''}`}
                  type="button"
                  aria-expanded={open}
                  onClick={() => setOpen((value) => !value)}
                >
                  {open ? 'Thu gọn' : 'Xem thêm'}
                </button>
                <AnimatePresence initial={false}>
                  {open && (
                    <motion.div
                      className="service__details"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <div className="service__details-inner projects__details-inner">
                        {project.details.map((detail, i) => (
                          <motion.div
                            className="service__detail"
                            key={detail.title}
                            initial={{ y: 18, opacity: 0 }}
                            animate={{
                              y: 0,
                              opacity: 1,
                              transition: {
                                duration: 0.5,
                                delay: 0.2 + i * 0.09,
                                ease: [0.22, 1, 0.36, 1],
                              },
                            }}
                          >
                            <h4>{detail.title}</h4>
                            <p>{detail.text}</p>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          </AnimatePresence>
          <div className="projects__nav">
            <span className="projects__counter">
              {pad(index + 1)} <span>/ {pad(PROJECTS.length)}</span>
            </span>
            <div className="projects__arrows">
              <button
                type="button"
                aria-label="Dự án trước"
                onClick={() => paginate(-1)}
              >
                Trước
              </button>
              <button
                type="button"
                className="projects__next"
                aria-label="Dự án sau"
                onClick={() => paginate(1)}
              >
                Sau <span aria-hidden="true">→</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
