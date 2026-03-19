// src/components/Nav.jsx
import { useState, useEffect } from 'react'
import { NAV_LINKS } from '../data/portfolioData'

export default function Nav({ onHover }) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <nav className={`nav${scrolled ? ' scrolled' : ''}`}>
      <a href="#hero" className="nav-wordmark"
        onMouseEnter={() => onHover(true)}
        onMouseLeave={() => onHover(false)}>
        Davyne <em>Faith</em>
      </a>

      <ul className="nav-links">
        {NAV_LINKS.map((link) => (
          <li key={link.href}>
            <a href={link.href}
              onMouseEnter={() => onHover(true)}
              onMouseLeave={() => onHover(false)}>
              {link.label}
            </a>
          </li>
        ))}
      </ul>

      <a href="#contact" className="nav-hire"
        onMouseEnter={() => onHover(true)}
        onMouseLeave={() => onHover(false)}>
        <span>Hire Me</span>
      </a>
    </nav>
  )
}
