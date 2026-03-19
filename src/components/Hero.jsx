// src/components/Hero.jsx
export default function Hero({ onHover }) {
  return (
    <section className="hero" id="hero">
      <div className="hero-orb orb-coral" />
      <div className="hero-orb orb-amber" />
      <div className="hero-orb orb-teal"  />
      <div className="hero-grid-lines" />

      <div className="hero-badge">
        <div className="badge-pulse" />
        Available for Internships &amp; Roles · Nyeri / Nairobi, Kenya
      </div>

      <div className="hero-lines">
        <div className="hero-line-wrap">
          <span className="hero-line">Davyne</span>
        </div>
        <div className="hero-line-wrap">
          <span className="hero-line italic">Faith Chebet.</span>
        </div>
        <div className="hero-line-wrap">
          <span className="hero-line outline">Designer + Developer.</span>
        </div>
      </div>

      <div className="hero-footer">
        <p className="hero-tagline">
          I <strong>design and build</strong> intuitive, user-centered digital products —
          from the first research interview to the last{' '}
          <em style={{ fontStyle: 'italic', color: 'var(--coral)' }}>
            deployed line of code.
          </em>
        </p>
        <div className="hero-ctas">
          <a href="#projects" className="btn-primary"
            onMouseEnter={() => onHover(true)}
            onMouseLeave={() => onHover(false)}>
            View Projects
          </a>
          <a href="#contact" className="btn-secondary"
            onMouseEnter={() => onHover(true)}
            onMouseLeave={() => onHover(false)}>
            Let's Talk →
          </a>
        </div>
      </div>

      <div className="hero-stats">
        {[['4+', 'Key Projects'], ['3+', 'Disciplines'], ['2025', 'Active']].map(([n, l]) => (
          <div key={l}>
            <span className="stat-num">{n}</span>
            <span className="stat-label">{l}</span>
          </div>
        ))}
      </div>

      <div className="hero-scroll">
        <div className="scroll-bar" />
        Scroll to explore
      </div>
    </section>
  )
}
