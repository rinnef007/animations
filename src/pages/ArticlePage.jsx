import { Link, useParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import PageTransition from '../components/PageTransition.jsx'
import { ArticleCard, collectAllArticles } from '../components/Articles.jsx'
import NotFound from './NotFound.jsx'
import { ARTICLES, findArticleBySlug } from '../data.js'

const fadeUp = {
  hidden: { y: 30, opacity: 0 },
  show: (delay = 0) => ({
    y: 0,
    opacity: 1,
    transition: { duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] },
  }),
}

export default function ArticlePage() {
  const { slug } = useParams()
  const found = findArticleBySlug(slug)

  if (!found) return <NotFound />

  const { article, category } = found
  // Ưu tiên bài cùng danh mục; nếu chưa đủ 2 bài thì bổ sung bài mới nhất
  // từ các danh mục khác cho lưới luôn cân đối.
  const sameCategory = (ARTICLES[category] ?? []).filter(
    (item) => item.slug !== slug,
  )
  const fillers = collectAllArticles().filter(
    (item) =>
      item.slug !== slug && !sameCategory.some((s) => s.slug === item.slug),
  )
  const related = [...sameCategory, ...fillers].slice(0, 2)

  return (
    <PageTransition title={article.title}>
      <main className="subpage">
        <article className="article-detail">
          <nav className="page-hero__crumb" aria-label="Breadcrumb">
            <Link to="/">Trang chủ</Link>
            <span aria-hidden="true">/</span>
            <Link to="/tin-tuc">Tin tức & sự kiện</Link>
          </nav>
          <motion.div
            className="article-detail__meta"
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0.35}
          >
            <span className="article-detail__tag">{category}</span>
            <span className="article-detail__date">{article.date}</span>
          </motion.div>
          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0.45}
          >
            {article.title}
          </motion.h1>
          <motion.img
            className="article-detail__cover"
            src={article.image}
            alt={article.title}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0.55}
          />
          <motion.div
            className="article-detail__body"
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0.68}
          >
            {article.body.map((section, i) => (
              <section key={i}>
                {section.heading && <h3>{section.heading}</h3>}
                {section.text && <p>{section.text}</p>}
                {section.image && (
                  <figure>
                    <img
                      src={section.image}
                      alt={section.caption || ''}
                      loading="lazy"
                    />
                    {section.caption && (
                      <figcaption>{section.caption}</figcaption>
                    )}
                  </figure>
                )}
              </section>
            ))}
          </motion.div>
        </article>

        {related.length > 0 && (
          <div className="shell article-related">
            <div className="section-head">
              <span className="label">Bài viết liên quan</span>
              <Link className="see-all" to="/tin-tuc">
                Xem tất cả
              </Link>
            </div>
            <div className="news-grid article-related__grid">
              {related.map((item, i) => (
                <ArticleCard key={item.slug} article={item} delay={i * 0.1} />
              ))}
            </div>
          </div>
        )}
      </main>
    </PageTransition>
  )
}
