import { useEffect, useMemo, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import PageTransition from '../components/PageTransition.jsx'
import { ArticleCard, collectAllArticles } from '../components/Articles.jsx'
import { ARTICLES, ARTICLE_CATEGORIES } from '../data.js'

const fadeUp = {
  hidden: { y: 36, opacity: 0 },
  show: (delay = 0) => ({
    y: 0,
    opacity: 1,
    transition: { duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] },
  }),
}

const pad = (n) => String(n).padStart(2, '0')

// Số bài mỗi trang theo loại màn hình:
// mobile (≤900px, lưới 1 cột): 3 — tablet (≤1199px): 4 — desktop: 6.
const getPageSize = () =>
  window.innerWidth <= 900 ? 3 : window.innerWidth <= 1199 ? 4 : 6

function usePageSize() {
  const [size, setSize] = useState(getPageSize)
  useEffect(() => {
    const onResize = () => setSize(getPageSize())
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])
  return size
}

export default function NewsPage() {
  const [category, setCategory] = useState('Mới nhất')
  const [page, setPage] = useState(0)
  const pageSize = usePageSize()
  const gridTopRef = useRef(null)

  const allArticles = useMemo(collectAllArticles, [])
  const articles = category === 'Mới nhất' ? allArticles : ARTICLES[category]

  const totalPages = Math.max(1, Math.ceil(articles.length / pageSize))
  // Đổi cỡ màn hình có thể làm trang hiện tại vượt quá tổng số trang.
  const safePage = Math.min(page, totalPages - 1)
  const visible = articles.slice(safePage * pageSize, (safePage + 1) * pageSize)

  const goPage = (dir) => {
    setPage((safePage + dir + totalPages) % totalPages)
    // Đưa người xem về đầu danh sách khi sang trang mới.
    if (gridTopRef.current) {
      const lenis = window.__lenis
      if (lenis) lenis.scrollTo(gridTopRef.current, { offset: -110 })
      else gridTopRef.current.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <PageTransition title="Tin tức & sự kiện">
      <main className="subpage">
        <div className="shell">
          <header className="page-hero">
            <nav className="page-hero__crumb" aria-label="Breadcrumb">
              <Link to="/">Trang chủ</Link>
              <span aria-hidden="true">/</span>
              <span>Tin tức & sự kiện</span>
            </nav>
            <motion.h1 variants={fadeUp} initial="hidden" animate="show" custom={0.4}>
              Tin tức & sự kiện
            </motion.h1>
            <motion.p variants={fadeUp} initial="hidden" animate="show" custom={0.55}>
              Cập nhật dự án, xu hướng năng lượng xanh và hoạt động của VDF
              INVEST.
            </motion.p>
          </header>

          <motion.div
            className="news-tabs"
            ref={gridTopRef}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0.65}
          >
            {ARTICLE_CATEGORIES.map((item) => (
              <button
                key={item}
                type="button"
                className={item === category ? 'is-active' : ''}
                onClick={() => {
                  setCategory(item)
                  setPage(0)
                }}
              >
                {item}
              </button>
            ))}
          </motion.div>

          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              className="news-grid"
              key={`${category}-${safePage}-${pageSize}`}
              initial={{ opacity: 0, y: 24 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
              }}
              exit={{ opacity: 0, y: -16, transition: { duration: 0.3 } }}
            >
              {visible.map((article, i) => (
                <ArticleCard
                  key={article.slug}
                  article={article}
                  delay={(i % 2) * 0.1}
                />
              ))}
            </motion.div>
          </AnimatePresence>

          {totalPages > 1 && (
            <div className="articles__nav news-page__nav">
              <span className="articles__counter">
                {pad(safePage + 1)} <span>/ {pad(totalPages)}</span>
              </span>
              <div className="articles__arrows">
                <button
                  type="button"
                  aria-label="Trang trước"
                  onClick={() => goPage(-1)}
                >
                  Trước
                </button>
                <button
                  type="button"
                  className="articles__next"
                  aria-label="Trang sau"
                  onClick={() => goPage(1)}
                >
                  Sau <span aria-hidden="true">→</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </main>
    </PageTransition>
  )
}
