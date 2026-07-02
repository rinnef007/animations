import { motion } from 'framer-motion'
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
          className="btn-pill"
          type="button"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-12% 0px' }}
          variants={fadeUp}
          custom={0.3}
        >
          Read more
        </motion.button>
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
          <span className="label">Service</span>
          <a className="see-all" href="#services">
            See all
          </a>
        </div>
        <div className="services__intro">
          <motion.h2
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-15% 0px' }}
            variants={fadeUp}
          >
            Advanced Services for Efficient Agriculture
          </motion.h2>
          <motion.p
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-15% 0px' }}
            variants={fadeUp}
            custom={0.15}
          >
            we offer a full suite of agricultural services designed to empower
            farmers with the latest innovations and sustainable practices. From
            precision farming techniques that maximize crop yields to
            eco-friendly solutions that protect our planet, our comprehensive
            services are tailored to meet the unique needs of every farm.
          </motion.p>
        </div>
        {SERVICES.map((service) => (
          <ServiceItem key={service.number} service={service} />
        ))}
      </div>
    </section>
  )
}
