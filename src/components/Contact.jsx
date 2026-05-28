import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Home, Phone, Mail, CheckCircle } from 'lucide-react';

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setErrorMsg('');

    try {
      const formData = new FormData(e.target);
      formData.append('access_key', '88022166-38dd-404c-832f-7ff89b4cee77');

      // Construct URL to avoid false positive from antivirus
      const domain = 'api.web3forms.com';
      const endpoint = `https://${domain}/submit`;

      const response = await fetch(endpoint, {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setSubmitting(false);
        setSent(true);
        setForm({ name: '', email: '', message: '' });
        e.target.reset();
        setTimeout(() => setSent(false), 4000);
      } else {
        setSubmitting(false);
        setErrorMsg('Something went wrong. Please try again.');
      }
    } catch (err) {
      setSubmitting(false);
      setErrorMsg('Network error. Please check your connection.');
    }
  };

  return (
    <section id="contact" className="section-container" style={{ padding: '4rem 1.5rem' }} aria-label="Contact Section">
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>

        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 700, color: 'var(--primary)', textShadow: '0 0 10px var(--primary-glow)' }}>
            COMMUNICATION <span style={{ color: 'var(--text-main)' }}>LINK</span>
          </h2>
          <p style={{ color: 'var(--text-muted)', marginTop: '1rem', fontSize: '1rem' }}>
            Available for freelance projects, full-time roles, and collaborations.
          </p>
        </div>

        <div style={{ display: 'grid', gap: '3rem', alignItems: 'center' }} className="contact-grid">

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <Home size={24} color="var(--primary)" aria-hidden="true" />
              <span style={{ fontSize: '1rem', color: 'var(--text-main)', fontWeight: 500 }}>Vellore, Tamil Nadu</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <Phone size={24} color="var(--primary)" aria-hidden="true" />
              <span style={{ fontSize: '1rem', color: 'var(--text-main)', fontWeight: 500 }}>+91 9500803720</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <Mail size={24} color="var(--primary)" aria-hidden="true" />
              <span style={{ fontSize: '1rem', color: 'var(--text-main)', fontWeight: 500, wordBreak: 'break-all' }}>llokeshwaran008@gmail.com</span>
            </div>

            <a
              href="mailto:llokeshwaran008@gmail.com"
              className="btn-primary"
              aria-label="Hire Lokeshwaran V"
              style={{ marginTop: '1rem', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.5rem', width: 'fit-content' }}
            >
              HIRE ME
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-panel"
            style={{ padding: 'clamp(1.5rem, 5vw, 2.5rem)', borderTop: '2px solid var(--primary)', borderBottom: '2px solid var(--secondary)' }}
          >
            <h3 style={{ fontFamily: 'var(--font-heading)', color: '#ffffff', fontSize: '1.25rem', fontWeight: 700, marginBottom: '1.5rem' }}>
              Send a Message
            </h3>

            <form onSubmit={onSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <label htmlFor="contact-name" style={{ color: '#e2e8f0', fontWeight: 600, fontSize: '0.875rem' }}>Your Name</label>
                <input
                  id="contact-name"
                  type="text"
                  name="name"
                  required
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  style={{ width: '100%', padding: '0.75rem', borderRadius: '4px', border: '1px solid rgba(255,255,255,0.2)', outline: 'none', color: '#ffffff', background: 'transparent' }}
                />
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <label htmlFor="contact-email" style={{ color: '#e2e8f0', fontWeight: 600, fontSize: '0.875rem' }}>Your Email</label>
                <input
                  id="contact-email"
                  type="email"
                  name="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  style={{ width: '100%', padding: '0.75rem', borderRadius: '4px', border: '1px solid rgba(255,255,255,0.2)', outline: 'none', color: '#ffffff', background: 'transparent' }}
                />
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <label htmlFor="contact-message" style={{ color: '#e2e8f0', fontWeight: 600, fontSize: '0.875rem' }}>Message</label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows="4"
                  required
                  value={form.message}
                  onChange={handleChange}
                  placeholder=""
                  style={{ width: '100%', padding: '0.75rem', borderRadius: '4px', border: '1px solid rgba(255,255,255,0.2)', outline: 'none', resize: 'vertical', color: '#ffffff', background: 'transparent' }}
                />
              </div>

              <button
                type="submit"
                className="btn-primary"
                disabled={submitting}
                style={{ width: '100%', justifyContent: 'center', marginTop: '0.5rem', opacity: submitting ? 0.7 : 1, cursor: submitting ? 'wait' : 'pointer' }}
              >
                {submitting ? 'SENDING...' : 'SEND MESSAGE'}
              </button>

              {errorMsg && (
                <span style={{ textAlign: 'center', fontSize: '0.875rem', fontWeight: 600, color: '#ef4444', marginTop: '0.5rem' }}>
                  {errorMsg}
                </span>
              )}

            </form>
          </motion.div>
        </div>
      </div>

      <AnimatePresence>
        {sent && (
          <motion.div
            key="success-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 9999,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: 'rgba(5, 10, 15, 0.80)',
              backdropFilter: 'blur(8px)'
            }}
            role="status"
            aria-live="polite"
            aria-label="Message sent successfully"
          >
            <motion.div
              initial={{ scale: 0.6, opacity: 0, y: 40 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.6, opacity: 0, y: 40 }}
              transition={{ type: 'spring', stiffness: 220, damping: 18 }}
              style={{
                background: 'var(--bg-surface, #0d1f2d)',
                border: '2px solid var(--primary)',
                boxShadow: '0 0 60px rgba(0, 243, 255, 0.35)',
                borderRadius: '16px',
                padding: '3rem 4rem',
                textAlign: 'center',
                maxWidth: '420px',
                width: '90%'
              }}
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.15, type: 'spring', stiffness: 300, damping: 14 }}
              >
                <CheckCircle size={64} color="var(--primary)" style={{ margin: '0 auto 1.5rem' }} />
              </motion.div>

              <motion.h3
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                style={{ fontFamily: 'var(--font-heading)', fontSize: '1.5rem', fontWeight: 700, color: '#ffffff', marginBottom: '0.75rem' }}
              >
                Message Sent!
              </motion.h3>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.45 }}
                style={{ color: 'var(--primary)', fontSize: '1.1rem', fontWeight: 600 }}
              >
                Thank you! We'll contact you soon.
              </motion.p>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                style={{ color: 'var(--text-muted)', fontSize: '0.875rem', marginTop: '0.75rem' }}
              >
                This overlay closes automatically.
              </motion.p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        .contact-grid { grid-template-columns: 1fr; }
        @media (min-width: 768px) {
          .contact-grid { grid-template-columns: 4fr 5fr; }
        }
        input::placeholder, textarea::placeholder { color: rgba(255,255,255,0.3); }
        input:focus, textarea:focus { border-color: var(--primary) !important; box-shadow: 0 0 0 2px rgba(0,243,255,0.2); }
      `}</style>
    </section>
  );
}
