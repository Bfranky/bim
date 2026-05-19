'use client';

import { useState } from 'react';

import Navbar        from '@/components/Navbar';
import Hero          from '@/components/Hero';
import MarqueeTicker from '@/components/MarqueeTicker';
import Menu          from '@/components/Menu';
import About         from '@/components/About';
import Gallery       from '@/components/Gallery';
import Testimonials  from '@/components/Testimonials';
import Contact       from '@/components/Contact';
import Footer        from '@/components/Footer';
import OrderModal    from '@/components/OrderModal';
import WhatsAppButton from '@/components/WhatsAppButton';

export default function HomePage() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <Navbar        onOrder={() => setModalOpen(true)} />
      <Hero          onOrder={() => setModalOpen(true)} />
      <MarqueeTicker />
      <Menu />
      <About />
      <Gallery />
      <Testimonials />
      <Contact />
      <Footer />
      <WhatsAppButton />
      <OrderModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
