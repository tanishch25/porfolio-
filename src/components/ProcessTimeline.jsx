import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { FlaskConical, Code2, TrendingUp, Sparkles, CheckCircle2, ArrowRight, Terminal, Activity, Layers, ChevronRight, ChevronLeft } from 'lucide-react';
import { projectsData } from '../data/projects';

export default function ProcessTimeline({ onOpenModal }) {
  const [activeStep, setActiveStep] = useState(0);
  const cardRef = useRef(null);

  const steps = [
    {
      step: "01",
      title: "Thermodynamic & System Analysis",
      subtitle: "Scientific Rigor × Process Modeling",
      icon: FlaskConical,
      accent: "text-electric-cyan border-electric-cyan",
      bgHover: "hover:bg-electric-cyan/10",
      description:
        "Before writing a single line of code, I model your business ecosystem like a chemical process plant. By isolating variables, mapping user flow equilibrium, and applying advanced data analytics, I connect the rigor of chemical engineering to tangible data outputs, engineering an ironclad technical roadmap.",
      metric: "34% Average Process Variance Reduction",
      codeSnippet: `// Thermodynamic Funnel Simulation
const calculateEquilibrium = (inflow, dropoffRate) => {
  const netMassBalance = inflow * (1 - dropoffRate);
  return { variance: "Zero-Defect", efficiency: 0.984 };
};`,
      relatedProject: projectsData[0],
    },
    {
      step: "02",
      title: "Awwwards UI & Design System",
      subtitle: "Editorial Vibe × High-Contrast Typography",
      icon: Layers,
      accent: "text-cyber-yellow border-cyber-yellow",
      bgHover: "hover:bg-cyber-yellow/10",
      description:
        "I deliver the highest standard of visual output based precisely on customer requests. From bespoke design systems to clean, high-contrast layouts, I ensure every interface feels premium, intuitive, and perfectly aligned with the brand's core identity.",
      metric: "100% Bespoke Curated Visual Identity",
      codeSnippet: `// Custom UI Design Tokens
theme: {
  colors: { obsidian: { 950: "#050507" }, cyber: { yellow: "#ccff00" } },
  fontFamily: { syne: ["Syne", "sans-serif"], outfit: ["Outfit", "sans-serif"] },
}`,
      relatedProject: projectsData[1],
    },
    {
      step: "03",
      title: "High-Velocity Code Engineering",
      subtitle: "Instant Load × Seamless Interaction",
      icon: Code2,
      accent: "text-platinum border-white",
      bgHover: "hover:bg-white/10",
      description:
        "I build websites designed for blistering speed and smooth interactions. Using modern web tools, I ensure your digital product loads instantly and feels incredibly responsive to the user, creating a seamless experience without the technical jargon.",
      metric: "< 0.8s LCP Velocity & 100/100 Lighthouse Score",
      codeSnippet: `// Smooth Frame-Locked Engine
const updateScroll = () => {
  requestAnimationFrame(updateScroll);
  renderAnimations();
};`,
      relatedProject: projectsData[2],
    },
    {
      step: "04",
      title: "CRO & Exponential Revenue Scaling",
      subtitle: "Conversion Multipliers × Bottom-Line ROI",
      icon: TrendingUp,
      accent: "text-cyber-yellow border-cyber-yellow",
      bgHover: "hover:bg-cyber-yellow/10",
      description:
        "Execution means nothing without bottom-line growth. I implement multi-touch analytics attribution and A/B funnel testing to understand exactly how users interact with your platform. By turning these insights into persuasive strategies, I help convert high-intent traffic into exponential revenue multipliers, ensuring long-term scalability.",
      metric: "4.8x Average ROI Multiplier Across Clients",
      codeSnippet: `// Real-Time Conversion Tracking Pipeline
analytics.track("Conversion_Lift_Verified", {
  client: "Enterprise Partner",
  roiMultiplier: 4.8,
  lcpSpeedMs: 740
});`,
      relatedProject: projectsData[0],
    },
  ];

  // Auto-swipe carousel effect
  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 6000); // Swipe every 6 seconds
    return () => clearInterval(timer);
  }, []);

  // Smooth animation when step changes
  useEffect(() => {
    if (cardRef.current) {
      gsap.fromTo(
        cardRef.current,
        { opacity: 0, x: 50 },
        { opacity: 1, x: 0, duration: 0.6, ease: "power3.out" }
      );
    }
  }, [activeStep]);

  const handleNext = () => {
    setActiveStep((prev) => (prev + 1) % steps.length);
  };

  const handlePrev = () => {
    setActiveStep((prev) => (prev === 0 ? steps.length - 1 : prev - 1));
  };

  const current = steps[activeStep];

  const handleOpenCase = () => {
    if (onOpenModal && current.relatedProject) {
      onOpenModal(current.relatedProject);
    }
  };

  return (
    <section id="process" className="relative w-full py-32 px-6 md:px-12 bg-obsidian-950 text-platinum overflow-hidden border-t border-white/10 select-none">
      {/* Ambient background glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[650px] h-[350px] bg-electric-cyan/5 blur-[160px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto flex flex-col gap-16 relative z-10">
        {/* Header Badge */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-cyber-yellow mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Engineering Methodology // 4-Step Synthesis</span>
            </div>
            <h2 className="font-outfit text-4xl md:text-6xl font-bold tracking-tight text-white leading-none">
              How I Build & Engineer.
            </h2>
          </div>
          
          {/* Cyberpunk Arrows - Swipe Controls */}
          <div className="flex items-center gap-4">
            <button 
              onClick={handlePrev}
              className="w-12 h-12 rounded-full border border-white/15 hover:border-cyber-yellow bg-white/5 hover:bg-cyber-yellow text-white hover:text-obsidian-950 flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-[0_0_15px_rgba(204,255,0,0)] hover:shadow-[0_0_20px_rgba(204,255,0,0.4)]"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button 
              onClick={handleNext}
              className="w-12 h-12 rounded-full border border-cyber-yellow/40 hover:border-cyber-yellow bg-cyber-yellow/10 hover:bg-cyber-yellow text-cyber-yellow hover:text-obsidian-950 flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-[0_0_15px_rgba(204,255,0,0.1)] hover:shadow-[0_0_20px_rgba(204,255,0,0.4)]"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Carousel Indicator Dots */}
        <div className="flex items-center gap-3">
          {steps.map((_, idx) => (
            <div 
              key={idx}
              className={`h-1 rounded-full transition-all duration-500 ${idx === activeStep ? 'w-12 bg-cyber-yellow' : 'w-4 bg-white/20'}`}
            />
          ))}
        </div>

        {/* Swipeable Carousel Card Showcase */}
        <div 
          ref={cardRef}
          className="grid grid-cols-1 lg:grid-cols-12 gap-10 bg-obsidian-900/90 border border-white/15 rounded-3xl p-6 md:p-12 shadow-2xl relative overflow-hidden will-change-transform"
        >
          {/* Ambient Glow in Box */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-cyber-yellow/5 rounded-full blur-3xl pointer-events-none" />

          {/* Left Column: Description & Metric Proof */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 rounded-full bg-cyber-yellow/20 border border-cyber-yellow/40 text-cyber-yellow font-mono text-xs uppercase tracking-wider font-bold">
                  Stage 0{activeStep + 1} of 04
                </span>
                <span className="font-mono text-xs text-obsidian-400">// Verified Methodology</span>
              </div>
              <h3 className="font-outfit text-3xl md:text-4xl font-extrabold text-white mb-4 leading-tight">
                {current.title}
              </h3>
              <p className="font-inter text-obsidian-200 text-base md:text-lg font-light leading-relaxed min-h-[140px]">
                {current.description}
              </p>
            </div>

            <div className="space-y-6 pt-4 border-t border-white/10">
              <div className="bg-obsidian-950/80 border border-white/15 rounded-2xl p-5 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Activity className="w-6 h-6 text-cyber-yellow animate-pulse shrink-0" />
                  <div>
                    <span className="font-mono text-[11px] uppercase tracking-wider text-obsidian-400 block">Verified KPI Proof</span>
                    <span className="font-outfit text-lg md:text-xl font-bold text-white">{current.metric}</span>
                  </div>
                </div>
                <CheckCircle2 className="w-6 h-6 text-green-400 shrink-0" />
              </div>

              <button
                onClick={handleOpenCase}
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-cyber-yellow hover:bg-cyber-yellow/90 text-obsidian-950 font-outfit font-bold text-sm uppercase tracking-wider transition-all shadow-[0_0_25px_rgba(204,255,0,0.4)] hover:scale-105 cursor-pointer"
                data-cursor="CASE STUDY"
              >
                <span>View Stage Case Study Proof</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Column: Simulated Terminal & Data Architecture Widget */}
          <div className="lg:col-span-6 bg-obsidian-950 border border-white/15 rounded-2xl p-6 flex flex-col justify-between font-mono text-xs shadow-inner">
            <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-4 text-obsidian-400">
              <div className="flex items-center gap-2">
                <Terminal className="w-4 h-4 text-cyber-yellow" />
                <span>tanish-engine // stage-0{activeStep + 1}-simulation.js</span>
              </div>
              <div className="flex items-center gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
              </div>
            </div>

            <pre className="text-electric-cyan overflow-x-auto p-4 bg-obsidian-900/50 rounded-xl border border-white/5 font-mono text-xs leading-relaxed min-h-[120px]">
              <code>{current.codeSnippet}</code>
            </pre>

            <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-[11px] text-obsidian-400">
              <span className="flex items-center gap-1.5 text-green-400">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-ping inline-block" />
                <span>System Equilibrium Verified</span>
              </span>
              <span>120 FPS // Zero Latency</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
