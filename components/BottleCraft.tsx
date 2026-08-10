'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { BOTTLE_CRAFT_FEATURES, CraftFeature } from '@/lib/constants';
import { Check } from 'lucide-react';

export function BottleCraft() {
  const [activeFeature, setActiveFeature] = useState<CraftFeature>(BOTTLE_CRAFT_FEATURES[0]);

  return (
    <section id="craft" className="relative py-32 px-6 lg:px-12 bg-elan-dark overflow-hidden border-t border-white/5">
      {/* Ambient Lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-elan-gold/10 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="flex flex-col items-center text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-serif text-4xl sm:text-6xl md:text-7xl font-medium tracking-wide text-elan-cream mb-6"
          >
            Architectural Luxury Glass
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-sans text-sm sm:text-base text-elan-cream/70 max-w-2xl font-light tracking-wide leading-relaxed"
          >
            Every line, relief engraving, and closure was designed in Milan to protect fragile cold-pressed bio-actives while creating an extraordinary sensory touchpoint.
          </motion.p>
        </div>

        {/* Main Interactive Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Feature Selection Tabs (Left Column) */}
          <div className="lg:col-span-4 flex flex-col gap-4 order-2 lg:order-1">
            {BOTTLE_CRAFT_FEATURES.map((feature, idx) => {
              const isSelected = activeFeature.id === feature.id;
              return (
                <motion.div
                  key={feature.id}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  onClick={() => setActiveFeature(feature)}
                  data-cursor="INSPECT"
                  className={`p-6 rounded-2xl border transition-all duration-500 cursor-pointer flex flex-col gap-2 ${
                    isSelected
                      ? 'bg-elan-gold/10 border-elan-gold shadow-[0_0_30px_rgba(200,169,106,0.15)] scale-[1.02]'
                      : 'bg-white/[0.02] border-white/10 hover:border-white/20 hover:bg-white/[0.04]'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <h4 className="font-serif text-xl text-elan-cream font-medium">
                      {feature.title}
                    </h4>
                    {isSelected && (
                      <span className="w-2 h-2 rounded-full bg-elan-gold animate-ping" />
                    )}
                  </div>
                  <p className="font-sans text-xs text-elan-cream/60 font-light">
                    {feature.subtitle}
                  </p>
                </motion.div>
              );
            })}
          </div>

          {/* Center Bottle Render with Hotspots */}
          <div className="lg:col-span-8 relative h-[600px] w-full rounded-3xl bg-gradient-to-b from-white/[0.03] to-transparent border border-white/10 overflow-hidden flex items-center justify-center p-8 order-1 lg:order-2">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(200,169,106,0.15)_0%,transparent_70%)] pointer-events-none" />

            <div className="relative w-full h-full">
              <Image
                src="/pr2/packaging-poster.png"
                alt="ÉLAN Bottle Craftsmanship"
                fill
                className="object-contain drop-shadow-[0_30px_60px_rgba(0,0,0,0.95)]"
                priority
              />

              {/* Hotspot Markers */}
              {BOTTLE_CRAFT_FEATURES.map((feature) => {
                const isSelected = activeFeature.id === feature.id;
                return (
                  <button
                    key={feature.id}
                    onClick={() => setActiveFeature(feature)}
                    data-cursor="HOTSPOT"
                    style={{
                      left: `${feature.xPercent}%`,
                      top: `${feature.yPercent}%`,
                    }}
                    className="absolute -translate-x-1/2 -translate-y-1/2 z-20 group"
                  >
                    <div
                      className={`relative w-8 h-8 rounded-full flex items-center justify-center transition-transform duration-300 ${
                        isSelected ? 'scale-125' : 'hover:scale-110'
                      }`}
                    >
                      <div
                        className={`absolute inset-0 rounded-full animate-ping opacity-75 ${
                          isSelected ? 'bg-elan-gold' : 'bg-white/40'
                        }`}
                      />
                      <div
                        className={`w-6 h-6 rounded-full border flex items-center justify-center shadow-lg transition-colors ${
                          isSelected
                            ? 'bg-elan-gold border-elan-cream text-elan-dark'
                            : 'bg-black/60 border-elan-gold/60 text-elan-gold hover:bg-elan-gold hover:text-elan-dark'
                        }`}
                      >
                        <span className="w-2 h-2 rounded-full bg-current" />
                      </div>
                    </div>
                  </button>
                );
              })}

              {/* Dynamic Annotation Overlay Box */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeFeature.id}
                  initial={{ opacity: 0, y: 15, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -15, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  className="absolute bottom-6 left-6 right-6 lg:left-auto lg:right-6 lg:max-w-sm p-6 rounded-2xl bg-elan-dark/90 border border-elan-gold/40 backdrop-blur-2xl shadow-[0_20px_50px_rgba(0,0,0,0.9)] z-30"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <Check className="w-4 h-4 text-elan-gold" />
                    <span className="text-[10px] font-sans tracking-[0.3em] uppercase text-elan-gold">
                      {activeFeature.highlightText}
                    </span>
                  </div>
                  <h3 className="font-serif text-2xl text-elan-cream mb-2">
                    {activeFeature.title}
                  </h3>
                  <p className="font-sans text-xs text-elan-cream/80 font-light leading-relaxed">
                    {activeFeature.description}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
