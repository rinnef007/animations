import { useEffect } from 'react'
import { motion } from 'framer-motion'

const EASE = [0.76, 0, 0.24, 1]

/*
 * Bọc mỗi trang với hiệu ứng màn trượt che phủ:
 * - Khi trang cũ thoát: màn (curtain--in) trượt từ dưới lên che kín màn hình.
 * - Khi trang mới xuất hiện: màn (curtain--out) đang che sẵn rồi trượt lên biến mất.
 */
export default function PageTransition({ children }) {
  // Trang mới mount trong lúc màn đang che — đưa scroll về đầu trang.
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      {children}
      <motion.div
        className="curtain"
        initial={{ y: '100%' }}
        animate={{ y: '100%' }}
        exit={{ y: 0 }}
        transition={{ duration: 0.55, ease: EASE }}
      />
      <motion.div
        className="curtain"
        initial={{ y: 0 }}
        animate={{ y: '-100%' }}
        transition={{ duration: 0.65, ease: EASE, delay: 0.1 }}
      >
        <img src="/images/vdf-logo.png" alt="" aria-hidden="true" />
      </motion.div>
    </>
  )
}
