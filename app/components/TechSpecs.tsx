export default function TechSpecs() {
    const specs = [
      { label: "Audio Technology", value: "Custom high-excursion driver" },
      { label: "Processing", value: "Zenith H1 Chip" },
      { label: "Connectivity", value: "Bluetooth 5.4 Class 1" },
      { label: "Battery", value: "Up to 40 hours with ANC on" },
      { label: "Charging", value: "USB-C, MagSafe Wireless" },
      { label: "Microphones", value: "8-mic array with beamforming" },
      { label: "Weight", value: "285 grams" },
      { label: "Water Resistance", value: "IPX4 Sweat & Water Resistant" },
    ];
  
    return (
      <section className="bg-[#050505] py-32 text-white relative border-t border-white/5">
          <div className="mx-auto max-w-5xl px-6">
              
              <div className="mb-20 text-center">
                  <h2 className="text-xs font-bold tracking-[0.2em] text-zinc-500 uppercase mb-6">Specifications</h2>
                  <h3 className="text-4xl md:text-5xl font-bold tracking-tighter text-white">The finer details.</h3>
              </div>

              <div className="grid gap-x-20 gap-y-8 md:grid-cols-2">
                  {specs.map((spec, i) => (
                      <div key={i} className="group flex flex-col border-b border-white/10 py-6 transition-colors hover:border-white/30">
                          <span className="mb-2 text-xs font-bold tracking-wider text-zinc-500 uppercase">{spec.label}</span>
                          <span className="text-lg font-medium text-white/90">{spec.value}</span>
                      </div>
                  ))}
              </div>
          </div>
      </section>
    );
  }
