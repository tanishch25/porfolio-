import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

export default function CustomCursor() {
  const cursorRef = useRef(null);
  const followerRef = useRef(null);
  const [cursorText, setCursorText] = useState("");
  const [isHovered, setIsHovered] = useState(false);
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined' && window.matchMedia("(pointer: coarse)").matches) {
      setIsTouch(true);
      return;
    }

    const cursor = cursorRef.current;
    const follower = followerRef.current;

    const xToCursor = gsap.quickTo(cursor, "x", { duration: 0.1, ease: "power3" });
    const yToCursor = gsap.quickTo(cursor, "y", { duration: 0.1, ease: "power3" });
    
    const xToFollower = gsap.quickTo(follower, "x", { duration: 0.4, ease: "power3" });
    const yToFollower = gsap.quickTo(follower, "y", { duration: 0.4, ease: "power3" });

    const onMouseMove = (e) => {
      xToCursor(e.clientX);
      yToCursor(e.clientY);
      xToFollower(e.clientX);
      yToFollower(e.clientY);
    };

    const onMouseLeave = () => {
      gsap.to([cursor, follower], { opacity: 0, duration: 0.3 });
    };

    const onMouseEnter = () => {
      gsap.to([cursor, follower], { opacity: 1, duration: 0.3 });
    };

    window.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mouseenter", onMouseEnter);

    const handleMouseOver = (e) => {
      const target = e.target.closest('a, button, [data-cursor], input, textarea');
      if (target) {
        setIsHovered(true);
        const text = target.getAttribute('data-cursor');
        if (text) {
          setCursorText(text);
        } else {
          setCursorText("");
        }
      } else {
        setIsHovered(false);
        setCursorText("");
      }
    };

    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mouseenter", onMouseEnter);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  if (isTouch) return null;

  return (
    <>
      {/* Center dot */}
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 w-2 h-2 bg-cyber-yellow rounded-full pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 mix-blend-difference transition-transform duration-200"
        style={{ transform: isHovered ? 'scale(0)' : 'scale(1)' }}
      />
      {/* Follower ring or badge */}
      <div
        ref={followerRef}
        className={`fixed top-0 left-0 pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2 flex items-center justify-center rounded-full transition-all duration-300 ${
          isHovered
            ? cursorText
              ? 'w-20 h-20 bg-cyber-yellow text-obsidian-950 font-outfit font-bold text-xs tracking-wider shadow-[0_0_25px_rgba(204,255,0,0.6)] mix-blend-normal'
              : 'w-12 h-12 bg-white/10 border border-cyber-yellow/60 backdrop-blur-sm scale-125'
            : 'w-8 h-8 border border-white/30 bg-transparent'
        }`}
      >
        {isHovered && cursorText && <span className="uppercase">{cursorText}</span>}
      </div>
    </>
  );
}
