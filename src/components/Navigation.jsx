import { useState, useEffect } from 'react';

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
      <nav style={{
        position: 'fixed',
        top: 0,
        width: '100%',
        zIndex: 50,
        height: '5rem',
        transition: 'all 0.3s ease',
        background: scrolled ? 'rgba(0, 15, 30, 0.9)' : 'transparent',
        backdropFilter: scrolled ? 'blur(10px)' : 'none',
        borderBottom: scrolled ? '1px solid var(--primary)' : 'none',
        boxShadow: scrolled ? '0 5px 20px rgba(0, 243, 255, 0.1)' : 'none',
      }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 2rem', height: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span style={{ fontSize: '1.25rem', fontWeight: 700, letterSpacing: '-1px', color: 'var(--primary)', fontFamily: 'var(--font-heading)' }}>
          LOKESHWARAN V
        </span>

        {/* Desktop Nav */}
        <div style={{ display: 'none', gap: '2rem', alignItems: 'center', fontFamily: 'var(--font-heading)', textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.75rem' }} className="md-flex">
          <a href="#about-me" style={{ color: '#94a3b8', textDecoration: 'none', transition: 'color 0.2s', fontWeight: 500 }}>About</a>
          <a href="#skills" style={{ color: '#94a3b8', textDecoration: 'none', transition: 'color 0.2s', fontWeight: 500 }}>Skills</a>
          <a href="#projects" style={{ color: '#94a3b8', textDecoration: 'none', transition: 'color 0.2s', fontWeight: 500 }}>Projects</a>
          <a href="#experience" style={{ color: '#94a3b8', textDecoration: 'none', transition: 'color 0.2s', fontWeight: 500 }}>Experience</a>
        </div>
        
        <button 
          onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
          className="btn-primary"
          style={{ padding: '0.5rem 1.5rem', fontSize: '0.75rem', width: 'auto' }}>
          CONTACT_LINK
        </button>
      </div>

      <style>{`
        @media (min-width: 768px) {
          .md-flex { display: flex !important; }
        }
      `}</style>
    </nav>
  );
}
