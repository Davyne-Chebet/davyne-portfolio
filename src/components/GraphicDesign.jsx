// src/components/GraphicDesign.jsx
import { GRAPHIC_CARDS } from '../data/portfolioData'

export default function GraphicDesign({ onHover }) {
  return (
    <section className="section graphic-section" id="graphic">
      {/* Intro row */}
      <div className="graphic-intro">
        <div>
          <div className="section-eyebrow reveal">Graphic Design — 04</div>
          <h2 className="section-title reveal">
            Visual work that <em>lives in the world.</em>
          </h2>
        </div>
        <p className="section-lead reveal">
          Beyond screens — I create print-ready and digital graphic work for brands,
          publications, and campaigns. From monthly magazines to marketing posters,
          this is where visual craft meets real-world impact.
        </p>
      </div>

      {/* Cards grid */}
      <div className="graphic-cards">
        {GRAPHIC_CARDS.map((c, i) => (
          <div
            key={c.title}
            className={`graphic-card reveal reveal-d${i + 1}`}
            onMouseEnter={() => onHover(true)}
            onMouseLeave={() => onHover(false)}
          >
            <div className="gc-icon">{c.icon}</div>
            <div className="gc-title">{c.title}</div>
            <p className="gc-body">{c.body}</p>
            <div className="gc-tags">
              {c.tags.map((t) => (
                <span className="gc-tag" key={t}>{t}</span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* CTA strip */}
      <div className="graphic-cta-strip reveal">
        <p className="gc-strip-text">
          Published work includes <strong>VML monthly digital magazines</strong> and{' '}
          <strong>weekly newsletters</strong> at{' '}
          <a
            href="https://vml.dkut.ac.ke/Newsletter/newsletters"
            target="_blank" rel="noreferrer"
            onMouseEnter={() => onHover(true)}
            onMouseLeave={() => onHover(false)}
          >
            vml.dkut.ac.ke/Newsletter ↗
          </a>
        </p>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <a
            href="https://vml.dkut.ac.ke/Newsletter/newsletters"
            target="_blank" rel="noreferrer"
            className="btn-primary"
            onMouseEnter={() => onHover(true)}
            onMouseLeave={() => onHover(false)}
          >
            View Newsletters ↗
          </a>
          <a
            href="https://www.behance.net/davynesang"
            target="_blank" rel="noreferrer"
            className="btn-secondary"
            onMouseEnter={() => onHover(true)}
            onMouseLeave={() => onHover(false)}
          >
            Behance Portfolio
          </a>
        </div>
      </div>
    </section>
  )
}
