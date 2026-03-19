// src/components/Skills.jsx
import { SKILLS } from '../data/portfolioData'

export default function Skills({ onHover }) {
  return (
    <section className="section skills-section" id="skills">
      <div className="section-eyebrow reveal">Capabilities — 02</div>
      <h2 className="section-title reveal">
        Four disciplines, <em>one practice.</em>
      </h2>
      <p className="section-lead reveal">
        Designer. Developer. Brand creator. Publisher. These aren't separate
        identities — they're the same integrated skillset applied to every brief.
      </p>

      <div className="skills-grid">
        {SKILLS.map((s, i) => (
          <div
            key={s.label}
            className={`skill-col reveal reveal-d${i + 1}`}
            onMouseEnter={() => onHover(true)}
            onMouseLeave={() => onHover(false)}
          >
            <div className={`skill-col-bar ${s.bar}`} />
            <div className="skill-col-icon">{s.icon}</div>
            <div className="skill-col-label">{s.label}</div>
            <div className="chips">
              {s.chips.map((c) => (
                <span className="chip" key={c}>{c}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
