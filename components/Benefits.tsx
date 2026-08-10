'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { NUTRITION_BENEFITS } from '@/lib/constants';
import { Apple, ThermometerSnowflake, Ban, ShieldCheck, Zap, Leaf } from 'lucide-react';

const ICON_MAP: Record<string, any> = {
  Apple,
  ThermometerSnowflake,
  Ban,
  ShieldCheck,
  Zap,
  Leaf,
};

export function Benefits() {
  return (
    <section id="nutrition" className="relative py-32 px-6 lg:px-12 bg-elan-dark overflow-hidden border-t border-white/5">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-elan-gold/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-serif text-4xl sm:text-6xl md:text-7xl font-medium tracking-wide text-elan-cream mb-6"
          >
            Living Bio-Active Vitality
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-sans text-sm sm:text-base text-elan-cream/70 max-w-2xl font-light tracking-wide leading-relaxed"
          >
            Our raw extraction protocol protects delicate polyphenols, living enzymes, and essential vitamins that pasteurization destroys.
          </motion.p>
        </div>

        {/* Floating Glassmorphic Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {NUTRITION_BENEFITS.map((benefit, idx) => (
            <GlassBenefitCard key={benefit.id} benefit={benefit} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}

function GlassBenefitCard({ benefit, index }: { benefit: any; index: number }) {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const IconComponent = ICON_MAP[benefit.iconName] || Apple;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    setRotateX((-y / rect.height) * 16);
    setRotateY((x / rect.width) * 16);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: index * 0.12 }}
      style={{
        transformStyle: 'preserve-3d',
        transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      data-cursor="NUTRITION"
      className="group relative rounded-3xl p-8 bg-gradient-to-b from-white/[0.05] via-white/[0.02] to-transparent border border-white/10 hover:border-elan-gold/50 transition-all duration-300 backdrop-blur-xl flex flex-col justify-between h-72 shadow-xl hover:shadow-[0_20px_40px_rgba(200,169,106,0.15)] overflow-hidden cursor-pointer"
    >
      {/* Top Bar: Icon & Stat Number */}
      <div className="flex items-start justify-between relative z-10">
        <div className="w-12 h-12 rounded-2xl bg-elan-gold/10 border border-elan-gold/30 flex items-center justify-center text-elan-gold group-hover:bg-elan-gold group-hover:text-elan-dark transition-all duration-500 shadow-[0_0_20px_rgba(200,169,106,0.2)]">
          <IconComponent className="w-6 h-6" />
        </div>
        <span className="font-serif text-4xl sm:text-5xl font-semibold text-gold-gradient tracking-tight">
          {benefit.stat}
        </span>
      </div>

      {/* Bottom Bar: Title & Description */}
      <div className="relative z-10 mt-6">
        <h3 className="font-serif text-2xl text-elan-cream mb-2 group-hover:text-elan-gold transition-colors">
          {benefit.label}
        </h3>
        <p className="font-sans text-xs text-elan-cream/70 font-light leading-relaxed">
          {benefit.description}
        </p>
      </div>

      {/* Shimmer Light Reflection */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
    </motion.div>
  );
}
