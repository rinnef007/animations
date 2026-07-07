import { Link, useParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import PageTransition from '../components/PageTransition.jsx'
import NotFound from './NotFound.jsx'
import { JOBS, findJobBySlug, jobUrl } from '../data.js'

const fadeUp = {
  hidden: { y: 30, opacity: 0 },
  show: (delay = 0) => ({
    y: 0,
    opacity: 1,
    transition: { duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] },
  }),
}

export default function JobDetailPage() {
  const { slug } = useParams()
  const job = findJobBySlug(slug)

  if (!job) return <NotFound />

  const others = JOBS.filter((item) => item.slug !== slug).slice(0, 3)

  return (
    <PageTransition title={`${job.title} — Tuyển dụng`}>
      <main className="subpage">
        <article className="job-detail">
          <nav className="page-hero__crumb" aria-label="Breadcrumb">
            <Link to="/">Trang chủ</Link>
            <span aria-hidden="true">/</span>
            <Link to="/tuyen-dung">Tuyển dụng</Link>
          </nav>

          <motion.span
            className="job-detail__dept"
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0.35}
          >
            {job.department}
          </motion.span>
          <motion.h1 variants={fadeUp} initial="hidden" animate="show" custom={0.45}>
            {job.title}
          </motion.h1>

          <motion.div
            className="job-detail__facts"
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0.55}
          >
            <div>
              <span className="job-detail__label">Nơi làm việc</span>
              <span className="job-detail__value">{job.location}</span>
            </div>
            <div>
              <span className="job-detail__label">Hình thức</span>
              <span className="job-detail__value">{job.type}</span>
            </div>
            <div>
              <span className="job-detail__label">Số lượng</span>
              <span className="job-detail__value">{job.quantity}</span>
            </div>
            <div>
              <span className="job-detail__label">Mức lương</span>
              <span className="job-detail__value">{job.salary}</span>
            </div>
            <div>
              <span className="job-detail__label">Hạn nộp hồ sơ</span>
              <span className="job-detail__value">{job.deadline}</span>
            </div>
          </motion.div>

          <motion.div
            className="job-detail__body"
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0.65}
          >
            {job.body.map((section) => (
              <section key={section.heading}>
                <h2>{section.heading}</h2>
                <ul>
                  {section.items.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </section>
            ))}
          </motion.div>
        </article>

        {others.length > 0 && (
          <div className="shell job-related">
            <div className="section-head">
              <span className="label">Vị trí khác</span>
              <Link className="see-all" to="/tuyen-dung">
                Xem tất cả
              </Link>
            </div>
            <ul className="job-list job-related__list">
              {others.map((item, i) => (
                <motion.li
                  key={item.slug}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-6% 0px' }}
                  transition={{
                    duration: 0.7,
                    delay: i * 0.08,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  <Link className="job-card" to={jobUrl(item)}>
                    <div className="job-card__main">
                      <span className="job-card__dept">{item.department}</span>
                      <h3>{item.title}</h3>
                      <div className="job-card__meta">
                        <span>{item.location}</span>
                        <span>Hạn nộp: {item.deadline}</span>
                      </div>
                    </div>
                    <span className="job-card__cta">
                      Xem chi tiết <span aria-hidden="true">→</span>
                    </span>
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div>
        )}
      </main>
    </PageTransition>
  )
}
