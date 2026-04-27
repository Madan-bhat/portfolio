import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap } from "lucide-react";

export default function Education() {
  return (
    <section id="education" className="py-24 bg-black">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="space-y-12">
          <div className="section-heading">
            <p>Archive Record</p>
            <h2>Education_Credentials</h2>
            <p className="uppercase tracking-widest text-xs font-bold text-primary/80">
              Verified Academic Background
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-zinc-900/40 border border-zinc-800 p-8 flex flex-col md:flex-row gap-8 items-center md:items-start transition-all hover:border-primary/50 group">
              <div className="h-24 w-24 border border-primary/30 flex items-center justify-center bg-primary/5 shrink-0 group-hover:bg-primary/10 transition-colors">
                <GraduationCap className="h-10 w-10 text-primary" />
              </div>

              <div className="flex-1 space-y-4">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                  <h3 className="text-2xl font-black uppercase italic tracking-tighter text-white">
                    Computer Engineering
                  </h3>
                  <span className="text-[10px] uppercase tracking-[0.2em] border border-primary/30 px-2 py-1 bg-primary/5 text-primary">
                    Class of 2025
                  </span>
                </div>

                <p className="text-sm text-primary font-bold uppercase tracking-widest">
                  MIT (Manipal Institute of Technology)
                </p>

                <div className="h-[1px] w-full bg-white/5" />

                <p className="text-xs text-zinc-400 uppercase tracking-widest leading-relaxed">
                  Pursuing a comprehensive engineering program at Manipal Institute of Technology.
                  Focused on building a strong foundation in computer engineering principles, systems architecture,
                  and digital design logic.
                </p>

                <div className="flex gap-4 pt-2">
                  <div className="flex items-center gap-2">
                    <div className="h-1 w-1 bg-primary" />
                    <span className="text-[10px] text-zinc-500 uppercase tracking-tighter">Status: Active_Enrollment</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-1 w-1 bg-primary" />
                    <span className="text-[10px] text-zinc-500 uppercase tracking-tighter">Sector: Manipal, IN</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
