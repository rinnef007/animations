import { useEffect, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { ARTICLES, ARTICLE_CATEGORIES } from '../data.js'

const PAGE_SIZE = 3
const pad = (n) => String(n).padStart(2, '0')
// dd/mm/yyyy -> yyyymmdd để so sánh
const dateKey = (d) => (d || '').split('/').reverse().join('')

export function Reader({ article, category, onClose }) {
  useEffect(() => {
    const onKey = (event) => {
      if (event.key === 'Escape') onClose()
    }
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [onClose])

  return (
    <motion.div
      className="reader"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.35 }}
      onClick={onClose}
    >
      <motion.article
        className="reader__panel"
        data-lenis-prevent
        initial={{ y: 64, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 40, opacity: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          className="reader__close"
          aria-label="Đóng bài viết"
          onClick={onClose}
        >
          ✕
        </button>
        <img className="reader__cover" src={article.image} alt={article.title} />
        <div className="reader__content">
          <div className="reader__meta">
            <span className="reader__tag">{category}</span>
            <span className="reader__date">{article.date}</span>
          </div>
          <h2>{article.title}</h2>
          {article.body.map((section, i) => (
            <section key={i}>
              {section.heading && <h3>{section.heading}</h3>}
              {section.text && <p>{section.text}</p>}
              {section.image && (
                <figure>
                  <img src={section.image} alt={section.caption || ''} loading="lazy" />
                  {section.caption && <figcaption>{section.caption}</figcaption>}
                </figure>
              )}
            </section>
          ))}
        </div>
      </motion.article>
    </motion.div>
  )
}

export default function Articles() {
  const [category, setCategory] = useState('Mới nhất')
  const [page, setPage] = useState(0)
  const [reading, setReading] = useState(null)

  // 'Mới nhất' tổng hợp mọi bài viết từ các danh mục, mới nhất trước.
  const allArticles = useMemo(() => {
    const seen = new Set()
    const list = []
    for (const cat of ARTICLE_CATEGORIES) {
      for (const article of ARTICLES[cat] ?? []) {
        if (!seen.has(article.title)) {
          seen.add(article.title)
          list.push(article)
        }
      }
    }
    return list.sort((a, b) => dateKey(b.date).localeCompare(dateKey(a.date)))
  }, [])

  const articles = category === 'Mới nhất' ? allArticles : ARTICLES[category]
  const totalPages = Math.ceil(articles.length / PAGE_SIZE)
  const visible = articles.slice(page * PAGE_SIZE, (page + 1) * PAGE_SIZE)

  const goPage = (dir) => {
    setPage((current) => (current + dir + totalPages) % totalPages)
  }

  return (
    <section className="articles" id="articles">
      <div className="shell">
        <div className="section-head">
          <span className="label">Tin tức & sự kiện</span>
          <Link className="see-all" to="/tin-tuc">
            Xem tất cả
          </Link>
        </div>
        <div className="articles__grid">
          <motion.ul
            className="articles__categories"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-12% 0px' }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            {ARTICLE_CATEGORIES.map((item) => (
              <li key={item}>
                <button
                  type="button"
                  className={item === category ? 'is-active' : ''}
                  onClick={() => {
                    setCategory(item)
                    setPage(0)
                  }}
                >
                  <span className="dot" aria-hidden="true" />
                  {item}
                </button>
              </li>
            ))}
          </motion.ul>
          <div className="articles__list">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={`${category}-${page}`}
                initial={{ opacity: 0, y: 24 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
                }}
                exit={{ opacity: 0, y: -16, transition: { duration: 0.3 } }}
              >
                {visible.map((article, i) => (
                  <motion.article
                    className="article-card"
                    key={article.title}
                    initial={{ opacity: 0, y: 36 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-8% 0px' }}
                    transition={{
                      duration: 0.8,
                      delay: i * 0.1,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  >
                    <div
                      className="article-card__media article-card__clickable"
                      role="button"
                      tabIndex={0}
                      aria-label={`Đọc bài: ${article.title}`}
                      onClick={() => setReading(article)}
                      onKeyDown={(event) => {
                        if (event.key === 'Enter' || event.key === ' ') {
                          event.preventDefault()
                          setReading(article)
                        }
                      }}
                    >
                      <img src={article.image} alt={article.title} loading="lazy" />
                    </div>
                    <span className="article-card__date">{article.date}</span>
                    <h3
                      className="article-card__clickable article-card__title"
                      onClick={() => setReading(article)}
                    >
                      {article.title}
                    </h3>
                    <p>{article.excerpt}</p>
                    <button
                      type="button"
                      className="article-card__link"
                      onClick={() => setReading(article)}
                    >
                      Tìm hiểu thêm
                    </button>
                  </motion.article>
                ))}
              </motion.div>
            </AnimatePresence>
            {totalPages > 1 && (
              <div className="articles__nav">
                <span className="articles__counter">
                  {pad(page + 1)} <span>/ {pad(totalPages)}</span>
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
        </div>
      </div>
      <AnimatePresence>
        {reading && (
          <Reader
            article={reading}
            category={category}
            onClose={() => setReading(null)}
          />
        )}
      </AnimatePresence>
    </section>
  )
}
