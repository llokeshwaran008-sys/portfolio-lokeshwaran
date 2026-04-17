import { motion } from 'framer-motion';

export default function Skills() {
  const skillCategories = [
    {
      title: "Frontend:",
      skills: [
        { name: "HTML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
        { name: "CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
        { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
        { name: "React JS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" }
      ]
    },
    {
      title: "Backend:",
      skills: [
        { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
        { name: "Django", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg" },
        { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
        { name: "Supabase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/supabase/supabase-original.svg" }
      ]
    },
    {
      title: "Tools:",
      skills: [
        { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg", style: { filter: 'invert(1)' } },
        { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" }
      ]
    }
  ];

  return (
    <section id="skills" className="section-container" style={{ paddingTop: '8rem', paddingBottom: '4rem' }}>
      <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '2.5rem', fontWeight: 700, color: 'var(--primary)', textShadow: '0 0 10px var(--primary-glow)' }}>
          SYSTEM <span style={{ color: 'var(--text-main)' }}>CAPABILITIES</span>
        </h2>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', maxWidth: '1100px', margin: '0 auto' }}>
        {skillCategories.map((category, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="glass-panel"
            style={{
              padding: '2rem',
              height: '100%',
              borderTop: '1px solid var(--primary)',
              borderBottom: '1px solid var(--secondary)',
              borderRadius: '16px'
            }}
          >
            <h3 style={{ 
              color: 'var(--primary)', 
              fontSize: '1.25rem', 
              fontWeight: 600, 
              marginBottom: '2rem',
              display: 'inline-block',
              borderBottom: '2px solid var(--primary)',
              paddingBottom: '0.25rem'
            }}>
              {category.title}
            </h3>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem 1rem' }}>
              {category.skills.map((skill, j) => (
                <motion.div 
                  key={j} 
                  whileHover={{ scale: 1.15, rotateX: 15, rotateY: 15, z: 20 }}
                  transition={{ type: "spring", stiffness: 300, damping: 15 }}
                  style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.75rem', cursor: 'pointer', transformStyle: 'preserve-3d', perspective: 1000 }}
                >
                  <motion.img 
                    whileHover={{ filter: "drop-shadow(0px 0px 15px var(--primary))" }}
                    src={skill.icon} alt={skill.name} style={{ width: '40px', height: '40px', objectFit: 'contain', ...(skill.style || {}) }} 
                  />
                  <span style={{ color: 'var(--text-main)', fontSize: '0.75rem', fontWeight: 600, textAlign: 'center', transform: 'translateZ(10px)', fontFamily: 'var(--font-heading)', letterSpacing: '1px' }}>{skill.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
