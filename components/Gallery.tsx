'use client';
 
import { useState } from 'react';
 
interface GItem { label: string; img: string; thumb: string; tall?: boolean; }
 
// All URLs use ?auto=format&fit=crop for maximum reliability on Vercel
const shots: GItem[] = [
  {
    label: 'Suya on the Grill',
    tall:  true,
    img:   'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=900&q=80',
    thumb: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=400&q=70',
  },
  {
    label: 'Peppered Chicken',
    img:   'https://images.unsplash.com/photo-1598103442097-8b74394b95c7?auto=format&fit=crop&w=700&q=80',
    thumb: 'https://images.unsplash.com/photo-1598103442097-8b74394b95c7?auto=format&fit=crop&w=350&q=70',
  },
  {
    label: 'Grilled Fish',
    img:   'https://images.unsplash.com/photo-1510130387422-82bed34b37e9?auto=format&fit=crop&w=700&q=80',
    thumb: 'https://images.unsplash.com/photo-1510130387422-82bed34b37e9?auto=format&fit=crop&w=350&q=70',
  },
  {
    label: 'Pork Chops',
    tall:  true,
    img:   'https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?auto=format&fit=crop&w=900&q=80',
    thumb: 'https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?auto=format&fit=crop&w=400&q=70',
  },
  {
    label: 'Pepper Soup',
    img:   'https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=700&q=80',
    thumb: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=350&q=70',
  },
  {
    label: 'Chicken Wings',
    img:   'https://images.unsplash.com/photo-1527477396000-e27163b481c2?auto=format&fit=crop&w=700&q=80',
    thumb: 'https://images.unsplash.com/photo-1527477396000-e27163b481c2?auto=format&fit=crop&w=350&q=70',
  },
];
 
