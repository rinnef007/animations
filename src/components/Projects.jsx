import { useRef, useState } from 'react'
import { AnimatePresence, motion, useScroll, useTransform } from 'framer-motion'
import { PROJECTS } from '../data.js'

export default function Projects() {
  const [[index, direction], setIndex] = useState([1, 0])
  const project = PROJECTS[index]

  const bannerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: bannerRef,
    offset: ['start end', 'end start'],
  })
  const parallaxY = useTransform(scrollYProgress, [0, 1], ['-12%', '12%'])

  const paginate = (dir) => {
    setIndex(([current]) => [
      (current + dir + PROJECTS.length) % PROJECTS.length,
      dir,
    ])
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
          <span className="label">Project</span>
          <a className="see-all" href="#project">
            See all
          </a>
        </div>
        <motion.div
          className="projects__banner"
          ref={bannerRef}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-10% 0px' }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.img
            src="/images/panorama.jpg"
            alt="Wide farmland panorama"
            loading="lazy"
            style={{ y: parallaxY }}
          />
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
            >
              <div className="projects__media">
                <img src={project.image} alt={project.name} loading="lazy" />
              </div>
              <div className="projects__body">
                <h3>{project.name}</h3>
                <p>{project.text}</p>
                <button className="btn-pill" type="button">
                  Read more
                </button>
              </div>
            </motion.div>
          </AnimatePresence>
          <div className="projects__nav">
            <button type="button" onClick={() => paginate(-1)}>
              Prev
            </button>
            <button
              type="button"
              className="projects__next"
              onClick={() => paginate(1)}
            >
              Next <span aria-hidden="true">→</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
