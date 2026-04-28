import { useEffect, useRef } from "react";

export function CursorWave(): JSX.Element {
  const containerRef = useRef<HTMLDivElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);
  const dotsRef = useRef<HTMLDivElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const rafRef = useRef<number>();

  useEffect(() => {
    // 모바일 감지
    const isMobile = () => {
      return (
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent
        ) || window.innerWidth < 768
      );
    };

    if (isMobile()) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const cursor = cursorRef.current;
    const container = containerRef.current;
    const dots = dotsRef.current;

    if (!cursor || !container || !dots) return;

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };

      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => {
        cursor.style.left = `${e.clientX}px`;
        cursor.style.top = `${e.clientY}px`;

        // 클릭 가능 요소 위에서 커서 강조
        const target = e.target as HTMLElement;
        const isClickable =
          target.tagName === "A" ||
          target.tagName === "BUTTON" ||
          target.closest("button") ||
          target.closest("a") ||
          target.role === "button";

        if (isClickable) {
          cursor.classList.add("cursor-active");
        } else {
          cursor.classList.remove("cursor-active");
        }
      });
    };

    const handleClick = (e: MouseEvent) => {
      if (prefersReducedMotion) return;

      const x = e.clientX;
      const y = e.clientY;

      // 물결 생성
      const wave = document.createElement("div");
      wave.className = "cursor-wave";
      wave.style.left = `${x}px`;
      wave.style.top = `${y}px`;
      dots.appendChild(wave);

      // 애니메이션 종료 후 제거
      const handleAnimationEnd = () => {
        wave.removeEventListener("animationend", handleAnimationEnd);
        wave.remove();
      };

      wave.addEventListener("animationend", handleAnimationEnd);

      // 혹시 모를 메모리 누수 방지
      setTimeout(() => {
        if (wave.parentElement) {
          wave.remove();
        }
      }, 1000);
    };

    const handleMouseLeave = () => {
      cursor.style.opacity = "0";
    };

    const handleMouseEnter = () => {
      cursor.style.opacity = "1";
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("click", handleClick);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("click", handleClick);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <div ref={containerRef} className="cursor-wave-container">
      {/* 커스텀 커서 */}
      <div ref={cursorRef} className="cursor-custom" />

      {/* 물결 애니메이션 컨테이너 */}
      <div ref={dotsRef} className="cursor-waves" />
    </div>
  );
}
