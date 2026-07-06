import { motion } from 'framer-motion'

const fadeUp = {
  hidden: { y: 28, opacity: 0 },
  show: (delay) => ({
    y: 0,
    opacity: 1,
    transition: { duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] },
  }),
}

export default function Hero() {
  return (
    <section className="hero" id="home">
      <motion.img
        className="hero__bg"
        src="/images/hero-infra.jpg"
        alt="Nút giao cao tốc nhìn từ trên cao"
        initial={{ scale: 1.12 }}
        animate={{ scale: 1 }}
        transition={{ duration: 3, ease: [0.22, 1, 0.36, 1] }}
      />
      <div className="hero__tint" />
      <div className="hero__content">
        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={0.5}
        >
          VDF.
        </motion.h1>
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={0.75}
        >
          Công ty Cổ phần Đầu tư và Phát triển VDF — chung tay phát triển
          tương lai qua các dự án năng lượng tái tạo, hạ tầng giao thông và
          phát triển đô thị bền vững, đồng hành cùng sự vươn mình của đất
          nước.
        </motion.p>
      </div>
      <motion.a
        className="hero__explore"
        href="#about"
        initial={{ y: 28, opacity: 0, x: '-50%' }}
        animate={{
          y: 0,
          opacity: 1,
          x: '-50%',
          transition: { duration: 0.9, delay: 1.05, ease: [0.22, 1, 0.36, 1] },
        }}
      >
        <span>Khám phá thêm</span>
        <span className="hero__mouse" aria-hidden="true">
          <motion.span
            className="hero__mouse-dot"
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
          />
        </span>
      </motion.a>
    </section>
  )
}
