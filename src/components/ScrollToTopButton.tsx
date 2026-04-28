import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export function ScrollToTopButton(): JSX.Element {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updateVisibility = (): void => {
      setIsVisible(window.scrollY > 360);
    };

    updateVisibility();
    window.addEventListener("scroll", updateVisibility, { passive: true });

    return () => {
      window.removeEventListener("scroll", updateVisibility);
    };
  }, []);

  const scrollToTop = (): void => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    window.scrollTo({
      top: 0,
      behavior: prefersReducedMotion ? "auto" : "smooth"
    });
  };

  return (
    <button
      aria-label="맨 위로 이동"
      className={`fixed bottom-5 right-5 z-50 inline-flex size-12 items-center justify-center rounded-full border border-white/70 bg-white/45 text-navy shadow-card outline-none backdrop-blur-xl transition duration-200 hover:-translate-y-1 hover:bg-pink/80 focus-visible:ring-4 focus-visible:ring-pink/40 sm:bottom-7 sm:right-7 ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0 pointer-events-none"
      }`}
      type="button"
      onClick={scrollToTop}
    >
      <ArrowUp aria-hidden="true" size={22} strokeWidth={2.4} />
    </button>
  );
}
