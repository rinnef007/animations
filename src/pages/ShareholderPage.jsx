import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import PageTransition from '../components/PageTransition.jsx'
import { SHAREHOLDER_SECTIONS } from '../data.js'

const fadeUp = {
  hidden: { y: 36, opacity: 0 },
  show: (delay = 0) => ({
    y: 0,
    opacity: 1,
    transition: { duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] },
  }),
}

function FileIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="22"
      height="22"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M14 2H7a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7Z" />
      <path d="M14 2v5h5" />
      <path d="M9 13h6M9 17h6" />
    </svg>
  )
}

// Trình xem tài liệu: PDF hiển thị trong overlay, kèm tải xuống / mở tab mới.
function DocViewer({ doc, onClose }) {
  const closeRef = useRef(null)

  useEffect(() => {
    const onKey = (event) => {
      if (event.key === 'Escape') onClose()
    }
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    // iframe PDF sẽ chiếm focus khiến phím ESC không tới được window —
    // đưa focus về nút Đóng ngay khi mở.
    closeRef.current?.focus()
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [onClose])

  const hasFile = doc.href && doc.href !== '#'

  return (
    <motion.div
      className="doc-viewer"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      onClick={onClose}
    >
      <motion.div
        className="doc-viewer__panel"
        data-lenis-prevent
        initial={{ y: 48, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 32, opacity: 0 }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        onClick={(event) => event.stopPropagation()}
      >
        <header className="doc-viewer__head">
          <div className="doc-viewer__info">
            <span className="doc-viewer__icon">
              <FileIcon />
            </span>
            <div>
              <h3>{doc.title}</h3>
              <span>Ngày ban hành: {doc.date}</span>
            </div>
          </div>
          <div className="doc-viewer__actions">
            {hasFile && (
              <>
                <a className="doc-viewer__btn" href={doc.href} download>
                  Tải xuống
                </a>
                <a
                  className="doc-viewer__btn"
                  href={doc.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  Mở tab mới
                </a>
              </>
            )}
            <button
              type="button"
              ref={closeRef}
              className="doc-viewer__close"
              aria-label="Đóng"
              onClick={onClose}
            >
              ✕
            </button>
          </div>
        </header>
        {hasFile ? (
          <iframe
            className="doc-viewer__frame"
            src={`${doc.href}#toolbar=0&navpanes=0`}
            title={doc.title}
          />
        ) : (
          <div className="doc-viewer__empty">
            Tài liệu đang được cập nhật. Vui lòng quay lại sau.
          </div>
        )}
      </motion.div>
    </motion.div>
  )
}

export default function ShareholderPage() {
  const [active, setActive] = useState(SHAREHOLDER_SECTIONS[0].title)
  const [viewing, setViewing] = useState(null)
  const section = SHAREHOLDER_SECTIONS.find((item) => item.title === active)

  return (
    <PageTransition title="Quan hệ cổ đông">
      <main className="subpage">
        <div className="shell">
          <header className="page-hero">
            <nav className="page-hero__crumb" aria-label="Breadcrumb">
              <Link to="/">Trang chủ</Link>
              <span aria-hidden="true">/</span>
              <span>Quan hệ cổ đông</span>
            </nav>
            <motion.h1 variants={fadeUp} initial="hidden" animate="show" custom={0.4}>
              Quan hệ cổ đông
            </motion.h1>
            <motion.p variants={fadeUp} initial="hidden" animate="show" custom={0.55}>
              Báo cáo, công bố thông tin và tài liệu quản trị của Công ty Cổ
              phần Đầu tư và Phát triển VDF dành cho cổ đông và nhà đầu tư.
            </motion.p>
          </header>

          <motion.div
            className="news-tabs"
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0.65}
          >
            {SHAREHOLDER_SECTIONS.map((item) => (
              <button
                key={item.title}
                type="button"
                className={item.title === active ? 'is-active' : ''}
                onClick={() => setActive(item.title)}
              >
                {item.title}
              </button>
            ))}
          </motion.div>

          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 24 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
              }}
              exit={{ opacity: 0, y: -16, transition: { duration: 0.3 } }}
            >
              {section.groups.map((group, gi) => (
                <motion.section
                  className="doc-group"
                  key={group.name}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-6% 0px' }}
                  transition={{
                    duration: 0.7,
                    delay: gi * 0.08,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  <div className="doc-group__head">
                    <h3>{group.name}</h3>
                    <span className="doc-group__count">
                      {group.documents.length} tài liệu
                    </span>
                  </div>
                  <ul className="doc-list">
                    {group.documents.map((doc) => (
                      <li key={doc.title}>
                        <button
                          type="button"
                          className="doc-row"
                          onClick={() => setViewing(doc)}
                        >
                          <span className="doc-row__icon">
                            <FileIcon />
                          </span>
                          <span className="doc-row__title">{doc.title}</span>
                          <span className="doc-row__date">{doc.date}</span>
                          <span className="doc-row__action">
                            Xem tài liệu <span aria-hidden="true">→</span>
                          </span>
                        </button>
                      </li>
                    ))}
                  </ul>
                </motion.section>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </main>
      <AnimatePresence>
        {viewing && <DocViewer doc={viewing} onClose={() => setViewing(null)} />}
      </AnimatePresence>
    </PageTransition>
  )
}
