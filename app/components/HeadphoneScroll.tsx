'use client';

import { useEffect, useRef, useState } from 'react';
import { useScroll, useTransform, motion, useSpring } from 'framer-motion';

const FRAME_COUNT = 240;

interface HeadphoneScrollProps {
    onLoaded?: () => void;
}

export default function HeadphoneScroll({ onLoaded }: HeadphoneScrollProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [imagesLoaded, setImagesLoaded] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  // Scroll progress for the container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  // Smooth out the scroll progress for buttery animation
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Map scroll progress (0 to 1) to frame index (0 to FRAME_COUNT - 1)
  const frameIndex = useTransform(smoothProgress, [0, 1], [0, FRAME_COUNT - 1]);
  
  // Preload images
  useEffect(() => {
    const loadImages = async () => {
      const loadedImages: HTMLImageElement[] = [];
      let loadedCount = 0;

      for (let i = 1; i <= FRAME_COUNT; i++) {
        const img = new Image();
        const filename = `/ezgif-frame-${i.toString().padStart(3, '0')}.jpg`;
        img.src = filename;
        
        img.onload = () => {
          loadedCount++;
          setImagesLoaded(loadedCount);
        };
        // Handle error just in case
        img.onerror = () => {
            console.error(`Failed to load image: ${filename}`);
            loadedCount++; // Still increment to not block loading
            setImagesLoaded(loadedCount);
        }
        loadedImages.push(img);
      }
      setImages(loadedImages);
    };

    loadImages();
  }, []);

  useEffect(() => {
    if (imagesLoaded === FRAME_COUNT) {
      setIsLoading(false);
      if (onLoaded) onLoaded();
    }
  }, [imagesLoaded, onLoaded]);

  // Render to canvas
  useEffect(() => {
    const render = () => {
      const canvas = canvasRef.current;
      const ctx = canvas?.getContext('2d');
      if (!canvas || !ctx || images.length === 0) return;

      const currentFrameIndex = Math.round(frameIndex.get());
      const img = images[Math.min(currentFrameIndex, images.length - 1)];

      if (img && img.complete && img.naturalWidth > 0) {
        // Update canvas size to match window if it doesn't already
        // This ensures "full width" responsiveness
        const dpr = window.devicePixelRatio || 1;
        const rect = canvas.getBoundingClientRect();
        
        // Only set if different to avoid clearing canvas unnecessarily
        if (canvas.width !== rect.width * dpr || canvas.height !== rect.height * dpr) {
             canvas.width = rect.width * dpr;
             canvas.height = rect.height * dpr;
             ctx.scale(dpr, dpr);
        }

        // Canvas resizing logic to COVER (fill screen) instead of CONTAIN
        // This will crop the top/bottom if needed but ensure full width/height with no black bars
        const canvasAspect = canvas.width / canvas.height;
        const imgAspect = img.width / img.height;
        
        // Clear canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        let drawWidth, drawHeight, offsetX, offsetY;
        
        if (canvasAspect > imgAspect) {
          // Canvas is wider than image -> match width, crop height (top/bottom)
          // actually for 'cover' if canvas is wider, we must match width and scale height accordingly?
          // No, if canvas is wider (16:9) and img is (4:3), we need to zoom in so width matches? 
          // WAIT: standard object-fit: cover logic:
          
          drawWidth = canvas.width;
          drawHeight = canvas.width / imgAspect;
          
          // If the resulting height is SHORTER than canvas, we need to scale UP more
          if (drawHeight < canvas.height) {
              drawHeight = canvas.height;
              drawWidth = drawHeight * imgAspect;
          }
        } else {
          // Canvas is taller than image
          drawHeight = canvas.height;
          drawWidth = drawHeight * imgAspect;
          
           // If resulting width is LESS than canvas, scale UP
           if (drawWidth < canvas.width) {
               drawWidth = canvas.width;
               drawHeight = drawWidth / imgAspect;
           }
        }
        
        // Center the image
        offsetX = (canvas.width - drawWidth) / 2;
        offsetY = (canvas.height - drawHeight) / 2;

        ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
      }
    };

    // Subscribe to change
    const unsubscribe = frameIndex.on('change', () => {
        render();
    });

    // Handle resize
    const handleResize = () => {
        render();
    };
    window.addEventListener('resize', handleResize);
    
    // Initial Render
    if (!isLoading) {
        render();
    }

    return () => {
        unsubscribe();
        window.removeEventListener('resize', handleResize);
    };
  }, [frameIndex, images, isLoading]);


  // Text Animations
  const fadeInOut = (entry: number, peak: number, exit: number) => ({
      opacity: useTransform(smoothProgress, [entry, peak, exit], [0, 1, 0]),
      y: useTransform(smoothProgress, [entry, peak, exit], [50, 0, -50]),
      scale: useTransform(smoothProgress, [entry, peak], [0.9, 1])
  });

  const heroAnim = {
      opacity: useTransform(smoothProgress, [0, 0.15], [1, 0]),
      y: useTransform(smoothProgress, [0, 0.15], [0, -50]),
      scale: useTransform(smoothProgress, [0, 0.15], [1, 0.9])
  };

  const section1 = fadeInOut(0.2, 0.3, 0.4);
  const section2 = fadeInOut(0.5, 0.6, 0.7);
  const section3 = {
      opacity: useTransform(smoothProgress, [0.8, 1], [0, 1]),
      y: useTransform(smoothProgress, [0.8, 1], [50, 0]),
  };

  return (
    <div ref={containerRef} className="relative h-[400vh] bg-[#050505]">
      
      {/* Loading Spinner */}
      {isLoading && (
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#050505] text-white">
             <div className="relative mb-4 h-16 w-16">
                 <div className="absolute inset-0 animate-ping rounded-full border border-white/20"></div>
                 <div className="absolute inset-0 animate-spin rounded-full border-4 border-t-white border-r-transparent border-b-white/20 border-l-transparent"></div>
             </div>
             <p className="font-mono text-xs tracking-[0.2em] text-white/60 uppercase">
                Loading Zenith Experience... {Math.round((imagesLoaded / FRAME_COUNT) * 100)}%
             </p>
        </div>
      )}

      {/* Sticky Canvas Container */}
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <canvas 
            ref={canvasRef} 
            className="block h-full w-full touch-none" 
            style={{ width: '100%', height: '100%' }}
        />
        
        {/* Soft Vignette Overlay for seamless blending */}
        <div className="pointer-events-none absolute inset-0 z-[1] bg-[radial-gradient(circle_at_50%_50%,transparent_60%,#050505_100%)] opacity-80"></div>
        <div className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-b from-[#050505]/20 via-transparent to-[#050505]/20"></div>

        {/* Text Overlays */}
        <div className="pointer-events-none absolute inset-0 z-10 flex flex-col items-center justify-center px-6">
           
           {/* 0% - Hero */}
           <motion.div style={{ ...heroAnim }} className="absolute flex flex-col items-center text-center">
              <h1 className="text-7xl font-bold tracking-tighter text-white/95 md:text-9xl">Zenith X</h1>
              <div className="mt-6 flex items-center gap-4">
                  <div className="h-[1px] w-12 bg-white/30"></div>
                  <p className="text-lg tracking-[0.3em] text-white/60 uppercase">Pure Sound</p>
                  <div className="h-[1px] w-12 bg-white/30"></div>
              </div>
           </motion.div>
  
           {/* 30% - Left */}
           <motion.div style={{ ...section1 }} className="absolute left-6 top-1/2 -translate-y-1/2 md:left-24 max-w-lg">
              <div className="mb-4 text-xs font-bold tracking-widest text-[#bcbcbc] uppercase">Architecture</div>
              <h2 className="text-5xl font-bold tracking-tight text-white/90 md:text-7xl">Precision<br/>Engineering.</h2>
              <p className="mt-6 text-xl leading-relaxed text-white/50">
                  Every customized component is essentially built for acoustic perfection, eliminating resonance for pure audio fidelity.
              </p>
           </motion.div>
  
           {/* 60% - Right */}
           <motion.div style={{ ...section2 }} className="absolute right-6 top-1/2 -translate-y-1/2 md:right-24 max-w-lg text-right">
               <div className="mb-4 flex justify-end">
                  <div className="text-xs font-bold tracking-widest text-[#bcbcbc] uppercase">Materials</div>
               </div>
              <h2 className="text-5xl font-bold tracking-tight text-white/90 md:text-7xl">Titanium<br/>Drivers.</h2>
              <p className="ml-auto mt-6 text-xl leading-relaxed text-white/50 max-w-md">
                  Aerospace-grade titanium diaphragms deliver crystal clear highs and deep, distorted-free bass response at any volume.
              </p>
           </motion.div>
  
           {/* 90% - Center CTA */}
           <motion.div style={{ ...section3 }} className="absolute flex flex-col items-center text-center">
              <h2 className="text-6xl font-bold tracking-tighter text-white/95 md:text-8xl">Hear Everything.</h2>
              <p className="mt-6 max-w-xl text-center text-lg text-white/50">
                  Silence the world. Amplify the emotion. Experience sound as the artist intended.
              </p>
              <button className="pointer-events-auto mt-10 group relative overflow-hidden rounded-full bg-white px-10 py-4 font-bold text-black transition-all hover:scale-105 hover:shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)]">
                <span className="relative z-10 transition-colors group-hover:text-black">Pre-order Now</span>
                <div className="absolute inset-0 -translate-x-[101%] bg-gradient-to-r from-gray-200 to-white transition-transform duration-500 group-hover:translate-x-0"></div>
              </button>
           </motion.div>
        </div>
      </div>
    </div>
  );
}
