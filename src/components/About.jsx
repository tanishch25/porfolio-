import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ShieldCheck } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const sectionRef = useRef(null);
  const headlineRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    // 1. Jingjing Han Word-by-Word Opacity Reveal Scrub
    const words = headlineRef.current.querySelectorAll('.reveal-word');
    gsap.fromTo(
      words,
      { opacity: 0.15, y: 15 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.05,
        ease: "power2.out",
        scrollTrigger: {
          trigger: headlineRef.current,
          start: "top 85%",
          end: "bottom 30%",
          scrub: 1,
        },
      }
    );

    // 2. Scroll-Triggered Line Drawing Separators
    gsap.fromTo(
      section.querySelectorAll('.line-draw'),
      { scaleX: 0 },
      {
        scaleX: 1,
        duration: 1.2,
        stagger: 0.3,
        ease: "expo.out",
        scrollTrigger: {
          trigger: section,
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  const statementParas = [
    "Rooted in chemical engineering, this portfolio bridges the gap between scientific rigor, immersive digital design, and strategic data analytics.",
    "My approach is highly analytical and process-driven. As a freelance designer, I architect visually captivating, high-conversion landing pages engineered to drive meaningful user engagement beyond mere aesthetics.",
    "Beyond the frontend, I am driven by logic and numbers. As a data analyst, I decode complex datasets to uncover hidden trends, translating raw information into actionable, high-impact business solutions.",
    "Whether crafting seamless interfaces, building sophisticated data models, or solving engineering challenges, the goal is constant: optimizing processes and turning raw potential into real-world value."
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative w-full py-32 px-6 md:px-12 bg-[#050507] text-platinum overflow-hidden border-b border-white/10 select-none"
    >
      {/* Swiss Editorial Grid Background Accent */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#14141a_1px,transparent_1px),linear-gradient(to_bottom,#14141a_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-25 pointer-events-none" />
      <div className="absolute top-1/2 right-10 w-[600px] h-[600px] bg-cyber-yellow/5 blur-[200px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto flex flex-col gap-16 relative z-10">
        {/* Top Scroll-Triggered Line Separator */}
        <div className="line-draw w-full h-px bg-gradient-to-r from-cyber-yellow via-white/20 to-transparent origin-left" />

        {/* Executive Header Badge */}
        <div className="flex items-center justify-between text-xs font-mono uppercase tracking-widest text-obsidian-400">
          <div className="flex items-center gap-2 text-cyber-yellow font-bold">
            <ShieldCheck className="w-4 h-4" />
            <span>Executive Thesis // Why This Synthesis Matters</span>
          </div>
          <span>Technical Consultancy // 2026</span>
        </div>

        {/* Giant Integrated Philosophy Block (All exact same font & animation style!) */}
        <div ref={headlineRef} className="max-w-[90rem] py-4 space-y-12">
          {statementParas.map((para, pIdx) => (
            <h2 key={pIdx} className="font-outfit text-[clamp(1.4rem,2.8vw,3rem)] font-light leading-[1.3] tracking-tight text-white/90">
              {para.split(" ").map((word, i) => {
                const lowerWord = word.toLowerCase();
                const isHighlight = lowerWord.includes("analytical") || lowerWord.includes("engineering") || lowerWord.includes("immersive") || lowerWord.includes("data") || lowerWord.includes("optimizing") || lowerWord.includes("solutions");
                return (
                  <span
                    key={i}
                    className={`reveal-word inline-block mr-[0.35em] mb-2 transition-colors duration-300 ${
                      isHighlight ? "text-cyber-yellow font-medium underline decoration-white/20 hover:decoration-cyber-yellow cursor-pointer" : ""
                    }`}
                  >
                    {word}
                  </span>
                );
              })}
            </h2>
          ))}
        </div>

        {/* Bottom Scroll-Triggered Line Separator */}
        <div className="line-draw w-full h-px bg-gradient-to-r from-transparent via-white/20 to-cyber-yellow origin-right" />
      </div>
    </section>
  );
}
