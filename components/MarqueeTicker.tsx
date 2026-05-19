'use client';

const items = [
  '🔥 Grilled Chicken',
  '🍖 Suya',
  '🥩 Pork Chops',
  '🐟 Grilled Fish',
  '🍗 Peppered Gizzard',
  '🥘 Pepper Soup',
  '🍟 Chips & Fries',
  '🫙 Sharwarma',
  '🥤 Cold Drinks',
  '🔥 Grilled Chicken',
  '🍖 Suya',
  '🥩 Pork Chops',
  '🐟 Grilled Fish',
  '🍗 Peppered Gizzard',
  '🥘 Pepper Soup',
  '🍟 Chips & Fries',
  '🫙 Sharwarma',
  '🥤 Cold Drinks',
];

export default function MarqueeTicker() {
  return (
    <div style={{ background: 'var(--fire)', overflow: 'hidden', padding: '12px 0', position: 'relative', zIndex: 10 }}>
      <div style={{ display: 'flex', animation: 'marquee 22s linear infinite', whiteSpace: 'nowrap', width: 'max-content' }}>
        {items.map((item, i) => (
          <span key={i} style={{ fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 700, fontSize: 14, letterSpacing: 3, textTransform: 'uppercase', color: '#fff', paddingRight: 48 }}>
            {item}
          </span>
        ))}
      </div>
      <style>{`
        @keyframes marquee { from{transform:translateX(0)} to{transform:translateX(-50%)} }
      `}</style>
    </div>
  );
}
