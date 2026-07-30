import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

export default function FloatingPreview() {
  const previewRef = useRef(null);
  const imgRef = useRef(null);
  const titleRef = useRef(null);
  const [activeImg, setActiveImg] = useState("");
  const [activeTitle, setActiveTitle] = useState("");

  useEffect(() => {
    if (typeof window !== 'undefined' && window.matchMedia("(pointer: coarse)").matches) return;

    const preview = previewRef.current;
    if (!preview) return;

    // Smooth spring tracking for the thumbnail preview card
    const xTo = gsap.quickTo(preview, "x", { duration: 0.35, ease: "power3.out" });
    const yTo = gsap.quickTo(preview, "y", { duration: 0.35, ease: "power3.out" });

    const onMouseMove = (e) => {
      // Offset preview slightly above and to the right of cursor
      xTo(e.clientX + 20);
      yTo(e.clientY - 120);
    };

    const handleMouseOver = (e) => {
      const target = e.target.closest('[data-preview-img]');
      if (target) {
        const imgUrl = target.getAttribute('data-preview-img');
        const title = target.getAttribute('data-preview-title') || "Preview";
        
        setActiveImg(imgUrl);
        setActiveTitle(title);

        gsap.to(preview, {
          scale: 1,
          opacity: 1,
          duration: 0.4,
          ease: "back.out(1.7)",
          overwrite: "auto",
        });
      } else {
        gsap.to(preview, {
          scale: 0.8,
          opacity: 0,
          duration: 0.25,
          ease: "power2.in",
          overwrite: "auto",
        });
      }
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  return (
    <div
      ref={previewRef}
      className="fixed top-0 left-0 z-[9990] pointer-events-none opacity-0 scale-80 w-64 md:w-72 aspect-[16/10] rounded-2xl overflow-hidden bg-obsidian-900 border-2 border-cyber-yellow/60 shadow-[0_20px_50px_rgba(0,0,0,0.9)] transition-shadow duration-300"
      style={{ transformOrigin: "bottom left" }}
    >
      {activeImg && (
        <img
          ref={imgRef}
          src={activeImg}
          alt={activeTitle}
          className="w-full h-full object-cover filter contrast-110 brightness-110"
        />
      )}
      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-obsidian-950 via-obsidian-950/70 to-transparent p-3 flex items-end justify-between">
        <span className="font-mono text-[11px] uppercase tracking-wider font-bold text-cyber-yellow">
          {activeTitle}
        </span>
        <span className="font-mono text-[9px] uppercase bg-white/20 text-white px-1.5 py-0.5 rounded">
          Jingjing Han Preview
        </span>
      </div>
    </div>
  );
}
