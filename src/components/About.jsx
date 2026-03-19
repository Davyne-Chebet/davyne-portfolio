// src/components/About.jsx
const CARDS = [
  {
    n: '01 — Approach',
    title: 'Research before pixels',
    body: 'Every project starts with understanding users. I map journeys, conduct interviews, and synthesise insights before opening Figma. Design thinking is the process, not just a poster.',
  },
  {
    n: '02 — Strength',
    title: 'I am the handoff.',
    body: 'My CS background means I design components that actually exist in code. No impossible gradients, no magic numbers. When I design it, I can build it — and I often do.',
  },
  {
    n: '03 — Context',
    title: 'Designing for Kenya & beyond',
    body: 'I understand low-bandwidth realities, Android-first usage patterns, and East African market nuances. Inclusive design isn\'t a checkbox — it\'s the brief.',
  },
  {
    n: '04 — Ambition',
    title: 'Safaricom-ready. Always.',
    body: 'Whether it\'s a 5-person startup or a 10,000-person enterprise, I bring the same intentionality, craft, and work ethic to every seat at the table.',
  },
]

export default function About({ onHover }) {
  return (
    <section className="section about-section" id="about">
      <div className="section-eyebrow reveal">About Me — 01</div>
      <h2 className="section-title reveal">
        The designer who <em>ships code.</em>
      </h2>

      <div className="about-grid">
        {/* Left — copy */}
        <div className="about-copy reveal">
          <p>
            I'm a <strong>UI/UX Designer and Frontend Developer</strong> with a BSc in
            Computer Science from Dedan Kimathi University of Technology — which means I
            don't just design for aesthetics. I design with{' '}
            <span className="hl">technical precision</span>, understanding what can be
            built, scaled, and maintained.
          </p>
          <p>
            My background lets me bridge the gap between design and development: I produce
            Figma prototypes that developers can actually implement, and I write React code
            that reflects the design intent.{' '}
            <strong>The handoff problem doesn't exist on my projects.</strong>
          </p>
          <p>
            At VML, I led the design of a live website — from UX research through to Figma
            handoff and collaborative implementation. I also produce monthly digital magazines,
            weekly newsletters, and manage the brand system for Industry 4.0 programs.
          </p>
          <p>
            Freelance work has sharpened my ability to{' '}
            <strong>move fast without cutting corners</strong> — delivering brand identities,
            marketing systems, and UI designs for startups on lean budgets and tight timelines.
          </p>
          <div className="about-links">
            {[
              { href: 'https://www.behance.net/davynesang', label: 'Behance Portfolio ↗' },
              { href: 'https://vml.dkut.ac.ke',             label: 'VML Website ↗'       },
              { href: 'mailto:davynesang@gmail.com',         label: 'davynesang@gmail.com'},
            ].map((l) => (
              <a key={l.href} href={l.href} target="_blank" rel="noreferrer"
                className="about-link"
                onMouseEnter={() => onHover(true)}
                onMouseLeave={() => onHover(false)}>
                {l.label}
              </a>
            ))}
          </div>
          <div className="about-cta-row">
            <a href="#projects" className="btn-primary"
              onMouseEnter={() => onHover(true)}
              onMouseLeave={() => onHover(false)}>
              See My Work
            </a>
            <a href="#contact" className="btn-secondary"
              onMouseEnter={() => onHover(true)}
              onMouseLeave={() => onHover(false)}>
              Download CV →
            </a>
          </div>
        </div>

        {/* Right — value cards */}
        <div className="about-cards reveal reveal-d1">
          {CARDS.map((c) => (
            <div key={c.n} className="about-card"
              onMouseEnter={() => onHover(true)}
              onMouseLeave={() => onHover(false)}>
              <div className="about-card-n">{c.n}</div>
              <div className="about-card-title">{c.title}</div>
              <div className="about-card-body">{c.body}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
