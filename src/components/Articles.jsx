import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { ARTICLES, ARTICLE_CATEGORIES, articleUrl } from '../data.js'

const PAGE_SIZE = 3
const pad = (n) => String(n).padStart(2, '0')
// dd/mm/yyyy -> yyyymmdd để so sánh
const dateKey = (d) => (d || '').split('/').reverse().join('')

// 'Mới nhất' tổng hợp mọi bài viết từ các danh mục, mới nhất trước.
export function collectAllArticles() {
  const seen = new Set()
  const list = []
  for (const cat of ARTICLE_CATEGORIES) {
    for (const article of ARTICLES[cat] ?? []) {
      if (!seen.has(article.slug)) {
        seen.add(article.slug)
        list.push(article)
      }
    }
  }
  return list.sort((a, b) => dateKey(b.date).localeCompare(dateKey(a.date)))
}

export function ArticleCard({ article, delay = 0 }) {
  const url = articleUrl(article)
  return (
    <motion.article
      className="article-card"
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-6% 0px' }}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      <Link
        className="article-card__media article-card__clickable"
        to={url}
        aria-label={`Đọc bài: ${article.title}`}
      >
        <img src={article.image} alt={article.title} loading="lazy" />
      </Link>
      <span className="article-card__date">{article.date}</span>
      <h3 className="article-card__title">
        <Link to={url}>{article.title}</Link>
      </h3>
      <p>{article.excerpt}</p>
      <Link className="article-card__link" to={url}>
        Tìm hiểu thêm
      </Link>
    </motion.article>
  )
}

export default function Articles() {
  const [category, setCategory] = useState('Mới nhất')
  const [page, setPage] = useState(0)

  const allArticles = useMemo(collectAllArticles, [])

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
                  <ArticleCard key={article.slug} article={article} delay={i * 0.1} />
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
    </section>
  )
}
