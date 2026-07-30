import React, { useState, useEffect } from 'react';
import { ArrowUpRight, Menu, X, Sparkles } from 'lucide-react';

export default function Navbar({ onOpenModal }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Philosophy", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Methodology", href: "#process" },
    { name: "Work", href: "#work" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 transition-all duration-700 select-none flex justify-center pointer-events-none mt-6">
      {/* Sleek Floating Glassmorphic Pill */}
      <div
        className={`pointer-events-auto transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] flex items-center justify-between px-6 py-3 rounded-full ${
          scrolled
            ? "bg-obsidian-950/80 backdrop-blur-2xl border border-white/10 shadow-[0_20px_40px_rgba(0,0,0,0.6)] w-[92%] md:w-[85%] max-w-5xl translate-y-0"
            : "bg-transparent border border-transparent w-[95%] max-w-7xl translate-y-4"
        }`}
      >
        {/* Brand Logo - Creative & Glowing */}
        <a
          href="#"
          className="group flex items-center gap-2 font-syne text-xl font-extrabold tracking-tight text-white transition-all"
          data-cursor="HOME"
        >
          <div className="w-8 h-8 rounded-full bg-cyber-yellow/10 flex items-center justify-center border border-cyber-yellow/30 group-hover:bg-cyber-yellow/20 transition-colors">
            <Sparkles className="w-4 h-4 text-cyber-yellow" />
          </div>
          <span>TANISH<span className="text-cyber-yellow">.</span></span>
        </a>

        {/* Desktop Navigation Links - Centered Creative Layout */}
        <nav className="hidden md:flex items-center gap-1 font-mono text-[11px] uppercase tracking-widest text-obsidian-300">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="px-5 py-2.5 rounded-full hover:bg-white/5 hover:text-white transition-all duration-300 relative group overflow-hidden"
              data-cursor="NAVIGATE"
            >
              <span className="relative z-10">{link.name}</span>
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-px bg-cyber-yellow group-hover:w-1/2 transition-all duration-300 ease-out" />
            </a>
          ))}
        </nav>

        {/* Right Action Button - Cyberpunk Glow */}
        <div className="hidden md:flex items-center">
          <a
            href="#contact"
            className="px-6 py-2.5 rounded-full bg-cyber-yellow/10 hover:bg-cyber-yellow text-cyber-yellow hover:text-obsidian-950 border border-cyber-yellow/30 font-outfit font-semibold text-xs uppercase tracking-wider transition-all duration-300 flex items-center gap-2 shadow-[0_0_15px_rgba(204,255,0,0.15)] hover:shadow-[0_0_30px_rgba(204,255,0,0.5)] hover:scale-105"
            data-cursor="CONNECT"
          >
            <span>Let's Talk</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-white bg-white/5 rounded-full border border-white/10 hover:bg-white/10 focus:outline-none transition-colors"
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden pointer-events-auto absolute top-full left-1/2 -translate-x-1/2 w-[92%] mt-4 bg-obsidian-950/95 backdrop-blur-3xl border border-white/10 rounded-3xl p-6 flex flex-col gap-6 font-mono text-sm uppercase tracking-widest text-obsidian-200 shadow-2xl animate-fadeIn">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-cyber-yellow transition-colors py-3 px-4 rounded-xl hover:bg-white/5 border border-transparent hover:border-white/10"
              >
                {link.name}
              </a>
            ))}
          </div>
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="mt-2 px-6 py-4 rounded-xl bg-cyber-yellow text-obsidian-950 font-outfit font-bold text-center uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg"
          >
            <span>Let's Talk</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      )}
    </header>
  );
}
