"use client";

import { useEffect, useRef, type ReactNode } from "react";

type Props = {
  /** 正數：比捲動慢（像在遠處）；負數：比捲動快（像在眼前） */
  speed: number;
  className?: string;
  /** 套在會移動的那一層上（排版用的 class 放這裡） */
  innerClassName?: string;
  children: ReactNode;
};

export default function Parallax({ speed, className, innerClassName = "", children }: Props) {
  const outer = useRef<HTMLDivElement>(null);
  const inner = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const box = outer.current;
    const layer = inner.current;
    if (!box || !layer) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let frame = 0;
    const update = () => {
      frame = 0;
      const vh = window.innerHeight;
      const rect = box.getBoundingClientRect();
      // 元素「回到原位」的捲動位置：正好在畫面中央時；一打開就看得到的元素（例如主視覺）則以頁面頂端為原位
      const docTop = window.scrollY + rect.top;
      const restScroll = docTop < vh ? 0 : docTop + rect.height / 2 - vh / 2;
      // 只在元素出現在畫面上的範圍內移動，避免跑出區塊
      const range = (vh + rect.height) / 2;
      const delta = Math.min(range, Math.max(-range, window.scrollY - restScroll));
      layer.style.transform = `translate3d(0, ${delta * speed}px, 0)`;
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [speed]);

  return (
    <div ref={outer} className={className}>
      <div ref={inner} className={`h-full w-full will-change-transform ${innerClassName}`}>
        {children}
      </div>
    </div>
  );
}
