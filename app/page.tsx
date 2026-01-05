import Features from "./components/Features";
import Footer from "./components/Footer";
import HeadphoneScroll from "./components/HeadphoneScroll";
import Navbar from "./components/Navbar";
import ParallaxGallery from "./components/ParallaxGallery";
import SoundWave from "./components/SoundWave";
import TechSpecs from "./components/TechSpecs";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050505] selection:bg-white/30 text-white scroll-smooth cursor-default">
      <Navbar />
      <HeadphoneScroll />
      <SoundWave />
      <Features />
      <ParallaxGallery />
      <TechSpecs />
      
      {/* Pre-order Call to Action at bottom */}
      <section className="relative overflow-hidden py-40 text-center">
         <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-zinc-900/40 to-[#050505] pointer-events-none"></div>
         <div className="relative z-10 mx-auto max-w-2xl px-6">
            <h2 className="text-5xl font-bold tracking-tighter md:text-7xl">Ready for Zenith?</h2>
            <p className="mt-6 text-xl text-zinc-400">Join the waitlist and be the first to experience the future of sound.</p>
            
            <form className="mt-10 flex flex-col items-center gap-4 md:flex-row md:justify-center">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="w-full rounded-full border border-white/20 bg-white/5 px-6 py-4 text-white placeholder-white/40 backdrop-blur-sm focus:border-white focus:outline-none focus:ring-1 focus:ring-white md:w-80"
                />
                <button className="w-full rounded-full bg-white px-8 py-4 font-bold text-black transition-transform hover:scale-105 active:scale-95 md:w-auto">
                    Join Waitlist
                </button>
            </form>
         </div>
      </section>

      <Footer />
    </main>
  );
}
