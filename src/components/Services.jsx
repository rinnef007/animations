import { useState } from 'react'
import { Link } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { SERVICES } from '../data.js'

const fadeUp = {
  hidden: { y: 40, opacity: 0 },
  show: (delay = 0) => ({
    y: 0,
    opacity: 1,
    transition: { duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] },
  }),
}

function ServiceItem({ service }) {
  const [open, setOpen] = useState(false)

  return (
    <div className={`service ${service.reverse ? 'service--reverse' : ''}`}>
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
        <motion.button
          className={`btn-pill service__toggle ${open ? 'is-open' : ''}`}
          type="button"
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-12% 0px' }}
          variants={fadeUp}
          custom={0.3}
        >
          {open ? 'Thu gọn' : 'Xem thêm'}
        </motion.button>
        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              className="service__details"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="service__details-inner">
                {service.details.map((detail, i) => (
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
  )
}

export default function Services() {
  return (
    <section className="services" id="services">
      <div className="shell">
        <div className="section-head">
          <span className="label">Lĩnh vực hoạt động</span>
          <Link className="see-all" to="/linh-vuc">
            Xem tất cả
          </Link>
        </div>
        <div className="services__intro">
          <motion.h2
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-15% 0px' }}
            variants={fadeUp}
          >
            Ba lĩnh vực cốt lõi của VDF INVEST
          </motion.h2>
          <motion.p
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-15% 0px' }}
            variants={fadeUp}
            custom={0.15}
          >
            Từ đầu tư năng lượng tái tạo và hạ tầng giao thông, đến quản lý
            dự án, tư vấn thiết kế, giám sát và thi công xây dựng, cùng hoạt
            động thương mại – dịch vụ, VDF INVEST xây dựng hệ sinh thái toàn
            diện để đồng hành cùng đối tác trong từng công trình và dự án.
          </motion.p>
        </div>
        {SERVICES.map((service) => (
          <ServiceItem key={service.number} service={service} />
        ))}
      </div>
    </section>
  )
}
