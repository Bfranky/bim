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

// All URLs use ?auto=format&fit=crop&w=400&q=75 for maximum reliability
const categories: Category[] = [
  {
    name: 'Grills',
    icon: '🔥',
    items: [
      {
        name:  'Grilled Chicken',
        desc:  'Whole/half chicken marinated in secret spice blend, grilled over open fire',
        price: '₦2,500',
        tag:   'Best Seller',
        image: 'https://images.unsplash.com/photo-1598103442097-8b74394b95c7?auto=format&fit=crop&w=400&q=75',
      },
      {
        name:  'Grilled Fish',
        desc:  'Fresh whole fish peppered and grilled to smoky perfection',
        price: '₦2,000',
        image: 'https://images.unsplash.com/photo-1510130387422-82bed34b37e9?auto=format&fit=crop&w=400&q=75',
      },
      {
        name:  'Suya',
        desc:  'Classic thin-cut spiced beef skewers served with sliced onion and tomato',
        price: '₦800',
        tag:   'Popular',
        image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=400&q=75',
      },
      {
        name:  'Pork Chops',
        desc:  'Juicy marinated pork chops grilled with smoky seasonings',
        price: '₦2,200',
        image: 'https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?auto=format&fit=crop&w=400&q=75',
      },
    ],
  },
  {
    name: 'Chops',
    icon: '🍗',
    items: [
      {
        name:  'Peppered Gizzard',
        desc:  'Tender beef gizzard tossed in rich, fiery pepper sauce',
        price: '₦1,200',
        tag:   'Spicy 🌶',
        image: 'https://images.unsplash.com/photo-1567620832903-9fc6debc209f?auto=format&fit=crop&w=400&q=75',
      },
      {
        name:  'Peppered Snail',
        desc:  'Big, flavourful snails slow-cooked in deep pepper stew',
        price: '₦1,800',
        image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=75',
      },
      {
        name:  'Chicken Wings',
        desc:  'Crispy fried wings tossed in sweet chilli or hot sauce',
        price: '₦1,500',
        tag:   'Fan Fave',
        image: 'https://images.unsplash.com/photo-1527477396000-e27163b481c2?auto=format&fit=crop&w=400&q=75',
      },
      {
        name:  'Fried Pork Belly',
        desc:  'Crispy slow-rendered pork belly served with dipping sauce',
        price: '₦2,000',
        image: 'https://images.unsplash.com/photo-1432139555190-58524dae6a55?auto=format&fit=crop&w=400&q=75',
      },
    ],
  },
  {
    name: 'Soups & Sides',
    icon: '🥘',
    items: [
      {
        name:  'Pepper Soup',
        desc:  'Aromatic native pepper soup with your choice of fish, goat, or catfish',
        price: '₦1,500',
        tag:   'Classic',
        image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=400&q=75',
      },
      {
        name:  'Chips & Fries',
        desc:  'Golden crispy fries served with ketchup or spicy dipping sauce',
        price: '₦600',
        image: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=400&q=75',
      },
      {
        name:  'Coleslaw',
        desc:  'Fresh creamy coleslaw — the perfect side for any grill',
        price: '₦400',
        image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=400&q=75',
      },
      {
        name:  'Sharwarma',
        desc:  'Stuffed wrap with grilled chicken, veggies, and zesty sauce',
        price: '₦1,200',
        tag:   'New',
        image: 'https://images.unsplash.com/photo-1561651188-d207bbec4ec3?auto=format&fit=crop&w=400&q=75',
      },
    ],
  },
  {
    name: 'Drinks',
    icon: '🥤',
    items: [
      {
        name:  'Soft Drinks',
        desc:  'Coke, Sprite, Fanta — ice cold',
        price: '₦300',
        image: 'https://images.unsplash.com/photo-1581006852262-e4307cf6283a?auto=format&fit=crop&w=400&q=75',
      },
      {
        name:  'Chilled Water',
        desc:  'Bottled still water, perfectly chilled',
        price: '₦150',
        image: 'https://images.unsplash.com/photo-1548839140-29a749e1cf4d?auto=format&fit=crop&w=400&q=75',
      },
      {
        name:  'Malt & Energy Drinks',
        desc:  'Malta, Desperados, Power Horse and more',
        price: '₦500',
        image: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&w=400&q=75',
      },
      {
        name:  'Fresh Juice',
        desc:  'Chilled zobo, kunu, or fresh fruit juice of the day',
        price: '₦400',
        image: 'https://images.unsplash.com/photo-1600271886742-f049cd451bba?auto=format&fit=crop&w=400&q=75',
      },
    ],
  },
];

export default function Menu() {
  const [activeTab,   setActiveTab]   = useState(0);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [imgErrors,   setImgErrors]   = useState<Record<string, boolean>>({});

  const fallbacks: Record<string, string> = {
    'Grilled Chicken':    'https://images.unsplash.com/photo-1432139555190-58524dae6a55?auto=format&fit=crop&w=400&q=75',
    'Grilled Fish':       'https://images.unsplash.com/photo-1559847844-5315695dadae?auto=format&fit=crop&w=400&q=75',
    'Coleslaw':           'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=400&q=75',
    'Soft Drinks':        'https://images.unsplash.com/photo-1562155618-e1a8bc2eb04f?auto=format&fit=crop&w=400&q=75',
    'Malt & Energy Drinks':'https://images.unsplash.com/photo-1571091718767-18b5b1457add?auto=format&fit=crop&w=400&q=75',
    'Fresh Juice':        'https://images.unsplash.com/photo-1534353473418-4cfa0c256519?auto=format&fit=crop&w=400&q=75',
  };

  const handleImgError = (name: string, e: React.SyntheticEvent<HTMLImageElement>) => {
    if (!imgErrors[name] && fallbacks[name]) {
      setImgErrors((prev) => ({ ...prev, [name]: true }));
      (e.target as HTMLImageElement).src = fallbacks[name];
    }
  };

  return (
    <section id="menu" style={{ padding: '100px 40px', background: '#111111', position: 'relative', overflow: 'hidden' }}>

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

              {/* Image wrapper */}
              <div style={{ height: 180, overflow: 'hidden', position: 'relative', background: '#2a2a2a' }}>
                <img
                  src={item.image}
                  alt={item.name}
                  loading="lazy"
                  onError={(e) => handleImgError(item.name, e)}
                  style={{
                    width: '100%', height: '100%', objectFit: 'cover', display: 'block',
                    transition: 'transform 0.5s ease',
                    transform: hoveredItem === item.name ? 'scale(1.08)' : 'scale(1)',
                  }}
                />
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