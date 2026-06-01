'use client';
import { useEffect, useState } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <nav id="mainNav" className={scrolled ? 'scrolled' : ''}>
      <span className="nav-logo">FORMA</span>
      <div className="nav-links">
        <a href="#home">Home</a>
        <a href="#work">Work</a>
        <a href="#studio">Studio</a>
        <a href="#contact">Contact</a>
      </div>
      <button className="nav-cta">START A PROJECT</button>
    </nav>
  );
}
