import { useState, useEffect } from 'react';
import { motion, useMotionValue, useTransform, useSpring, AnimatePresence } from 'framer-motion';
import { Github, Linkedin, Download } from 'lucide-react';

const roles = [
  "WEB DEVELOPER",
  "PYTHON FULL STACK",
  "UI/UX DESIGNER",
  "SYSTEM ARCHITECT"
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 20 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  useEffect(() => {
    const handleTyping = () => {
      const fullText = roles[roleIndex];

      if (!isDeleting) {
        setCurrentText(fullText.substring(0, currentText.length + 1));
        setTypingSpeed(100);

        if (currentText === fullText) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        setCurrentText(fullText.substring(0, currentText.length - 1));
        setTypingSpeed(50);

        if (currentText === "") {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, roleIndex, typingSpeed]);

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
      padding: '5rem 1.5rem 0',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '100%',
          height: '100%',
          opacity: 0.15,
          backgroundImage: `url(${import.meta.env.BASE_URL}lokesh12.jpeg)`,
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
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(2.5rem, 8vw, 8rem)',
              fontWeight: 700,
              letterSpacing: '0.05em',
              marginBottom: '2rem',
              lineHeight: 1.1,
              transform: "translateZ(70px)",
              color: 'var(--primary)',
              textShadow: '0 0 20px var(--primary-glow)',
              wordBreak: 'break-word'
            }}
          >
            LOKESHWARAN V
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="glass-panel"
            style={{ display: 'inline-block', padding: '1rem 2.5rem', marginBottom: '3rem', transform: "translateZ(50px)", borderLeft: '4px solid var(--secondary)' }}
          >
            <p style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(0.875rem, 2.5vw, 1.5rem)', color: 'var(--text-main)', fontWeight: 500, letterSpacing: '0.1em', minWidth: '300px' }}>
              TARGET: <span style={{ color: 'var(--primary)' }}>{currentText}</span>
              <motion.span
                animate={{ opacity: [0, 1, 0] }}
                transition={{ repeat: Infinity, duration: 0.8 }}
                style={{ marginLeft: '2px', borderLeft: '2px solid var(--primary)' }}
              />
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap', transform: "translateZ(40px)" }}
          >
            <div style={{ display: 'flex', gap: '1rem' }}>
              <a href="https://github.com/llokeshwaran008-sys" target="_blank" rel="noopener noreferrer" className="glass-panel" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '3.5rem', height: '3.5rem', borderRadius: '50%', color: 'var(--text-main)', transition: 'all 0.3s ease', textDecoration: 'none' }}>
                <Github size={24} />
              </a>
              <a href="https://www.linkedin.com/in/lokesh-waran-v-0934412a4?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noopener noreferrer" className="glass-panel" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '3.5rem', height: '3.5rem', borderRadius: '50%', color: 'var(--text-main)', transition: 'all 0.3s ease', textDecoration: 'none' }}>
                <Linkedin size={24} />
              </a>
            </div>
            <a href={`${import.meta.env.BASE_URL}Lokesh MCA Resume.pdf`} download="Lokesh MCA Resume.pdf" className="glass-panel" style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.75rem', color: 'var(--text-main)',
              fontFamily: 'var(--font-heading)', fontWeight: 700, padding: '1rem 2rem', textDecoration: 'none', transition: 'all 0.3s ease', textTransform: 'uppercase', letterSpacing: '2px'
            }}>
              VIEW MY RESUME <Download size={20} />
            </a>
          </motion.div>
        </motion.div>
      </div>

      <div style={{ position: 'absolute', bottom: '2rem', left: '50%', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem', opacity: 0.5 }}>
        <span style={{ fontFamily: 'var(--font-heading)', fontSize: '10px', letterSpacing: '0.5em', textTransform: 'uppercase' }}>Scroll</span>
        <div style={{ width: '1px', height: '2rem', background: 'linear-gradient(to bottom, var(--primary), transparent)' }}></div>
      </div>
    </section>
  );
}
