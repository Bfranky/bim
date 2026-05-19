'use client';

import { useState, useEffect } from 'react';

interface HeroProps { onOrder: () => void; }

export default function Hero({ onOrder }: HeroProps) {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => { const t = setTimeout(() => setLoaded(true), 80); return () => clearTimeout(t); }, []);

  return (
    <section id="home" style={{ minHeight: '100vh', position: 'relative', display: 'flex', alignItems: 'center', overflow: 'hidden', background: '#0a0a0a' }}>

      {/* Background image with overlay */}
      <img
        src="https://images.unsplash.com/photo-1544025162-d76694265947?w=1400&q=80"
        alt="Grilled food"
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0.35 }}
      />

      {/* Gradient overlays */}
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(105deg, rgba(10,10,10,0.97) 40%, rgba(10,10,10,0.5) 100%)' }} />
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '40%', background: 'linear-gradient(to top, #111111, transparent)' }} />

      {/* Fire glow accent */}
      <div style={{ position: 'absolute', top: '20%', right: '15%', width: 500, height: 500, borderRadius: '50%', background: 'radial-gradient(circle, rgba(255,69,0,0.12) 0%, transparent 65%)' }} />

      {/* Diagonal stripe decoration */}
      <div style={{ position: 'absolute', top: 0, right: 0, width: 6, height: '100%', background: 'linear-gradient(to bottom, transparent, var(--fire), transparent)' }} />

      {/* Content */}
      <div style={{ position: 'relative', zIndex: 2, padding: '120px 40px 80px', maxWidth: 780 }}>

        {/* Tag */}
        <div style={{ opacity: loaded ? 1 : 0, animation: loaded ? 'fadeUp 0.5s ease both' : 'none', display: 'flex', alignItems: 'center', gap: 10, marginBottom: 20 }}>
          <span style={{ display: 'inline-block', width: 8, height: 8, background: 'var(--fire)', borderRadius: '50%', animation: 'pulse 2s ease infinite' }} />
          <span style={{ fontFamily: 'Barlow Condensed, sans-serif', color: 'var(--fire)', fontSize: 12, letterSpacing: 5, textTransform: 'uppercase', fontWeight: 700 }}>Now Open · Closes 10 PM</span>
        </div>

        {/* Main headline */}
        <h1 className="display animate-flicker" style={{
          fontSize: 'clamp(72px, 14vw, 160px)',
          lineHeight: 0.9,
          color: '#fff',
          marginBottom: 4,
          opacity: loaded ? 1 : 0,
          animation: loaded ? 'fadeUp 0.6s 0.1s ease both' : 'none',
        }}>
          Bim's
        </h1>
        <h1 className="display" style={{
          fontSize: 'clamp(36px, 7vw, 80px)',
          lineHeight: 1,
          color: 'var(--fire)',
          marginBottom: 4,
          opacity: loaded ? 1 : 0,
          animation: loaded ? 'fadeUp 0.6s 0.2s ease both' : 'none',
        }}>
          Grills N Chops
        </h1>
        <div style={{
          display: 'flex', alignItems: 'center', gap: 16, marginBottom: 32,
          opacity: loaded ? 1 : 0,
          animation: loaded ? 'fadeUp 0.6s 0.3s ease both' : 'none',
        }}>
          <div style={{ height: 2, width: 60, background: 'var(--fire)' }} />
          <span style={{ fontFamily: 'Barlow Condensed, sans-serif', color: 'var(--muted)', fontSize: 14, letterSpacing: 4, textTransform: 'uppercase' }}>Fast Food · Takeaway · Ode-Remo</span>
        </div>

        <p style={{
          fontSize: 18, lineHeight: 1.7, color: 'rgba(255,248,240,0.6)', maxWidth: 480, marginBottom: 44,
          opacity: loaded ? 1 : 0,
          animation: loaded ? 'fadeUp 0.6s 0.4s ease both' : 'none',
        }}>
          Real fire. Real flavour. Come taste the best grills, pepper soup, and chops in Ode-Remo — cooked fresh, served fast.
        </p>

        {/* CTAs */}
        <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', opacity: loaded ? 1 : 0, animation: loaded ? 'fadeUp 0.6s 0.5s ease both' : 'none' }}>
          <button className="btn-fire" onClick={onOrder}>Order Now 🔥</button>
          <a href="#menu"><button className="btn-outline-fire">See Menu</button></a>
        </div>

        {/* Quick info pills */}
        <div style={{ display: 'flex', gap: 20, marginTop: 48, flexWrap: 'wrap', opacity: loaded ? 1 : 0, animation: loaded ? 'fadeUp 0.6s 0.65s ease both' : 'none' }}>
          {[
            { icon: '📞', text: '0903 589 5360' },
            { icon: '📍', text: 'Okeola Olomowewe St, Ode-Remo' },
            { icon: '🕙', text: 'Open till 10 PM' },
          ].map((p, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 8, background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,69,0,0.2)', borderRadius: 40, padding: '8px 16px' }}>
              <span style={{ fontSize: 14 }}>{p.icon}</span>
              <span style={{ fontFamily: 'Barlow Condensed, sans-serif', color: 'rgba(255,248,240,0.7)', fontSize: 13, letterSpacing: 0.5 }}>{p.text}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll cue */}
      <div style={{ position: 'absolute', bottom: 28, left: '50%', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6, opacity: 0.45, animation: 'float 2.5s ease-in-out infinite' }}>
        <div style={{ width: 1, height: 36, background: 'linear-gradient(to bottom, transparent, var(--fire))' }} />
        <span style={{ fontFamily: 'Barlow Condensed, sans-serif', color: 'var(--fire)', fontSize: 10, letterSpacing: 3, textTransform: 'uppercase' }}>Scroll</span>
      </div>

      <style>{`
        @keyframes pulse { 0%,100%{box-shadow:0 0 0 0 rgba(255,69,0,0.5)} 50%{box-shadow:0 0 0 10px rgba(255,69,0,0)} }
        @keyframes float { 0%,100%{transform:translateX(-50%) translateY(0)} 50%{transform:translateX(-50%) translateY(-10px)} }
        @keyframes fadeUp { from{opacity:0;transform:translateY(28px)} to{opacity:1;transform:translateY(0)} }
        @keyframes flicker { 0%,100%{opacity:1} 93%{opacity:0.85} 95%{opacity:1} 97%{opacity:0.88} }
        @media (max-width:768px) { section#home { padding-left: 0; } }
      `}</style>
    </section>
  );
}
