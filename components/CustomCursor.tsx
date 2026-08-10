'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [cursorText, setCursorText] = useState('');
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement | null;
      if (!target) return;

      const hoverable = target.closest('[data-cursor]');
      if (hoverable) {
        const text = hoverable.getAttribute('data-cursor') || '';
        setCursorText(text);
        setIsHovered(true);
      } else {
        setCursorText('');
        setIsHovered(false);
      }
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden">
      {/* Outer Ring */}
      <motion.div
        className="fixed top-0 left-0 rounded-full border border-elan-gold/40 flex items-center justify-center backdrop-blur-[1px]"
        animate={{
          x: position.x - (isHovered ? 36 : 16),
          y: position.y - (isHovered ? 36 : 16),
          width: isHovered ? 72 : 32,
          height: isHovered ? 72 : 32,
          backgroundColor: isHovered ? 'rgba(200, 169, 106, 0.15)' : 'rgba(200, 169, 106, 0.05)',
          borderColor: isHovered ? 'rgba(200, 169, 106, 0.8)' : 'rgba(200, 169, 106, 0.3)',
        }}
        transition={{ type: 'spring', damping: 28, stiffness: 350, mass: 0.5 }}
      >
        {cursorText && (
          <motion.span
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-[10px] tracking-[0.2em] font-serif uppercase text-elan-cream font-medium"
          >
            {cursorText}
          </motion.span>
        )}
      </motion.div>

      {/* Inner Dot */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-elan-gold shadow-[0_0_12px_rgba(200,169,106,0.8)]"
        animate={{
          x: position.x - 4,
          y: position.y - 4,
          opacity: isHovered ? 0.3 : 1,
        }}
        transition={{ type: 'spring', damping: 35, stiffness: 450, mass: 0.2 }}
      />
    </div>
  );
}
