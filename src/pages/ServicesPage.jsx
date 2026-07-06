import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import PageTransition from '../components/PageTransition.jsx'
import { SERVICES } from '../data.js'

const fadeUp = {
  hidden: { y: 36, opacity: 0 },
  show: (delay = 0) => ({
    y: 0,
    opacity: 1,
    transition: { duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] },
  }),
}

export default function ServicesPage() {
  return (
    <PageTransition title="Lĩnh vực hoạt động">
      <main className="subpage">
        <div className="shell">
          <header className="page-hero">
            <nav className="page-hero__crumb" aria-label="Breadcrumb">
              <Link to="/">Trang chủ</Link>
              <span aria-hidden="true">/</span>
              <span>Lĩnh vực hoạt động</span>
            </nav>
            <motion.h1 variants={fadeUp} initial="hidden" animate="show" custom={0.4}>
              Lĩnh vực hoạt động
            </motion.h1>
            <motion.p variants={fadeUp} initial="hidden" animate="show" custom={0.55}>
              Ba trụ cột tạo nên hệ sinh thái toàn diện của VDF INVEST — từ
              đầu tư năng lượng và hạ tầng đến xây dựng và thương mại dịch vụ.
            </motion.p>
          </header>

          {SERVICES.map((service) => (
            <div
              className={`service ${service.reverse ? 'service--reverse' : ''}`}
              id={service.id}
              key={service.number}
            >
              <div className="service__body">
                <motion.div
                  className="service__number"
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, margin: '-12% 0px' }}
                  variants={fadeUp}
                >
                  <span>{service.number}</span>
                  <motion.span
                    className="service__rule"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true, margin: '-12% 0px' }}
                    transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
                  />
                </motion.div>
                <motion.h3
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, margin: '-12% 0px' }}
                  variants={fadeUp}
                  custom={0.1}
                >
                  {service.title}
                </motion.h3>
                <motion.p
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, margin: '-12% 0px' }}
                  variants={fadeUp}
                  custom={0.2}
                >
                  {service.text}
                </motion.p>
                <div className="service__details-inner">
                  {service.details.map((detail, i) => (
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
                initial={{ opacity: 0, x: service.reverse ? -48 : 48 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-12% 0px' }}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              >
                <img src={service.image} alt={service.title} loading="lazy" />
              </motion.div>
            </div>
          ))}
        </div>
      </main>
    </PageTransition>
  )
}
