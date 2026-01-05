export default function Features() {
    return (
      <section className="bg-[#050505] py-32 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-20 text-center">
            <h2 className="text-sm font-bold tracking-widest text-zinc-500 uppercase">Why Zenith X</h2>
            <h3 className="mt-4 text-4xl font-bold tracking-tight text-white md:text-5xl">Beyond the spectrum.</h3>
          </div>
  
          <div className="grid gap-6 md:grid-cols-3">
            {/* Feature 1 - Large spanning */}
            <div className="group relative col-span-1 overflow-hidden rounded-3xl bg-zinc-900/50 p-8 transition-colors hover:bg-zinc-900 md:col-span-2 md:p-12">
              <div className="relative z-10">
                <h4 className="text-2xl font-bold md:text-3xl">Active Noise Cancellation Pro</h4>
                <p className="mt-4 max-w-md text-zinc-400">
                  Adaptive algorithms analyze your environment 48,000 times per second to eliminate noise before it reaches your ears.
                </p>
              </div>
              <div className="absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 blur-[80px] transition-all duration-700 group-hover:scale-150"></div>
            </div>
  
            {/* Feature 2 */}
            <div className="group relative col-span-1 overflow-hidden rounded-3xl bg-zinc-900/50 p-8 transition-colors hover:bg-zinc-900">
               <div className="relative z-10">
                  <h4 className="text-xl font-bold">40h Battery Life</h4>
                  <p className="mt-4 text-sm text-zinc-400">
                    Listen for days. Fast charge gives 4 hours of playback in just 5 minutes.
                  </p>
               </div>
               <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.05),transparent)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
            </div>
  
            {/* Feature 3 */}
            <div className="group relative col-span-1 overflow-hidden rounded-3xl bg-zinc-900/50 p-8 transition-colors hover:bg-zinc-900">
                <div className="relative z-10">
                  <h4 className="text-xl font-bold">Spatial Audio</h4>
                  <p className="mt-4 text-sm text-zinc-400">
                    Dynamic head tracking places sound all around you for a theater-like experience.
                  </p>
                </div>
            </div>
  
            {/* Feature 4 - Large spanning */}
            <div className="group relative col-span-1 overflow-hidden rounded-3xl bg-zinc-900/50 p-8 transition-colors hover:bg-zinc-900 md:col-span-2 md:p-12">
                <div className="relative z-10">
                   <h4 className="text-2xl font-bold md:text-3xl">Seamless Connectivity</h4>
                   <p className="mt-4 max-w-md text-zinc-400">
                     Instant pairing across all your devices. Switch from your laptop to your phone automatically when a call comes in.
                   </p>
                </div>
                <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-gradient-to-tr from-emerald-500/20 to-teal-500/20 blur-[80px] transition-all duration-700 group-hover:scale-150"></div>
            </div>
          </div>
        </div>
      </section>
    );
  }
