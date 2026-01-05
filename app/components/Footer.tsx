export default function Footer() {
    return (
      <footer className="border-t border-white/10 bg-[#050505] py-12 text-sm text-zinc-500">
        <div className="mx-auto max-w-7xl px-6 flex flex-col items-center justify-between gap-6 md:flex-row">
            <div>
               <span className="text-white font-bold tracking-tighter">ZENITH AUDIO</span>
               <p className="mt-2">Designed in California. Assembled in Future.</p>
            </div>
            
            <div className="flex gap-8">
                <a href="#" className="hover:text-white transition-colors">Support</a>
                <a href="#" className="hover:text-white transition-colors">Privacy</a>
                <a href="#" className="hover:text-white transition-colors">Terms</a>
            </div>
  
            <div>
               &copy; {new Date().getFullYear()} Zenith Audio Inc.
            </div>
        </div>
      </footer>
    );
  }
