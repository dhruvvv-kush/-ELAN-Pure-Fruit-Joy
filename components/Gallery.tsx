'use client';

import { useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { GALLERY_ITEMS } from '@/lib/constants';
import { Maximize2, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { luxuryAudio } from '@/lib/audio';

export function Gallery() {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const [activeItem, setActiveItem] = useState<any | null>(null);

  // Scroll Progress across sticky 350vh section
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start start', 'end end'],
  });

  // Map vertical scroll progress to horizontal X translation
  const x = useTransform(scrollYProgress, [0, 1], ['0%', '-72%']);

  const scrollTrackBy = (dir: 'left' | 'right') => {
    luxuryAudio.playClick();
    if (!targetRef.current) return;
    const amount = dir === 'left' ? -350 : 350;
    window.scrollBy({ top: amount, behavior: 'smooth' });
  };

  return (
    <section id="gallery" ref={targetRef} className="relative h-[350vh] bg-elan-dark">
      {/* Sticky Horizontal Viewport */}
      <div className="sticky top-0 h-screen overflow-hidden flex flex-col justify-center px-6 lg:px-12">
        {/* Header Bar */}
        <div className="max-w-7xl mx-auto w-full mb-8 flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 z-20">
          <div>
            <h2 className="font-serif text-3xl sm:text-5xl text-elan-cream font-medium">
              Visual Nectar Anthology
            </h2>
          </div>

          {/* Navigation Controls & Indicator */}
          <div className="flex items-center gap-4">
            <span className="hidden sm:block text-xs font-sans tracking-[0.3em] uppercase text-elan-gold/60">
              SCROLL DOWN TO SLIDE HORIZONTALLY →
            </span>
            <div className="flex items-center gap-2">
              <button
                onClick={() => scrollTrackBy('left')}
                className="p-2.5 rounded-full border border-elan-gold/30 text-elan-gold hover:bg-elan-gold hover:text-elan-dark transition-all"
                title="Previous image"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={() => scrollTrackBy('right')}
                className="p-2.5 rounded-full border border-elan-gold/30 text-elan-gold hover:bg-elan-gold hover:text-elan-dark transition-all"
                title="Next image"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Horizontal Moving Track */}
        <div className="relative w-full overflow-hidden py-4">
          <motion.div style={{ x }} className="flex gap-8 pl-6 md:pl-20 pr-24 w-max">
            {GALLERY_ITEMS.map((item, idx) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: idx * 0.1 }}
                onClick={() => {
                  luxuryAudio.playClick();
                  setActiveItem(item);
                }}
                onMouseEnter={() => luxuryAudio.playHover()}
                data-cursor="VIEW"
                className="group relative w-[320px] sm:w-[440px] md:w-[540px] h-[450px] sm:h-[550px] rounded-3xl overflow-hidden border border-white/10 flex-shrink-0 cursor-pointer bg-white/[0.02] shadow-2xl hover:border-elan-gold/50 transition-all duration-500"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-95 group-hover:brightness-105"
                  sizes="(max-width: 768px) 320px, 540px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                <div className="absolute bottom-8 left-8 right-8 z-10 flex justify-between items-end">
                  <div>
                    <span className="text-[10px] font-sans tracking-[0.3em] uppercase text-elan-gold block mb-1">
                      {item.subtitle}
                    </span>
                    <h3 className="font-serif text-2xl sm:text-3xl text-elan-cream font-medium">
                      {item.title}
                    </h3>
                  </div>
                  <div className="w-10 h-10 rounded-full border border-elan-gold/30 flex items-center justify-center text-elan-gold group-hover:bg-elan-gold group-hover:text-elan-dark transition-all">
                    <Maximize2 className="w-4 h-4" />
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {activeItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/90 backdrop-blur-2xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="relative max-w-5xl w-full h-[80vh] rounded-3xl overflow-hidden border border-elan-gold/30 bg-elan-dark p-2 shadow-[0_0_80px_rgba(0,0,0,0.95)]"
          >
            <button
              onClick={() => setActiveItem(null)}
              className="absolute top-6 right-6 z-20 p-3 rounded-full bg-black/60 border border-white/20 text-elan-cream hover:text-elan-gold transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
            <div className="relative w-full h-full rounded-2xl overflow-hidden">
              <Image
                src={activeItem.image}
                alt={activeItem.title}
                fill
                className="object-contain"
              />
              <div className="absolute bottom-6 left-6 z-10 bg-elan-dark/80 backdrop-blur-md px-6 py-4 rounded-2xl border border-white/10">
                <h4 className="font-serif text-2xl text-elan-cream">{activeItem.title}</h4>
                <p className="font-sans text-xs text-elan-gold uppercase tracking-widest">{activeItem.subtitle}</p>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </section>
  );
}
