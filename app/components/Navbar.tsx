'use client';

import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { useState } from 'react';

export default function Navbar() {
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();

  // Auto-hide logic on scroll to keep it super clean
  useMotionValueEvent(scrollY, "change", (latest) => {
      const previous = scrollY.getPrevious() || 0;
      if (latest > previous && latest > 150) {
          setHidden(true); 
      } else {
          setHidden(false); 
      }
  });

  return (
    <div className="flex justify-center pt-6 pointer-events-none w-full">
        <motion.nav
            variants={{
                visible: { y: 0, opacity: 1, scale: 1 },
                hidden: { y: -20, opacity: 0, scale: 0.95 }
            }}
            initial="visible"
            animate={hidden ? "hidden" : "visible"}
            transition={{ duration: 0.35, ease: [0.1, 0, 0, 1] }} 
            className="pointer-events-auto flex items-center gap-8 rounded-full border border-white/5 bg-[#0a0a0a]/60 px-6 py-2.5 backdrop-blur-xl shadow-2xl ring-1 ring-white/5"
        >
            {/* Logo */}
            <a href="#" className="text-sm font-bold tracking-widest text-white hover:opacity-80 transition-opacity">
                ZENITH
            </a>

            {/* Separator - subtle visual cue */}
            <div className="hidden md:block h-3 w-[1px] bg-white/20"></div>

            {/* Links - Hidden on Mobile for extreme minimalism */}
            <div className="hidden md:flex items-center gap-6 text-xs font-medium tracking-wide text-zinc-400">
                 <a href="#" className="hover:text-white transition-colors">VISION</a>
                 <a href="#" className="hover:text-white transition-colors">AUDIO</a>
                 <a href="#" className="hover:text-white transition-colors">CRAFT</a>
            </div>

            {/* CTA */}
            <button className="text-xs font-bold text-black bg-white hover:bg-zinc-200 px-4 py-1.5 rounded-full transition-colors ml-2">
                BUY
            </button>
        </motion.nav>
    </div>
  );
}
