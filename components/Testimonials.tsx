'use client';

import { useState, useEffect } from 'react';

const reviews = [
  { name: 'Adewale T.',    stars: 5, text: "The grilled chicken here is something else! Smoky, well-seasoned, and the portion is generous. Best fast food in Ode-Remo by far.", time: '2 weeks ago' },
  { name: 'Blessing O.',   stars: 5, text: "I drove all the way from Sagamu just for Bim's pepper soup and suya. Worth every kilometre. The food is always fresh and hot.", time: '1 month ago' },
  { name: 'Tunde K.',      stars: 5, text: "The peppered gizzard is absolutely fire 🔥. I order it every weekend. Service is fast and the staff are friendly. Highly recommend!", time: '3 weeks ago' },
  { name: 'Chisom A.',     stars: 5, text: "Finally a proper grill spot in Remo! The pork chops and fries combo hit different. Open till 10 PM is a huge plus for late-night cravings.", time: '5 days ago' },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setCurrent((c) => (c + 1) % reviews.length), 5500);
    return () => clearInterval(t);
  }, []);

  const r = reviews[current];

  return (
    <section id="reviews" style={{ padding: '100px 40px', background: '#0d0d0d', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', top: '30%', left: '50%', transform: 'translate(-50%,-50%)', width: 600, height: 600, borderRadius: '50%', background: 'radial-gradient(circle, rgba(255,69,0,0.05) 0%, transparent 70%)', pointerEvents: 'none' }} />

      <div style={{ maxWidth: 900, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 64 }}>
          <div className="section-tag" style={{ justifyContent: 'center' }}>Customer Love</div>
          <h2 className="display" style={{ fontSize: 'clamp(48px,8vw,96px)', color: '#fff', lineHeight: 0.9 }}>
            They <span style={{ color: 'var(--fire)' }}>Said It</span>
          </h2>
        </div>

        {/* Big quote */}
        <div style={{ background: 'var(--ash)', border: '1px solid rgba(255,69,0,0.15)', borderLeft: '4px solid var(--fire)', padding: '48px', position: 'relative', marginBottom: 32, minHeight: 180 }}>
          <div style={{ fontFamily: 'Bebas Neue, cursive', fontSize: 100, color: 'var(--fire)', opacity: 0.12, position: 'absolute', top: 0, left: 24, lineHeight: 1 }}>"</div>
          <p style={{ fontFamily: 'Barlow Condensed, sans-serif', fontStyle: 'italic', fontSize: 'clamp(18px,3vw,26px)', color: '#fff', lineHeight: 1.6, position: 'relative', zIndex: 1, marginBottom: 28 }}>
            "{r.text}"
          </p>
          <div style={{ display: 'flex', alignItems: 'center', gap: 14, flexWrap: 'wrap' }}>
            <div style={{ width: 42, height: 42, borderRadius: '50%', background: 'var(--fire)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'Bebas Neue, cursive', fontSize: 20, color: '#fff', flexShrink: 0 }}>
              {r.name[0]}
            </div>
            <div>
              <div style={{ fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 700, color: '#fff', fontSize: 16, letterSpacing: 1 }}>{r.name}</div>
              <div style={{ color: 'var(--muted)', fontSize: 12 }}>{r.time}</div>
            </div>
            <div style={{ marginLeft: 'auto', color: 'var(--fire)', fontSize: 18 }}>{'★'.repeat(r.stars)}</div>
          </div>
        </div>

        {/* Dot nav */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: 10, marginBottom: 56 }}>
          {reviews.map((_, i) => (
            <button key={i} onClick={() => setCurrent(i)} style={{ width: i === current ? 28 : 10, height: 10, borderRadius: 5, border: 'none', cursor: 'pointer', background: i === current ? 'var(--fire)' : 'rgba(255,69,0,0.25)', transition: 'all 0.3s' }} />
          ))}
        </div>

        {/* All reviews mini grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(200px,1fr))', gap: 16 }}>
          {reviews.map((rv, i) => (
            <div key={i} onClick={() => setCurrent(i)} className="card-dark"
              style={{ padding: '20px', borderRadius: 4, cursor: 'pointer', opacity: current === i ? 1 : 0.55, transition: 'opacity 0.3s, transform 0.3s', transform: current === i ? 'scale(1.02)' : 'scale(1)' }}>
              <div style={{ color: 'var(--fire)', fontSize: 13, marginBottom: 8 }}>{'★'.repeat(rv.stars)}</div>
              <p style={{ color: 'rgba(255,248,240,0.7)', fontSize: 13, lineHeight: 1.6, marginBottom: 12 }}>"{rv.text.substring(0, 70)}..."</p>
              <div style={{ fontFamily: 'Barlow Condensed, sans-serif', color: 'var(--fire)', fontSize: 12, letterSpacing: 2, textTransform: 'uppercase', fontWeight: 700 }}>{rv.name}</div>
            </div>
          ))}
        </div>
      </div>

      <style>{`@media(max-width:600px){ #reviews{padding:80px 20px!important} }`}</style>
    </section>
  );
}
