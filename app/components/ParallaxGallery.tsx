'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function ParallaxGallery() {
    const sectionRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ['start end', 'end start']
    });

    const y = useTransform(scrollYProgress, [0, 1], [0, -150]);
    const yReverse = useTransform(scrollYProgress, [0, 1], [0, 150]);

    // Using abstract/tech/architectural images that fit the vibe better than generic lifestyle
    const images = [
        "https://images.unsplash.com/photo-1618331835717-801e976710b2?q=80&w=1000&auto=format&fit=crop", // Abstract dark
        "https://images.unsplash.com/photo-1507646227500-4d389b0012be?q=80&w=1000&auto=format&fit=crop", // Minimal architecture
        "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1000&auto=format&fit=crop"  // Cyberpunk/Tech but can be greyscaled
    ];

    return (
        <section ref={sectionRef} className="relative bg-[#050505]  overflow-hidden">
             
             {/* Section Header */}
             <div className="relative z-10 mx-auto mb-24 max-w-7xl px-6 text-center">
                 <h2 className="text-4xl font-bold tracking-tighter text-white md:text-6xl">
                     Designed for <br/> <span className="text-white/30">the modern audiophile.</span>
                 </h2>
             </div>

             {/* Gallery Grid */}
             <div className="mx-auto flex max-w-[90rem] justify-center gap-6 px-6 md:gap-12">
                 
                 {/* Col 1 - Moves Up */}
                 <motion.div style={{ y }} className="flex w-1/3 flex-col gap-6 md:gap-12">
                     <div className="group relative aspect-[3/4] w-full overflow-hidden rounded-sm bg-zinc-900">
                         <img src={images[0]} className="h-full w-full object-cover opacity-60 grayscale transition-all duration-700 group-hover:scale-110 group-hover:opacity-100 group-hover:grayscale-0" alt="Detail 1"/>
                         <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 transition-opacity group-hover:opacity-100"></div>
                     </div>
                 </motion.div>

                 {/* Col 2 - Moves Down (Center) */}
                 <motion.div style={{ y: yReverse }} className="flex w-1/3 flex-col gap-6 pt-20 md:gap-12 md:pt-40">
                     <div className="group relative aspect-[3/4] w-full overflow-hidden rounded-sm bg-zinc-900">
                         <img src={images[1]} className="h-full w-full object-cover opacity-60 grayscale transition-all duration-700 group-hover:scale-110 group-hover:opacity-100 group-hover:grayscale-0" alt="Detail 2"/>
                     </div>
                     <div className="px-4 text-center">
                        <p className="font-mono text-xs uppercase tracking-widest text-zinc-500">The Art of Sound</p>
                     </div>
                 </motion.div>

                 {/* Col 3 - Moves Up */}
                 <motion.div style={{ y }} className="flex w-1/3 flex-col gap-6 md:gap-12">
                     <div className="group relative aspect-[3/4] w-full overflow-hidden rounded-sm bg-zinc-900">
                         <img src={images[2]} className="h-full w-full object-cover opacity-60 grayscale transition-all duration-700 group-hover:scale-110 group-hover:opacity-100 group-hover:grayscale-0" alt="Detail 3"/>
                     </div>
                 </motion.div>

             </div>
        </section>
    );
}
