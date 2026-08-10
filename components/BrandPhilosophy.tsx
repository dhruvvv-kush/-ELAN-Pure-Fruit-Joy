'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Leaf, ShieldCheck, Sun } from 'lucide-react';

export function BrandPhilosophy() {
  return (
    <section id="philosophy" className="relative py-36 px-6 lg:px-12 bg-elan-dark overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Editorial Split Spread */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center mb-28">
          {/* Huge Statement Typography */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="lg:col-span-7 flex flex-col justify-center"
          >
            <h2 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-medium tracking-tight text-elan-cream leading-[1.05] mb-10">
              Good for You.<br />
              <span className="italic font-light text-gold-gradient">Good for Nature.</span>
            </h2>

            <p className="font-serif italic text-xl sm:text-2xl text-elan-cream/80 font-light leading-relaxed mb-10 max-w-2xl">
              "We believe that true luxury lies in simplicity — taking what nature has perfected over millennia and bottling it without compromise, alteration, or heat degradation."
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 border-t border-white/10">
              <div className="flex items-center gap-3">
                <Leaf className="w-5 h-5 text-elan-gold" />
                <span className="text-xs font-sans tracking-widest uppercase text-elan-cream/90">
                  100% Real Fruit
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Sun className="w-5 h-5 text-elan-gold" />
                <span className="text-xs font-sans tracking-widest uppercase text-elan-cream/90">
                  Cold Pressed Raw
                </span>
              </div>
              <div className="flex items-center gap-3">
                <ShieldCheck className="w-5 h-5 text-elan-gold" />
                <span className="text-xs font-sans tracking-widest uppercase text-elan-cream/90">
                  Nothing Artificial
                </span>
              </div>
            </div>
          </motion.div>

          {/* High-End Editorial Advertisement Photography */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="lg:col-span-5 relative h-[550px] w-full rounded-3xl overflow-hidden border border-white/10 shadow-[0_30px_70px_rgba(0,0,0,0.9)] group"
          >
            <Image
              src="/pr2/lineup.png"
              alt="ÉLAN Luxury Lineup Editorial"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-1000"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-elan-dark via-transparent to-transparent opacity-80" />
            <div className="absolute bottom-8 left-8 right-8">
              <h3 className="font-serif text-2xl text-elan-cream">
                The Pure Nectar Collection
              </h3>
            </div>
          </motion.div>
        </div>

        {/* Minimal Banner Quote */}
        <div className="p-12 sm:p-16 rounded-3xl bg-gradient-to-r from-elan-gold/10 via-white/[0.02] to-elan-purple/10 border border-elan-gold/20 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          <div>
            <h3 className="font-serif text-2xl sm:text-4xl text-elan-cream font-medium">
              Cold Pressed. Nothing Artificial. Made with Real Fruit.
            </h3>
          </div>
          <a
            href="#flavours"
            data-cursor="TASTE"
            className="px-8 py-4 rounded-full bg-elan-gold text-elan-dark font-serif text-xs font-semibold tracking-[0.25em] uppercase hover:bg-elan-goldLight transition-all duration-300 whitespace-nowrap shadow-[0_0_25px_rgba(200,169,106,0.3)]"
          >
            DISCOVER THE LINEUP
          </a>
        </div>
      </div>
    </section>
  );
}
