// src/components/Contact.jsx
import { SOCIALS } from '../data/portfolioData'

const CARDS = [
  {
    n: '01 — What I\'m seeking',
    text: (
      <>
        I'm actively looking for <strong>internships, junior roles, and contract
        work</strong> at tech companies, startups, and organisations building
        meaningful digital products — particularly in East Africa and globally.
      </>
    ),
  },
  {
    n: '02 — What you get',
    text: (
      <>
        A designer who reduces developer friction. A developer who elevates
        visual quality. Someone who <strong>moves fast, communicates clearly</strong>,
        and brings both empathy and engineering logic to every project.
      </>
    ),
  },
  {
    n: '03 — Based in',
    text: (
      <>
        <strong>Nyeri, Kenya</strong> — available for on-site roles in Nairobi
        and fully remote work worldwide. I reply to all emails within 24 hours.
      </>
    ),
  },
]

export default function Contact({ onHover }) {
  return (
    <section className="section contact-section" id="contact">
      <div className="contact-watermark">Let's Talk</div>

      <div className="contact-grid">
        {/* Left */}
        <div>
          <div className="section-eyebrow reveal">Get in Touch — 07</div>
          <h2 className="contact-headline reveal">
            Let's build
            <em>something impactful.</em>
          </h2>

          <a
            href="mailto:davynesang@gmail.com"
            className="contact-email reveal"
            onMouseEnter={() => onHover(true)}
            onMouseLeave={() => onHover(false)}
          >
            davynesang@gmail.com →
          </a>

          <div className="contact-socials reveal">
            {SOCIALS.map((s) => (
              <a
                key={s.platform}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className="social-item"
                onMouseEnter={() => onHover(true)}
                onMouseLeave={() => onHover(false)}
              >
                <div className="social-platform">{s.platform}</div>
                <div className="social-val">{s.val}</div>
              </a>
            ))}
          </div>

          <div
            className="reveal"
            style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}
          >
            <a
              href="mailto:davynesang@gmail.com"
              className="btn-primary"
              onMouseEnter={() => onHover(true)}
              onMouseLeave={() => onHover(false)}
            >
              Send Email
            </a>
            <a
              href="https://www.behance.net/davynesang"
              target="_blank"
              rel="noreferrer"
              className="btn-secondary"
              onMouseEnter={() => onHover(true)}
              onMouseLeave={() => onHover(false)}
            >
              View Portfolio →
            </a>
          </div>
        </div>

        {/* Right */}
        <div className="contact-right">
          {CARDS.map((c, i) => (
            <div
              key={c.n}
              className={`contact-card reveal reveal-d${i + 1}`}
            >
              <div className="cc-num">{c.n}</div>
              <p className="cc-text">{c.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
