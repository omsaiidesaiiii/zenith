'use client';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function SoundWave() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section ref={ref} className="relative flex flex-col items-center justify-center  bg-[#050505] text-center px-6 overflow-hidden">
            
            {/* Background ambient glow - Mono/Silver */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-white/5 blur-[100px] rounded-full pointer-events-none"></div>

            <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="relative z-10"
            >
                <div className="mb-6 text-xs font-bold tracking-[0.4em] text-white/40 uppercase">The Zenith Signature</div>
                <h2 className="mb-8 text-6xl font-black tracking-tighter text-white md:text-8xl">
                    Silence is <br/> the new loud.
                </h2>
                <p className="mx-auto max-w-xl text-lg leading-relaxed text-zinc-500">
                    Our proprietary <span className="text-white">Deep Void™</span> silence algorithm doesn't just block noise. It erases the world, leaving you alone with the artist.
                </p>
            </motion.div>

            {/* Visualizer - Refined to be thin, sharp, monochrome */}
            <div className="mt-20 flex h-24 items-end justify-center gap-1.5 md:gap-3">
                 {[...Array(24)].map((_, i) => (
                     <motion.div
                        key={i}
                        className="w-1 bg-white/80 rounded-full"
                        initial={{ height: "4px" }}
                        animate={isInView ? { 
                            height: [
                                `${Math.random() * 20 + 5}px`, 
                                `${Math.random() * 80 + 20}px`, 
                                `${Math.random() * 20 + 5}px`
                            ],
                            opacity: [0.3, 1, 0.3]
                        } : {}}
                        transition={{ 
                            repeat: Infinity, 
                            repeatType: "reverse", 
                            duration: 0.8 + Math.random() * 0.5,
                            delay: i * 0.05,
                            ease: "easeInOut"
                        }}
                     />
                 ))}
            </div>
        </section>
    );
}
