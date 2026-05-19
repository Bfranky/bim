'use client';

import { useState } from 'react';

const navLinks = ['Menu', 'About', 'Gallery', 'Contact'];

export default function Footer() {
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

  return (
    <footer style={{ background: '#0a0a0a', borderTop: '1px solid rgba(255,69,0,0.15)', padding: '60px 40px 28px' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>

        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', gap: 48, marginBottom: 48 }}>

          {/* Brand */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 20 }}>
              <div style={{ width: 42, height: 42, background: 'var(--fire)', clipPath: 'polygon(50% 0%,100% 25%,100% 75%,50% 100%,0% 75%,0% 25%)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{ fontFamily: 'Bebas Neue, cursive', color: '#fff', fontSize: 20, letterSpacing: 1 }}>B</span>
              </div>
              <div>
                <div style={{ fontFamily: 'Bebas Neue, cursive', color: '#fff', fontSize: 22, lineHeight: 1, letterSpacing: 2 }}>Bim's Grills N Chops</div>
                <div style={{ fontFamily: 'Barlow Condensed, sans-serif', color: 'var(--fire)', fontSize: 9, letterSpacing: 4, textTransform: 'uppercase' }}>Fast Food · Ode-Remo · Ogun State</div>
              </div>
            </div>
            <p style={{ color: 'var(--muted)', fontSize: 14, lineHeight: 1.8, maxWidth: 300 }}>
              Real fire. Real flavour. The best grills and chops in Ode-Remo — served fresh daily until 10 PM.
            </p>
            {/* Social icons */}
            <div style={{ display: 'flex', gap: 10, marginTop: 24 }}>
              {[
                { label: 'WA', href: 'https://wa.me/2349035895360' },
                { label: 'FB', href: '#' },
                { label: 'IG', href: '#' },
              ].map((s, i) => (
                <a key={i} href={s.href} target="_blank" rel="noopener noreferrer"
                  style={{ width: 38, height: 38, borderRadius: '50%', border: '1px solid rgba(255,69,0,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--fire)', fontSize: 11, fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 700, textDecoration: 'none', transition: 'all 0.2s', letterSpacing: 0.5 }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = 'var(--fire)'; (e.currentTarget as HTMLElement).style.color = '#fff'; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = 'transparent'; (e.currentTarget as HTMLElement).style.color = 'var(--fire)'; }}
                >{s.label}</a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 style={{ fontFamily: 'Barlow Condensed, sans-serif', color: 'var(--fire)', fontSize: 11, letterSpacing: 3, textTransform: 'uppercase', marginBottom: 20, fontWeight: 700 }}>Navigate</h4>
            {navLinks.map((l) => (
              <a key={l} href={`#${l.toLowerCase()}`}
                onMouseEnter={() => setHoveredLink(l)}
                onMouseLeave={() => setHoveredLink(null)}
                style={{ display: 'block', color: hoveredLink === l ? 'var(--fire)' : 'var(--muted)', fontFamily: 'Barlow Condensed, sans-serif', fontSize: 15, textDecoration: 'none', marginBottom: 10, letterSpacing: 1, transition: 'color 0.2s' }}
              >{l}</a>
            ))}
          </div>

          {/* Contact */}
          <div>
            <h4 style={{ fontFamily: 'Barlow Condensed, sans-serif', color: 'var(--fire)', fontSize: 11, letterSpacing: 3, textTransform: 'uppercase', marginBottom: 20, fontWeight: 700 }}>Contact</h4>
            <p style={{ color: 'var(--muted)', fontSize: 14, lineHeight: 2 }}>
              <a href="tel:09035895360" style={{ color: 'var(--cream)', textDecoration: 'none' }}>0903 589 5360</a><br />
              Okeola Olomowewe St<br />
              Ode-Remo, Ogun State<br />
              <span style={{ color: 'rgba(255,248,240,0.3)', fontSize: 12 }}>Open Daily · Closes 10 PM</span>
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{ borderTop: '1px solid rgba(255,69,0,0.08)', paddingTop: 24, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12 }}>
          <p style={{ color: 'rgba(255,248,240,0.25)', fontSize: 13 }}>© 2025 Bim's Grills N Chops · All rights reserved</p>
          <p style={{ color: 'rgba(255,248,240,0.25)', fontSize: 13 }}>Ode-Remo, Ogun State, Nigeria 🇳🇬</p>
        </div>
      </div>

      <style>{`
        @media(max-width:768px){ footer > div > div:first-child { grid-template-columns:1fr!important; } }
      `}</style>
    </footer>
  );
}
