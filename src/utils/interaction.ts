import type { PointerEvent } from "react";
import { flushSync } from "react-dom";

export function updateSpotlightPosition(event: PointerEvent<HTMLElement>): void {
  const rect = event.currentTarget.getBoundingClientRect();
  event.currentTarget.style.setProperty("--x", `${event.clientX - rect.left}px`);
  event.currentTarget.style.setProperty("--y", `${event.clientY - rect.top}px`);
}

export function updateMagneticPosition(event: PointerEvent<HTMLElement>): void {
  const rect = event.currentTarget.getBoundingClientRect();
  const x = event.clientX - rect.left - rect.width / 2;
  const y = event.clientY - rect.top - rect.height / 2;

  event.currentTarget.style.setProperty("--magnet-x", `${Math.max(Math.min(x * 0.08, 8), -8)}px`);
  event.currentTarget.style.setProperty("--magnet-y", `${Math.max(Math.min(y * 0.08, 6), -6)}px`);
}

export function resetMagneticPosition(event: PointerEvent<HTMLElement>): void {
  event.currentTarget.style.setProperty("--magnet-x", "0px");
  event.currentTarget.style.setProperty("--magnet-y", "0px");
}

export function runViewTransition(update: () => void): void {
  const transition = (document as Document & { startViewTransition?: (callback: () => void) => void }).startViewTransition;

  if (transition) {
    transition(() => flushSync(update));
    return;
  }

  update();
}
