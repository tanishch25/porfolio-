import React, { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { projectsData } from '../data/projects';
import { ArrowUpRight, Sparkles, ArrowRight, Layers } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function ProjectsGrid({ onOpenModal }) {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Data Strategy", "Landing Page", "Engineering UI"];

  const filteredProjects = selectedCategory === "All"
    ? projectsData
    : projectsData.filter((p) => p.category === selectedCategory);

  useEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track) return;

    const ctx = gsap.context(() => {
      const getScrollAmount = () => -(track.scrollWidth - window.innerWidth + 120);

      gsap.to(track, {
        x: getScrollAmount,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: () => `+=${track.scrollWidth - window.innerWidth}`,
          pin: true,
          scrub: true,
          invalidateOnRefresh: true,
          anticipatePin: 1,
        },
      });
    }, sectionRef);

    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 400);

    return () => {
      clearTimeout(timer);
      ctx.revert();
    };
  }, [selectedCategory]);

  const handleCardClick = (project) => {
    if (onOpenModal) onOpenModal(project);
  };

  return (
    <section
      id="work"
      ref={sectionRef}
      className="relative w-full h-screen min-h-[750px] bg-[#060608] text-platinum overflow-hidden flex flex-col justify-between pt-24 pb-12 select-none border-t border-white/10"
    >
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-10 w-[500px] h-[500px] bg-cyber-yellow/5 blur-[180px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[650px] h-[650px] bg-electric-cyan/5 blur-[180px] rounded-full pointer-events-none" />

      {/* Top Fixed Header & Category Filters - Clean Real-World Presentation */}
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row md:items-end justify-between gap-6 z-20 shrink-0">
        <div>
          <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-cyber-yellow mb-2 font-bold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Featured Case Studies // Selected Works</span>
          </div>
          <h2 className="font-outfit text-4xl md:text-6xl font-bold tracking-tight text-white leading-none flex items-center gap-4">
            <span>Selected Work.</span>
            <span className="text-xs font-mono px-3 py-1 rounded-full bg-white/10 text-cyber-yellow border border-white/15">
              0{filteredProjects.length} Verified
            </span>
          </h2>
        </div>

        {/* Category Pills */}
        <div className="flex flex-col items-start md:items-end gap-3">
          <div className="flex items-center flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-1.5 rounded-full text-xs font-mono uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                  selectedCategory === cat
                    ? "bg-cyber-yellow text-obsidian-950 font-bold shadow-[0_0_25px_rgba(204,255,0,0.6)] scale-105"
                    : "bg-white/5 text-obsidian-300 hover:bg-white/10 hover:text-white border border-white/10"
                }`}
                data-cursor="FILTER"
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2 text-xs font-mono text-obsidian-400">
            <Layers className="w-3.5 h-3.5 text-cyber-yellow" />
            <span>SCROLL DOWN TO EXPLORE EXHIBITION</span>
            <ArrowRight className="w-3.5 h-3.5 text-cyber-yellow animate-pulse" />
          </div>
        </div>
      </div>

      {/* Center: Horizontal Scrolling Track */}
      <div className="w-full flex items-center my-auto overflow-visible z-10 pl-6 md:pl-12">
        <div ref={trackRef} className="flex flex-nowrap items-center gap-10 md:gap-16 w-max pr-36">
          {filteredProjects.map((project, idx) => (
            <div
              key={project.id}
              onClick={() => handleCardClick(project)}
              className={`group cursor-pointer relative flex flex-col justify-between bg-obsidian-900/90 border border-white/15 rounded-3xl overflow-hidden p-6 md:p-8 transition-all duration-500 hover:border-cyber-yellow/70 hover:shadow-[0_30px_70px_rgba(0,0,0,0.9)] shrink-0 backdrop-blur-xl ${
                idx % 2 === 0
                  ? "w-[85vw] sm:w-[560px] md:w-[640px] h-[490px] md:h-[530px]"
                  : "w-[85vw] sm:w-[500px] md:w-[580px] h-[450px] md:h-[490px] self-end"
              }`}
              data-preview-img={project.image}
              data-preview-title={project.title}
              data-cursor="OPEN CASE"
            >
              {/* Background Showcase Image / Video / PDF */}
              <div className="absolute inset-0 w-full h-full overflow-hidden rounded-3xl -z-10">
                {project.mediaType === 'video' ? (
                  <video
                    src={project.media}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105 filter brightness-75 group-hover:brightness-95"
                  />
                ) : project.mediaType === 'pdf' ? (
                  <div className="w-full h-full relative group-hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover filter brightness-[0.6] group-hover:brightness-90 transition-all duration-700"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="px-6 py-3 rounded-full bg-obsidian-950/80 backdrop-blur-md border border-white/20 shadow-2xl flex items-center gap-3">
                        <div className="w-8 h-10 bg-red-500/90 rounded border border-white/30 flex items-center justify-center">
                          <span className="font-outfit font-bold text-xs text-white">PDF</span>
                        </div>
                        <span className="font-mono text-xs uppercase tracking-widest text-white font-bold">Research Paper</span>
                      </div>
                    </div>
                  </div>
                ) : (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105 filter brightness-75 group-hover:brightness-95"
                    loading="lazy"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950 via-obsidian-950/40 to-transparent opacity-90 group-hover:opacity-95 transition-opacity" />
              </div>

              {/* Card Top: Category Tag & Year */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="px-3.5 py-1.5 rounded-full bg-obsidian-950/90 backdrop-blur-md border border-white/20 text-xs font-mono uppercase tracking-wider text-cyber-yellow shadow-lg font-bold">
                    {project.category}
                  </span>
                  <span className="px-3 py-1 rounded-full bg-obsidian-950/70 backdrop-blur-md border border-white/10 text-xs font-mono text-platinum/80">
                    {project.year}
                  </span>
                </div>

                <div className="w-12 h-12 rounded-full bg-obsidian-950/80 backdrop-blur-md border border-white/20 flex items-center justify-center text-white transition-all duration-300 group-hover:bg-cyber-yellow group-hover:text-obsidian-950 group-hover:scale-110 shadow-xl">
                  <ArrowUpRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </div>

              {/* Card Bottom: Details */}
              <div className="transform transition-transform duration-500 group-hover:-translate-y-2">
                <p className="font-mono text-xs uppercase tracking-widest text-electric-cyan mb-2 font-semibold">
                  {project.client} // {project.type}
                </p>
                <h3 className="font-outfit text-2xl md:text-4xl font-bold text-white mb-3 group-hover:text-cyber-yellow transition-colors leading-tight">
                  {project.title}
                </h3>
                <p className="font-inter text-sm md:text-base text-obsidian-200 line-clamp-2 font-light leading-relaxed mb-6 opacity-90 group-hover:opacity-100">
                  {project.description}
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-white/15">
                  <span className="font-mono text-xs text-cyber-yellow font-bold">
                    Outcome: {project.metrics}
                  </span>
                  <span className="font-mono text-xs uppercase text-platinum underline group-hover:text-cyber-yellow transition-colors font-semibold">
                    Open Verified Case Study &rarr;
                  </span>
                </div>
              </div>
            </div>
          ))}

          {/* End of Track: Real-World "Let's Work Together" Callout Card (Replaces demo asset instructions!) */}
          <div className="w-[85vw] sm:w-[450px] h-[490px] rounded-3xl bg-obsidian-900/90 border border-white/15 hover:border-cyber-yellow/60 p-8 md:p-10 flex flex-col justify-between shrink-0 backdrop-blur-xl transition-all duration-500 hover:shadow-2xl group">
            <div>
              <div className="w-14 h-14 rounded-2xl bg-cyber-yellow/10 border border-cyber-yellow/30 flex items-center justify-center text-cyber-yellow mb-8 group-hover:scale-110 transition-transform">
                <Sparkles className="w-7 h-7 animate-pulse" />
              </div>
              <h3 className="font-outfit text-3xl font-bold text-white mb-4 leading-tight group-hover:text-cyber-yellow transition-colors">
                Have a Vision to Execute?
              </h3>
              <p className="font-inter text-base text-obsidian-200 font-light leading-relaxed mb-8">
                I partner with ambitious brands and founders to architect high-performance web applications that scale with mathematical authority.
              </p>
            </div>

            <div>
              <a
                href="#contact"
                className="w-full py-4 rounded-2xl bg-white group-hover:bg-cyber-yellow text-obsidian-950 font-outfit font-bold text-sm uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-lg hover:scale-[1.02] cursor-pointer"
                data-cursor="CONNECT"
              >
                <span>Let's Build Together</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <span className="font-mono text-[10px] text-obsidian-500 uppercase tracking-widest block text-center mt-4">
                Available for Select Contracts // 2026
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer Bar - Clean Real-World Presentation */}
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between text-xs font-mono text-obsidian-400 z-20 shrink-0 border-t border-white/10 pt-4">
        <span>EXHIBITION GALLERY // VOL. 06</span>
        <span>CLICK ANY CASE STUDY TO INSPECT DOSSIER</span>
      </div>
    </section>
  );
}
