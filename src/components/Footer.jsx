import React, { useRef, useState } from 'react';
import gsap from 'gsap';
import { Mail, ArrowUpRight, Check, Heart, Shield, ArrowRight } from 'lucide-react';

const LinkedinIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const XIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
    <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
  </svg>
);

const GithubIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

export default function Footer() {
  const [copied, setCopied] = useState(false);
  const buttonRefs = useRef([]);
  const spotlightRef = useRef(null);
  const titleContainerRef = useRef(null);

  // Magnetic Button Engine
  const handleMouseMoveButton = (e, index) => {
    const button = buttonRefs.current[index];
    if (!button) return;
    const rect = button.getBoundingClientRect();
    const distanceX = (e.clientX - (rect.left + rect.width / 2)) * 0.45;
    const distanceY = (e.clientY - (rect.top + rect.height / 2)) * 0.45;
    gsap.to(button, { x: distanceX, y: distanceY, duration: 0.35, ease: "power3.out" });
  };

  const handleMouseLeaveButton = (index) => {
    const button = buttonRefs.current[index];
    if (!button) return;
    gsap.to(button, { x: 0, y: 0, duration: 0.5, ease: "elastic.out(1, 0.4)" });
  };

  // Title Spotlight Sweep Engine
  const handleTitleMouseMove = (e) => {
    const container = titleContainerRef.current;
    const spot = spotlightRef.current;
    if (!container || !spot) return;
    const rect = container.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    gsap.to(spot, {
      x: x - 250,
      y: y - 250,
      opacity: 1,
      duration: 0.25,
      ease: "power2.out",
    });
  };

  const handleTitleMouseLeave = () => {
    const spot = spotlightRef.current;
    if (!spot) return;
    gsap.to(spot, { opacity: 0, duration: 0.6, ease: "power2.out" });
  };

  const copyEmail = () => {
    navigator.clipboard.writeText("tanish.200519@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  const socialLinks = [
    { name: "Email", icon: Mail, label: "tanish.200519@gmail.com", action: copyEmail, isButton: true },
    { name: "LinkedIn", icon: LinkedinIcon, label: "Tanish Jogi", href: "https://www.linkedin.com/in/tanish-jogi", isButton: false },
    { name: "X (Twitter)", icon: XIcon, label: "@TanishJogi", href: "https://x.com/TanishJogi", isButton: false },
    { name: "GitHub", icon: GithubIcon, label: "Tanish200519", href: "https://github.com/Tanish200519", isButton: false },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      id="contact"
      className="relative w-full pt-28 bg-[#050507] text-platinum overflow-hidden select-none border-t border-white/10"
    >
      {/* Expansive Ambient Background Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-px bg-gradient-to-r from-transparent via-cyber-yellow/50 to-transparent" />
      <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-cyber-yellow/5 blur-[180px] rounded-full pointer-events-none" />

      {/* ULTRA-CLEAN, SLICK & MINIMALIST REAL-WORLD INVITATION */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col gap-14 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyber-yellow/10 border border-cyber-yellow/30 text-cyber-yellow font-mono text-xs uppercase tracking-widest mb-4 font-bold">
              <Shield className="w-3.5 h-3.5" />
              <span>Initiate Collaboration // Next Steps</span>
            </div>
            <h2 className="font-outfit text-4xl md:text-6xl font-bold tracking-tight text-white leading-[1.1]">
              Ready to Engineer Your Digital Ecosystem with Mathematical Authority?
            </h2>
          </div>

          {/* Single, Ultra-Slick Clean Action Button */}
          <div className="shrink-0">
            <button
              onClick={copyEmail}
              className="px-8 py-5 rounded-2xl bg-cyber-yellow hover:bg-white text-obsidian-950 font-outfit font-extrabold text-base uppercase tracking-wider flex items-center justify-center gap-3 transition-all shadow-[0_0_30px_rgba(204,255,0,0.5)] hover:scale-105 cursor-pointer"
              data-cursor="CONNECT"
            >
              <span>{copied ? "Email Copied!" : "Let's Work Together"}</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Center: Clean Magnetic Social Nodes */}
        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6 py-4 border-t border-white/10">
          {socialLinks.map((link, idx) => {
            const IconComponent = link.icon;
            return link.isButton ? (
              <button
                key={link.name}
                ref={(el) => (buttonRefs.current[idx] = el)}
                onMouseMove={(e) => handleMouseMoveButton(e, idx)}
                onMouseLeave={() => handleMouseLeaveButton(idx)}
                onClick={link.action}
                className="group relative px-8 py-4 rounded-full bg-white/5 hover:bg-cyber-yellow text-platinum hover:text-obsidian-950 border border-white/15 hover:border-cyber-yellow font-outfit font-bold text-sm md:text-base tracking-wide transition-colors duration-300 flex items-center gap-3 shadow-xl hover:shadow-[0_0_30px_rgba(204,255,0,0.5)] cursor-pointer"
                data-cursor="COPY EMAIL"
              >
                {copied ? <Check className="w-4 h-4 text-green-500 animate-bounce" /> : <IconComponent className="w-4 h-4 text-cyber-yellow group-hover:text-obsidian-950 transition-colors" />}
                <span>{copied ? "Email Copied to Clipboard!" : link.label}</span>
              </button>
            ) : (
              <a
                key={link.name}
                ref={(el) => (buttonRefs.current[idx] = el)}
                onMouseMove={(e) => handleMouseMoveButton(e, idx)}
                onMouseLeave={() => handleMouseLeaveButton(idx)}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative px-7 py-4 rounded-full bg-white/5 hover:bg-white/15 text-platinum hover:text-cyber-yellow border border-white/15 hover:border-white/40 font-outfit font-semibold text-sm tracking-wide transition-all duration-300 flex items-center gap-2.5 cursor-pointer shadow-lg"
                data-cursor="VISIT"
              >
                <IconComponent className="w-4 h-4 text-obsidian-300 group-hover:text-cyber-yellow transition-colors" />
                <span>{link.label}</span>
                <ArrowUpRight className="w-4 h-4 opacity-50 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </a>
            );
          })}
        </div>
      </div>

      {/* 100% COMPLETE, UN-CLIPPED TYPOGRAPHY TERMINUS (Fitted cleanly with clamp(2rem, 6.5vw, 6rem) so both words render completely!) */}
      <div
        ref={titleContainerRef}
        onMouseMove={handleTitleMouseMove}
        onMouseLeave={handleTitleMouseLeave}
        onClick={copyEmail}
        className="w-full mt-20 pt-16 border-t border-white/10 flex flex-col items-center justify-center relative cursor-pointer group"
        data-cursor="CLICK TO COPY EMAIL"
      >
        {/* Dynamic Cursor Spotlight Layer */}
        <div
          ref={spotlightRef}
          className="absolute w-[600px] h-[600px] rounded-full bg-gradient-to-r from-cyber-yellow/30 via-electric-cyan/20 to-transparent blur-[100px] pointer-events-none opacity-0 transition-opacity duration-300 z-0"
        />

        {/* Capped at 6vw / 5.8rem to ensure 100% complete, crystal clear wording on all devices! */}
        <div className="w-full max-w-7xl mx-auto text-center px-4 select-none relative z-10">
          <h1 className="font-syne font-extrabold text-[clamp(2rem,6.2vw,5.8rem)] leading-[0.94] tracking-tight text-white/95 group-hover:text-cyber-yellow transition-colors duration-500 uppercase drop-shadow-[0_15px_45px_rgba(0,0,0,0.9)] w-full">
            <span className="block">INITIATE</span>
            <span className="block text-cyber-yellow/90 group-hover:text-white transition-colors duration-500">COLLABORATION.</span>
          </h1>
        </div>
        
        <div className="w-full max-w-7xl mx-auto px-6 md:px-12 py-8 mt-10 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-obsidian-400 relative z-10 border-t border-white/5">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2">
            <span>© 2026 TANISH // ARCHITECTED WITH PRECISION.</span>
          </div>

          <button
            onClick={scrollToTop}
            className="hover:text-cyber-yellow transition-colors uppercase tracking-widest flex items-center gap-2 group/btn py-2 font-semibold"
            data-cursor="TOP"
          >
            <span>Return to Top</span>
            <span className="text-base group-hover/btn:-translate-y-1 transition-transform inline-block">&uarr;</span>
          </button>
        </div>
      </div>
    </footer>
  );
}
