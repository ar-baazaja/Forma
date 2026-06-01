'use client';
import { useEffect, useRef } from 'react';

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

export default function Contact() {
  const titleRef = useReveal();
  const btnRef = useReveal();
  const eyebrowRef = useReveal();

  return (
    <section className="contact-section" id="contact">
      <p className="section-eyebrow reveal-el" ref={eyebrowRef}>004 — CONTACT</p>
      <h2 className="contact-title" ref={titleRef}>
        Let&apos;s make<br /><em>something</em><br />together
      </h2>
      <a href="mailto:hello@forma.studio" className="contact-btn" ref={btnRef}>
        HELLO@FORMA.STUDIO
      </a>
    </section>
  );
}
