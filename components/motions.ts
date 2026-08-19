// components/motions.ts

// Animasi spring agar terasa 'membal' dan responsif saat hover/klik
export const f_springTransition = { type: "spring", stiffness: 300, damping: 20 } as const;

// Animasi standar untuk memunculkan elemen (fade in dan slide up)
export const f_fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.3 }, // Animasi mulai saat 30% elemen terlihat di layar
  transition: { duration: 0.5 }
};