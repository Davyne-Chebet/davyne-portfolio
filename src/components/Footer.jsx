// src/components/Footer.jsx
const LINKS = [
  { href: 'https://www.behance.net/davynesang',              label: 'Behance'      },
  { href: 'https://vml.dkut.ac.ke',                         label: 'VML Site'     },
  { href: 'https://vml.dkut.ac.ke/Newsletter/newsletters',  label: 'Newsletters'  },
  { href: 'mailto:davynesang@gmail.com',                     label: 'Email'        },
]

export default function Footer({ onHover }) {
  return (
    <footer className="footer">
      <span className="footer-copy">
        © 2025 Davyne Faith Chebet · Nyeri, Kenya
      </span>
      <div className="footer-links">
        {LINKS.map((l) => (
          <a
            key={l.label}
            href={l.href}
            target={l.href.startsWith('mailto') ? undefined : '_blank'}
            rel="noreferrer"
            onMouseEnter={() => onHover(true)}
            onMouseLeave={() => onHover(false)}
          >
            {l.label}
          </a>
        ))}
      </div>
    </footer>
  )
}
