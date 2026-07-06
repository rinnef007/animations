import { motion } from 'framer-motion'
import { FEATURES } from '../data.js'

const ICONS = {
  energy: (
    <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M13 2 4 14h6l-1 8 9-12h-6l1-8Z" />
    </svg>
  ),
  road: (
    <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 21 9 3" />
      <path d="M20 21 15 3" />
      <path d="M12 7v2" />
      <path d="M12 13v2" />
      <path d="M12 19v2" />
    </svg>
  ),
  building: (
    <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 21V7l6-4v18" />
      <path d="M10 21V11l7 3v7" />
      <path d="M4 21h17" />
      <path d="M7 9h.01M7 13h.01M7 17h.01" />
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
          Chung tay kiến tạo hạ tầng cho tương lai
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
            <span className="dim">
              VDF INVEST được thành lập ngày 05/12/2023 tại Hà Nội.{' '}
            </span>
            <span className="strong">
              Chúng tôi đầu tư và phát triển các dự án năng lượng tái tạo, hạ
              tầng giao thông và xây dựng với tiêu chuẩn chất lượng cao nhất.
            </span>
            <span className="dim">
              {' '}Với đội ngũ giàu kinh nghiệm từ các dự án hạ tầng quốc gia,
              VDF INVEST hướng tới vai trò đối tác chiến lược tin cậy trong sự
              phát triển bền vững của đất nước.
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
