"use client";

import { Box, ArrowDown } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Hero() {
  const [typedText, setTypewriter] = useState("");
  const fullText = "Subject: 18yo Electrical Engineer // Loc: Udupi, IN // Spec: Systems, Robotics, TypeScript.";

  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const [logs, setLogs] = useState<string[]>([]);
  const logMessages = [
    ">> analyzing logic...",
    ">> bug eliminated",
    ">> system optimized",
    ">> decrypting data...",
    ">> connection stable",
    ">> security bypass active",
    ">> mapping coordinates...",
    ">> scanning bio-metrics...",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setLogs((prev) => {
        const nextLog = logMessages[Math.floor(Math.random() * logMessages.length)];
        return [...prev.slice(-2), nextLog];
      });
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const [flicker, setFlicker] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setFlicker(Math.random() > 0.95 ? 0.5 : 1);
    }, 100);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setTypewriter(fullText.slice(0, i));
      i++;
      if (i > fullText.length) clearInterval(interval);
    }, 40);
    return () => clearInterval(interval);
  }, []);

  const reveal = {
    hidden: { opacity: 0, y: 30, filter: "blur(10px)" },
    show: { opacity: 1, y: 0, filter: "blur(0px)" },
  };

  return (
    <section
      id="home"
      className="surveillance-hero relative flex min-h-screen flex-col justify-center overflow-hidden"
      style={{ background: 'transparent' }}
    >
      {/* Corner HUD Elements */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="hud-corner left-8 top-8 text-xs font-mono uppercase tracking-widest text-zinc-500 z-50"
      >
        <p>CAM_04 [REC]</p>
        <p className="text-primary mt-1">SIGNAL_STRONG</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="hud-corner right-8 top-8 text-right text-xs font-mono uppercase tracking-widest text-zinc-500 z-50"
      >
        <p>00:07:50:00</p>
        <p className="mt-1">ISO 800</p>
      </motion.div>

      {/* Side HUD Elements */}
      <motion.div
        initial={{ x: -100 }}
        animate={{ x: 0 }}
        transition={{ type: "spring", damping: 20, delay: 1.5 }}
        className="side-ribbon left-0 top-[20%] border-y border-white/10 bg-black/40 py-8 px-2 flex flex-col items-center gap-4 z-50"
      >
        <span className="text-xl font-bold">W.</span>
        <span className="writing-vertical-rl rotate-180 uppercase text-[10px] tracking-[0.4em] font-bold">Honors</span>
      </motion.div>

      {/* Central Content */}
      <div className="container relative mx-auto px-4 text-center z-10">
        <motion.div
          initial="hidden"
          animate="show"
          transition={{ staggerChildren: 0.15, delayChildren: 0.8 }}
          className="space-y-10"
        >
          <motion.div variants={reveal} transition={{ duration: 0.8 }} className="inline-block">
            <div className="top-secret-badge group cursor-help">
              <span className="group-hover:text-white transition-colors">Top Secret // Case #2026</span>
            </div>
          </motion.div>

          <motion.h1
            variants={reveal}
            transition={{ duration: 1.2, ease: [0.23, 1, 0.32, 1] }}
            className="surveillance-name text-7xl sm:text-8xl md:text-9xl lg:text-[12rem] uppercase select-none"
          >
            Madan <br /> Bhat
          </motion.h1>

          <motion.div variants={reveal} transition={{ duration: 0.8 }} className="space-y-4">
            <div className="space-y-1">
              <p className="text-lg md:text-xl text-zinc-400 font-serif italic">
                <span className="text-white font-bold not-italic">Creative</span> Developer.
              </p>
              <p className="text-lg md:text-xl text-zinc-400 font-serif">
                Systemic <span className="text-primary italic">Interactivity</span> & Technical <span className="text-primary italic">Rigor</span>.
              </p>
            </div>
            <p className="text-primary uppercase text-[10px] tracking-[0.4em] font-black h-4">
              {typedText}<span className="animate-pulse">_</span>
            </p>
          </motion.div>

          <motion.div variants={reveal} transition={{ duration: 0.8 }} className="flex justify-center gap-6 pt-4">
             <Link href="#projects" className="text-[10px] uppercase tracking-[0.3em] font-black text-zinc-500 hover:text-primary transition-colors flex items-center gap-2">
                <div className="h-px w-8 bg-zinc-800" />
                View_Evidence
             </Link>
             <Link href="#contact" className="text-[10px] uppercase tracking-[0.3em] font-black text-zinc-500 hover:text-primary transition-colors flex items-center gap-2">
                Contact_Subject
                <div className="h-px w-8 bg-zinc-800" />
             </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative HUD Elements */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.4, scale: 1 }}
        transition={{ delay: 2, duration: 1.5 }}
        className="hud-panel evidence-polaroid hidden xl:block z-50"
      >
        <div className="h-40 w-full bg-zinc-900 border border-white/10 overflow-hidden relative group">
          <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors" />
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
            <span className="text-[8px] font-black uppercase tracking-tighter">Click to enlarge</span>
          </div>
        </div>
        <span className="text-[10px] mt-2 block font-mono">EVIDENCE_Mb.jpg</span>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2, duration: 1 }}
        className="coordinate-display hidden md:flex z-50"
      >
        <div className="red-dot animate-pulse" />
        <p className="font-mono">X: {Math.round(mousePos.x)} Y: {Math.round(mousePos.y)}</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 2.4, duration: 1 }}
        className="diagnostic-logs hidden xl:block font-mono z-50"
      >
        {logs.map((log, index) => (
          <p key={index}>{log}</p>
        ))}
        {logs.length === 0 && (
          <>
            <p>&gt;&gt; analyzing logic...</p>
            <p>&gt;&gt; bug eliminated</p>
            <p>&gt;&gt; system optimized</p>
          </>
        )}
      </motion.div>


      <div className="absolute bottom-8 left-8 flex items-center gap-3 z-50">
        <div className="h-2 w-2 bg-primary rounded-full animate-pulse" />
        <span className="text-[10px] uppercase tracking-widest font-bold text-zinc-500">Live Feed</span>
      </div>

      <div className="absolute bottom-8 right-8 text-right font-mono text-[8px] text-zinc-600 leading-loose z-50">
        <p className="text-primary font-black uppercase tracking-widest">Stable</p>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 md:block z-50"
      >
        <Link
          href="#about"
          className="text-primary/40 hover:text-primary transition-colors"
          aria-label="Scroll to about section"
        >
          <ArrowDown className="h-6 w-6 animate-bounce" />
        </Link>
      </motion.div>

      {/* Base Dark Layer - moved back to z-stack bottom */}
      <div className="absolute inset-0 bg-black -z-20" />

      {/* Spotlight Effect - Dark Overlay with Hole */}
      <div
        className="pointer-events-none absolute inset-0 z-40 transition-opacity duration-300"
        style={{
          background: `radial-gradient(400px circle at ${mousePos.x}px ${mousePos.y}px, transparent 10%, rgba(0, 0, 0, ${0.98 * flicker}) 70%)`,
        }}
      />

      {/* Red Glow Light Source */}
      <div
        className="pointer-events-none absolute inset-0 z-30 transition-opacity duration-300"
        style={{
          background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(255, 51, 51, ${0.15 * flicker}), transparent 70%)`,
        }}
      />
    </section>
  );
}
