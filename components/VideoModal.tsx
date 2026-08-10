'use client';

import { motion } from 'framer-motion';
import { X, RefreshCw } from 'lucide-react';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function VideoModal({ isOpen, onClose }: VideoModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 bg-black/95 backdrop-blur-2xl">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        className="relative w-full max-w-5xl h-[80vh] bg-elan-dark border border-elan-gold/30 rounded-3xl overflow-hidden shadow-[0_0_100px_rgba(0,0,0,0.95)] flex flex-col items-center justify-center p-6 text-center"
      >
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-3 rounded-full border border-white/20 text-elan-cream hover:text-elan-gold transition-colors z-20"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="w-16 h-16 rounded-full border border-elan-gold/40 flex items-center justify-center mb-6 bg-elan-gold/10">
          <RefreshCw className="w-8 h-8 text-elan-gold animate-spin" />
        </div>

        <span className="text-xs font-sans tracking-[0.4em] uppercase text-elan-gold mb-3">
          CINEMATIC FILM REPLAY
        </span>
        <h2 className="font-serif text-3xl sm:text-5xl text-elan-cream font-medium mb-4">
          The Story of ÉLAN Nectar
        </h2>
        <p className="font-sans text-sm text-elan-cream/70 max-w-md font-light leading-relaxed mb-8">
          The 240-frame interactive HTML5 Canvas film on the main screen is the official advertisement sequence extracted frame-by-frame. Scroll the main page to experience it live.
        </p>

        <button
          onClick={onClose}
          className="px-8 py-4 rounded-full bg-elan-gold text-elan-dark font-serif text-xs tracking-[0.25em] uppercase font-semibold hover:bg-elan-goldLight transition-colors"
        >
          RETURN TO INTERACTIVE FILM
        </button>
      </motion.div>
    </div>
  );
}
