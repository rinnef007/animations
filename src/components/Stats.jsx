import { useEffect, useRef } from 'react'
import {
  motion,
  useInView,
  useMotionValue,
  useTransform,
  animate,
} from 'framer-motion'
import { STATS } from '../data.js'

function CountUp({ value, prefix = '', suffix = '' }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-15% 0px' })
  const motionValue = useMotionValue(0)
  const rounded = useTransform(motionValue, (v) => Math.round(v))

  useEffect(() => {
    if (!inView) return
    const controls = animate(motionValue, value, {
      duration: 1.6,
      ease: [0.22, 1, 0.36, 1],
    })
    return controls.stop
  }, [inView, motionValue, value])

  return (
    <span ref={ref} className="stat__value">
      {prefix}
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  )
}

export default function Stats() {
  return (
    <section className="stats">
      <div className="shell stats__grid">
        {STATS.map((stat, i) => (
          <motion.div
            className="stat"
            key={stat.label}
            initial={{ y: 34, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, margin: '-10% 0px' }}
            transition={{
              duration: 0.8,
              delay: i * 0.12,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <CountUp
              value={stat.value}
              prefix={stat.prefix}
              suffix={stat.suffix}
            />
            <span className="stat__label">{stat.label}</span>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
