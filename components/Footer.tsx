'use client';

import { useState } from 'react';
import { ShieldCheck, Database } from 'lucide-react';
import { AdminOrdersModal } from '@/components/AdminOrdersModal';

export function Footer() {
  const [isAdminOpen, setIsAdminOpen] = useState(false);

  return (
    <footer className="relative bg-elan-dark border-t border-white/10 pt-20 pb-12 px-6 lg:px-12 text-elan-cream overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        {/* Column 1: Brand Info */}
        <div className="md:col-span-2">
          <a href="#" className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-full border border-elan-gold/40 flex items-center justify-center bg-elan-gold/10">
              <svg viewBox="0 0 32 32" fill="none" className="w-5 h-5 text-elan-gold">
                <path
                  d="M16 3C11 8 8 13.5 8 18.5C8 22.6421 11.3579 26 15.5 26C19.6421 26 23 22.6421 23 18.5C23 13.5 20 8 16 3Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M16 8V18.5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </div>
            <span className="font-serif text-2xl tracking-[0.25em] text-elan-cream font-medium">
              ÉLAN
            </span>
          </a>
          <p className="font-sans text-xs text-elan-cream/70 max-w-sm font-light leading-relaxed mb-6">
            A cinematic luxury digital experience. 100% natural, cold-pressed raw fruit juice harvested at peak sweetness from hand-selected organic groves in Bhopal, Madhya Pradesh.
          </p>
          <div className="flex items-center gap-2 text-xs font-sans text-elan-gold">
            <ShieldCheck className="w-4 h-4" />
            <span>HQ & Extraction Facility: Bhopal, MP, India</span>
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h4 className="font-serif text-sm tracking-[0.2em] uppercase text-elan-gold mb-4">
            Navigation
          </h4>
          <ul className="space-y-2 text-xs font-sans font-light text-elan-cream/70">
            <li><a href="#film" className="hover:text-elan-gold transition-colors">The Scroll Film</a></li>
            <li><a href="#flavours" className="hover:text-elan-gold transition-colors">Signature Lineup</a></li>
            <li><a href="#craft" className="hover:text-elan-gold transition-colors">Bottle Craftsmanship</a></li>
            <li><a href="#philosophy" className="hover:text-elan-gold transition-colors">Brand Philosophy</a></li>
            <li><a href="#nutrition" className="hover:text-elan-gold transition-colors">Bio-Active Nutrition</a></li>
            <li><a href="#gallery" className="hover:text-elan-gold transition-colors">Editorial Anthology</a></li>
          </ul>
        </div>

        {/* Column 3: Full-Stack Demo Admin Link */}
        <div>
          <h4 className="font-serif text-sm tracking-[0.2em] uppercase text-elan-gold mb-4">
            Full-Stack Showcase
          </h4>
          <p className="text-xs font-sans text-elan-cream/60 font-light mb-4 leading-relaxed">
            Live Next.js 15 Backend API connected to full-stack reservation store.
          </p>

          <button
            onClick={() => setIsAdminOpen(true)}
            className="w-full px-4 py-3 rounded-2xl bg-elan-gold/10 border border-elan-gold/40 text-elan-gold font-serif text-xs tracking-widest uppercase hover:bg-elan-gold hover:text-elan-dark transition-all flex items-center justify-center gap-2"
          >
            <Database className="w-4 h-4" />
            <span>LIVE ADMIN DASHBOARD</span>
          </button>
        </div>
      </div>

      {/* Bottom Legal Bar */}
      <div className="max-w-7xl mx-auto border-t border-white/5 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-[10px] font-sans text-elan-cream/50 tracking-wider">
        <span>© {new Date().getFullYear()} ÉLAN BEVERAGES INDIA PVT. LTD. ALL RIGHTS RESERVED.</span>
        <span>CRAFTED IN BHOPAL • FULL-STACK NEXT.JS 15 SHOWCASE</span>
      </div>

      {/* Full-Stack Admin Orders Modal */}
      <AdminOrdersModal
        isOpen={isAdminOpen}
        onClose={() => setIsAdminOpen(false)}
      />
    </footer>
  );
}
