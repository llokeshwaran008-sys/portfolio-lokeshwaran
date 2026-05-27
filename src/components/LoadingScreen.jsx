import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const bootSequences = [
  "INITIALIZING SYSTEM CORE...",
  "LOADING BIOMETRIC DATA...",
  "DECRYPTING ARCHIVES...",
  "ESTABLISHING SECURE LINK...",
  "ACCESS GRANTED: LOKESHWARAN V"
];

export default function LoadingScreen({ onComplete }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    if (currentIndex < bootSequences.length) {
      const timer = setTimeout(() => {
        setCurrentIndex(prev => prev + 1);
      }, 600);
      return () => clearTimeout(timer);
    } else {
      setTimeout(() => {
        setIsFinished(true);
        setTimeout(onComplete, 500); // Small delay before fading out
      }, 800);
    }
  }, [currentIndex, onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      style={{
        position: 'fixed',
        inset: 0,
        backgroundColor: '#050a0f',
        zIndex: 9999,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'var(--font-heading)',
        color: 'var(--primary)',
        padding: '2rem'
      }}
    >
      <div style={{ maxWidth: '400px', width: '100%' }}>
        {/* Progress Bar */}
        <div style={{ height: '2px', width: '100%', background: 'rgba(0, 243, 255, 0.1)', marginBottom: '2rem', position: 'relative', overflow: 'hidden' }}>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${(currentIndex / bootSequences.length) * 100}%` }}
            style={{ height: '100%', background: 'var(--primary)', boxShadow: '0 0 15px var(--primary-glow)' }}
          />
        </div>

        {/* Text Sequence */}
        <div style={{ minHeight: '1.5rem', marginBottom: '0.5rem' }}>
          <AnimatePresence mode="wait">
            <motion.p
              key={currentIndex}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 10 }}
              style={{ fontSize: '0.75rem', letterSpacing: '0.2em', textTransform: 'uppercase' }}
            >
              {bootSequences[currentIndex] || "SYSTEM READY"}
            </motion.p>
          </AnimatePresence>
        </div>

        {/* Binary Rain Effect Placeholder / Decoration */}
        <div style={{ display: 'flex', gap: '4px', opacity: 0.3 }}>
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              animate={{ height: [2, 10, 2] }}
              transition={{ repeat: Infinity, duration: 1.5, delay: i * 0.1 }}
              style={{ width: '2px', background: 'var(--primary)' }}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
}
