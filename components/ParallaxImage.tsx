"use client";

import { useEffect, useRef } from "react";
import Image, { type StaticImageData } from "next/image";

interface ParallaxImageProps {
  src: StaticImageData;
  /** How much slower than the page the photo moves: 0 = scrolls normally, 1 = fixed in place. */
  speed?: number;
}

export default function ParallaxImage({ src, speed = 0.45 }: ParallaxImageProps) {
  const layerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const layer = layerRef.current;
    const section = layer?.parentElement;
    if (!layer || !section) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let frame = 0;
    let visible = false;
    let range = 0;

    // Oversize the photo layer so it never shows a gap at either end of its travel
    const measure = () => {
      range = Math.round(speed * (window.innerHeight + section.offsetHeight) / 2);
      layer.style.top = `${-range}px`;
      layer.style.bottom = `${-range}px`;
    };

    const update = () => {
      frame = 0;
      const rect = section.getBoundingClientRect();
      const vh = window.innerHeight;
      // -1 when the section enters from the bottom, +1 when it leaves at the top
      const progress = (vh / 2 - (rect.top + rect.height / 2)) / (vh / 2 + rect.height / 2);
      const clamped = Math.max(-1, Math.min(1, progress));
      layer.style.transform = `translate3d(0, ${(clamped * range).toFixed(1)}px, 0)`;
    };

    const onScroll = () => {
      if (visible && !frame) frame = requestAnimationFrame(update);
    };

    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      if (visible) onScroll();
    });
    observer.observe(section);
    window.addEventListener("scroll", onScroll, { passive: true });
    const onResize = () => {
      measure();
      onScroll();
    };
    window.addEventListener("resize", onResize);
    measure();
    update();

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [speed]);

  return (
    <div ref={layerRef} className="parallax-layer" aria-hidden>
      <Image src={src} alt="" fill placeholder="blur" sizes="100vw" className="section-photo-img" />
    </div>
  );
}
