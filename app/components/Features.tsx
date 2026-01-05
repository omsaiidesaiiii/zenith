export default function Features() {
    return (
      <section className="bg-[#050505] py-32 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-24 text-center">
            <h2 className="text-xs font-bold tracking-[0.2em] text-zinc-500 uppercase">Why Zenith X</h2>
            <h3 className="mt-4 text-4xl font-bold tracking-tighter text-white md:text-5xl">Beyond the spectrum.</h3>
          </div>
  
          <div className="grid gap-4 md:grid-cols-3 md:gap-8">
            {/* Feature 1 - Large spanning */}
            <div className="group relative col-span-1 overflow-hidden rounded-2xl border border-white/5 bg-zinc-900/20 p-8 transition-colors hover:bg-zinc-900/40 md:col-span-2 md:p-12">
              <div className="relative z-10">
                <h4 className="text-2xl font-bold tracking-tight md:text-3xl text-white">Active Noise Cancellation Pro</h4>
                <p className="mt-4 max-w-md text-zinc-400 leading-relaxed">
                  Adaptive algorithms analyze your environment 48,000 times per second to eliminate noise before it reaches your ears.
                </p>
              </div>
              {/* Monochromatic Glow */}
              <div className="absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-white/5 blur-[80px] transition-all duration-700 group-hover:bg-white/10 group-hover:scale-150"></div>
            </div>
  
            {/* Feature 2 */}
            <div className="group relative col-span-1 overflow-hidden rounded-2xl border border-white/5 bg-zinc-900/20 p-8 transition-colors hover:bg-zinc-900/40">
               <div className="relative z-10">
                  <h4 className="text-xl font-bold tracking-tight">40h Battery Life</h4>
                  <p className="mt-4 text-sm text-zinc-400 leading-relaxed">
                    Listen for days. Fast charge gives 4 hours of playback in just 5 minutes.
                  </p>
               </div>
               <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
            </div>
  
            {/* Feature 3 */}
            <div className="group relative col-span-1 overflow-hidden rounded-2xl border border-white/5 bg-zinc-900/20 p-8 transition-colors hover:bg-zinc-900/40">
                <div className="relative z-10">
                  <h4 className="text-xl font-bold tracking-tight">Spatial Audio</h4>
                  <p className="mt-4 text-sm text-zinc-400 leading-relaxed">
                    Dynamic head tracking places sound all around you for a theater-like experience.
                  </p>
                </div>
            </div>
  
            {/* Feature 4 - Large spanning */}
            <div className="group relative col-span-1 overflow-hidden rounded-2xl border border-white/5 bg-zinc-900/20 p-8 transition-colors hover:bg-zinc-900/40 md:col-span-2 md:p-12">
                <div className="relative z-10 text-right w-full flex flex-col items-end">
                   <h4 className="text-2xl font-bold tracking-tight md:text-3xl text-white">Seamless Connectivity</h4>
                   <p className="mt-4 max-w-md text-zinc-400 leading-relaxed text-right">
                     Instant pairing across all your devices. Switch from your laptop to your phone automatically when a call comes in.
                   </p>
                </div>
                {/* Monochromatic Glow */}
                <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-white/5 blur-[80px] transition-all duration-700 group-hover:bg-white/10 group-hover:scale-150"></div>
            </div>
          </div>
        </div>
      </section>
    );
  }
