import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Sparkles, Zap, Cpu, Database, Layout, ShieldCheck, Flame } from 'lucide-react';

export default function TechMarquee() {
  const row1Ref = useRef(null);
  const row2Ref = useRef(null);

  const skillsRow1 = [
    { title: "Chemical Process AI", tag: "Thermodynamics", img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=600&auto=format&fit=crop" },
    { title: "High-Velocity Next.js 14", tag: "Frontend Dev", img: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=600&auto=format&fit=crop" },
    { title: "Conversion Rate Optimization", tag: "CRO Funnel", img: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=600&auto=format&fit=crop" },
    { title: "120 FPS GSAP Animations", tag: "Silky Scrub", img: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=600&auto=format&fit=crop" },
    { title: "Predictive Analytics Models", tag: "Data Strategy", img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=600&auto=format&fit=crop" },
    { title: "Vite & React 18 Architecture", tag: "Zero Glitch", img: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=600&auto=format&fit=crop" },
  ];

  const skillsRow2 = [
    { title: "Multi-Touch Attribution", tag: "KPI Scaling", img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600&auto=format&fit=crop" },
    { title: "Fluid Dynamics Simulation", tag: "WebGL / R3F", img: "https://images.unsplash.com/photo-1507413245164-6160d8298b31?q=80&w=600&auto=format&fit=crop" },
    { title: "Tailwind CSS Obsidian UI", tag: "Design Token", img: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=600&auto=format&fit=crop" },
    { title: "Awwwards Typography Systems", tag: "Editorial Vibe", img: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=600&auto=format&fit=crop" },
    { title: "Zero-Defect Process Logic", tag: "Engineering", img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=600&auto=format&fit=crop" },
    { title: "< 0.8s LCP Velocity", tag: "Core Web Vitals", img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=600&auto=format&fit=crop" },
  ];

  useEffect(() => {
    const r1 = row1Ref.current;
    const r2 = row2Ref.current;
    if (!r1 || !r2) return;

    // Seamless infinite horizontal loops using GSAP modifiers
    const tween1 = gsap.to(r1, {
      xPercent: -50,
      repeat: -1,
      duration: 35,
      ease: "linear",
    });

    const tween2 = gsap.fromTo(
      r2,
      { xPercent: -50 },
      {
        xPercent: 0,
        repeat: -1,
        duration: 38,
        ease: "linear",
      }
    );

    const handleMouseEnter = () => {
      gsap.to([tween1, tween2], { timeScale: 0.2, duration: 0.6, ease: "power2.out" });
    };

    const handleMouseLeave = () => {
      gsap.to([tween1, tween2], { timeScale: 1, duration: 0.6, ease: "power2.in" });
    };

    const container = r1.parentElement;
    if (container) {
      container.addEventListener("mouseenter", handleMouseEnter);
      container.addEventListener("mouseleave", handleMouseLeave);
    }

    return () => {
      tween1.kill();
      tween2.kill();
      if (container) {
        container.removeEventListener("mouseenter", handleMouseEnter);
        container.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, []);

  return (
    <section className="relative w-full py-16 bg-obsidian-950 text-platinum overflow-hidden border-t border-b border-white/10 select-none">
      {/* Ambient center glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-obsidian-950 via-cyber-yellow/[0.02] to-obsidian-950 pointer-events-none z-10" />

      <div className="flex flex-col gap-6 relative z-0">
        {/* Row 1: Left Scrolling */}
        <div className="flex overflow-hidden whitespace-nowrap">
          <div ref={row1Ref} className="flex items-center gap-6 shrink-0 w-max pr-6">
            {[...skillsRow1, ...skillsRow1].map((skill, idx) => (
              <div
                key={`${skill.title}-${idx}`}
                className="group flex items-center gap-4 px-6 py-3.5 rounded-full bg-white/[0.03] hover:bg-cyber-yellow text-platinum hover:text-obsidian-950 border border-white/10 hover:border-cyber-yellow transition-all duration-300 cursor-pointer shadow-lg hover:shadow-[0_0_30px_rgba(204,255,0,0.4)] hover:scale-105"
                data-preview-img={skill.img}
                data-preview-title={skill.title}
                data-cursor="INSPECT"
              >
                <div className="w-2.5 h-2.5 rounded-full bg-cyber-yellow group-hover:bg-obsidian-950 transition-colors animate-pulse" />
                <span className="font-outfit font-bold text-sm md:text-base tracking-wide">
                  {skill.title}
                </span>
                <span className="px-2.5 py-0.5 rounded-md bg-white/10 group-hover:bg-obsidian-950/20 font-mono text-[10px] uppercase tracking-wider text-obsidian-300 group-hover:text-obsidian-950">
                  {skill.tag}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Row 2: Right Scrolling */}
        <div className="flex overflow-hidden whitespace-nowrap">
          <div ref={row2Ref} className="flex items-center gap-6 shrink-0 w-max pr-6">
            {[...skillsRow2, ...skillsRow2].map((skill, idx) => (
              <div
                key={`${skill.title}-${idx}`}
                className="group flex items-center gap-4 px-6 py-3.5 rounded-full bg-white/[0.03] hover:bg-electric-cyan text-platinum hover:text-obsidian-950 border border-white/10 hover:border-electric-cyan transition-all duration-300 cursor-pointer shadow-lg hover:shadow-[0_0_30px_rgba(0,240,255,0.4)] hover:scale-105"
                data-preview-img={skill.img}
                data-preview-title={skill.title}
                data-cursor="INSPECT"
              >
                <div className="w-2.5 h-2.5 rounded-full bg-electric-cyan group-hover:bg-obsidian-950 transition-colors animate-pulse" />
                <span className="font-outfit font-bold text-sm md:text-base tracking-wide">
                  {skill.title}
                </span>
                <span className="px-2.5 py-0.5 rounded-md bg-white/10 group-hover:bg-obsidian-950/20 font-mono text-[10px] uppercase tracking-wider text-obsidian-300 group-hover:text-obsidian-950">
                  {skill.tag}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
