'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

const images = [
  '/design/1.webp',
  '/design/c1.webp',
  '/design/c2.webp',
  '/design/a1.webp',
  '/design/a2.webp',
  '/design/d4.webp',
  '/design/d5.webp',
  '/design/b1.webp',
  '/design/e1.webp',
  '/design/e2.webp',
  '/design/e3.webp',
  '/design/f1.webp',
  '/design/f2.webp',
  '/design/f3.webp',
  '/design/f4.webp',
  '/design/g1.webp',
  '/design/i1.webp',
  '/design/i2.webp',
  '/design/i3.webp',
  '/design/j1.webp',
  '/design/j2.webp',
  '/design/j3.webp',
  '/design/j4.webp',
];

export default function MasonryGallery() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div className="min-h-screen px-4 py-0 md:px-0">
      <div className="columns-1 gap-4 space-y-4 transition-all sm:columns-2 md:columns-3 lg:columns-4">
        {images.map((src, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            viewport={{ once: true }}
            onMouseEnter={() => setHovered(index)}
            onMouseLeave={() => setHovered(null)}
            className="group relative overflow-hidden rounded-2xl shadow-lg transition-all duration-300 ease-in-out"
          >
            <motion.img
              src={src}
              alt={`Random ${index}`}
              className={`w-full rounded-lg object-cover transition-all duration-300 ease-in-out ${
                hovered === null
                  ? 'blur-0 scale-100'
                  : hovered === index
                    ? 'blur-0 scale-105'
                    : 'blur-xs'
              }`}
              whileHover={{ scale: 1.05 }}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
