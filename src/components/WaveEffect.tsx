import { useEffect, useRef } from "react";

interface Blob {
  x: number;
  y: number;
  targetX: number;
  targetY: number;
  size: number;
}

export function WaveEffect(): JSX.Element {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const blobRef = useRef<Blob>({
    x: 0,
    y: 0,
    targetX: 0,
    targetY: 0,
    size: 30,
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const blob = blobRef.current;

    const handleMouseMove = (e: MouseEvent) => {
      blob.targetX = e.clientX;
      blob.targetY = e.clientY;
    };

    const handleWindowResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("resize", handleWindowResize);

    let animationId: number;

    const drawBlob = (x: number, y: number, size: number) => {
      ctx.fillStyle = "rgba(58, 125, 90, 0.12)";
      ctx.beginPath();
      ctx.arc(x, y, size, 0, Math.PI * 2);
      ctx.fill();

      ctx.strokeStyle = "rgba(58, 125, 90, 0.18)";
      ctx.lineWidth = 1.5;
      ctx.stroke();
    };

    const drawConnection = (
      fromX: number,
      fromY: number,
      toX: number,
      toY: number,
      fromSize: number,
      toSize: number
    ) => {
      const dx = toX - fromX;
      const dy = toY - fromY;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance > 1) {
        const angle = Math.atan2(dy, dx);

        const p1x = fromX + Math.cos(angle + Math.PI / 2) * fromSize;
        const p1y = fromY + Math.sin(angle + Math.PI / 2) * fromSize;

        const p2x = fromX + Math.cos(angle - Math.PI / 2) * fromSize;
        const p2y = fromY + Math.sin(angle - Math.PI / 2) * fromSize;

        const p3x = toX + Math.cos(angle - Math.PI / 2) * toSize;
        const p3y = toY + Math.sin(angle - Math.PI / 2) * toSize;

        const p4x = toX + Math.cos(angle + Math.PI / 2) * toSize;
        const p4y = toY + Math.sin(angle + Math.PI / 2) * toSize;

        ctx.fillStyle = "rgba(58, 125, 90, 0.08)";
        ctx.beginPath();
        ctx.moveTo(p1x, p1y);
        ctx.quadraticCurveTo(
          fromX + dx * 0.3,
          fromY + dy * 0.3,
          p3x,
          p3y
        );
        ctx.lineTo(p4x, p4y);
        ctx.quadraticCurveTo(
          fromX + dx * 0.7,
          fromY + dy * 0.7,
          p2x,
          p2y
        );
        ctx.closePath();
        ctx.fill();
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      blob.x += (blob.targetX - blob.x) * 0.15;
      blob.y += (blob.targetY - blob.y) * 0.15;

      drawBlob(blob.targetX, blob.targetY, blob.size * 0.6);
      drawConnection(
        blob.x,
        blob.y,
        blob.targetX,
        blob.targetY,
        blob.size,
        blob.size * 0.6
      );
      drawBlob(blob.x, blob.y, blob.size);

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-0"
    />
  );
}
