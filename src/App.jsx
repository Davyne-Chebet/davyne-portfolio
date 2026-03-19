// src/App.jsx
import { useState } from 'react'
import { useReveal } from './hooks/useReveal'

import Cursor        from './components/Cursor'
import Nav           from './components/Nav'
import Hero          from './components/Hero'
import Marquee       from './components/Marquee'
import About         from './components/About'
import Skills        from './components/Skills'
import Projects      from './components/Projects'
import GraphicDesign from './components/GraphicDesign'
import Experience    from './components/Experience'
import Education     from './components/Education'
import Contact       from './components/Contact'
import Footer        from './components/Footer'

export default function App() {
  const [hovering, setHovering] = useState(false)

  // Trigger scroll-reveal on every render cycle
  useReveal()

  return (
    <>
      <Cursor hovering={hovering} />
      <Nav          onHover={setHovering} />
      <Hero         onHover={setHovering} />
      <Marquee />
      <About        onHover={setHovering} />
      <Skills       onHover={setHovering} />
      <Projects     onHover={setHovering} />
      <GraphicDesign onHover={setHovering} />
      <Experience   onHover={setHovering} />
      <Education    onHover={setHovering} />
      <Contact      onHover={setHovering} />
      <Footer       onHover={setHovering} />
    </>
  )
}
