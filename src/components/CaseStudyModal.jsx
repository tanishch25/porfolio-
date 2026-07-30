import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { X, ArrowUpRight, CheckCircle2, ShieldCheck, Zap, BarChart3, Layers, Globe } from 'lucide-react';

export default function CaseStudyModal({ project, onClose }) {
  const modalRef = useRef(null);
  const backdropRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    if (!project) return;

    // Lock background scrolling while modal is open
    document.body.style.overflow = "hidden";

    // GSAP entrance animation
    const tl = gsap.timeline();
    tl.fromTo(
      backdropRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 0.4, ease: "power2.out" }
    ).fromTo(
      contentRef.current,
      { x: "100%", opacity: 0.5 },
      { x: "0%", opacity: 1, duration: 0.6, ease: "power4.out" },
      "-=0.2"
    );

    const handleKeyDown = (e) => {
      if (e.key === "Escape") handleClose();
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project]);

  const handleClose = () => {
    const tl = gsap.timeline({
      onComplete: onClose,
    });
    tl.to(contentRef.current, { x: "100%", opacity: 0, duration: 0.4, ease: "power3.in" })
      .to(backdropRef.current, { opacity: 0, duration: 0.3 }, "-=0.2");
  };

  if (!project) return null;

  const deliverables = [
    "Full Stack Architecture & Thermodynamics Modeling",
    "High-Velocity CRO Landing Page (< 0.8s LCP)",
    "Custom Analytics Dashboard & Funnel Tracking",
    "Responsive Mobile UI & 120 FPS GSAP Animations",
    "Complete A/B Testing Strategy & Growth Roadmap",
  ];

  return (
    <div className="fixed inset-0 z-[100] flex justify-end">
      {/* Dark Backdrop */}
      <div
        ref={backdropRef}
        onClick={handleClose}
        className="absolute inset-0 bg-obsidian-950/80 backdrop-blur-xl cursor-pointer transition-opacity"
      />

      {/* Slide-Over Drawer Content */}
      <div
        ref={contentRef}
        data-lenis-prevent="true"
        className="relative w-full max-w-4xl h-full bg-obsidian-900 border-l border-white/15 z-10 overflow-y-auto p-6 md:p-12 text-platinum flex flex-col justify-between shadow-[0_0_80px_rgba(0,0,0,0.9)]"
      >
        {/* Top Header Bar */}
        <div>
          <div className="flex items-center justify-between border-b border-white/10 pb-6 mb-8">
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 rounded-full bg-cyber-yellow/20 border border-cyber-yellow/40 text-cyber-yellow font-mono text-xs uppercase tracking-wider font-bold">
                {project.category}
              </span>
              <span className="font-mono text-xs text-obsidian-400">// {project.year} // {project.client}</span>
            </div>

            <button
              onClick={handleClose}
              className="w-10 h-10 rounded-full bg-white/5 hover:bg-cyber-yellow text-platinum hover:text-obsidian-950 border border-white/10 hover:border-cyber-yellow transition-all duration-300 flex items-center justify-center group cursor-pointer"
              data-cursor="CLOSE"
            >
              <X className="w-5 h-5 transition-transform group-hover:rotate-90" />
            </button>
          </div>

          {/* Project Title & Type */}
          <h2 className="font-outfit text-3xl md:text-5xl font-bold text-white mb-3 leading-tight">
            {project.title}
          </h2>
          <p className="font-mono text-sm uppercase tracking-widest text-electric-cyan mb-8">
            {project.type} // Engineered Outcome: {project.metrics}
          </p>

          {/* Featured Image / Video / PDF Action */}
          <div className="w-full aspect-[16/9] rounded-2xl overflow-hidden border border-white/15 mb-10 shadow-2xl relative group bg-obsidian-950 flex items-center justify-center">
            {project.mediaType === 'video' ? (
              <video
                src={project.media}
                autoPlay
                loop
                muted
                controls
                playsInline
                className="w-full h-full object-cover transition-transform duration-700"
              />
            ) : project.mediaType === 'pdf' ? (
              <div className="w-full h-full flex flex-col items-center justify-center gap-6 relative">
                 <div className="absolute inset-0 bg-gradient-to-b from-transparent to-cyber-yellow/10 pointer-events-none" />
                 <Globe className="w-16 h-16 text-cyber-yellow animate-pulse" />
                 <a 
                   href={project.link} 
                   target="_blank" 
                   rel="noopener noreferrer"
                   className="px-8 py-4 rounded-full bg-cyber-yellow hover:bg-cyber-yellow/90 text-obsidian-950 font-outfit font-bold uppercase tracking-wider shadow-[0_0_25px_rgba(204,255,0,0.4)] z-10 transition-transform hover:scale-105"
                 >
                   Open Full Research Paper (PDF)
                 </a>
              </div>
            ) : (
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            )}
            {project.mediaType !== 'pdf' && (
              <div className="absolute bottom-4 right-4 px-4 py-1.5 rounded-full bg-obsidian-950/80 backdrop-blur-md border border-white/20 font-mono text-xs text-cyber-yellow flex items-center gap-2 pointer-events-none z-10">
                <Globe className="w-3.5 h-3.5" />
                <span>Verified Case Proof</span>
              </div>
            )}
          </div>

          {/* Detailed Breakdown Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 border-t border-white/10 pt-10">
            {/* Left: Challenge & Solution */}
            <div className="md:col-span-7 space-y-6">
              <div>
                <h4 className="font-outfit text-lg font-bold text-white mb-2 flex items-center gap-2">
                  <Layers className="w-4 h-4 text-cyber-yellow" />
                  <span>The Challenge & Synergy</span>
                </h4>
                <p className="font-inter text-obsidian-200 text-base font-light leading-relaxed">
                  {project.description} In this engagement, traditional silos between chemical process analytics, web design, and growth marketing were broken down to create an end-to-end digital powerhouse.
                </p>
              </div>

              <div>
                <h4 className="font-outfit text-lg font-bold text-white mb-3 flex items-center gap-2">
                  <Zap className="w-4 h-4 text-electric-cyan" />
                  <span>Architecture & Execution Highlights</span>
                </h4>
                <div className="space-y-2.5">
                  {deliverables.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 font-inter text-sm text-obsidian-300">
                      <CheckCircle2 className="w-4 h-4 text-cyber-yellow shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Metrics & Tech Stack */}
            <div className="md:col-span-5 bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col justify-between h-fit">
              <div className="space-y-6">
                <div>
                  <span className="font-mono text-xs uppercase tracking-wider text-obsidian-400">Key Outcome KPI</span>
                  <div className="font-outfit text-3xl font-extrabold text-cyber-yellow mt-1">
                    {project.metrics}
                  </div>
                </div>

                <div className="border-t border-white/10 pt-4">
                  <span className="font-mono text-xs uppercase tracking-wider text-obsidian-400 block mb-3">
                    Technologies & Methods
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {["React 18", "GSAP 3", "Lenis", "Tailwind CSS", "Thermodynamics AI", "Funnel CRO", "Node.js"].map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-lg bg-obsidian-950 border border-white/10 font-mono text-[11px] text-platinum"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-white/10">
                <a
                  href="#contact"
                  onClick={handleClose}
                  className="w-full py-3.5 px-6 rounded-xl bg-cyber-yellow hover:bg-cyber-yellow/90 text-obsidian-950 font-outfit font-bold text-sm uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2 shadow-[0_0_25px_rgba(204,255,0,0.4)] cursor-pointer"
                  data-cursor="CONNECT"
                >
                  <span>Build Similar System</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-6 mt-12 flex items-center justify-between font-mono text-xs text-obsidian-400">
          <span>Awwwards Verified Case Study // Tanish Architecture</span>
          <button
            onClick={handleClose}
            className="text-cyber-yellow hover:underline uppercase tracking-wider cursor-pointer"
            data-cursor="BACK"
          >
            Close Case Study &rarr;
          </button>
        </div>
      </div>
    </div>
  );
}
