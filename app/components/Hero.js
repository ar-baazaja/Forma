export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="orb orb1" />
      <div className="orb orb2" />
      <div className="orb orb3" />
      <div className="hero-content">
        <p className="hero-eyebrow">Creative Studio · Est. 2019</p>
        <div className="hero-title">
          <span>F</span><span>O</span><span>R</span><span>M</span><span>A</span>
        </div>
        <div className="hero-divider" />
        <p className="hero-subtitle">We craft digital experiences that move people</p>
        <div className="hero-buttons">
          <button className="btn-primary">VIEW WORK</button>
          <button className="btn-secondary">OUR STORY ↗</button>
        </div>
      </div>
      <div className="scroll-hint">
        <span>SCROLL</span>
        <div className="scroll-line" />
      </div>
    </section>
  );
}
