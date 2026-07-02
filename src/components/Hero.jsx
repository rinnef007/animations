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
        src="/images/hero-field.jpg"
        alt="Aerial view of green farmland"
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
          Harvest.
        </motion.h1>
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={0.75}
        >
          Pioneering the future of agriculture by integrating advanced
          technologies and innovative practices. Our mission is to create
          sustainable and efficient farming solutions that ensure a healthy and
          bountiful harvest for generations to come.
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
        <span>Explore more</span>
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
