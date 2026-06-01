'use client';
import { useEffect, useRef } from 'react';

const PROJECTS = [
  { id: 1, title: 'Nebula OS',    category: 'Interface Design',   year: '2024', bg: '#0a0a0f', accent: '#7c3aed', tag: 'UI/UX' },
  { id: 2, title: 'Atlas Maps',   category: 'Data Visualization', year: '2024', bg: '#0f0a0a', accent: '#e11d48', tag: 'Dev' },
  { id: 3, title: 'Drift Sound',  category: 'Brand Identity',     year: '2023', bg: '#0a0f0a', accent: '#059669', tag: 'Brand' },
  { id: 4, title: 'Kova Finance', category: 'Product Design',     year: '2023', bg: '#0a0c0f', accent: '#f59e0b', tag: 'Product' },
];

function ProjectRow({ project, delay }) {
  const rowRef = useRef(null);

  useEffect(() => {
    const el = rowRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) el.classList.add('visible'); },
      { threshold: 0.15, rootMargin: '-50px' }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const num = String(project.id).padStart(2, '0');

  return (
    <div
      className="project-row"
      ref={rowRef}
      style={{ transitionDelay: delay + 's' }}
    >
      <div
        className="project-preview"
        style={{ background: project.bg, border: `1px solid ${project.accent}22` }}
      >
        <div
          className="preview-glow"
          style={{ background: `radial-gradient(circle,${project.accent}66,transparent)` }}
        />
        <span className="preview-num" style={{ color: project.accent }}>{num}</span>
      </div>
      <div className="project-inner">
        <span className="project-num">{num}</span>
        <h3 className="project-title">{project.title}</h3>
        <div className="project-meta">
          <span
            className="project-tag"
            style={{ border: `1px solid ${project.accent}44`, color: project.accent }}
          >
            {project.tag}
          </span>
          <span className="project-year">{project.year}</span>
          <span className="project-arrow">→</span>
        </div>
      </div>
    </div>
  );
}

export default function Work() {
  return (
    <section className="work-section" id="work">
      <div className="section-header">
        <div>
          <p className="section-eyebrow">002 — SELECTED WORK</p>
          <h2 className="section-title">Recent<br /><em>Projects</em></h2>
        </div>
        <a href="#" className="section-link">ALL WORK →</a>
      </div>
      <div>
        {PROJECTS.map((p, i) => (
          <ProjectRow key={p.id} project={p} delay={i * 0.1} />
        ))}
      </div>
    </section>
  );
}
