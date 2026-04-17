import React from 'react'
import Background3D from './components/Background3D'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import AboutMe from './components/AboutMe'
import Skills from './components/Skills'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {
  return (
    <>
      <Background3D />
      <div style={{ position: 'relative', zIndex: 1 }}>
        <Navigation />
        <main>
          <Hero />
          <AboutMe />
          <Skills />
          <Projects />
          <About />
          <Contact />
        </main>
        
        <footer style={{
          borderTop: '1px solid var(--primary)',
          padding: '2rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem',
          background: 'var(--bg-deep)'
        }}>
          <div>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem', marginTop: '0.5rem', fontFamily: 'var(--font-heading)' }}>© 2024 Lokeshwaran V. All Rights Reserved.</p>
          </div>
          <div style={{ display: 'flex', gap: '2rem' }}>
            <a href="https://www.linkedin.com/in/lokesh-waran-v-0934412a4?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--primary)', textDecoration: 'none', fontSize: '0.875rem', textTransform: 'uppercase', letterSpacing: '1px', fontFamily: 'var(--font-heading)' }}>LINKEDIN</a>
            <a href="https://github.com/llokeshwaran008-sys" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--primary)', textDecoration: 'none', fontSize: '0.875rem', textTransform: 'uppercase', letterSpacing: '1px', fontFamily: 'var(--font-heading)' }}>GITHUB</a>
          </div>
        </footer>
      </div>
    </>
  )
}

export default App
