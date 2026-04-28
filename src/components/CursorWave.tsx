import { useEffect, useRef } from "react";

const TRAIL_DOT_COUNT = 8;
const SPARK_COUNT = 12;

type CursorPoint = {
  x: number;
  y: number;
};

export function CursorWave(): JSX.Element {
  const containerRef = useRef<HTMLDivElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const auraRef = useRef<HTMLDivElement>(null);
  const effectsRef = useRef<HTMLDivElement>(null);
  const trailRefs = useRef<Array<HTMLDivElement | null>>([]);
  const stateRef = useRef({
    targetX: 0,
    targetY: 0,
    coreX: 0,
    coreY: 0,
    initialized: false,
    trail: Array.from({ length: TRAIL_DOT_COUNT }, () => ({ x: 0, y: 0 }))
  });
  const rafRef = useRef<number>();

  useEffect(() => {
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

    if (prefersReducedMotion) return;

    const cursor = cursorRef.current;
    const container = containerRef.current;
    const ring = ringRef.current;
    const aura = auraRef.current;
    const effects = effectsRef.current;

    if (!cursor || !container || !ring || !aura || !effects) return;

    document.documentElement.classList.add("has-custom-cursor");

    const setElementPosition = (element: HTMLElement, point: CursorPoint): void => {
      element.style.transform = `translate3d(${point.x}px, ${point.y}px, 0) translate(-50%, -50%)`;
    };

    const initializeAt = (x: number, y: number): void => {
      const state = stateRef.current;
      state.targetX = x;
      state.targetY = y;
      state.coreX = x;
      state.coreY = y;
      state.initialized = true;
      state.trail.forEach((point) => {
        point.x = x;
        point.y = y;
      });
      container.classList.add("cursor-ready");
    };

    const updateInteractiveState = (target: EventTarget | null): void => {
      const element = target instanceof Element ? target : null;
      const isInteractive = Boolean(
        element?.closest("a, button, [role='button'], input, textarea, select, label, summary")
      );

      container.classList.toggle("cursor-interactive", isInteractive);
    };

    const animateCursor = (): void => {
      const state = stateRef.current;

      if (state.initialized) {
        state.coreX += (state.targetX - state.coreX) * 0.48;
        state.coreY += (state.targetY - state.coreY) * 0.48;

        setElementPosition(cursor, { x: state.coreX, y: state.coreY });
        setElementPosition(ring, { x: state.coreX, y: state.coreY });
        setElementPosition(aura, { x: state.coreX, y: state.coreY });

        trailRefs.current.forEach((dot, index) => {
          if (!dot) return;

          const point = state.trail[index];
          const leader = index === 0 ? { x: state.coreX, y: state.coreY } : state.trail[index - 1];
          const speed = Math.max(0.16, 0.34 - index * 0.024);

          point.x += (leader.x - point.x) * speed;
          point.y += (leader.y - point.y) * speed;
          setElementPosition(dot, point);
          dot.style.opacity = `${Math.max(0.12, 0.64 - index * 0.06)}`;
        });
      }

      rafRef.current = requestAnimationFrame(animateCursor);
    };

    const handleMouseMove = (event: MouseEvent) => {
      if (!stateRef.current.initialized) {
        initializeAt(event.clientX, event.clientY);
      }

      stateRef.current.targetX = event.clientX;
      stateRef.current.targetY = event.clientY;
      updateInteractiveState(event.target);
    };

    const appendTemporaryEffect = (node: HTMLElement, duration = 1000): void => {
      effects.appendChild(node);

      const cleanup = () => {
        node.removeEventListener("animationend", cleanup);
        node.remove();
      };

      node.addEventListener("animationend", cleanup);
      window.setTimeout(() => {
        if (node.parentElement) {
          cleanup();
        }
      }, duration);
    };

    const createSparkBurst = (x: number, y: number): HTMLDivElement => {
      const burst = document.createElement("div");
      burst.className = "cursor-burst";
      burst.style.left = `${x}px`;
      burst.style.top = `${y}px`;

      Array.from({ length: SPARK_COUNT }).forEach((_, index) => {
        const spark = document.createElement("span");
        const angle = index * (360 / SPARK_COUNT);
        const distance = 34 + (index % 4) * 8;

        spark.className = "cursor-spark";
        spark.style.setProperty("--spark-angle", `${angle}deg`);
        spark.style.setProperty("--spark-distance", `${distance}px`);
        spark.style.animationDelay = `${index * 8}ms`;
        burst.appendChild(spark);
      });

      return burst;
    };

    const handleClick = (event: MouseEvent) => {
      const x = event.clientX;
      const y = event.clientY;

      const wave = document.createElement("div");
      wave.className = "cursor-wave";
      wave.style.left = `${x}px`;
      wave.style.top = `${y}px`;

      appendTemporaryEffect(wave, 1000);
      appendTemporaryEffect(createSparkBurst(x, y), 1100);
    };

    const handleMouseLeave = () => {
      container.classList.remove("cursor-ready");
    };

    const handleMouseEnter = () => {
      if (stateRef.current.initialized) {
        container.classList.add("cursor-ready");
      }
    };

    rafRef.current = requestAnimationFrame(animateCursor);
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
      document.documentElement.classList.remove("has-custom-cursor");
    };
  }, []);

  return (
    <div ref={containerRef} className="cursor-wave-container">
      <div ref={auraRef} className="cursor-aura" />
      <div className="cursor-trail" aria-hidden="true">
        {Array.from({ length: TRAIL_DOT_COUNT }).map((_, index) => (
          <div
            className="cursor-trail-dot"
            key={index}
            ref={(node) => {
              trailRefs.current[index] = node;
            }}
          />
        ))}
      </div>
      <div ref={ringRef} className="cursor-ring" />
      <div ref={cursorRef} className="cursor-custom" />
      <div ref={effectsRef} className="cursor-waves" />
    </div>
  );
}
