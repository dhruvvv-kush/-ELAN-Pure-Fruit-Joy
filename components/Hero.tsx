'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export function Hero() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // Floating ambient gold dust particle animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    const particleCount = 45;
    const particles = Array.from({ length: particleCount }).map(() => ({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 2 + 0.5,
      speedX: (Math.random() - 0.5) * 0.3,
      speedY: -Math.random() * 0.4 - 0.1,
      opacity: Math.random() * 0.6 + 0.2,
      pulse: Math.random() * 0.02 + 0.005,
    }));

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      particles.forEach((p) => {
        p.y += p.speedY;
        p.x += p.speedX;
        p.opacity += Math.sin(Date.now() * p.pulse) * 0.005;

        if (p.y < 0) {
          p.y = height;
          p.x = Math.random() * width;
        }
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(200, 169, 106, ${Math.max(0.1, Math.min(0.8, p.opacity))})`;
        ctx.shadowBlur = 8;
        ctx.shadowColor = 'rgba(200, 169, 106, 0.5)';
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section className="relative w-full h-screen flex flex-col items-center justify-center bg-elan-dark overflow-hidden z-20">
      {/* Background Canvas Particles */}
      <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none z-0 opacity-70" />

      {/* Subtle Radial Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(200,169,106,0.12)_0%,transparent_70%)] pointer-events-none" />

      {/* Main Content Container */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto flex flex-col items-center">
        {/* Gold Leaf Logo Icon */}
        <motion.div
          initial={{ opacity: 0, scale: 0.7, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
          className="mb-8"
        >
          <div className="w-16 h-16 rounded-full border border-elan-gold/40 flex items-center justify-center bg-gradient-to-b from-elan-gold/20 via-elan-gold/5 to-transparent backdrop-blur-md shadow-[0_0_30px_rgba(200,169,106,0.25)]">
            <svg viewBox="0 0 32 32" fill="none" className="w-8 h-8 text-elan-gold">
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
        </motion.div>

        {/* Brand Name Typography */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="font-serif text-6xl sm:text-8xl md:text-9xl tracking-[0.2em] font-medium text-gold-gradient mb-4 select-none"
        >
          ÉLAN
        </motion.h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-xs sm:text-sm md:text-base font-sans tracking-[0.4em] uppercase text-elan-gold/90 font-light mb-8"
        >
          PURE FRUIT JOY
        </motion.p>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.9 }}
          className="font-serif italic text-lg sm:text-2xl text-elan-cream/80 tracking-wider font-light"
        >
          Crafted by Nature. Perfected for You.
        </motion.p>
      </div>

      {/* Scroll Invitation Indicator */}
      <motion.a
        href="#film"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{
          opacity: { duration: 1, delay: 1.2 },
          y: { duration: 2, repeat: Infinity, ease: 'easeInOut' },
        }}
        data-cursor="SCROLL"
        className="absolute bottom-10 z-20 flex flex-col items-center gap-2 group cursor-pointer"
      >
        <div className="w-8 h-8 rounded-full border border-elan-gold/30 flex items-center justify-center group-hover:border-elan-gold group-hover:bg-elan-gold/10 transition-all">
          <ChevronDown className="w-4 h-4 text-elan-gold" />
        </div>
      </motion.a>
    </section>
  );
}
