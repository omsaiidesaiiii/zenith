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
      <section className="bg-[#050505] py-24 text-white">
          <div className="mx-auto max-w-4xl px-6">
              <h2 className="mb-12 text-3xl font-bold tracking-tight md:text-4xl">Technical Specifications</h2>
              <div className="divide-y divide-white/10">
                  {specs.map((spec, i) => (
                      <div key={i} className="flex flex-col py-6 md:flex-row md:justify-between md:py-8 transition-colors hover:bg-white/5 px-4 rounded-lg">
                          <span className="mb-2 text-sm font-medium text-zinc-500 md:mb-0">{spec.label}</span>
                          <span className="text-lg font-medium">{spec.value}</span>
                      </div>
                  ))}
              </div>
          </div>
      </section>
    );
  }
