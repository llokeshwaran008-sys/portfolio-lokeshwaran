import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Building2 } from 'lucide-react';

export default function About() {
  const experiences = [
    {
      date: "April 2025 - June 2025",
      title: "Python Full Stack Intern",
      subtitle: "Vcodez Innovating Ideas",
      desc: "Learned and applied core Python Full Stack with web development concepts in real projects. Contributed to front-end pages using React.js and Back-end pages using Django, MySQL.",
      icon: <Briefcase size={20} color="var(--primary)" />,
      align: "left"
    },
    {
      date: "2024 - 2026",
      title: "MCA",
      subtitle: "Dr.M.G.R. Educational And Research Institute",
      desc: "Currently Pursuing with a CGPA of 8.0 up to 3rd Semester without Backlog.",
      icon: <GraduationCap size={20} color="var(--primary)" />,
      align: "right"
    },
    {
      date: "2021 - 2024",
      title: "BSc Computer Science",
      subtitle: "C.Abdul Hakeem College",
      desc: "Completed with 72% in Academics without Backlog.",
      icon: <Building2 size={20} color="var(--primary)" />,
      align: "left"
    }
  ];

  return (
    <section id="experience" className="section-container" style={{ paddingTop: '8rem', maxWidth: '1000px', margin: '0 auto' }}>
      <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '3rem', fontWeight: 700, letterSpacing: '0.05em', color: 'var(--text-main)', textShadow: '0 0 10px var(--primary-glow)' }}>
          ACADEMICS & <span className="text-gradient">FIELD EXPERIENCE</span>
        </h2>
      </div>

      <div style={{ position: 'relative' }}>
        {/* Central Line */}
        <div className="hidden md-block" style={{ position: 'absolute', left: '50%', top: 0, bottom: 0, width: '2px', background: 'rgba(59, 130, 246, 0.3)', transform: 'translateX(-50%)' }}></div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
          {experiences.map((exp, i) => (
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              key={i} 
              style={{ display: 'flex', width: '100%', alignItems: 'center' }}
              className={`timeline-row ${exp.align === 'left' ? 'flex-row' : 'flex-row-reverse'}`}
            >
              <div className="timeline-content-pc" style={{ width: '50%', padding: exp.align === 'left' ? '0 3rem 0 0' : '0 0 0 3rem', display: 'flex', justifyContent: exp.align === 'left' ? 'flex-end' : 'flex-start' }}>
                <div style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: exp.align === 'left' ? 'flex-end' : 'flex-start', gap: '2rem' }} className={`mobile-flex-col ${exp.align === 'left' ? 'row-normal' : 'row-reverse'}`}>
                  
                  <div className="timeline-date" style={{ fontWeight: 700, fontSize: '0.875rem', fontFamily: 'var(--font-heading)', color: 'var(--text-main)', whiteSpace: 'nowrap' }}>
                    {exp.date}
                  </div>
                  
                  <div className="glass-panel" style={{ padding: '1.5rem 2rem', borderRadius: '0', maxWidth: '500px', width: '100%', textAlign: 'left', borderLeft: '4px solid var(--primary)', borderTop: '1px solid var(--primary)' }}>
                    <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.25rem' }}>{exp.title}</h3>
                    <p style={{ color: 'var(--secondary)', fontFamily: 'var(--font-heading)', fontWeight: 500, fontSize: '0.875rem', letterSpacing: '0.05em', marginBottom: '1rem' }}>{exp.subtitle}</p>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem', lineHeight: 1.6 }}>{exp.desc}</p>
                  </div>

                </div>
              </div>

              {/* Icon Marker */}
              <div className="timeline-marker hidden md-flex" style={{ position: 'absolute', left: '50%', transform: 'translateX(-50%)', width: '40px', height: '40px', borderRadius: '50%', background: 'var(--bg-deep)', border: '2px solid rgba(59, 130, 246, 0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 10 }}>
                {exp.icon}
              </div>

              {/* Empty Space for opposing side */}
              <div className="hidden md-block" style={{ width: '50%' }}></div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        .md-block { display: none; }
        .md-flex { display: none; }
        .timeline-content-pc { width: 100% !important; padding: 0 !important; }
        .mobile-flex-col { flex-direction: column !important; align-items: flex-start !important; gap: 0.5rem !important; }
        .timeline-date { align-self: flex-start !important; color: var(--primary) !important; margin-bottom: 0.5rem; }

        @media (min-width: 768px) {
          .md-block { display: block; }
          .md-flex { display: flex; }
          .timeline-content-pc { width: 50% !important; }
          .timeline-row.flex-row { flex-direction: row !important; }
          .timeline-row.flex-row-reverse { flex-direction: row-reverse !important; }
          
          .mobile-flex-col { flex-direction: row !important; align-items: center !important; gap: 2rem !important; }
          .mobile-flex-col.row-normal { flex-direction: row !important; }
          .mobile-flex-col.row-reverse { flex-direction: row-reverse !important; }
          .timeline-date { color: var(--text-main) !important; margin-bottom: 0 !important; align-self: center !important; }
        }
      `}</style>
    </section>
  );
}
