export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black py-12 border-t border-white/5">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-4">
            <div className="h-6 w-6 bg-primary/20 border border-primary/50 flex items-center justify-center">
              <span className="text-[10px] text-primary font-bold">MB</span>
            </div>
            <div className="h-4 w-[1px] bg-white/10" />
            <p className="text-[10px] uppercase tracking-[0.3em] text-zinc-500">
              System_Archive v2026.4.26
            </p>
          </div>

          <div className="text-center md:text-right">
            <p className="text-[10px] uppercase tracking-[0.2em] text-zinc-400">
              &copy; {currentYear} Madan Bhat. <span className="text-zinc-600">All data points secured.</span>
            </p>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/5 flex flex-wrap justify-center gap-x-8 gap-y-4">
          {["Encryption_Standard", "Network_Status: Optimal", "Signal_Frequency: 443Hz", "Auth_Level: Admin"].map(label => (
            <span key={label} className="text-[8px] uppercase tracking-[0.4em] text-zinc-600 font-bold">
              {label}
            </span>
          ))}
        </div>
      </div>
    </footer>
  );
}
