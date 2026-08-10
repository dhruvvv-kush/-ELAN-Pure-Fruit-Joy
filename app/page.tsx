'use client';

import { useState, useEffect } from 'react';
import Lenis from 'lenis';
import { CustomCursor } from '@/components/CustomCursor';
import { MouseLight } from '@/components/MouseLight';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { ScrollyCanvas } from '@/components/ScrollyCanvas';
import { FlavourSection } from '@/components/FlavourSection';
import { BottleCraft } from '@/components/BottleCraft';
import { BrandPhilosophy } from '@/components/BrandPhilosophy';
import { Benefits } from '@/components/Benefits';
import { Gallery } from '@/components/Gallery';
import { CTA } from '@/components/CTA';
import { Footer } from '@/components/Footer';
import { OrderModal } from '@/components/OrderModal';
import { VideoModal } from '@/components/VideoModal';
import { Flavour } from '@/lib/constants';

export default function Home() {
  const [isOrderOpen, setIsOrderOpen] = useState(false);
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [selectedFlavour, setSelectedFlavour] = useState<Flavour | null>(null);

  // Initialize Lenis smooth scroll
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.4,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 2,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  const handleOpenOrderWithFlavour = (flavour?: Flavour) => {
    if (flavour) setSelectedFlavour(flavour);
    setIsOrderOpen(true);
  };

  return (
    <main className="relative bg-elan-dark text-elan-cream min-h-screen selection:bg-elan-gold selection:text-elan-dark">
      {/* Luxury Custom Cursor */}
      <CustomCursor />

      {/* Ambient Mouse Radial Glow */}
      <MouseLight />

      {/* Navigation Bar */}
      <Navbar onOpenOrder={() => setIsOrderOpen(true)} />

      {/* CHAPTER 01: Arrival */}
      <Hero />

      {/* CHAPTER 02: Luxury Scroll Film (Combining PR 1 and PR 2 sequences) */}
      <ScrollyCanvas />

      {/* CHAPTER 03: Our Flavours */}
      <FlavourSection onSelectFlavour={handleOpenOrderWithFlavour} />

      {/* CHAPTER 04: Bottle Craftsmanship */}
      <BottleCraft />

      {/* CHAPTER 05: Brand Philosophy */}
      <BrandPhilosophy />

      {/* CHAPTER 06: Interactive Nutrition */}
      <Benefits />

      {/* CHAPTER 07: Editorial Gallery (Horizontal Sticky Scroll) */}
      <Gallery />

      {/* CHAPTER 08: Final CTA */}
      <CTA
        onOpenOrder={() => setIsOrderOpen(true)}
        onWatchStory={() => setIsVideoOpen(true)}
      />

      {/* Luxury Footer */}
      <Footer />

      {/* Interactive Modals */}
      <OrderModal
        isOpen={isOrderOpen}
        onClose={() => setIsOrderOpen(false)}
        preselectedFlavour={selectedFlavour}
      />

      <VideoModal
        isOpen={isVideoOpen}
        onClose={() => setIsVideoOpen(false)}
      />
    </main>
  );
}
