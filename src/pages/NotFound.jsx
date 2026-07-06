import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import PageTransition from '../components/PageTransition.jsx'

const fadeUp = {
  hidden: { y: 36, opacity: 0 },
  show: (delay = 0) => ({
    y: 0,
    opacity: 1,
    transition: { duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] },
  }),
}

export default function NotFound() {
  return (
    <PageTransition title="Không tìm thấy trang">
      <main className="subpage notfound">
        <div className="shell">
          <motion.span
            className="notfound__code"
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0.35}
          >
            404
          </motion.span>
          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0.5}
          >
            Không tìm thấy trang
          </motion.h1>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0.62}
          >
            Đường dẫn bạn truy cập không tồn tại hoặc đã được di chuyển. Hãy
            quay về trang chủ để tiếp tục khám phá VDF INVEST.
          </motion.p>
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0.74}
          >
            <Link className="btn-pill notfound__btn" to="/">
              Về trang chủ
            </Link>
          </motion.div>
        </div>
      </main>
    </PageTransition>
  )
}
