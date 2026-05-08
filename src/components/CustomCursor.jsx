import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function CustomCursor() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    // Check if device is mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768 || ('ontouchstart' in window));
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);

    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e) => {
      if (e.target.tagName === 'A' || e.target.tagName === 'BUTTON' || e.target.closest('a') || e.target.closest('button')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('resize', checkMobile);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  if (isMobile) return null;

  return (
    <>
      {/* Outer Ring */}
      <motion.div
        animate={{
          x: mousePos.x - 20,
          y: mousePos.y - 20,
          scale: isHovering ? 1.5 : 1,
          borderColor: isHovering ? 'var(--secondary)' : 'var(--primary)',
        }}
        transition={{ type: 'spring', stiffness: 250, damping: 20, mass: 0.5 }}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '40px',
          height: '40px',
          borderRadius: '50%',
          border: '1px solid var(--primary)',
          pointerEvents: 'none',
          zIndex: 9999,
          boxShadow: isHovering ? '0 0 15px var(--secondary)' : 'none'
        }}
      />
      
      {/* Center Dot / Crosshair */}
      <motion.div
        animate={{
          x: mousePos.x - 2,
          y: mousePos.y - 2,
        }}
        transition={{ type: 'spring', stiffness: 1000, damping: 30 }}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '4px',
          height: '4px',
          borderRadius: '50%',
          backgroundColor: 'var(--primary)',
          pointerEvents: 'none',
          zIndex: 9999,
          boxShadow: '0 0 10px var(--primary)'
        }}
      />

      {/* Crosshair lines */}
      <motion.div
        animate={{ x: mousePos.x, y: mousePos.y - 10 }}
        transition={{ type: 'spring', stiffness: 1000, damping: 30 }}
        style={{ position: 'fixed', top: 0, left: 0, width: '1px', height: '6px', background: 'var(--primary)', pointerEvents: 'none', zIndex: 9999, opacity: isHovering ? 0 : 0.5 }}
      />
      <motion.div
        animate={{ x: mousePos.x, y: mousePos.y + 4 }}
        transition={{ type: 'spring', stiffness: 1000, damping: 30 }}
        style={{ position: 'fixed', top: 0, left: 0, width: '1px', height: '6px', background: 'var(--primary)', pointerEvents: 'none', zIndex: 9999, opacity: isHovering ? 0 : 0.5 }}
      />
      <motion.div
        animate={{ x: mousePos.x - 10, y: mousePos.y }}
        transition={{ type: 'spring', stiffness: 1000, damping: 30 }}
        style={{ position: 'fixed', top: 0, left: 0, width: '6px', height: '1px', background: 'var(--primary)', pointerEvents: 'none', zIndex: 9999, opacity: isHovering ? 0 : 0.5 }}
      />
      <motion.div
        animate={{ x: mousePos.x + 4, y: mousePos.y }}
        transition={{ type: 'spring', stiffness: 1000, damping: 30 }}
        style={{ position: 'fixed', top: 0, left: 0, width: '6px', height: '1px', background: 'var(--primary)', pointerEvents: 'none', zIndex: 9999, opacity: isHovering ? 0 : 0.5 }}
      />
    </>
  );
}
