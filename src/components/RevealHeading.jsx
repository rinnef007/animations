import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const TEXT = 'Chung tay phát triển tương lai bằng năng lượng sạch và hạ tầng hiện đại'
// Cụm mở đầu "Chung tay" giữ màu xám ở trạng thái cuối, phần còn lại chuyển xanh.
const MUTED_FINAL_COUNT = 2

function Word({ children, progress, range, finalColor }) {
  const color = useTransform(progress, range, ['#d2d5d2', finalColor])
  return (
    <motion.span style={{ color }} className="reveal-heading__word">
      {children}{' '}
    </motion.span>
  )
}

export default function RevealHeading() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.92', 'start 0.38'],
  })

  const words = TEXT.split(' ')
  return (
    <section className="reveal-heading">
      <div className="shell">
        <h2 ref={ref}>
          {words.map((word, i) => {
            const start = i / words.length
            const end = (i + 1) / words.length
            return (
              <Word
                key={`${word}-${i}`}
                progress={scrollYProgress}
                range={[start, end]}
                finalColor={i < MUTED_FINAL_COUNT ? '#b0b4b0' : '#1e4e79'}
              >
                {word}
              </Word>
            )
          })}
        </h2>
      </div>
    </section>
  )
}
