import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ARTICLES, ARTICLE_CATEGORIES } from '../data.js'

function Reader({ article, category, onClose }) {
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
              <p>{section.text}</p>
            </section>
          ))}
        </div>
      </motion.article>
    </motion.div>
  )
}

export default function Articles() {
  const [category, setCategory] = useState('Mới nhất')
  const [reading, setReading] = useState(null)
  const articles = ARTICLES[category]

  return (
    <section className="articles" id="articles">
      <div className="shell">
        <div className="section-head">
          <span className="label">Tin tức & sự kiện</span>
          <a className="see-all" href="#articles">
            Xem tất cả
          </a>
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
                  onClick={() => setCategory(item)}
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
                    viewport={{ once: true, margin: '-8% 0px' }}
                    transition={{
                      duration: 0.8,
                      delay: i * 0.1,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  >
                    <div className="article-card__media">
                      <img src={article.image} alt={article.title} loading="lazy" />
                    </div>
                    <span className="article-card__date">{article.date}</span>
                    <h3>{article.title}</h3>
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
