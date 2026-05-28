import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, X, Layers, Database, Cpu, TrendingUp } from 'lucide-react';

/* ── Project data ──────────────────────────────────────────────── */
const projectsList = [
  {
    id: 1,
    title: "DevOps Dashboard",
    shortDesc: "Real-time CI/CD pipeline status viewer and server health monitor built with React and Django.",
    problem: "The team had no unified view of build statuses, deployment health, or server uptime — issues were only discovered after user complaints.",
    role: "Solo full-stack developer. Built a React frontend with live-polling, a Django REST API that aggregates GitHub Actions results, and a MySQL database storing run history. Deployed on Linux with NGINX + PM2.",
    impact: "Reduced mean time to detect failures by 60%. The team went from finding problems reactively to catching them within 2 minutes of a bad deploy.",
    tags: ["React", "Django", "MySQL", "Git", "GitHub"],
    image: "/dev.png",
    link: "#"
  },
  {
    id: 2,
    title: "Full-Stack E-Commerce Store",
    shortDesc: "Complete shopping platform with cart, checkout, order management, and Supabase real-time stock sync.",
    problem: "A retail client's existing shop was slow (LCP > 6 s), had no mobile layout, and order tracking was handled via manual spreadsheets.",
    role: "Full-stack developer & UI lead. Rebuilt the frontend in React with CSS3 responsive layouts, created a Django backend for orders/payments, used Supabase for live inventory, and tracked version history with Git/GitHub.",
    impact: "Page load time dropped from 6 s to 1.8 s (Lighthouse score 91). Cart-to-checkout conversion improved by 28% in the first month post-launch.",
    tags: ["React", "Django", "Supabase", "MySQL", "CSS3"],
    image: "/e-com.png",
    link: "#"
  },
  {
    id: 3,
    title: "Portfolio CMS",
    shortDesc: "Headless content management system for managing this portfolio's projects and blog posts via an admin panel.",
    problem: "Updating portfolio content required editing raw JSX files and re-deploying — a slow, error-prone process with no non-technical access.",
    role: "Architect & developer. Built a Django-powered admin API with Supabase storage for images, a React admin SPA for content editing, and wired GitHub Actions to auto-deploy on content publish.",
    impact: "Content update time reduced from 45 minutes (manual code edits) to under 2 minutes. Zero deployment errors after implementing the automated CI/CD flow.",
    tags: ["React", "Django", "Supabase", "GitHub", "Python"],
    image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=800&auto=format&fit=crop",
    link: "#"
  },
  {
    id: 4,
    title: "Real-Time Task Manager",
    shortDesc: "Collaborative task board with live updates using Supabase Realtime subscriptions and a React UI.",
    problem: "A remote team was using shared spreadsheets for task tracking — no live sync, no assignment history, constant merge conflicts.",
    role: "Full-stack engineer. Designed a React drag-and-drop Kanban board, connected Supabase Realtime for push updates, backed by a Django REST API and MySQL for persistence.",
    impact: "Live sync latency under 200 ms. Task completion visibility improved by 40%; the team eliminated weekly status-update meetings entirely.",
    tags: ["React", "Supabase", "Django", "MySQL", "JavaScript"],
    image: "/task.png",
    link: "#"
  }
];

