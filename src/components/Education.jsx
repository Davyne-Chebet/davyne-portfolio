// src/components/Education.jsx
export default function Education({ onHover }) {
  return (
    <section className="section edu-section" id="education">
      <div className="section-eyebrow reveal">Background — 06</div>
      <h2 className="section-title reveal">
        Education &amp; <em>community.</em>
      </h2>

      <div className="edu-grid">
        {/* Education */}
        <div className="reveal">
          <div className="ev-block-title">Education</div>
          <div
            className="ev-item"
            onMouseEnter={() => onHover(true)}
            onMouseLeave={() => onHover(false)}
          >
            <div className="ev-degree">Bachelor of Science in Computer Science</div>
            <div className="ev-school">
              Dedan Kimathi University of Technology · Nyeri, Kenya
            </div>
            <div className="ev-detail">
              Strong foundation in software engineering and human-computer interaction —
              enabling me to bridge design and development fluently.
            </div>
          </div>
          <div
            className="ev-item"
            onMouseEnter={() => onHover(true)}
            onMouseLeave={() => onHover(false)}
          >
            <div className="ev-degree">Kenya Certificate of Secondary Education (KCSE)</div>
            <div className="ev-school">Pangani Girls High School · Nairobi, Kenya</div>
          </div>
        </div>

        {/* Volunteer & Interests */}
        <div className="reveal reveal-d1">
          <div className="ev-block-title">Volunteer Work</div>
          <div
            className="ev-item"
            onMouseEnter={() => onHover(true)}
            onMouseLeave={() => onHover(false)}
          >
            <div className="ev-degree">Graphic Design Volunteer</div>
            <div className="ev-school">
              Royal Technologies · Nairobi · Jan 2024 – Aug 2024
            </div>
            <div className="ev-detail">
              Designed posters, social media graphics, and promotional content for
              technology products. Supported marketing campaigns with visually consistent,
              brand-aligned designs for laptops and accessories.
            </div>
          </div>

          <div className="interests-note">
            <em>Professional Interests:</em> User-centered product design · Emerging UX
            trends · Digital publishing · Front-end development · Visual storytelling
          </div>
        </div>
      </div>
    </section>
  )
}
