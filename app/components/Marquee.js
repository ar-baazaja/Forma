const MARQUEE_ITEMS = ['Motion', '·', '3D Design', '·', 'Interaction', '·', 'Brand', '·', 'Code', '·', 'Creative', '·'];
const ITEMS = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS, ...MARQUEE_ITEMS, ...MARQUEE_ITEMS];

export default function Marquee() {
  return (
    <div className="marquee-strip">
      <div className="marquee-track">
        {ITEMS.map((item, i) => (
          <span key={i} className={item === '·' ? 'dot' : ''}>{item}</span>
        ))}
      </div>
    </div>
  );
}
