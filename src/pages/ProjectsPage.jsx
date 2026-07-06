import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import PageTransition from '../components/PageTransition.jsx'
import { PROJECTS } from '../data.js'

const fadeUp = {
  hidden: { y: 36, opacity: 0 },
  show: (delay = 0) => ({
    y: 0,
    opacity: 1,
    transition: { duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] },
  }),
}

export default function ProjectsPage() {
  return (
    <PageTransition title="Dự án">
      <main className="subpage">
        <div className="shell">
          <header className="page-hero">
            <nav className="page-hero__crumb" aria-label="Breadcrumb">
              <Link to="/">Trang chủ</Link>
              <span aria-hidden="true">/</span>
              <span>Dự án</span>
            </nav>
            <motion.h1 variants={fadeUp} initial="hidden" animate="show" custom={0.4}>
              Dự án
            </motion.h1>
            <motion.p variants={fadeUp} initial="hidden" animate="show" custom={0.55}>
              Những công trình và danh mục đầu tư tiêu biểu mà VDF INVEST đang
              triển khai trên khắp cả nước.
            </motion.p>
          </header>

          {PROJECTS.map((project, index) => (
            <div
              className={`service ${index % 2 === 1 ? 'service--reverse' : ''}`}
              key={project.name}
            >
              <div className="service__body">
                <motion.span
                  className="projects__tag"
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, margin: '-12% 0px' }}
                  variants={fadeUp}
                >
                  {project.tag}
                </motion.span>
                <motion.h3
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, margin: '-12% 0px' }}
                  variants={fadeUp}
                  custom={0.1}
                >
                  {project.name}
                </motion.h3>
                <motion.p
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, margin: '-12% 0px' }}
                  variants={fadeUp}
                  custom={0.2}
                >
                  {project.text}
                </motion.p>
                <div className="service__details-inner">
                  {project.details.map((detail, i) => (
                    <motion.div
                      className="service__detail"
                      key={detail.title}
                      initial="hidden"
                      whileInView="show"
                      viewport={{ once: true, margin: '-10% 0px' }}
                      variants={fadeUp}
                      custom={0.25 + i * 0.08}
                    >
                      <h4>{detail.title}</h4>
                      <p>{detail.text}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
              <motion.div
                className="service__media"
                initial={{ opacity: 0, x: index % 2 === 1 ? -48 : 48 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-12% 0px' }}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              >
                <img src={project.image} alt={project.name} loading="lazy" />
              </motion.div>
            </div>
          ))}
        </div>
      </main>
    </PageTransition>
  )
}
