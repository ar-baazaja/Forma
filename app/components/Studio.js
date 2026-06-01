'use client';
import { useEffect, useRef } from 'react';

const STATS = [
  ['15+', 'Years combined experience'],
  ['40+', 'Projects shipped globally'],
  ['3',   'AWWWARDS site of the year'],
];

const SKILLS = [
  'Motion Design', '3D Rendering', 'UI Systems', 'Brand Strategy',
  'Interaction Design', 'Code & Build', 'Art Direction',
  'Digital Experience', 'Visual Identity',
];

function useReveal(className = 'visible') {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) el.classList.add(className); },
      { threshold: 0.15, rootMargin: '-50px' }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [className]);
  return ref;
}

function StatRow({ num, label, delay }) {
  const ref = useReveal();
  return (
    <div className="stat-row" ref={ref} style={{ transitionDelay: (0.3 + delay * 0.1) + 's' }}>
      <span className="stat-num">{num}</span>
      <span className="stat-label">{label}</span>
    </div>
  );
}

function SkillTag({ label, delay }) {
  const ref = useReveal();
  return (
    <span className="skill-tag" ref={ref} style={{ transitionDelay: (0.5 + delay * 0.06) + 's' }}>
      {label.toUpperCase()}
    </span>
  );
}

function RevealEl({ children, delay = 0, style }) {
  const ref = useReveal();
  return (
    <div className="reveal-el" ref={ref} style={{ transitionDelay: delay + 's', ...style }}>
      {children}
    </div>
  );
}

export default function Studio() {
  return (
    <section className="studio-section" id="studio">
      <div className="orb" style={{ left: '80%', top: '50%', width: 600, height: 600, background: '#7c3aed', animationDelay: '-2s' }} />
      <div className="studio-inner">
        <RevealEl>
          <p className="section-eyebrow">003 — THE STUDIO</p>
          <h2 className="section-title" style={{ marginBottom: '4rem' }}>
            We believe design<br /><em>is a living thing</em>
          </h2>
        </RevealEl>

        <div className="studio-grid">
          <RevealEl delay={0.2}>
            <p className="studio-intro">
              Forma is an independent creative studio obsessed with the intersection of motion,
              structure, and meaning. We build digital things that breathe.
            </p>
          </RevealEl>
          <div>
            {STATS.map(([n, l], i) => (
              <StatRow key={n} num={n} label={l} delay={i} />
            ))}
          </div>
        </div>

        <div className="skills-wrap">
          {SKILLS.map((s, i) => (
            <SkillTag key={s} label={s} delay={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
