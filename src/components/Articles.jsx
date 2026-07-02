import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ARTICLES, ARTICLE_CATEGORIES } from '../data.js'

export default function Articles() {
  const [category, setCategory] = useState('Technology and Innovation')
  const articles = ARTICLES[category]

  return (
    <section className="articles" id="articles">
      <div className="shell">
        <div className="section-head">
          <span className="label">Articles</span>
          <a className="see-all" href="#articles">
            See all
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
                    <h3>{article.title}</h3>
                    <p>{article.excerpt}</p>
                    <a className="article-card__link" href="#articles">
                      Learn more
                    </a>
                  </motion.article>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}
