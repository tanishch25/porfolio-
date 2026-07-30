import React, { useState } from 'react';
import { FlaskConical, Code2, TrendingUp, Sparkles, CheckCircle2, ArrowUpRight, ChevronDown } from 'lucide-react';
import { projectsData } from '../data/projects';

export default function ServicesAccordion({ onOpenModal }) {
  const [openIndex, setOpenIndex] = useState(0); // Default first one open

  const services = [
    {
      number: "01",
      title: "Digital Twins & Physics-Informed Neural Networks",
      tagline: "Chemical Industry Simulation × Process Optimization",
      icon: FlaskConical,
      accent: "text-electric-cyan border-electric-cyan/40",
      bgHover: "hover:bg-electric-cyan/5",
      previewImg: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=800&auto=format&fit=crop",
      description:
        "Pioneering the next generation of chemical engineering by leveraging highly accurate Physics-Informed Neural Networks (PINNs). I am deeply interested in digital twins for chemical processes, and have authored a research paper applying PINN architectures to successfully predict gym member churn.",
      deliverables: [
        "Physics-Informed Neural Networks (PINNs)",
        "Real-time Chemical Digital Twins",
        "Thermodynamic Process Simulation Portals",
        "Predictive Equipment Churn Algorithms",
      ],
      relatedProjectId: "paper-pinn-churn",
    },
    {
      number: "02",
      title: "High-Velocity Landing Page Dev & CRO",
      tagline: "Conversion Rate Optimization × Awwwards Aesthetics",
      icon: Code2,
      accent: "text-cyber-yellow border-cyber-yellow/40",
      bgHover: "hover:bg-cyber-yellow/5",
      previewImg: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=800&auto=format&fit=crop",
      description:
        "Most beautiful websites are slow, and most fast websites are boring. I engineer Next.js and React landing pages that deliver < 0.8s LCP speeds while captivating users with silky GSAP micro-animations, custom typography, and conversion psychology.",
      deliverables: [
        "Custom React / Vite / Next.js Frontend Architecture",
        "60 FPS GSAP & Lenis Silky Scrolling Interactions",
        "Hyper-Optimized Core Web Vitals (< 0.8s LCP Velocity)",
        "A/B Testing Frameworks & Funnel Copywriting",
      ],
      relatedProjectId: "veloce-conversion",
    },
    {
      number: "03",
      title: "Data Analytics & Strategic Implementation",
      tagline: "Raw Data × Actionable Business Intelligence",
      icon: TrendingUp,
      accent: "text-platinum border-white/30",
      bgHover: "hover:bg-white/5",
      previewImg: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=800&auto=format&fit=crop",
      description:
        "Data is useless without direction. I dive deep into the numbers, playing with massive datasets to uncover hidden patterns and funnel bottlenecks. By applying rigorous data analytics, I architect targeted strategies that optimize output, streamline user journeys, and generate quantifiable business growth.",
      deliverables: [
        "Deep-Dive Data Exploration & Analysis",
        "Predictive Output Modeling",
        "Strategic Conversion Bottleneck Resolution",
        "Actionable Performance Dashboards",
      ],
      relatedProjectId: "data-analytics-olist",
    },
  ];

  const toggleAccordion = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  const handleOpenCaseStudy = (projectId, e) => {
    e.stopPropagation();
    const proj = projectsData.find((p) => p.id === projectId) || projectsData[0];
    if (onOpenModal) onOpenModal(proj);
  };

  return (
    <section id="services" className="relative w-full py-28 px-6 md:px-12 bg-obsidian-950 text-platinum overflow-hidden border-t border-white/10 select-none">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 right-10 w-[500px] h-[500px] bg-cyber-yellow/5 blur-[160px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto flex flex-col gap-16 relative z-10">
        {/* Header Badge */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-cyber-yellow mb-3">
              <span>Engineering Alchemy</span>
            </div>
            <h2 className="font-outfit text-[clamp(2.5rem,6vw,5rem)] font-bold tracking-tight text-white leading-none">
              Services & Capabilities.
            </h2>
          </div>
        </div>

        {/* Interactive Accordion List */}
        <div className="border-t border-white/15 divide-y divide-white/10">
          {services.map((service, idx) => {
            const isOpen = openIndex === idx;
            const IconComponent = service.icon;

            return (
              <div
                key={service.number}
                onClick={() => toggleAccordion(idx)}
                className={`group py-8 md:py-10 px-4 md:px-8 rounded-2xl transition-all duration-500 cursor-pointer ${service.bgHover} ${
                  isOpen ? "bg-white/[0.03] shadow-2xl my-4 border border-white/10" : ""
                }`}
                data-preview-img={service.previewImg}
                data-preview-title={service.title}
                data-cursor="EXPAND"
              >
                {/* Row Header */}
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-6 md:gap-10">
                    <span className="font-mono text-sm md:text-base font-bold text-obsidian-400 group-hover:text-cyber-yellow transition-colors">
                      {service.number} //
                    </span>
                    <div>
                      <h3 className={`font-outfit text-2xl md:text-4xl font-bold transition-colors duration-300 ${
                        isOpen ? "text-cyber-yellow" : "text-white group-hover:text-platinum"
                      }`}>
                        {service.title}
                      </h3>
                      <p className="font-mono text-xs text-obsidian-400 mt-1 uppercase tracking-wider">
                        {service.tagline}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="hidden sm:flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-obsidian-300 group-hover:border-cyber-yellow/40 group-hover:text-cyber-yellow transition-all">
                      <span>Click to View</span>
                      <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-500 ${isOpen ? "rotate-180 text-cyber-yellow" : ""}`} />
                    </div>
                  </div>
                </div>

                {/* Expanded Drawer Content */}
                <div
                  className={`grid grid-cols-1 md:grid-cols-12 gap-8 overflow-hidden transition-all duration-500 ease-in-out ${
                    isOpen ? "max-h-[600px] opacity-100 mt-8 pt-8 border-t border-white/10" : "max-h-0 opacity-0"
                  }`}
                >
                  {/* Left: Description */}
                  <div className="md:col-span-6 space-y-6">
                    <p className="font-inter text-obsidian-200 text-base md:text-lg font-light leading-relaxed">
                      {service.description}
                    </p>
                    <button
                      onClick={(e) => handleOpenCaseStudy(service.relatedProjectId, e)}
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-cyber-yellow hover:bg-cyber-yellow/90 text-obsidian-950 font-outfit font-bold text-xs uppercase tracking-wider transition-all shadow-[0_0_20px_rgba(204,255,0,0.3)] hover:scale-105"
                      data-cursor="CASE STUDY"
                    >
                      <span>View Featured Case Proof</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Right: Deliverables Checklist */}
                  <div className="md:col-span-6 bg-obsidian-900/60 border border-white/10 rounded-2xl p-6">
                    <span className="font-mono text-xs uppercase tracking-wider text-obsidian-400 block mb-4">
                      Key Architectural Deliverables
                    </span>
                    <div className="space-y-3">
                      {service.deliverables.map((deliv, i) => (
                        <div key={i} className="flex items-center gap-3 font-inter text-sm text-platinum font-light">
                          <div className="w-1.5 h-1.5 rounded-full bg-cyber-yellow shrink-0" />
                          <span>{deliv}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
