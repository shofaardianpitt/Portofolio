// components/ui/TypewriterHeading.tsx
'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface TypewriterProps {
  text: string;
  className?: string;
  speed?: number;
}

export const TypewriterHeading = ({ text, className = '', speed = 90 }: TypewriterProps) => {
  const [displayedText, setDisplayedText] = useState('');
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (!isDeleting && index < text.length) {
      // Proses Mengetik
      timer = setTimeout(() => {
        setDisplayedText((prev) => prev + text[index]);
        setIndex((prev) => prev + 1);
      }, speed);
    } else if (!isDeleting && index === text.length) {
      // Jeda 4 detik setelah selesai mengetik
      timer = setTimeout(() => setIsDeleting(true), 4000);
    } else if (isDeleting && displayedText.length > 0) {
      // Proses Menghapus
      timer = setTimeout(() => {
        setDisplayedText((prev) => prev.slice(0, -1));
      }, speed / 2);
    } else if (isDeleting && displayedText.length === 0) {
      // Reset ulang ke awal
      setIsDeleting(false);
      setIndex(0);
    }

    return () => clearTimeout(timer);
  }, [index, text, speed, isDeleting, displayedText]);

  return (
    <h1 className={className}>
      {displayedText}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.6, repeat: Infinity, repeatType: 'reverse' }}
        className="inline-block w-[3px] h-[0.8em] bg-emerald-400 ml-1.5 align-middle rounded-full shadow-[0_0_8px_#10b981]"
      />
    </h1>
  );
};