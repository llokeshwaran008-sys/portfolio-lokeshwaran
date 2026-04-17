import { useState } from 'react';
import { motion } from 'framer-motion';
import { Home, Phone, Mail } from 'lucide-react';

export default function Contact() {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);
    formData.append("access_key", "554031c6-333f-4b81-b5ed-6ac70e2d330b");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();
    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
      setTimeout(() => setResult(""), 5000); // Clear message after 5s
    } else {
      setResult("Error submitting form");
    }
  };

  return (
    <section id="contact" style={{ padding: '8rem 2rem' }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>

        {/* Top Centered Header */}
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '3rem', fontWeight: 700, color: 'var(--primary)', textShadow: '0 0 10px var(--primary-glow)' }}>
            COMMUNICATION <span style={{ color: 'var(--text-main)' }}>LINK</span>
          </h2>
        </div>

        {/* Two Column Layout */}
        <div style={{ display: 'grid', gap: '4rem', alignItems: 'center' }} className="contact-grid">

          {/* Left Column - Contact Details */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
              <Home size={28} color="var(--primary)" />
              <span style={{ fontSize: '1.125rem', color: 'var(--text-main)', fontWeight: 500 }}>Vellore, Tamilnadu</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
              <Phone size={28} color="var(--primary)" />
              <span style={{ fontSize: '1.125rem', color: 'var(--text-main)', fontWeight: 500 }}>+91 9500803720</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
              <Mail size={28} color="var(--primary)" />
              <span style={{ fontSize: '1.125rem', color: 'var(--text-main)', fontWeight: 500 }}>llokeshwaran008@gmail.com</span>
            </div>
          </motion.div>

          {/* Right Column - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-panel"
            style={{
              padding: '2.5rem',
              borderTop: '2px solid var(--primary)',
              borderBottom: '2px solid var(--secondary)'
            }}
          >
            <h3 style={{ fontFamily: 'var(--font-heading)', color: '#ffffff', fontSize: '1.5rem', fontWeight: 700, marginBottom: '2rem' }}>
              Contact Me
            </h3>

            <form onSubmit={onSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <label style={{ color: '#e2e8f0', fontWeight: 600, fontSize: '0.875rem' }}>Your Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  style={{ width: '100%', padding: '0.75rem', borderRadius: '4px', border: '1px solid rgba(255,255,255,0.2)', outline: 'none', color: '#ffffff', background: 'transparent' }}
                />
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <label style={{ color: '#e2e8f0', fontWeight: 600, fontSize: '0.875rem' }}>Your Email</label>
                <input
                  type="email"
                  name="email"
                  required
                  style={{ width: '100%', padding: '0.75rem', borderRadius: '4px', border: '1px solid rgba(255,255,255,0.2)', outline: 'none', color: '#ffffff', background: 'transparent' }}
                />
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <label style={{ color: '#e2e8f0', fontWeight: 600, fontSize: '0.875rem' }}>Message</label>
                <textarea
                  name="message"
                  rows="4"
                  required
                  style={{ width: '100%', padding: '0.75rem', borderRadius: '4px', border: '1px solid rgba(255,255,255,0.2)', outline: 'none', resize: 'vertical', color: '#ffffff', background: 'transparent' }}
                ></textarea>
              </div>

              <button type="submit" className="btn-primary" style={{ width: '100%', justifyContent: 'center', marginTop: '1rem' }}>
                TRANSMIT MESSAGE
              </button>
              {result && (
                <span style={{
                  textAlign: 'center',
                  fontSize: '0.875rem',
                  fontWeight: 600,
                  color: result.includes('Successfully') ? '#10b981' : (result.includes('Sending') ? '#3b82f6' : '#ef4444')
                }}>
                  {result}
                </span>
              )}
            </form>
          </motion.div>

        </div>
      </div>

      <style>{`
        .contact-grid { grid-template-columns: 1fr; }
        @media (min-width: 768px) {
          .contact-grid { grid-template-columns: 4fr 5fr; }
        }
      `}</style>
    </section>
  );
}
