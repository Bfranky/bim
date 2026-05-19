'use client';

import { useState } from 'react';

interface FormState { name: string; phone: string; message: string; }

export default function Contact() {
  const [form, setForm]           = useState<FormState>({ name: '', phone: '', message: '' });
  const [sent, setSent]           = useState(false);
  const [errors, setErrors]       = useState<Partial<FormState>>({});

  const validate = () => {
    const e: Partial<FormState> = {};
    if (!form.name.trim())  e.name  = 'Required';
    if (!form.phone.trim()) e.phone = 'Required';
    return e;
  };

  const handleSend = () => {
    const e = validate();
    if (Object.keys(e).length) { setErrors(e); return; }
    setSent(true);
    setTimeout(() => { setSent(false); setForm({ name: '', phone: '', message: '' }); }, 4000);
  };

  const inputStyle: React.CSSProperties = {
    width: '100%', padding: '14px 16px',
    background: 'rgba(255,255,255,0.04)',
    border: '1px solid rgba(255,69,0,0.2)',
    color: '#fff', fontSize: 15,
    fontFamily: 'Barlow, sans-serif',
    outline: 'none', borderRadius: 2,
    transition: 'border-color 0.2s',
  };

  const labelStyle: React.CSSProperties = {
    fontFamily: 'Barlow Condensed, sans-serif',
    color: 'var(--fire)', fontSize: 11,
    letterSpacing: 3, textTransform: 'uppercase',
    display: 'block', marginBottom: 8, fontWeight: 700,
  };

  return (
    <section id="contact" style={{ padding: '100px 40px', background: '#111111', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 2, background: 'linear-gradient(90deg,transparent,var(--fire),transparent)' }} />

      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 64 }}>
          <div className="section-tag" style={{ justifyContent: 'center' }}>Come Through</div>
          <h2 className="display" style={{ fontSize: 'clamp(48px,8vw,96px)', color: '#fff', lineHeight: 0.9 }}>
            Find <span style={{ color: 'var(--fire)' }}>Bim's</span>
          </h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.3fr', gap: 60, alignItems: 'start' }}>

          {/* Info panel */}
          <div>
            {[
              { icon: '📍', label: 'Address',  val: 'Okeola Olomowewe Street, Ode-Remo 121116, Ogun State' },
              { icon: '📞', label: 'Phone',    val: '0903 589 5360' },
              { icon: '🕙', label: 'Hours',    val: 'Open Daily · Closes 10:00 PM' },
              { icon: '🛵', label: 'Takeaway', val: 'Takeaway available — call ahead!' },
            ].map((item, i) => (
              <div key={i} style={{ display: 'flex', gap: 16, marginBottom: 28, paddingBottom: 28, borderBottom: i < 3 ? '1px solid rgba(255,69,0,0.08)' : 'none' }}>
                <div style={{ fontSize: 22, minWidth: 36, paddingTop: 2 }}>{item.icon}</div>
                <div>
                  <div style={{ fontFamily: 'Barlow Condensed, sans-serif', color: 'var(--fire)', fontSize: 10, letterSpacing: 3, textTransform: 'uppercase', fontWeight: 700, marginBottom: 5 }}>{item.label}</div>
                  <div style={{ color: 'rgba(255,248,240,0.75)', fontSize: 15, lineHeight: 1.5 }}>{item.val}</div>
                </div>
              </div>
            ))}

            {/* Map embed */}
            <div style={{ borderRadius: 4, overflow: 'hidden', border: '1px solid rgba(255,69,0,0.2)', marginTop: 8 }}>
              <iframe
                title="Bim's Grills N Chops Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963!2d3.68!3d6.88!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sBim%27s+Grills+N+Chops+Ode-Remo!5e0!3m2!1sen!2sng!4v1"
                width="100%" height="200"
                style={{ border: 0, display: 'block', filter: 'invert(90%) hue-rotate(180deg)' }}
                allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <a href="https://maps.google.com/?q=Okeola+Olomowewe+Street+Ode-Remo+Ogun+State" target="_blank" rel="noopener noreferrer"
              style={{ display: 'inline-block', marginTop: 10, color: 'var(--fire)', fontSize: 13, letterSpacing: 1, textDecoration: 'none', fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 700 }}>
              → Open in Google Maps
            </a>
          </div>

          {/* Contact form */}
          <div style={{ background: 'var(--ash)', border: '1px solid rgba(255,69,0,0.12)', borderTop: '3px solid var(--fire)', padding: '40px', borderRadius: 4 }}>
            {sent ? (
              <div style={{ textAlign: 'center', padding: '32px 0' }}>
                <div style={{ fontSize: 52, marginBottom: 16 }}>🔥</div>
                <h3 className="display" style={{ color: 'var(--fire)', fontSize: 40, marginBottom: 12 }}>Message Sent!</h3>
                <p style={{ color: 'var(--muted)', fontSize: 15 }}>We'll get back to you shortly. Come hungry!</p>
              </div>
            ) : (
              <>
                <h3 className="display" style={{ color: '#fff', fontSize: 32, marginBottom: 4 }}>Send a Message</h3>
                <p style={{ color: 'var(--muted)', fontSize: 14, marginBottom: 32 }}>Questions, reservations, or just want to shout out the food — we're here.</p>

                <div style={{ marginBottom: 18 }}>
                  <label style={labelStyle}>Your Name *</label>
                  <input style={inputStyle} placeholder="Full name" value={form.name} onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                    onFocus={(e) => (e.target.style.borderColor = 'var(--fire)')} onBlur={(e) => (e.target.style.borderColor = 'rgba(255,69,0,0.2)')} />
                  {errors.name && <p style={{ color: '#ff6b6b', fontSize: 12, marginTop: 4 }}>{errors.name}</p>}
                </div>

                <div style={{ marginBottom: 18 }}>
                  <label style={labelStyle}>Phone *</label>
                  <input style={inputStyle} placeholder="0803 000 0000" value={form.phone} onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))}
                    onFocus={(e) => (e.target.style.borderColor = 'var(--fire)')} onBlur={(e) => (e.target.style.borderColor = 'rgba(255,69,0,0.2)')} />
                  {errors.phone && <p style={{ color: '#ff6b6b', fontSize: 12, marginTop: 4 }}>{errors.phone}</p>}
                </div>

                <div style={{ marginBottom: 28 }}>
                  <label style={labelStyle}>Message</label>
                  <textarea style={{ ...inputStyle, resize: 'vertical' }} rows={4} placeholder="What would you like to ask or order?" value={form.message}
                    onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                    onFocus={(e) => (e.target.style.borderColor = 'var(--fire)')} onBlur={(e) => (e.target.style.borderColor = 'rgba(255,69,0,0.2)')} />
                </div>

                <button className="btn-fire" onClick={handleSend} style={{ width: '100%', padding: '16px', fontSize: 14, clipPath: 'none', borderRadius: 2 }}>
                  Send Message 🔥
                </button>

                <p style={{ textAlign: 'center', color: 'var(--muted)', fontSize: 13, marginTop: 16 }}>
                  Or call us directly: <a href="tel:09035895360" style={{ color: 'var(--fire)', textDecoration: 'none', fontWeight: 600 }}>0903 589 5360</a>
                </p>
              </>
            )}
          </div>
        </div>
      </div>

      <style>{`
        @media(max-width:768px){ #contact > div > div:last-child { grid-template-columns:1fr!important; } }
        @media(max-width:600px){ #contact { padding:80px 20px!important; } }
      `}</style>
    </section>
  );
}
