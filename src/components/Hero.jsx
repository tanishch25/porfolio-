import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { projectsData } from '../data/projects';
import { ArrowDown, Sparkles } from 'lucide-react';

/**
 * ============================================================================
 * ASSET FOLDER INTEGRATION & LOCAL WIRING INSTRUCTIONS:
 * ============================================================================
 * 1. This component automatically loads your image/video portfolio assets from
 *    the central data layer in `src/data/projects.js`.
 * 2. To wire up your local image/video asset path:
 *    a) Place your visual assets (e.g., `.jpg`, `.png`, `.mp4`, `.webp`) inside
 *       the `public/projects/` directory in your root project folder:
 *       -> C:\Users\tanis\.gemini\antigravity\scratch\tanish-portfolio\public\projects\
 *    b) Open `src/data/projects.js` and update the `image` property of each project
 *       to point to your local filename (e.g., `image: "/projects/my-work-1.jpg"`).
 * 3. The masked typography carousel dynamically transitions between these assets
 *    as the user moves their cursor across the screen!
 * ============================================================================
 */

export default function Hero() {
  const containerRef = useRef(null);
  const letterRefs = useRef([]);
  const assetRefs = useRef([]);
  const activeIdxRef = useRef(0);
  const parallaxStageRef = useRef(null);
  
  // Load visual assets into an array from integrated project data
  const heroAssets = projectsData.map((p) => p.image);
  const letters = ["T", "A", "N", "I", "S", "H"];

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // 1. Initial Staggered Entrance Animation for Giant Typography
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".hero-subtitle",
        { opacity: 0, y: 25 },
        { opacity: 1, y: 0, duration: 1.2, ease: "power3.out", delay: 0.2 }
      );

      gsap.fromTo(
        letterRefs.current,
        { opacity: 0, scale: 0.85, y: 70, rotateX: 30 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          rotateX: 0,
          duration: 1.4,
          stagger: 0.08,
          ease: "expo.out",
          delay: 0.3,
        }
      );
    }, containerRef);

    // 2. Silky Smooth Physics & Mouse Interpolation Engine (gsap.quickTo)
    // Translating a wall-to-wall image stage is 100% GPU accelerated with ZERO rasterization glitching!
    const quickX = gsap.quickTo(parallaxStageRef.current, "x", { duration: 0.8, ease: "power3.out" });
    const quickY = gsap.quickTo(parallaxStageRef.current, "y", { duration: 0.8, ease: "power3.out" });
    const quickScale = gsap.quickTo(parallaxStageRef.current, "scale", { duration: 0.8, ease: "power3.out" });

    const handleMouseMove = (e) => {
      const rect = container.getBoundingClientRect();
      const relX = e.clientX - rect.left;
      const relY = e.clientY - rect.top;
      const normX = relX / rect.width;
      const normY = relY / rect.height;

      // A. Seamless Asset Carousel Transition based on horizontal cursor movement across screen
      const targetAssetIdx = Math.min(
        heroAssets.length - 1,
        Math.max(0, Math.floor(normX * heroAssets.length))
      );

      // Smooth hardware-accelerated crossfade when crossing asset sectors (ZERO React re-render glitching!)
      if (targetAssetIdx !== activeIdxRef.current) {
        const prevIdx = activeIdxRef.current;
        activeIdxRef.current = targetAssetIdx;
        
        if (assetRefs.current[prevIdx]) {
          gsap.to(assetRefs.current[prevIdx], { opacity: 0, duration: 0.5, ease: "power2.out" });
        }
        if (assetRefs.current[targetAssetIdx]) {
          gsap.to(assetRefs.current[targetAssetIdx], { opacity: 1, duration: 0.5, ease: "power2.out" });
        }
      }

      // B. Smooth Inertia Parallax: Wall-to-wall visual stage gracefully follows mouse cursor underneath text window
      quickX((normX - 0.5) * 90);
      quickY((normY - 0.5) * 70);
      quickScale(1.05);

      // C. Proximity & Hover Highlight Engine: Activate individual letters with high contrast yellow glow
      letterRefs.current.forEach((el) => {
        if (!el) return;
        const letterRect = el.getBoundingClientRect();
        const center = letterRect.left + letterRect.width / 2;
        const dist = Math.abs(e.clientX - center);
        const maxDist = 220; // Proximity threshold in pixels

        if (dist < maxDist) {
          const intensity = 1 - dist / maxDist;
          gsap.to(el, {
            scale: 1 + intensity * 0.16,
            y: -intensity * 24,
            // High-contrast cyber yellow glowing aura on proximity activation
            textShadow: `0 0 ${20 + intensity * 40}px rgba(204, 255, 0, ${0.75 + intensity * 0.25})`,
            color: intensity > 0.4 ? "#ccff00" : "#ffffff",
            duration: 0.25,
            ease: "power2.out",
          });
        } else {
          gsap.to(el, {
            scale: 1,
            y: 0,
            textShadow: "0 15px 35px rgba(0, 0, 0, 0.9)",
            color: "#ffffff",
            duration: 0.55,
            ease: "power3.out",
          });
        }
      });
    };

    const handleMouseLeave = () => {
      // Smoothly return all letters & parallax stage to resting state with inertia
      letterRefs.current.forEach((el) => {
        if (!el) return;
        gsap.to(el, {
          scale: 1,
          y: 0,
          textShadow: "0 15px 35px rgba(0, 0, 0, 0.9)",
          color: "#ffffff",
          duration: 0.7,
          ease: "elastic.out(1, 0.4)",
        });
      });
      quickX(0);
      quickY(0);
      quickScale(1);
    };

    window.addEventListener("mousemove", handleMouseMove);
    container.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      ctx.revert();
      window.removeEventListener("mousemove", handleMouseMove);
      if (container) container.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [heroAssets.length]);

  return (
    <section
      ref={containerRef}
      className="relative w-full min-h-screen bg-[#050507] flex flex-col justify-between pt-32 pb-16 px-6 md:px-12 overflow-hidden select-none border-b border-white/10"
    >
      {/* LAYER 1: WALL-TO-WALL SILKY SMOOTH PARALLAX ASSET STAGE (Zero Box Cutoffs!) */}
      {/* We make the image stage cover 100% of the screen width and height so every millimeter of TANISH is completely visible! */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
        <div ref={parallaxStageRef} className="absolute -inset-10 w-[calc(100%+5rem)] h-[calc(100%+5rem)] will-change-transform">
          {heroAssets.map((assetUrl, idx) => (
            <img
              key={idx}
              ref={(el) => (assetRefs.current[idx] = el)}
              src={assetUrl}
              alt={`Hero Asset ${idx + 1}`}
              className="absolute inset-0 w-full h-full object-cover filter brightness-90 contrast-105 transition-none"
              style={{ opacity: idx === 0 ? 1 : 0 }}
            />
          ))}
          {/* Subtle studio gradient vignette so header and footer remain high contrast */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#050507] via-transparent to-[#050507]/70" />
        </div>
      </div>

      {/* LAYER 2: THE SOLID WALL-TO-WALL MASKING OVERLAY (mix-blend-mode: darken) */}
      {/* Because the underlying image covers the entire screen from edge to edge, the white text TANISH is 100% visible and never cut through a box! */}
      <div className="absolute inset-0 bg-[#050507] [mix-blend-mode:darken] flex items-center justify-center pointer-events-none z-10 py-12">
        <div className="flex items-center justify-center w-full max-w-7xl mx-auto px-2 select-none tracking-tighter">
          {letters.map((char, idx) => (
            <span
              key={idx}
              ref={(el) => (letterRefs.current[idx] = el)}
              className="font-syne font-extrabold text-[clamp(4.5rem,16.5vw,15.5rem)] leading-none uppercase cursor-default px-[0.3vw] inline-block transition-transform will-change-transform text-white"
            >
              {char}
            </span>
          ))}
        </div>
      </div>

      {/* Top Section: Clean Professional Role Title (Above the mask overlay) */}
      <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row md:items-end justify-between gap-6 z-20">
        <div className="hero-subtitle space-y-3">
          <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-cyber-yellow font-bold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Creative Frontend Engineer & Systems Architect</span>
          </div>
          <p className="font-outfit text-xl md:text-2xl font-light text-obsidian-200 max-w-xl leading-snug tracking-tight">
            Architecting high-velocity digital products that merge precision engineering with aesthetic authority.
          </p>
        </div>

        <div className="hero-subtitle font-mono text-xs text-obsidian-400 flex flex-col md:items-end gap-1 shrink-0">
          <span className="text-white font-semibold tracking-wider">EXECUTIVE PORTFOLIO // 2026</span>
          <span>AVAILABLE FOR SELECT CONTRACTS</span>
        </div>
      </div>

      {/* BOTTOM FOOTER BAR: Clean Scrolling Indicator (Above the mask overlay) */}
      <div className="w-full max-w-7xl mx-auto flex items-center justify-between text-xs font-mono text-obsidian-400 z-20 pt-6 border-t border-white/10">
        <div className="flex items-center gap-2">
          <span>SCROLL DOWN FOR EXECUTIVE DOSSIER</span>
          <ArrowDown className="w-3.5 h-3.5 text-cyber-yellow animate-bounce" />
        </div>
        <div className="hidden sm:flex items-center gap-6">
          <span>REACT 18 // NEXT.JS // GSAP</span>
          <span>© 2026</span>
        </div>
      </div>
    </section>
  );
}
