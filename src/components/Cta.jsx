import { motion } from 'framer-motion'

const fadeUp = {
  hidden: { y: 32, opacity: 0 },
  show: (delay = 0) => ({
    y: 0,
    opacity: 1,
    transition: { duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] },
  }),
}

export default function Cta() {
  return (
    <section className="cta" id="contact">
      <img
        className="cta__bg"
        src="/images/city.jpg"
        alt=""
        loading="lazy"
        aria-hidden="true"
      />
      <div className="cta__tint" />
      <div className="cta__content">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-15% 0px' }}
        >
          Chung tay phát triển tương lai cùng VDF INVEST.
        </motion.h2>
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-15% 0px' }}
          custom={0.15}
        >
          Đăng ký nhận bản tin để cập nhật dự án, xu hướng năng lượng xanh và
          cơ hội hợp tác mới nhất từ chúng tôi!
        </motion.p>
        <motion.form
          className="cta__form"
          onSubmit={(e) => e.preventDefault()}
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-15% 0px' }}
          custom={0.3}
        >
          <input
            type="email"
            placeholder="Email của bạn"
            aria-label="Email của bạn"
            required
          />
          <motion.button
            type="submit"
            initial={{ scale: 0.6, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true, margin: '-15% 0px' }}
            transition={{
              duration: 0.6,
              delay: 0.55,
              ease: [0.34, 1.56, 0.64, 1],
            }}
          >
            Đăng ký ngay
          </motion.button>
        </motion.form>
      </div>
    </section>
  )
}