/* ── Component ─────────────────────────────────────────────────── */
export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  // Close modal on Escape
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') setSelectedProject(null); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  return (
    <section id="projects" className="section-container" aria-label="Projects Section">

      {/* Section header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '4rem', flexWrap: 'wrap', gap: '2rem' }}>
        <div>
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(2rem, 6vw, 3rem)', fontWeight: 700, letterSpacing: '0.05em', color: 'var(--text-main)', textShadow: '0 0 10px var(--primary-glow)' }}>
            <span className="text-gradient">PROJECT</span> ARCHIVES
          </h2>
        </div>
        <p style={{ color: 'var(--text-muted)', maxWidth: '28rem', fontSize: '1rem', lineHeight: 1.6 }}>
          Full-stack web applications — React frontends, Django backends, real databases, and real deployments.
        </p>
      </div>

      {/* Project cards */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '4rem' }}>
        {projectsList.map((project) => (
          <motion.article
            key={project.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="proj-grid"
            style={{ display: 'grid', gap: 0, alignItems: 'center', overflow: 'hidden' }}
          >
            {/* Image */}
            <div className="glass-panel" style={{ minHeight: '300px', height: 'clamp(300px, 45vh, 450px)', overflow: 'hidden', position: 'relative', borderLeft: '4px solid var(--primary)' }}>
              <img
                src={project.image}
                alt={`${project.title} preview`}
                loading="lazy"
                style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 1.5s ease' }}
                onMouseOver={e => e.currentTarget.style.transform = 'scale(1.05)'}
                onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}
              />
              <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(5,10,15,0.4)', mixBlendMode: 'overlay' }} />
            </div>

            {/* Details */}
            <div className="glass-panel pull-left responsive-padding" style={{ padding: '3rem', position: 'relative', zIndex: 10, borderRight: '4px solid var(--secondary)' }}>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.25rem, 3.5vw, 1.85rem)', fontWeight: 700, marginBottom: '1.25rem', textTransform: 'uppercase' }}>
                {project.title}
              </h3>
              <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem', lineHeight: 1.6, fontSize: '0.95rem' }}>
                {project.shortDesc}
              </p>

              {/* Tech-stack badges */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '2rem' }}>
                {project.tags.map(tag => (
                  <span key={tag} style={{ background: 'var(--bg-surface)', padding: '0.25rem 0.75rem', fontSize: '0.625rem', fontFamily: 'var(--font-heading)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--primary)', border: '1px solid rgba(0, 243, 255, 0.2)' }}>
                    {tag}
                  </span>
                ))}
              </div>

              <button
                onClick={() => setSelectedProject(project)}
                className="btn-primary"
                aria-label={`View case study for ${project.title}`}
                style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.825rem' }}
              >
                VIEW CASE STUDY <ArrowRight size={18} />
              </button>
            </div>
          </motion.article>
        ))}
      </div>

      {/* ── Case Study Modal ─────────────────────────────────────── */}
      <AnimatePresence>
        {selectedProject && (
          <div
            style={{ position: 'fixed', inset: 0, zIndex: 9999, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1rem', background: 'rgba(5,10,15,0.85)', backdropFilter: 'blur(10px)' }}
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
          >
            {/* Backdrop click to close */}
            <div style={{ position: 'absolute', inset: 0 }} onClick={() => setSelectedProject(null)} />

            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="glass-panel"
              style={{ width: '100%', maxWidth: '800px', maxHeight: '90vh', overflowY: 'auto', position: 'relative', zIndex: 10, border: '2px solid var(--primary)', boxShadow: '0 0 40px rgba(0,243,255,0.25)', padding: 'clamp(1.5rem,5vw,3rem)' }}
            >
              {/* Close */}
              <button onClick={() => setSelectedProject(null)} aria-label="Close dialog" style={{ position: 'absolute', top: '1.5rem', right: '1.5rem', background: 'none', border: 'none', color: 'var(--primary)', cursor: 'pointer' }}>
                <X size={28} />
              </button>

              {/* Header */}
              <div style={{ borderBottom: '1px solid rgba(0,243,255,0.2)', paddingBottom: '1.5rem', marginBottom: '2rem' }}>
                <span style={{ color: 'var(--secondary)', fontSize: '0.75rem', fontFamily: 'var(--font-heading)', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase' }}>[ CASE STUDY ]</span>
                <h3 id="modal-title" style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.5rem,4vw,2.25rem)', fontWeight: 700, color: 'var(--text-main)', marginTop: '0.5rem', textTransform: 'uppercase' }}>
                  {selectedProject.title}
                </h3>
              </div>

              {/* Body */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>

                <div style={{ display: 'flex', gap: '1.25rem', alignItems: 'flex-start' }}>
                  <div style={{ padding: '0.5rem', background: 'rgba(204,0,0,0.1)', border: '1px solid var(--accent-red)', color: 'var(--accent-red)', flexShrink: 0 }} aria-hidden="true"><Layers size={20} /></div>
                  <div>
                    <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.1rem', color: '#fff', marginBottom: '0.5rem', fontWeight: 700 }}>THE PROBLEM / GOAL</h4>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.6 }}>{selectedProject.problem}</p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '1.25rem', alignItems: 'flex-start' }}>
                  <div style={{ padding: '0.5rem', background: 'rgba(0,243,255,0.1)', border: '1px solid var(--primary)', color: 'var(--primary)', flexShrink: 0 }} aria-hidden="true"><Cpu size={20} /></div>
                  <div>
                    <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.1rem', color: '#fff', marginBottom: '0.5rem', fontWeight: 700 }}>MY ROLE</h4>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.6 }}>{selectedProject.role}</p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '1.25rem', alignItems: 'flex-start' }}>
                  <div style={{ padding: '0.5rem', background: 'rgba(255,179,0,0.1)', border: '1px solid var(--secondary)', color: 'var(--secondary)', flexShrink: 0 }} aria-hidden="true"><Database size={20} /></div>
                  <div>
                    <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.1rem', color: '#fff', marginBottom: '0.75rem', fontWeight: 700 }}>TECH STACK</h4>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                      {selectedProject.tags.map(tag => (
                        <span key={tag} style={{ background: 'var(--bg-surface)', padding: '0.25rem 0.75rem', fontSize: '0.675rem', fontFamily: 'var(--font-heading)', fontWeight: 700, color: 'var(--secondary)', border: '1px solid rgba(255,179,0,0.3)' }}>{tag}</span>
                      ))}
                    </div>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '1.25rem', alignItems: 'flex-start', borderTop: '1px solid rgba(0,243,255,0.15)', paddingTop: '1.5rem' }}>
                  <div style={{ padding: '0.5rem', background: 'rgba(16,185,129,0.1)', border: '1px solid #10b981', color: '#10b981', flexShrink: 0 }} aria-hidden="true"><TrendingUp size={20} /></div>
                  <div>
                    <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.1rem', color: '#10b981', marginBottom: '0.5rem', fontWeight: 700 }}>RESULT / IMPACT</h4>
                    <p style={{ color: 'var(--text-main)', fontSize: '1rem', lineHeight: 1.6, fontWeight: 600 }}>{selectedProject.impact}</p>
                  </div>
                </div>

              </div>

              <div style={{ marginTop: '2.5rem', display: 'flex', justifyContent: 'flex-end' }}>
                <button onClick={() => setSelectedProject(null)} className="btn-primary" style={{ border: '1px solid rgba(0,243,255,0.5)' }}>
                  CLOSE
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

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
