import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import PageTransition from '../components/PageTransition.jsx'
import { JOBS, jobUrl } from '../data.js'

const fadeUp = {
  hidden: { y: 36, opacity: 0 },
  show: (delay = 0) => ({
    y: 0,
    opacity: 1,
    transition: { duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] },
  }),
}

function PinIcon() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  )
}

function ClockIcon() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </svg>
  )
}

export default function JobsPage() {
  return (
    <PageTransition title="Tuyển dụng">
      <main className="subpage">
        <div className="shell">
          <header className="page-hero">
            <nav className="page-hero__crumb" aria-label="Breadcrumb">
              <Link to="/">Trang chủ</Link>
              <span aria-hidden="true">/</span>
              <span>Tuyển dụng</span>
            </nav>
            <motion.h1 variants={fadeUp} initial="hidden" animate="show" custom={0.4}>
              Tuyển dụng
            </motion.h1>
            <motion.p variants={fadeUp} initial="hidden" animate="show" custom={0.55}>
              Gia nhập VDF INVEST để cùng kiến tạo những công trình hạ tầng và
              dự án năng lượng cho tương lai. Khám phá các vị trí đang tuyển
              dưới đây.
            </motion.p>
          </header>

          <ul className="job-list">
            {JOBS.map((job, i) => (
              <motion.li
                key={job.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-6% 0px' }}
                transition={{
                  duration: 0.7,
                  delay: (i % 3) * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <Link className="job-card" to={jobUrl(job)}>
                  <div className="job-card__main">
                    <span className="job-card__dept">{job.department}</span>
                    <h3>{job.title}</h3>
                    <p>{job.summary}</p>
                    <div className="job-card__meta">
                      <span><PinIcon /> {job.location}</span>
                      <span>{job.type}</span>
                      <span>Số lượng: {job.quantity}</span>
                      <span><ClockIcon /> Hạn nộp: {job.deadline}</span>
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
      </main>
    </PageTransition>
  )
}
