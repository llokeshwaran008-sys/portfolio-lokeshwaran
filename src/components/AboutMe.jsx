import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { User, Cake, GraduationCap } from 'lucide-react';

export default function AboutMe() {
  const [showImage, setShowImage] = useState(false);

  useEffect(() => {
    let timer;
    if (showImage) {
      timer = setTimeout(() => setShowImage(false), 7000);
    }
    return () => clearTimeout(timer);
  }, [showImage]);

  return (
    <section id="about-me" className="section-container" aria-label="About Me Section" style={{ maxWidth: '1100px', margin: '0 auto' }}>
      <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(2rem, 5vw, 2.5rem)', fontWeight: 700, color: 'var(--text-main)', textShadow: '0 0 10px var(--primary-glow)' }}>
          SYSTEM <span style={{ color: 'var(--primary)' }}>OPERATOR PROFILE</span>
        </h2>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '3rem', alignItems: 'center' }} className="about-me-grid">

        {/* Left – Story + identity */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="glass-panel"
          style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', padding: 'clamp(1.5rem, 5vw, 3rem)', borderLeft: '4px solid var(--secondary)', borderRight: '1px solid var(--primary)' }}
        >
          {/* Identity chips */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
            <User size={24} color="var(--primary)" aria-hidden="true" />
            <span style={{ fontSize: 'clamp(0.9rem, 2vw, 1.125rem)', color: 'var(--text-main)', fontFamily: 'var(--font-heading)', letterSpacing: '1px' }}>NAME: LOKESHWARAN V</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
            <Cake size={24} color="var(--primary)" aria-hidden="true" />
            <span style={{ fontSize: 'clamp(0.9rem, 2vw, 1.125rem)', color: 'var(--text-main)', fontFamily: 'var(--font-heading)', letterSpacing: '1px' }}>DOB: 04-09-2004</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
            <GraduationCap size={24} color="var(--primary)" aria-hidden="true" />
            <span style={{ fontSize: 'clamp(0.9rem, 2vw, 1.125rem)', color: 'var(--text-main)', fontFamily: 'var(--font-heading)', letterSpacing: '1px' }}>DEGREE: MCA (Master of Computer Applications)</span>
          </div>

          {/* Narrative */}
          <article style={{ marginTop: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <p style={{ color: 'var(--text-muted)', fontSize: 'clamp(0.95rem, 2vw, 1.05rem)', lineHeight: 1.8 }}>
              <strong style={{ color: 'var(--primary)' }}>THE CHALLENGE:</strong>{' '}
              Modern web products often break under the weight of their own complexity — slow load times,
              fragile backends, no version control discipline, and zero deployment strategy. Early in my journey,
              I saw this firsthand: a team's React app was crashing on every push to production, with no CI/CD
              pipeline, no rollback plan, and no environment variable management in place.
            </p>
            <p style={{ color: 'var(--text-muted)', fontSize: 'clamp(0.95rem, 2vw, 1.05rem)', lineHeight: 1.8 }}>
              <strong style={{ color: 'var(--secondary)' }}>MY ROLE:</strong>{' '}
              I stepped in as a full-stack developer and took ownership of both the code and the infrastructure.
              On the frontend, I rebuilt the UI in <strong style={{ color: 'var(--primary)' }}>React</strong> with
              clean HTML5 semantics and CSS3 transitions. On the backend, I built a{' '}
              <strong style={{ color: 'var(--primary)' }}>Django REST API</strong> backed by{' '}
              <strong style={{ color: 'var(--primary)' }}>MySQL</strong> and{' '}
              <strong style={{ color: 'var(--primary)' }}>Supabase</strong> for real-time capabilities.
              I configured a <strong style={{ color: 'var(--primary)' }}>GitHub Actions CI/CD pipeline</strong>{' '}
              for automated testing and deployment, managed all secrets via environment variables, and
              set up <strong style={{ color: 'var(--primary)' }}>NGINX + PM2</strong> on a Linux server for
              zero-downtime deployments — with Sentry wired in for error monitoring.
            </p>
            <p style={{ color: 'var(--text-muted)', fontSize: 'clamp(0.95rem, 2vw, 1.05rem)', lineHeight: 1.8 }}>
              <strong style={{ color: '#10b981' }}>THE OUTCOME:</strong>{' '}
              The result was a stable, production-ready application with{' '}
              <strong style={{ color: '#10b981' }}>30% improved page performance</strong> (Lighthouse score: 92),
              automated deployments on every merge, and a fully documented Git workflow — meaning the team
              could ship confidently without fear of breaking production again.
            </p>
          </article>
        </motion.div>

        {/* Right – Photo */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
        >
          <div className="about-img-container" style={{ minHeight: '300px', width: '100%', maxWidth: '350px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            {showImage ? (
              <motion.img
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                src={`${import.meta.env.BASE_URL}loki12.jpeg`}
                alt="Lokeshwaran V — Full-Stack Web Developer"
                loading="lazy"
                style={{ width: '100%', height: 'auto', borderRadius: '12px', position: 'relative', zIndex: 2, display: 'block' }}
              />
            ) : (
              <button
                onClick={() => setShowImage(true)}
                aria-label="Reveal profile picture of Lokeshwaran V"
                style={{
                  padding: '1rem 2rem',
                  background: 'var(--primary)',
                  color: '#050a0f',
                  border: 'none',
                  borderRadius: '8px',
                  fontFamily: 'var(--font-heading)',
                  fontWeight: 700,
                  fontSize: '1rem',
                  cursor: 'pointer',
                  zIndex: 3,
                  position: 'relative',
                  boxShadow: '0 4px 14px 0 rgba(0, 243, 255, 0.4)',
                  transition: 'transform 0.2s ease, background 0.2s ease',
                  textTransform: 'uppercase',
                  letterSpacing: '1px'
                }}
              >
                Access Image Stream
              </button>
            )}
          </div>
        </motion.div>

      </div>

      <style>{`
        .about-me-grid { grid-template-columns: 1fr; }
        @media (min-width: 850px) {
          .about-me-grid { grid-template-columns: 1.3fr 0.7fr; }
        }
        .about-img-container { position: relative; padding: 1rem; }
        .about-img-container::before {
          content: '';
          position: absolute;
          inset: 0;
          border: 3px solid var(--primary);
          border-radius: 16px;
          transform: rotate(-4deg);
          z-index: 1;
          pointer-events: none;
        }
        .about-img-container::after {
          content: '';
          position: absolute;
          inset: 0.5rem;
          background: rgba(15, 23, 42, 0.9);
          border-radius: 16px;
          transform: rotate(3deg);
          box-shadow: 0 10px 30px -10px var(--primary-glow);
          z-index: 0;
          pointer-events: none;
        }
      `}</style>
    </section>
  );
}
