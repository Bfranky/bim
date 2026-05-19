'use client';

const stats = [
  { value: '10PM',  label: 'Closing Time' },
  { value: '100%',  label: 'Fresh Daily' },
  { value: '6+',    label: 'Menu Categories' },
  { value: '⭐⭐⭐⭐⭐', label: 'Customer Love' },
];

const values = [
  { icon: '🔥', title: 'Open-Fire Grilling',  desc: 'Every item is grilled over real fire for that authentic smoky flavour you just cannot fake.' },
  { icon: '🌶️', title: 'Bold Seasoning',      desc: 'Our secret spice blends are crafted in-house — no bland food ever leaves our kitchen.' },
  { icon: '⚡', title: 'Fast Service',         desc: 'Hot food, quick turnaround. We respect your time as much as your taste buds.' },
  { icon: '🥩', title: 'Fresh Every Day',      desc: 'We source fresh meat and produce daily. Nothing sits overnight — ever.' },
];

export default function About() {
  return (
    <section id="about" style={{ padding: '100px 40px', background: '#0d0d0d', position: 'relative', overflow: 'hidden' }}>

      {/* Accent lines */}
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: 2, background: 'linear-gradient(90deg, transparent, var(--fire), transparent)' }} />

      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center', marginBottom: 80 }}>

          {/* Left — image stack */}
          <div style={{ position: 'relative', height: 480 }}>
            {/* Back image */}
            <div style={{ position: 'absolute', top: 0, left: 32, right: 0, bottom: 32, borderRadius: 4, overflow: 'hidden', border: '1px solid rgba(255,69,0,0.2)' }}>
              <img src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=600&q=75" alt="Grill behind the scenes"
                style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.6)' }} />
            </div>
            {/* Front image */}
            <div style={{ position: 'absolute', bottom: 0, left: 0, width: '68%', borderRadius: 4, overflow: 'hidden', border: '3px solid var(--fire)', boxShadow: '0 20px 60px rgba(0,0,0,0.6)' }}>
              <img src="https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?w=500&q=75" alt="Grilled meat close up"
                style={{ width: '100%', height: 220, objectFit: 'cover' }} />
            </div>
            {/* Fire badge */}
            <div style={{ position: 'absolute', top: 20, left: 8, background: 'var(--fire)', width: 64, height: 64, borderRadius: '50%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', animation: 'spinSlow 8s linear infinite' }}>
              <span style={{ fontSize: 26 }}>🔥</span>
            </div>
            {/* Established tag */}
            <div style={{ position: 'absolute', bottom: 20, right: 8, background: 'var(--ash)', border: '1px solid rgba(255,69,0,0.3)', padding: '10px 16px', borderRadius: 4 }}>
              <div style={{ fontFamily: 'Bebas Neue, cursive', color: 'var(--fire)', fontSize: 28, lineHeight: 1 }}>ODE-REMO</div>
              <div style={{ fontFamily: 'Barlow Condensed, sans-serif', color: 'var(--muted)', fontSize: 10, letterSpacing: 3, textTransform: 'uppercase', marginTop: 2 }}>Ogun State, NG</div>
            </div>
          </div>

          {/* Right — text */}
          <div>
            <div className="section-tag">Our Story</div>
            <h2 className="display" style={{ fontSize: 'clamp(44px,6vw,72px)', color: '#fff', lineHeight: 0.95, marginBottom: 24 }}>
              Born From<br /><span style={{ color: 'var(--fire)' }}>The Grill</span>
            </h2>
            <p style={{ color: 'rgba(255,248,240,0.65)', fontSize: 16, lineHeight: 1.9, marginBottom: 20 }}>
              Bim's Grills N Chops started with one simple belief — that Ode-Remo deserved great food cooked with real fire and real love. No shortcuts. No compromises.
            </p>
            <p style={{ color: 'rgba(255,248,240,0.65)', fontSize: 16, lineHeight: 1.9, marginBottom: 36 }}>
              From our open grill on <strong style={{ color: 'var(--cream)' }}>Okeola Olomowewe Street</strong>, we serve the neighbourhood everything from sizzling suya and grilled fish to peppered gizzard and chilled drinks — daily from morning until 10 PM.
            </p>
            <div style={{ display: 'flex', gap: 16 }}>
              <a href="#menu"><button className="btn-fire">See Our Menu</button></a>
              <a href="#contact"><button className="btn-outline-fire">Find Us</button></a>
            </div>
          </div>
        </div>

        {/* Stats row */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 2, marginBottom: 80, borderTop: '1px solid rgba(255,69,0,0.15)', paddingTop: 60 }}>
          {stats.map((s, i) => (
            <div key={i} style={{ textAlign: 'center', padding: '20px 10px', borderRight: i < 3 ? '1px solid rgba(255,69,0,0.12)' : 'none' }}>
              <div className="display" style={{ fontSize: 'clamp(32px,4vw,52px)', color: 'var(--fire)', lineHeight: 1 }}>{s.value}</div>
              <div style={{ fontFamily: 'Barlow Condensed, sans-serif', color: 'var(--muted)', fontSize: 11, letterSpacing: 3, textTransform: 'uppercase', marginTop: 8 }}>{s.label}</div>
            </div>
          ))}
        </div>

        {/* Values grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(230px,1fr))', gap: 20 }}>
          {values.map((v, i) => (
            <div key={i} className="card-dark" style={{ padding: '28px 24px', borderRadius: 4 }}>
              <div style={{ fontSize: 36, marginBottom: 16 }}>{v.icon}</div>
              <h3 style={{ fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 700, color: '#fff', fontSize: 18, letterSpacing: 1, marginBottom: 10, textTransform: 'uppercase' }}>{v.title}</h3>
              <p style={{ color: 'var(--muted)', fontSize: 14, lineHeight: 1.7 }}>{v.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes spinSlow { to { transform: rotate(360deg); } }
        @media(max-width:768px){
          #about > div > div:first-child { grid-template-columns:1fr !important; gap:40px !important; }
          #about > div > div:first-child > div:first-child { height:300px !important; }
          #about > div > div:nth-child(2) { grid-template-columns: repeat(2,1fr) !important; }
        }
      `}</style>
    </section>
  );
}
