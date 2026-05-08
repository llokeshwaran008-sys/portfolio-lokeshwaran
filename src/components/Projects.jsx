import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function Projects() {
  return (
    <section id="projects" className="section-container">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '4rem', flexWrap: 'wrap', gap: '2rem' }}>
        <div>
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(2rem, 6vw, 3rem)', fontWeight: 700, letterSpacing: '0.05em', color: 'var(--text-main)', textShadow: '0 0 10px var(--primary-glow)' }}>
            <span className="text-gradient">SYSTEM</span> ARCHIVES
          </h2>
        </div>
        <p style={{ color: 'var(--text-muted)', maxWidth: '28rem', textAlign: 'left' }} >
          A curated collection of digital systems designed to solve complex real-world problems through elegant code.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '5rem' }}>
        
        {/* Project 1 */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="proj-grid"
          style={{ display: 'grid', gap: 0, alignItems: 'center', overflow: 'hidden' }}
        >
          <div className="glass-panel" style={{ minHeight: '300px', height: 'clamp(300px, 50vh, 500px)', overflow: 'hidden', position: 'relative', borderLeft: '4px solid var(--primary)' }}>
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAc_pQrOODMHUMcMq_HszXLa0Swr9PgqP3w9hAiwgX7cvqq_z1I2XLZamQDFFpyWcHCOQuAFfB7yOQh3CtNurd2JI0LBCG9_G6FgCtwmDGVRo8lcy0WVFvetwjJJvjIO4tvKABARNaaFSqJDyOwaIITnooMXdjHEFwF99oPku0OpgLobzhqhx5FnCYqi-Ef1-duSUdd9jYtSm2XRWFDm-hdg-Vya9uYJOgZ3Or3PXei4z9H6G3xFR_10JOlPgQM64kMjkGxtcWQYvA"
              alt="Aquaculture"
              style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 2s ease' }}
              onMouseOver={e => e.currentTarget.style.transform = 'scale(1.1)'}
              onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}
            />
            <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(15, 23, 42, 0.4)', mixBlendMode: 'overlay' }}></div>
          </div>
          
          <div className="glass-panel pull-left responsive-padding" style={{ padding: '3rem', position: 'relative', zIndex: 10, borderRight: '4px solid var(--secondary)' }}>
            <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.5rem, 4vw, 2.25rem)', fontWeight: 700, marginBottom: '1.5rem', textTransform: 'uppercase' }}>
              AQUACULTURE Management System
            </h3>
            <p style={{ color: 'var(--text-muted)', marginBottom: '2rem', lineHeight: 1.6, fontSize: 'clamp(0.9rem, 2vw, 1.05rem)' }}>
              A comprehensive web-based platform designed to monitor and manage water quality parameters. Built with Django and SQL, it features health analytics dashboards, robust data management, and predictive mortality alerts.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', marginBottom: '2.5rem' }}>
              {["Django", "SQL", "ChartJS"].map(tag => (
                <span key={tag} style={{ background: 'var(--bg-surface)', padding: '0.25rem 0.75rem', fontSize: '0.625rem', fontFamily: 'var(--font-heading)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--secondary)' }}>
                  {tag}
                </span>
              ))}
            </div>
            <a href="#" className="btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem', textDecoration: 'none' }}>
              ACCESS DATA <ArrowRight size={20} />
            </a>
          </div>
        </motion.div>

      </div>
      <style>{`
        @media (min-width: 1024px) {
          .proj-grid { grid-template-columns: 7fr 5fr !important; }
          .pull-left { margin-left: -3rem; }
        }
        @media (max-width: 1024px) {
          .responsive-padding { padding: 2rem !important; }
          .proj-grid { gap: 0 !important; }
        }
      `}</style>
    </section>
  );
}
