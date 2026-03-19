// src/components/Experience.jsx
import { EXPERIENCE } from '../data/portfolioData'

export default function Experience({ onHover }) {
  return (
    <section className="section exp-section" id="experience">
      <div className="section-eyebrow reveal">Experience — 05</div>
      <h2 className="section-title reveal">
        Where I've <em>made things.</em>
      </h2>
      <p className="section-lead reveal">
        Real-world design and development work across edtech, civic tech, lifestyle,
        and marketing — since 2024.
      </p>

      <div className="exp-timeline">
        {EXPERIENCE.map((e, i) => (
          <div
            key={e.company + e.dates}
            className={`exp-row reveal reveal-d${Math.min(i, 3) + 1}`}
            onMouseEnter={() => onHover(true)}
            onMouseLeave={() => onHover(false)}
          >
            {/* Left — period */}
            <div className="exp-period">
              <div className="exp-period-badge">{e.badge}</div>
              <div className="exp-dates">{e.dates}</div>
            </div>

            {/* Right — body */}
            <div>
              <div className="exp-title">{e.title}</div>
              <div className="exp-company">{e.company}</div>
              <div className="exp-location">📍 {e.location}</div>
              <ul className="exp-bullets">
                {e.bullets.map((b, j) => (
                  <li key={j}>{b}</li>
                ))}
              </ul>
              {e.links.length > 0 && (
                <div className="exp-links">
                  {e.links.map((l) => (
                    <a
                      key={l.href}
                      href={l.href}
                      target="_blank" rel="noreferrer"
                      className="exp-link"
                      onMouseEnter={() => onHover(true)}
                      onMouseLeave={() => onHover(false)}
                    >
                      {l.label}
                    </a>
                  ))}
                </div>
              )}
              <div className="exp-tags">
                {e.tags.map((t) => (
                  <span className="exp-tag" key={t}>{t}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
