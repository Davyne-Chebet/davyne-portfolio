// src/components/Projects.jsx
import { PROJECTS } from '../data/portfolioData'

export default function Projects({ onHover }) {
  return (
    <section className="section projects-section" id="projects">
      {/* Header */}
      <div className="projects-header reveal">
        <div>
          <div className="section-eyebrow" style={{ marginBottom: '1rem' }}>
            Featured Work — 03
          </div>
          <h2 className="section-title" style={{ marginBottom: 0 }}>
            Four projects. <em>Full thinking.</em>
          </h2>
        </div>
        <div className="projects-header-right">
          <div className="projects-sub">All design work on Behance</div>
          <a
            href="https://www.behance.net/davynesang"
            target="_blank" rel="noreferrer"
            className="behance-link"
            onMouseEnter={() => onHover(true)}
            onMouseLeave={() => onHover(false)}
          >
            behance.net/davynesang ↗
          </a>
        </div>
      </div>

      {/* Cards */}
      {PROJECTS.map((p) => (
        <div
          key={p.id}
          className={`project-card reveal${p.reverse ? ' reverse' : ''}`}
          onMouseEnter={() => onHover(true)}
          onMouseLeave={() => onHover(false)}
        >
          {/* Visual panel */}
          <div className="project-visual">
            <div className={`project-visual-inner ${p.visual}`}>
              <div className="pv-bg-word">{p.bgWord}</div>
              <div className="pv-badge">{p.badge}</div>
              <div className="pv-number" style={{ color: p.numColor }}>
                {p.num}.
              </div>
              {p.live && <div className="pv-live">Live Site</div>}
            </div>
          </div>

          {/* Info panel */}
          <div className="project-info">
            <div>
              <div className="pi-meta">
                <span className="pi-num">Project {p.num}</span>
                <span className="pi-type">{p.type}</span>
              </div>
              <h3 className="pi-title">
                {p.title} <em>{p.titleItalic}</em>
              </h3>
              <div className="pi-role">{p.role}</div>
              <p className="pi-desc">{p.desc}</p>

              {/* Case study grid */}
              <div className="pi-case">
                {p.caseStudy.map((c) => (
                  <div className="pi-case-cell" key={c.label}>
                    <div className="pi-cell-label">{c.label}</div>
                    <div className="pi-cell-val">{c.val}</div>
                  </div>
                ))}
              </div>

              {/* Tags */}
              <div className="pi-tags">
                {p.tags.map((t) => (
                  <span className="pi-tag" key={t}>{t}</span>
                ))}
              </div>
            </div>

            {/* Links */}
            <div className="pi-links">
              {p.links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  target="_blank" rel="noreferrer"
                  className={l.cls}
                >
                  {l.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      ))}
    </section>
  )
}
