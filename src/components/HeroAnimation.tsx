import { useEffect, useRef } from "react";

// ─── Matrix rain characters ────────────────────────────────────────────────
// Mix of: katakana, latin code symbols, finance glyphs, digits
const MATRIX_CHARS =
  // Katakana (the classic)
  "アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン" +
  // Code
  "{}[]()<>/\\|=+*&%$#@!?;:,.~^`'\"" +
  // Finance / math
  "∑∂∇⊗∈λαβγσπ∞≈≠≤≥÷×√∫" +
  // Hex + digits
  "0123456789ABCDEFabcdef" +
  // Keywords (treated as single symbols by picking 1 char at a time)
  "RAGLLMAPIGPUROEVaRNPVIRR";

function pickChar() {
  return MATRIX_CHARS[Math.floor(Math.random() * MATRIX_CHARS.length)];
}

// ─── Canvas Matrix Rain ────────────────────────────────────────────────────
export default function HeroAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const FONT_SIZE = 14;
    let cols: number;
    let drops: number[];  // y position (in rows) per column
    let glows: number[];  // brightness override per column (0–1)
    let frameId: number;

    function resize() {
      canvas!.width  = canvas!.offsetWidth;
      canvas!.height = canvas!.offsetHeight;
      cols  = Math.floor(canvas!.width / FONT_SIZE);
      drops = Array.from({ length: cols }, () => Math.random() * -80);
      glows = Array.from({ length: cols }, () => Math.random());
    }

    resize();
    const observer = new ResizeObserver(resize);
    observer.observe(canvas);

    function draw() {
      const W = canvas!.width;
      const H = canvas!.height;

      // Semi-transparent black overlay → creates fading trail effect
      ctx!.fillStyle = "rgba(2, 11, 24, 0.18)";
      ctx!.fillRect(0, 0, W, H);

      ctx!.font = `${FONT_SIZE}px 'JetBrains Mono', monospace`;

      for (let i = 0; i < cols; i++) {
        const x = i * FONT_SIZE;
        const y = drops[i] * FONT_SIZE;

        // Head character — bright white/cyan glow
        const headBright = glows[i];
        if (headBright > 0.85) {
          // Occasional pure-white "flash" head
          ctx!.fillStyle = `rgba(240,255,255,${0.9 + Math.random() * 0.1})`;
        } else {
          ctx!.fillStyle = `rgba(34, 211, 238, ${0.75 + headBright * 0.25})`; // cyan
        }
        ctx!.fillText(pickChar(), x, y);

        // Tail characters are dimmer green/teal handled by the fade overlay
        // but we paint a few explicit trail chars for density
        for (let t = 1; t <= 3; t++) {
          const ty = y - t * FONT_SIZE;
          if (ty < 0) continue;
          const alpha = 0.35 - t * 0.1;
          ctx!.fillStyle = `rgba(6, 182, 212, ${alpha})`;
          ctx!.fillText(pickChar(), x, ty);
        }

        // Reset column when it goes off screen; random chance for early reset
        if (y > H && Math.random() > 0.975) {
          drops[i] = 0;
          glows[i] = Math.random();
        } else {
          // Speed varies per column (0.4 – 1.0 rows/frame)
          drops[i] += 0.4 + glows[i] * 0.6;
        }
      }

      frameId = requestAnimationFrame(draw);
    }

    draw();

    return () => {
      cancelAnimationFrame(frameId);
      observer.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      tabIndex={-1}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ opacity: 0.45, zIndex: 0 }}
    />
  );
}
