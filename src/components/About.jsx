import { motion } from 'framer-motion'
import { FEATURES } from '../data.js'

const ICONS = {
  sprout: (
    <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 20v-8" />
      <path d="M12 12c0-3.5-2.5-6-6-6 0 3.5 2.5 6 6 6Z" />
      <path d="M12 10c0-3 2.2-5 5.5-5 0 3-2.2 5-5.5 5Z" />
      <path d="M5 20h14" />
    </svg>
  ),
  leaf: (
    <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 18C6 10 12 5 20 4c1 8-4 14-12 14h-2Z" />
      <path d="M4 20c2-4 6-8 11-10" />
    </svg>
  ),
  brain: (
    <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9.5 4A2.5 2.5 0 0 0 7 6.5v.6A3 3 0 0 0 5 10a3 3 0 0 0 .3 4.3A2.8 2.8 0 0 0 8 19h1.5a2 2 0 0 0 2-2V6.5A2.5 2.5 0 0 0 9.5 4Z" />
      <path d="M14.5 4A2.5 2.5 0 0 1 17 6.5v.6a3 3 0 0 1 2 2.9 3 3 0 0 1-.3 4.3A2.8 2.8 0 0 1 16 19h-1.5a2 2 0 0 1-2-2V6.5A2.5 2.5 0 0 1 14.5 4Z" />
    </svg>
  ),
}

const fadeUp = {
  hidden: { y: 36, opacity: 0 },
  show: (delay = 0) => ({
    y: 0,
    opacity: 1,
    transition: { duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] },
  }),
}

export default function About() {
  return (
    <section className="about" id="about">
      <div className="shell about__grid">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-15% 0px' }}
        >
          Đổi mới tương lai của ngành nông nghiệp
        </motion.h2>
        <div>
          <motion.p
            className="about__text"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-15% 0px' }}
            custom={0.15}
          >
            <span className="dim">VDF, nơi truyền thống gặp gỡ đổi mới. </span>
            <span className="strong">
              Chúng tôi tận tâm cách mạng hóa ngành nông nghiệp thông qua các
              phương pháp canh tác bền vững và những tiến bộ công nghệ mới
              nhất.
            </span>
            <span className="dim">
              {' '}Cam kết của chúng tôi là trao cho người nông dân công cụ và
              kiến thức cần thiết để vun đắp một tương lai thịnh vượng.
            </span>
          </motion.p>
          <div className="about__cards">
            {FEATURES.map((feature, i) => (
              <motion.div
                className="feature-card"
                key={feature.icon}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: '-12% 0px' }}
                custom={0.25 + i * 0.15}
              >
                <span className="feature-card__icon">{ICONS[feature.icon]}</span>
                <p>{feature.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
