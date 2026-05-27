import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import { Menu, X } from 'lucide-react';

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about-me' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
  ];

  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      width: '100%',
      zIndex: 100,
      height: '5rem',
      transition: 'all 0.3s ease',
      background: (scrolled || mobileMenuOpen) ? 'rgba(0, 15, 30, 0.95)' : 'transparent',
      backdropFilter: (scrolled || mobileMenuOpen) ? 'blur(10px)' : 'none',
      borderBottom: (scrolled || mobileMenuOpen) ? '1px solid var(--primary)' : 'none',
      boxShadow: scrolled ? '0 5px 20px rgba(0, 243, 255, 0.1)' : 'none',
    }}>
      {/* Scroll Progress Bar */}
      <motion.div
        style={{
          scaleX,
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '2px',
          background: 'var(--primary)',
          transformOrigin: '0%',
          boxShadow: '0 0 10px var(--primary-glow)',
          zIndex: 102
        }}
      />

      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 1.5rem', height: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span style={{ fontSize: 'clamp(1rem, 4vw, 1.25rem)', fontWeight: 700, letterSpacing: '-1px', color: 'var(--primary)', fontFamily: 'var(--font-heading)', zIndex: 101 }}>
          LOKESHWARAN V
        </span>

        {/* Desktop Nav */}
        <div style={{ display: 'none', gap: '2rem', alignItems: 'center', fontFamily: 'var(--font-heading)', textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.75rem' }} className="md-flex">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} style={{ color: '#94a3b8', textDecoration: 'none', transition: 'color 0.2s', fontWeight: 500 }}>
              {link.name}
            </a>
          ))}
          <button
            onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
            className="btn-primary"
            style={{ padding: '0.5rem 1.5rem', fontSize: '0.75rem', width: 'auto' }}>
            CONTACT
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }} className="md-hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{ background: 'none', border: 'none', color: 'var(--primary)', cursor: 'pointer', zIndex: 101, display: 'flex', alignItems: 'center' }}
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            style={{
              position: 'absolute',
              top: '5rem',
              left: 0,
              width: '100%',
              background: 'rgba(0, 15, 30, 0.98)',
              backdropFilter: 'blur(15px)',
              padding: '2rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '1.5rem',
              borderBottom: '1px solid var(--primary)',
              zIndex: 99
            }}
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                style={{ color: 'var(--text-main)', textDecoration: 'none', fontSize: '1.25rem', fontFamily: 'var(--font-heading)', textTransform: 'uppercase', letterSpacing: '2px' }}
              >
                {link.name}
              </a>
            ))}
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
              }}
              className="btn-primary"
              style={{ padding: '1rem', justifyContent: 'center' }}>
              CONTACT
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (min-width: 768px) {
          .md-flex { display: flex !important; }
          .md-hidden { display: none !important; }
        }
      `}</style>
    </nav>
  );
}
