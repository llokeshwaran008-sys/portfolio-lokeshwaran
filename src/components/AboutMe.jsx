import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { User, Cake, GraduationCap } from 'lucide-react';

export default function AboutMe() {
  const [showImage, setShowImage] = useState(false);

  useEffect(() => {
    let timer;
    if (showImage) {
      timer = setTimeout(() => {
        setShowImage(false);
      }, 5000);
    }
    return () => clearTimeout(timer);
  }, [showImage]);

  return (
    <section id="about-me" className="section-container" style={{ paddingTop: '8rem', paddingBottom: '4rem', maxWidth: '1100px', margin: '0 auto' }}>
      <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
        <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '2.5rem', fontWeight: 700, color: 'var(--text-main)', textShadow: '0 0 10px var(--primary-glow)' }}>
          USER <span style={{ color: 'var(--primary)' }}>PROFILE</span>
        </h2>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '4rem', alignItems: 'center' }} className="about-me-grid">
        
        {/* Left Content */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="glass-panel"
          style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', padding: '3rem', borderLeft: '4px solid var(--secondary)', borderRight: '1px solid var(--primary)' }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
            <User size={24} color="var(--primary)" />
            <span style={{ fontSize: '1.125rem', color: 'var(--text-main)', fontFamily: 'var(--font-heading)', letterSpacing: '1px' }}>ID: LOKESHWARAN V</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
            <Cake size={24} color="var(--primary)" />
            <span style={{ fontSize: '1.125rem', color: 'var(--text-main)', fontFamily: 'var(--font-heading)', letterSpacing: '1px' }}>DOB: 04-09-2004</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
            <GraduationCap size={24} color="var(--primary)" />
            <span style={{ fontSize: '1.125rem', color: 'var(--text-main)', fontFamily: 'var(--font-heading)', letterSpacing: '1px' }}>DEGREE: MCA</span>
          </div>

          <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: 1.7, marginTop: '1.5rem' }}>
            I am Lokeshwaran V, proficient in <span style={{ color: 'var(--secondary)', fontWeight: 700 }}>HTML, CSS, JavaScript, React.js, Core Python, Django, MySQL</span>. As having a strong foundation in Computer Application and a passion for technology, I aim to implement my innovative ideas and skills to accomplish projects that contribute to the organization's growth.
          </p>
        </motion.div>

        {/* Right Image */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
        >
          <div className="about-img-container" style={{ minHeight: '350px', width: '100%', maxWidth: '350px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            {showImage ? (
              <motion.img 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                src={`${import.meta.env.BASE_URL}lokiiiiiii.jpeg`}
                alt="Lokeshwaran V" 
                style={{ width: '100%', height: 'auto', borderRadius: '12px', position: 'relative', zIndex: 2, display: 'block' }}
              />
            ) : (
              <button
                onClick={() => setShowImage(true)}
                style={{
                  padding: '1rem 2rem',
                  background: 'var(--primary)',
                  color: '#ffffff',
                  border: 'none',
                  borderRadius: '8px',
                  fontFamily: 'var(--font-heading)',
                  fontWeight: 700,
                  fontSize: '1rem',
                  cursor: 'pointer',
                  zIndex: 3,
                  position: 'relative',
                  boxShadow: '0 4px 14px 0 rgba(59, 130, 246, 0.39)',
                  transition: 'transform 0.2s ease, background 0.2s ease'
                }}
                onMouseOver={e => { e.currentTarget.style.transform = 'scale(1.05)'; e.currentTarget.style.background = '#2563eb'; }}
                onMouseOut={e => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.background = 'var(--primary)'; }}
              >
                View Profile Picture
              </button>
            )}
          </div>
        </motion.div>

      </div>

      <style>{`
        .about-me-grid { grid-template-columns: 1fr; }
        @media (min-width: 768px) {
          .about-me-grid { grid-template-columns: 1fr 1fr; }
        }
        
        .about-img-container {
          position: relative;
          padding: 1rem;
        }
        
        /* The blue tilted border effect behind the image */
        .about-img-container::before {
          content: '';
          position: absolute;
          inset: 0;
          border: 3px solid var(--primary);
          border-radius: 16px;
          transform: rotate(-4deg);
          z-index: 1;
        }

        /* The dark background card effect behind the image */
        .about-img-container::after {
          content: '';
          position: absolute;
          inset: 0.5rem;
          background: rgba(15, 23, 42, 0.9);
          border-radius: 16px;
          transform: rotate(3deg);
          box-shadow: 0 10px 30px -10px var(--primary-glow);
          z-index: 0;
        }
      `}</style>
    </section>
  );
}