export default function Gallery() {
  const [hovered,  setHovered]  = useState<number | null>(null);
  const [lightbox, setLightbox] = useState<number | null>(null);
 
  const close = () => setLightbox(null);
  const prev  = () => setLightbox((l) => l !== null ? (l - 1 + shots.length) % shots.length : null);
  const next  = () => setLightbox((l) => l !== null ? (l + 1) % shots.length : null);
 
  return (
    <>
      <section id="gallery" style={{ padding: '100px 40px', background: '#111111' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
 
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 56, flexWrap: 'wrap', gap: 20 }}>
            <div>
              <div className="section-tag">The Goods</div>
              <h2 className="display" style={{ fontSize: 'clamp(48px,8vw,96px)', color: '#fff', lineHeight: 0.9 }}>
                Food<br /><span style={{ color: 'var(--fire)' }}>Porn 🔥</span>
              </h2>
            </div>
            <p style={{ color: 'var(--muted)', fontSize: 15, maxWidth: 300, lineHeight: 1.7 }}>
              Hover to preview. Click to go full screen. Try not to get hungry.
            </p>
          </div>
 
          {/* Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gridAutoRows: '220px', gap: 12 }}>
            {shots.map((s, i) => (
              <div key={i}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
                onClick={() => setLightbox(i)}
                style={{
                  position: 'relative', overflow: 'hidden', borderRadius: 4, cursor: 'pointer',
                  gridRow: s.tall ? 'span 2' : 'span 1',
                  border: hovered === i ? '2px solid var(--fire)' : '2px solid transparent',
                  transition: 'border-color 0.3s',
                  background: '#2a2a2a',
                }}>
 
                <img
                  src={s.thumb}
                  alt={s.label}
                  loading="lazy"
                  style={{
                    width: '100%', height: '100%', objectFit: 'cover', display: 'block',
                    transition: 'transform 0.55s ease, filter 0.4s ease',
                    transform: hovered === i ? 'scale(1.1)' : 'scale(1)',
                    filter: hovered === i ? 'brightness(0.4)' : 'brightness(0.8)',
                  }}
                />
 
                {/* Resting label */}
                <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '32px 16px 14px', background: 'linear-gradient(to top,rgba(0,0,0,0.85),transparent)', opacity: hovered === i ? 0 : 1, transition: 'opacity 0.3s' }}>
                  <p style={{ fontFamily: 'Barlow Condensed, sans-serif', color: '#fff', fontSize: 13, letterSpacing: 2, textTransform: 'uppercase', fontWeight: 700 }}>{s.label}</p>
                </div>
 
                {/* Hover overlay */}
                <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: 20, textAlign: 'center', opacity: hovered === i ? 1 : 0, transition: 'opacity 0.35s', background: 'rgba(255,69,0,0.18)' }}>
                  <div style={{ width: 48, height: 48, border: '2px solid var(--fire)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--fire)', fontSize: 20, marginBottom: 12 }}>⤢</div>
                  <p style={{ fontFamily: 'Barlow Condensed, sans-serif', color: '#fff', fontSize: 14, letterSpacing: 2, textTransform: 'uppercase', fontWeight: 700 }}>{s.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
 
      {/* Lightbox */}
      {lightbox !== null && (
        <div onClick={close} style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.95)', zIndex: 3000, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 16, backdropFilter: 'blur(8px)', animation: 'lbIn 0.3s ease' }}>
          <div onClick={(e) => e.stopPropagation()} style={{ position: 'relative', maxWidth: 860, width: '100%', background: '#1a1a1a', borderRadius: 6, overflow: 'hidden', border: '1px solid rgba(255,69,0,0.3)', animation: 'lbUp 0.35s ease' }}>
            <img
              src={shots[lightbox].img}
              alt={shots[lightbox].label}
              style={{ width: '100%', maxHeight: '70vh', objectFit: 'cover', display: 'block' }}
            />
            <div style={{ padding: '16px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <p style={{ fontFamily: 'Barlow Condensed, sans-serif', color: 'var(--fire)', fontSize: 14, letterSpacing: 3, textTransform: 'uppercase', fontWeight: 700 }}>{shots[lightbox].label}</p>
              <span style={{ color: 'var(--muted)', fontSize: 13 }}>{lightbox + 1} / {shots.length}</span>
            </div>
            {/* Dots */}
            <div style={{ display: 'flex', justifyContent: 'center', gap: 8, paddingBottom: 20 }}>
              {shots.map((_, i) => (
                <button key={i} onClick={() => setLightbox(i)}
                  style={{ width: i === lightbox ? 24 : 8, height: 8, borderRadius: 4, border: 'none', cursor: 'pointer', background: i === lightbox ? 'var(--fire)' : 'rgba(255,69,0,0.25)', transition: 'all 0.3s' }} />
              ))}
            </div>
            <button onClick={prev} style={{ position: 'absolute', left: 12, top: '42%', transform: 'translateY(-50%)', background: 'rgba(255,69,0,0.15)', border: '1px solid rgba(255,69,0,0.4)', color: 'var(--fire)', fontSize: 22, width: 44, height: 44, borderRadius: '50%', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>‹</button>
            <button onClick={next} style={{ position: 'absolute', right: 12, top: '42%', transform: 'translateY(-50%)', background: 'rgba(255,69,0,0.15)', border: '1px solid rgba(255,69,0,0.4)', color: 'var(--fire)', fontSize: 22, width: 44, height: 44, borderRadius: '50%', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>›</button>
            <button onClick={close} style={{ position: 'absolute', top: 12, right: 12, background: 'rgba(0,0,0,0.7)', border: '1px solid rgba(255,69,0,0.3)', color: 'var(--fire)', fontSize: 17, width: 36, height: 36, borderRadius: '50%', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>✕</button>
          </div>
        </div>
      )}
 
      <style>{`
        @keyframes lbIn { from{opacity:0} to{opacity:1} }
        @keyframes lbUp { from{opacity:0;transform:translateY(28px)} to{opacity:1;transform:translateY(0)} }
        @media(max-width:900px){ #gallery div[style*="repeat(3"] { grid-template-columns:repeat(2,1fr)!important; } }
        @media(max-width:520px){ #gallery div[style*="repeat(3"] { grid-template-columns:1fr!important; } #gallery div[style*="span 2"]{grid-row:span 1!important;} }
        @media(max-width:600px){ #gallery { padding:80px 20px!important; } }
      `}</style>
    </>
  );
}
 