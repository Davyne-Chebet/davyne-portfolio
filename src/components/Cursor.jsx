// src/components/Cursor.jsx
import { useEffect, useRef } from 'react'

export default function Cursor({ hovering }) {
  const dotRef  = useRef(null)
  const ringRef = useRef(null)
  const pos     = useRef({ mx: 0, my: 0, rx: 0, ry: 0 })
  const raf     = useRef(null)

  useEffect(() => {
    const onMove = (e) => {
      pos.current.mx = e.clientX
      pos.current.my = e.clientY
    }
    document.addEventListener('mousemove', onMove)

    const loop = () => {
      const p = pos.current
      if (dotRef.current) {
        dotRef.current.style.left = p.mx + 'px'
        dotRef.current.style.top  = p.my + 'px'
      }
      p.rx += (p.mx - p.rx) * 0.11
      p.ry += (p.my - p.ry) * 0.11
      if (ringRef.current) {
        ringRef.current.style.left = p.rx + 'px'
        ringRef.current.style.top  = p.ry + 'px'
      }
      raf.current = requestAnimationFrame(loop)
    }
    raf.current = requestAnimationFrame(loop)

    return () => {
      document.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(raf.current)
    }
  }, [])

  return (
    <div className={hovering ? 'cursor-hovering' : ''}>
      <div ref={dotRef}  className="cursor-dot"  />
      <div ref={ringRef} className="cursor-ring" />
    </div>
  )
}
