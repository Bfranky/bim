'use client';

import { useState, useEffect } from 'react';

interface NavbarProps { onOrder: () => void; }

const links = ['Menu', 'About', 'Gallery', 'Contact'];

export default function Navbar({ onOrder }: NavbarProps) {
  const [scrolled,  setScrolled]  = useState(false);
  const [menuOpen,  setMenuOpen]  = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  const base: React.CSSProperties = {
    position:     'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
    height:       '68px',
    display:      'flex', alignItems: 'center', justifyContent: 'space-between',
    padding:      '0 40px',
    transition:   'all 0.4s ease',
    background:   scrolled ? 'rgba(17,17,17,0.97)' : 'transparent',
    borderBottom: scrolled ? '1px solid rgba(255,69,0,0.15)' : 'none',
    backdropFilter: scrolled ? 'blur(12px)' : 'none',
  };

  return (
    <>
      <nav style={base}>
        {/* Logo */}
        <a href="#home" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 10 }}>
          <div style={{ width: 38, height: 38, background: 'var(--fire)', clipPath: 'polygon(50% 0%,100% 25%,100% 75%,50% 100%,0% 75%,0% 25%)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <span style={{ fontFamily: 'Bebas Neue, cursive', color: '#fff', fontSize: 18, letterSpacing: 1 }}>B</span>
          </div>
          <div>
            <div style={{ fontFamily: 'Bebas Neue, cursive', color: '#fff', fontSize: 20, lineHeight: 1, letterSpacing: 2 }}>Bim's Grills</div>
            <div style={{ fontFamily: 'Barlow Condensed, sans-serif', color: 'var(--fire)', fontSize: 9, letterSpacing: 4, textTransform: 'uppercase' }}>N Chops</div>
          </div>
        </a>

        {/* Desktop nav */}
        <div className="nav-desktop" style={{ display: 'flex', gap: 36, alignItems: 'center' }}>
          {links.map((l) => (
            <a key={l} href={`#${l.toLowerCase()}`}
              style={{ color: 'rgba(255,248,240,0.75)', textDecoration: 'none', fontFamily: 'Barlow Condensed, sans-serif', fontSize: 14, letterSpacing: 2, textTransform: 'uppercase', fontWeight: 600, transition: 'color 0.2s' }}
              onMouseEnter={(e) => ((e.target as HTMLElement).style.color = 'var(--fire)')}
              onMouseLeave={(e) => ((e.target as HTMLElement).style.color = 'rgba(255,248,240,0.75)')}
            >{l}</a>
          ))}
          <button className="btn-fire" onClick={onOrder} style={{ padding: '10px 24px', fontSize: 13 }}>Order Now</button>
        </div>

        {/* Hamburger */}
        <button onClick={() => setMenuOpen(!menuOpen)} className="hamburger"
          style={{ display: 'none', background: 'none', border: 'none', cursor: 'pointer', flexDirection: 'column', gap: 5, padding: 4 }}>
          {[0,1,2].map((i) => (
            <span key={i} style={{ display: 'block', width: 24, height: 2, background: 'var(--fire)', transition: 'all 0.3s', transform: menuOpen && i===1 ? 'scaleX(0)' : 'none' }} />
          ))}
        </button>
      </nav>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div style={{ position: 'fixed', top: 68, left: 0, right: 0, background: 'rgba(17,17,17,0.98)', borderBottom: '2px solid var(--fire)', padding: '24px 40px', display: 'flex', flexDirection: 'column', gap: 20, zIndex: 999 }}>
          {links.map((l) => (
            <a key={l} href={`#${l.toLowerCase()}`} onClick={() => setMenuOpen(false)}
              style={{ color: 'var(--cream)', textDecoration: 'none', fontFamily: 'Bebas Neue, cursive', fontSize: 28, letterSpacing: 3 }}>
              {l}
            </a>
          ))}
          <button className="btn-fire" onClick={() => { setMenuOpen(false); onOrder(); }} style={{ width: 'fit-content', marginTop: 8 }}>Order Now</button>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) { .nav-desktop{display:none!important} .hamburger{display:flex!important} }
      `}</style>
    </>
  );
}
