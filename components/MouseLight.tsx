'use client';

import { useMousePosition } from '@/hooks/useMousePosition';
import { motion } from 'framer-motion';

export function MouseLight() {
  const { x, y } = useMousePosition();

  return (
    <motion.div
      className="pointer-events-none fixed inset-0 z-10 transition-opacity duration-500"
      style={{
        background: `radial-gradient(600px circle at ${x}px ${y}px, rgba(200, 169, 106, 0.07), transparent 80%)`,
      }}
    />
  );
}
