'use client';

import { useState } from 'react';

interface OrderModalProps { open: boolean; onClose: () => void; }

interface OrderData { item: string; qty: string; name: string; phone: string; note: string; }

const menuItems = [
  'Grilled Chicken','Grilled Fish','Suya','Pork Chops',
  'Peppered Gizzard','Peppered Snail','Chicken Wings','Fried Pork Belly',
  'Pepper Soup','Chips & Fries','Sharwarma','Other / Multiple Items',
];

const inputStyle: React.CSSProperties = {
  width: '100%', padding: '13px 14px',
  background: 'rgba(255,255,255,0.05)',
  border: '1px solid rgba(255,69,0,0.25)',
  color: '#fff', fontSize: 14,
  fontFamily: 'Barlow, sans-serif',
  outline: 'none', borderRadius: 2, transition: 'border-color 0.2s',
};
const labelStyle: React.CSSProperties = {
  fontFamily: 'Barlow Condensed, sans-serif', color: 'var(--fire)',
  fontSize: 10, letterSpacing: 3, textTransform: 'uppercase',
  display: 'block', marginBottom: 8, fontWeight: 700,
};

export default function OrderModal({ open, onClose }: OrderModalProps) {
  const [step, setStep] = useState(1);
  const [data, setData] = useState<OrderData>({ item: '', qty: '1', name: '', phone: '', note: '' });
  const [done, setDone] = useState(false);

  if (!open) return null;

  const reset = () => { setDone(false); setStep(1); setData({ item: '', qty: '1', name: '', phone: '', note: '' }); onClose(); };

  const confirm = () => {
    if (!data.name || !data.phone) return;
    setDone(true);
    setTimeout(reset, 3500);
  };

  const set = (k: keyof OrderData) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setData((d) => ({ ...d, [k]: e.target.value }));

  return (
    <div onClick={(e) => e.target === e.currentTarget && reset()}
      style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.92)', zIndex: 2000, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 20, backdropFilter: 'blur(6px)', animation: 'lbIn 0.3s ease' }}>
      <div onClick={(e) => e.stopPropagation()}
        style={{ background: '#1a1a1a', width: '100%', maxWidth: 500, borderRadius: 4, overflow: 'hidden', border: '1px solid rgba(255,69,0,0.25)', animation: 'lbUp 0.35s ease' }}>

        {/* Header */}
        <div style={{ background: 'var(--fire)', padding: '20px 28px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <h3 className="display" style={{ color: '#fff', fontSize: 28, lineHeight: 1 }}>Place Your Order</h3>
            <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: 12, marginTop: 4, fontFamily: 'Barlow Condensed, sans-serif', letterSpacing: 1 }}>Bim's Grills N Chops · 0903 589 5360</p>
          </div>
          <button onClick={reset} style={{ background: 'none', border: 'none', color: '#fff', fontSize: 22, cursor: 'pointer', opacity: 0.7 }}>✕</button>
        </div>

        {/* Progress */}
        <div style={{ display: 'flex', gap: 4, padding: '14px 28px 0' }}>
          {[1,2].map((s) => (
            <div key={s} style={{ flex: 1, height: 3, borderRadius: 2, background: step >= s ? 'var(--fire)' : 'rgba(255,69,0,0.15)', transition: 'background 0.3s' }} />
          ))}
        </div>

        <div style={{ padding: '24px 28px 28px' }}>
          {done ? (
            <div style={{ textAlign: 'center', padding: '24px 0' }}>
              <div style={{ fontSize: 52, marginBottom: 12 }}>🔥</div>
              <h3 className="display" style={{ color: 'var(--fire)', fontSize: 36, marginBottom: 8 }}>Order Received!</h3>
              <p style={{ color: 'var(--muted)', fontSize: 14, lineHeight: 1.7 }}>
                We'll call <strong style={{ color: '#fff' }}>{data.phone}</strong> shortly to confirm your order. Come hungry!
              </p>
            </div>
          ) : step === 1 ? (
            <>
              <p style={{ color: 'var(--muted)', fontSize: 12, marginBottom: 20, fontFamily: 'Barlow Condensed, sans-serif', letterSpacing: 2, textTransform: 'uppercase' }}>Step 1 of 2 — Your Order</p>
              <div style={{ marginBottom: 16 }}>
                <label style={labelStyle}>What are you ordering?</label>
                <select style={inputStyle} value={data.item} onChange={set('item')}>
                  <option value="">Select a menu item</option>
                  {menuItems.map((m) => <option key={m}>{m}</option>)}
                </select>
              </div>
              <div style={{ marginBottom: 24 }}>
                <label style={labelStyle}>Quantity / Portions</label>
                <select style={inputStyle} value={data.qty} onChange={set('qty')}>
                  {['1','2','3','4','5','6+'].map((q) => <option key={q}>{q}</option>)}
                </select>
              </div>
              <div style={{ marginBottom: 24 }}>
                <label style={labelStyle}>Special Instructions (optional)</label>
                <textarea style={{ ...inputStyle, resize: 'none' }} rows={2} placeholder="E.g. Extra spicy, no onions..." value={data.note} onChange={set('note')} />
              </div>
              <button className="btn-fire" onClick={() => setStep(2)} style={{ width: '100%', padding: 14, clipPath: 'none', borderRadius: 2 }}>Continue →</button>
            </>
          ) : (
            <>
              <p style={{ color: 'var(--muted)', fontSize: 12, marginBottom: 20, fontFamily: 'Barlow Condensed, sans-serif', letterSpacing: 2, textTransform: 'uppercase' }}>Step 2 of 2 — Contact Details</p>
              <div style={{ background: 'rgba(255,69,0,0.07)', border: '1px solid rgba(255,69,0,0.15)', padding: '12px 16px', borderRadius: 2, marginBottom: 20 }}>
                <p style={{ color: 'var(--muted)', fontSize: 13 }}>
                  Order: <strong style={{ color: '#fff' }}>{data.item || 'Mixed order'}</strong> × {data.qty}
                  {data.note && <><br /><span style={{ fontSize: 12 }}>Note: {data.note}</span></>}
                </p>
              </div>
              <div style={{ marginBottom: 16 }}>
                <label style={labelStyle}>Your Name *</label>
                <input style={inputStyle} placeholder="Full name" value={data.name} onChange={set('name')} onFocus={(e) => (e.target.style.borderColor='var(--fire)')} onBlur={(e) => (e.target.style.borderColor='rgba(255,69,0,0.25)')} />
              </div>
              <div style={{ marginBottom: 24 }}>
                <label style={labelStyle}>Phone Number *</label>
                <input style={inputStyle} placeholder="0803 000 0000" value={data.phone} onChange={set('phone')} onFocus={(e) => (e.target.style.borderColor='var(--fire)')} onBlur={(e) => (e.target.style.borderColor='rgba(255,69,0,0.25)')} />
              </div>
              <div style={{ display: 'flex', gap: 10 }}>
                <button className="btn-outline-fire" onClick={() => setStep(1)} style={{ flexShrink: 0, padding: '14px 18px', clipPath: 'none', borderRadius: 2 }}>← Back</button>
                <button className="btn-fire" onClick={confirm} style={{ flex: 1, padding: 14, clipPath: 'none', borderRadius: 2 }}>Confirm Order 🔥</button>
              </div>
            </>
          )}
        </div>
      </div>

      <style>{`
        @keyframes lbIn  { from{opacity:0} to{opacity:1} }
        @keyframes lbUp  { from{opacity:0;transform:translateY(28px)} to{opacity:1;transform:translateY(0)} }
      `}</style>
    </div>
  );
}
