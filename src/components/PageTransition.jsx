import { useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'

const EASE = [0.76, 0, 0.24, 1]

/*
 * Bọc mỗi trang với hiệu ứng màn trượt che phủ:
 * - Khi trang cũ thoát: màn (curtain vào) trượt từ dưới lên che kín màn hình.
 * - Khi trang mới xuất hiện: màn (curtain ra) đang che sẵn rồi trượt lên biến mất.
 * Đồng thời xử lý cuộn: về đầu trang, hoặc cuộn tới mục neo (#...) nếu có.
 */
export default function PageTransition({ children }) {
  const location = useLocation()
  // Hash lúc mount đã được xử lý bằng timer bên dưới (kèm chống chạy lặp
  // của StrictMode) — chỉ cuộn ngay khi hash thay đổi sau đó.
  const handledHash = useRef(location.hash)

  const scrollToHash = () => {
    if (!location.hash || !document.querySelector(location.hash)) return
    const lenis = window.__lenis
    if (lenis) lenis.scrollTo(location.hash)
    else document.querySelector(location.hash).scrollIntoView({ behavior: 'smooth' })
  }

  // Trang mới mount trong lúc màn đang che — về đầu trang, rồi cuộn tới
  // mục neo (nếu có) ngay khi màn trượt mở ra.
  useEffect(() => {
    window.__lenis?.scrollTo(0, { immediate: true })
    window.scrollTo(0, 0)
    if (!location.hash) return
    const timer = setTimeout(scrollToHash, 800)
    return () => clearTimeout(timer)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // Đổi mục neo khi vẫn ở cùng trang (không có màn che) — cuộn mượt ngay.
  useEffect(() => {
    if (location.hash === handledHash.current) return
    handledHash.current = location.hash
    scrollToHash()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.hash])

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
