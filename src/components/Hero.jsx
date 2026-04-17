import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 20 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    x.set(mouseX / width - 0.5);
    y.set(mouseY / height - 0.5);
  };
  
  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };
  return (
    <section id="hero" style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '5rem 2rem 0',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
        {/* Replacing the abstract mesh with the user's profile image blended into the background */}
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '100%',
          height: '100%',
          opacity: 0.15,
          backgroundImage: 'url(/lokesh12.jpeg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'grayscale(100%)'
        }}></div>
      </div>

      <div 
        style={{ position: 'relative', zIndex: 10, textAlign: 'center', maxWidth: '1024px', perspective: 1000 }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <motion.div style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}>
          <motion.h1 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1, type: "spring" }}
            style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(2.5rem, 7vw, 8rem)', fontWeight: 700, letterSpacing: '0.05em', marginBottom: '2rem', lineHeight: 1, transform: "translateZ(70px)", color: 'var(--primary)', textShadow: '0 0 20px var(--primary-glow)', whiteSpace: 'nowrap' }}
          >
            LOKESHWARAN V
          </motion.h1>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="glass-panel"
            style={{ display: 'inline-block', padding: '1rem 2rem', marginBottom: '3rem', transform: "translateZ(50px)", borderLeft: '4px solid var(--secondary)' }}
          >
            <p style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.125rem, 2vw, 1.5rem)', color: 'var(--text-main)', fontWeight: 500, letterSpacing: '0.1em' }}>
              TARGET: WEB DEVELOPER <span style={{ color: 'var(--accent-red)', margin: '0 1rem' }}>|</span> PYTHON FULL STACK
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap', transform: "translateZ(40px)" }}
          >
            <a href="#projects" className="btn-primary" style={{ textDecoration: 'none' }}>
              ENGAGE SYSTEMS <ArrowRight size={20} />
            </a>
            <a href="#about" className="glass-panel" style={{ 
              display: 'inline-flex', alignItems: 'center', gap: '0.75rem', color: 'var(--text-main)', 
              fontFamily: 'var(--font-heading)', fontWeight: 700, padding: '1rem 2rem', textDecoration: 'none', transition: 'all 0.3s ease', textTransform: 'uppercase', letterSpacing: '2px'
            }}>
              INITIALIZE LOG
            </a>
          </motion.div>
        </motion.div>
      </div>

      <div style={{ position: 'absolute', bottom: '3rem', left: '50%', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem', opacity: 0.5 }}>
        <span style={{ fontFamily: 'var(--font-heading)', fontSize: '10px', letterSpacing: '0.5em', textTransform: 'uppercase' }}>Scroll</span>
        <div style={{ width: '1px', height: '3rem', background: 'linear-gradient(to bottom, var(--primary), transparent)' }}></div>
      </div>
    </section>
  );
}
