'use client';

import { useState } from 'react';

interface MenuItem {
  name:  string;
  desc:  string;
  price: string;
  tag?:  string;
  image: string;
}

interface Category {
  name:  string;
  icon:  string;
  items: MenuItem[];
}

const categories: Category[] = [
  {
    name: 'Grills',
    icon: '🔥',
    items: [
      { name: 'Grilled Chicken',     desc: 'Whole/half chicken marinated in secret spice blend, grilled over open fire',     price: '₦2,500', tag: 'Best Seller', image: 'https://images.unsplash.com/photo-1598103442097-8b74394b95c7?w=400&q=70' },
      { name: 'Grilled Fish',        desc: 'Fresh whole fish peppered and grilled to smoky perfection',                       price: '₦2,000',                    image: 'https://images.unsplash.com/photo-1580822184713-fc5400e7fe10?w=400&q=70' },
      { name: 'Suya',                desc: 'Classic thin-cut spiced beef skewers served with sliced onion and tomato',        price: '₦800',   tag: 'Popular',    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=400&q=70' },
      { name: 'Pork Chops',          desc: 'Juicy marinated pork chops grilled with smoky seasonings',                        price: '₦2,200',                    image: 'https://images.unsplash.com/photo-1432139555190-58524dae6a55?w=400&q=70' },
    ],
  },
  {
    name: 'Chops',
    icon: '🍗',
    items: [
      { name: 'Peppered Gizzard',    desc: 'Tender beef gizzard tossed in rich, fiery pepper sauce',                          price: '₦1,200', tag: 'Spicy 🌶',   image: 'https://images.unsplash.com/photo-1567620832903-9fc6debc209f?w=400&q=70' },
      { name: 'Peppered Snail',      desc: 'Big, flavourful snails slow-cooked in deep pepper stew',                          price: '₦1,800',                    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&q=70' },
      { name: 'Chicken Wings',       desc: 'Crispy fried wings tossed in sweet chilli or hot sauce',                          price: '₦1,500', tag: 'Fan Fave',   image: 'https://images.unsplash.com/photo-1527477396000-e27163b481c2?w=400&q=70' },
      { name: 'Fried Pork Belly',    desc: 'Crispy slow-rendered pork belly served with dipping sauce',                       price: '₦2,000',                    image: 'https://images.unsplash.com/photo-1432139555190-58524dae6a55?w=400&q=70' },
    ],
  },
  {
    name: 'Soups & Sides',
    icon: '🥘',
    items: [
      { name: 'Pepper Soup',         desc: 'Aromatic native pepper soup with your choice of fish, goat, or catfish',         price: '₦1,500', tag: 'Classic',    image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=400&q=70' },
      { name: 'Chips & Fries',       desc: 'Golden crispy fries served with ketchup or spicy dipping sauce',                 price: '₦600',                     image: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=400&q=70' },
      { name: 'Coleslaw',            desc: 'Fresh creamy coleslaw — the perfect side for any grill',                          price: '₦400',                     image: 'https://images.unsplash.com/photo-1607116667981-ff148a80e99e?w=400&q=70' },
      { name: 'Sharwarma',           desc: 'Stuffed wrap with grilled chicken, veggies, and zesty sauce',                    price: '₦1,200', tag: 'New',        image: 'https://images.unsplash.com/photo-1561651188-d207bbec4ec3?w=400&q=70' },
    ],
  },
  {
    name: 'Drinks',
    icon: '🥤',
    items: [
      { name: 'Soft Drinks',         desc: 'Coke, Sprite, Fanta — ice cold',                                                  price: '₦300',                     image: 'https://images.unsplash.com/photo-1527960471264-932f39eb5846?w=400&q=70' },
      { name: 'Chilled Water',       desc: 'Bottled still water, perfectly chilled',                                          price: '₦150',                     image: 'https://images.unsplash.com/photo-1548839140-29a749e1cf4d?w=400&q=70' },
      { name: 'Malt & Energy Drinks',desc: 'Malta, Desperados, Power Horse and more',                                         price: '₦500',                     image: 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=400&q=70' },
      { name: 'Fresh Juice',         desc: 'Chilled zobo, kunu, or fresh fruit juice of the day',                             price: '₦400',                     image: 'https://images.unsplash.com/photo-1563227812-0ea4c22e6cc8?w=400&q=70' },
    ],
  },
];

export default function Menu() {
  const [activeTab, setActiveTab] = useState(0);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  return (
    <section id="menu" style={{ padding: '100px 40px', background: '#111111', position: 'relative', overflow: 'hidden' }}>

      {/* Background fire glow */}
      <div style={{ position: 'absolute', bottom: -100, right: -100, width: 500, height: 500, borderRadius: '50%', background: 'radial-gradient(circle, rgba(255,69,0,0.06) 0%, transparent 70%)', pointerEvents: 'none' }} />

      <div style={{ maxWidth: 1100, margin: '0 auto' }}>

        {/* Heading */}
        <div style={{ marginBottom: 56 }}>
          <div className="section-tag">Our Menu</div>
          <h2 className="display" style={{ fontSize: 'clamp(48px,8vw,96px)', color: '#fff', lineHeight: 0.9, marginBottom: 16 }}>
            What's<br /><span style={{ color: 'var(--fire)' }}>Cooking</span>
          </h2>
          <p style={{ color: 'var(--muted)', fontSize: 16, maxWidth: 440, lineHeight: 1.7 }}>
            Everything grilled fresh, seasoned bold, and served hot. This is fast food done the Bim's way.
          </p>
        </div>

        {/* Category tabs */}
        <div style={{ display: 'flex', gap: 8, marginBottom: 48, flexWrap: 'wrap' }}>
          {categories.map((cat, i) => (
            <button key={i} onClick={() => setActiveTab(i)}
              style={{
                background:    activeTab === i ? 'var(--fire)' : 'var(--ash)',
                color:         activeTab === i ? '#fff' : 'var(--muted)',
                border:        activeTab === i ? 'none' : '1px solid rgba(255,69,0,0.15)',
                padding:       '10px 24px',
                fontFamily:    'Barlow Condensed, sans-serif',
                fontWeight:    700,
                fontSize:      14,
                letterSpacing: 2,
                textTransform: 'uppercase',
                cursor:        'pointer',
                clipPath:      'polygon(6px 0%,100% 0%,calc(100% - 6px) 100%,0% 100%)',
                transition:    'all 0.25s ease',
              }}>
              {cat.icon} {cat.name}
            </button>
          ))}
        </div>

        {/* Menu grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px,1fr))', gap: 20 }}>
          {categories[activeTab].items.map((item, i) => (
            <div key={i} className="card-dark"
              onMouseEnter={() => setHoveredItem(item.name)}
              onMouseLeave={() => setHoveredItem(null)}
              style={{ borderRadius: 4, overflow: 'hidden', cursor: 'default' }}>

              {/* Image */}
              <div style={{ height: 180, overflow: 'hidden', position: 'relative' }}>
                <img src={item.image} alt={item.name}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease', transform: hoveredItem === item.name ? 'scale(1.08)' : 'scale(1)' }} />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(17,17,17,0.7) 0%, transparent 60%)' }} />
                {item.tag && (
                  <div style={{ position: 'absolute', top: 12, right: 12, background: 'var(--fire)', color: '#fff', fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 700, fontSize: 10, letterSpacing: 2, textTransform: 'uppercase', padding: '4px 10px', clipPath: 'polygon(4px 0%,100% 0%,calc(100% - 4px) 100%,0% 100%)' }}>
                    {item.tag}
                  </div>
                )}
              </div>

              {/* Info */}
              <div style={{ padding: '18px 20px 20px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 8 }}>
                  <h3 style={{ fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 700, fontSize: 18, color: '#fff', letterSpacing: 0.5 }}>{item.name}</h3>
                  <span style={{ fontFamily: 'Bebas Neue, cursive', fontSize: 20, color: 'var(--fire)', letterSpacing: 1, marginLeft: 12, flexShrink: 0 }}>{item.price}</span>
                </div>
                <p style={{ color: 'var(--muted)', fontSize: 13, lineHeight: 1.6 }}>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <p style={{ textAlign: 'center', color: 'var(--muted)', fontSize: 13, marginTop: 40, fontStyle: 'italic' }}>
          Menu and prices may vary · Call 0903 589 5360 for today's specials
        </p>
      </div>

      <style>{`
        @media(max-width:600px){ #menu { padding: 80px 20px !important; } }
      `}</style>
    </section>
  );
}
