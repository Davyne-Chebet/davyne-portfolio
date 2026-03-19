// src/components/Marquee.jsx
const ITEMS = [
  'UI/UX Design', 'Frontend Development', 'UX Research', 'React.js',
  'Figma', 'Brand Identity', 'Digital Publishing', 'Prototyping',
  'Visual Design', 'Graphic Design', 'Nyeri / Nairobi',
]

export default function Marquee() {
  const doubled = [...ITEMS, ...ITEMS]
  return (
    <div className="marquee">
      <div className="marquee-track">
        {doubled.map((text, i) => (
          <span className="marquee-item" key={i}>
            {text}
            <span className="marquee-dot">✦</span>
          </span>
        ))}
      </div>
    </div>
  )
}
