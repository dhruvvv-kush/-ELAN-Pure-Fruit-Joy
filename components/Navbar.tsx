'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

export function Navbar({ onOpenOrder }: { onOpenOrder: () => void }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'FILM', href: '#film' },
    { name: 'FLAVOURS', href: '#flavours' },
    { name: 'CRAFT', href: '#craft' },
    { name: 'PHILOSOPHY', href: '#philosophy' },
    { name: 'NUTRITION', href: '#nutrition' },
    { name: 'GALLERY', href: '#gallery' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          isScrolled
            ? 'py-4 bg-elan-dark/80 backdrop-blur-xl border-b border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.8)]'
            : 'py-7 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#"
            data-cursor="ÉLAN"
            className="flex items-center gap-3 group"
          >
            <div className="w-10 h-10 rounded-full border border-elan-gold/40 flex items-center justify-center bg-elan-gold/5 group-hover:border-elan-gold group-hover:bg-elan-gold/15 transition-all">
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
            <div className="flex flex-col">
              <span className="font-serif text-xl sm:text-2xl tracking-[0.25em] text-elan-cream font-medium">
                ÉLAN
              </span>
              <span className="text-[8px] font-sans tracking-[0.3em] uppercase text-elan-gold font-light">
                PURE FRUIT JOY
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs font-sans tracking-[0.25em] text-elan-cream/80 hover:text-elan-gold transition-colors duration-300 relative py-1 group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-elan-gold group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </nav>

          {/* Header Controls */}
          <div className="flex items-center gap-4">
            {/* Primary Order CTA */}
            <button
              onClick={onOpenOrder}
              data-cursor="ORDER"
              className="px-6 py-2.5 rounded-full border border-elan-gold/40 bg-elan-gold/10 hover:bg-elan-gold hover:text-elan-dark text-elan-gold text-xs font-serif tracking-[0.2em] uppercase transition-all duration-300 flex items-center gap-2"
            >
              <span>COLLECTION</span>
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-elan-cream hover:text-elan-gold transition-colors"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-30 bg-elan-dark/95 backdrop-blur-2xl flex flex-col items-center justify-center p-8 md:hidden"
          >
            <nav className="flex flex-col items-center gap-8 my-auto text-center">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="font-serif text-3xl text-elan-cream hover:text-elan-gold tracking-widest transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenOrder();
                }}
                className="mt-6 px-10 py-4 rounded-full bg-elan-gold text-elan-dark font-serif text-sm tracking-[0.2em] uppercase font-semibold"
              >
                RESERVE COLLECTION
              </button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
