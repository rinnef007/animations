import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import PageTransition from '../components/PageTransition.jsx'
import { Reader } from '../components/Articles.jsx'
import { ARTICLES, ARTICLE_CATEGORIES } from '../data.js'

const fadeUp = {
  hidden: { y: 36, opacity: 0 },
  show: (delay = 0) => ({
    y: 0,
    opacity: 1,
    transition: { duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] },
  }),
}

const dateKey = (d) => (d || '').split('/').reverse().join('')

export default function NewsPage() {
  const [category, setCategory] = useState('Mới nhất')
  const [reading, setReading] = useState(null)

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
                onClick={() => setCategory(item)}
              >
                {item}
              </button>
            ))}
          </motion.div>

          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              className="news-grid"
              key={category}
              initial={{ opacity: 0, y: 24 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
              }}
              exit={{ opacity: 0, y: -16, transition: { duration: 0.3 } }}
            >
              {articles.map((article, i) => (
                <motion.article
                  className="article-card"
                  key={article.title}
                  initial={{ opacity: 0, y: 36 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-6% 0px' }}
                  transition={{
                    duration: 0.8,
                    delay: (i % 2) * 0.1,
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
        </div>
      </main>
      <AnimatePresence>
        {reading && (
          <Reader
            article={reading}
            category={category}
            onClose={() => setReading(null)}
          />
        )}
      </AnimatePresence>
    </PageTransition>
  )
}
