import { useEffect, useRef } from "react";
import * as THREE from "three";

// ─── Helper: drift particles with boundary wrapping ───────────────────────
function driftParticles(
  positions: Float32Array,
  velocities: { vx: number; vy: number }[],
  count: number
) {
  for (let i = 0; i < count; i++) {
    positions[i * 3]     += velocities[i].vx;
    positions[i * 3 + 1] += velocities[i].vy;
    if (positions[i * 3]     >  25) positions[i * 3]     = -25;
    if (positions[i * 3]     < -25) positions[i * 3]     =  25;
    if (positions[i * 3 + 1] >  15) positions[i * 3 + 1] = -15;
    if (positions[i * 3 + 1] < -15) positions[i * 3 + 1] =  15;
  }
}

// ─── Helper: build connection line segments ───────────────────────────────
function buildLines(
  positions: Float32Array,
  linePositions: Float32Array,
  count: number,
  maxDist: number
): number {
  let idx = 0;
  for (let a = 0; a < count; a++) {
    const ax = positions[a * 3];
    const ay = positions[a * 3 + 1];
    const az = positions[a * 3 + 2];
    let connections = 0;
    for (let b = a + 1; b < count && connections < 3; b++) {
      const dist = Math.hypot(
        ax - positions[b * 3],
        ay - positions[b * 3 + 1],
        az - positions[b * 3 + 2]
      );
      if (dist < maxDist && idx + 5 < linePositions.length) {
        linePositions[idx++] = ax;
        linePositions[idx++] = ay;
        linePositions[idx++] = az;
        linePositions[idx++] = positions[b * 3];
        linePositions[idx++] = positions[b * 3 + 1];
        linePositions[idx++] = positions[b * 3 + 2];
        connections++;
      }
    }
  }
  return idx;
}

// ─── Three.js Particle Field ───────────────────────────────────────────────
export default function HeroAnimation() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    // ── Scene setup ──────────────────────────────────────────────────────
    const scene  = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      60,
      mount.clientWidth / mount.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 28;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(globalThis.devicePixelRatio, 2));
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    renderer.setClearColor(0x000000, 0);
    mount.appendChild(renderer.domElement);

    // ── Particles ─────────────────────────────────────────────────────────
    const PARTICLE_COUNT = 110;
    const positions  = new Float32Array(PARTICLE_COUNT * 3);
    const velocities: { vx: number; vy: number }[] = [];

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      positions[i * 3]     = (Math.random() - 0.5) * 50;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 30;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 10;
      velocities.push({
        vx: (Math.random() - 0.5) * 0.012,
        vy: (Math.random() - 0.5) * 0.008,
      });
    }

    const particleGeo = new THREE.BufferGeometry();
    particleGeo.setAttribute("position", new THREE.BufferAttribute(positions, 3));

    const particleMat = new THREE.PointsMaterial({
      color: 0x22d3ee,
      size: 0.18,
      transparent: true,
      opacity: 0.55,
      sizeAttenuation: true,
    });
    scene.add(new THREE.Points(particleGeo, particleMat));

    // ── Connection lines ──────────────────────────────────────────────────
    const MAX_DIST      = 7.5;
    const lineGeo       = new THREE.BufferGeometry();
    const linePositions = new Float32Array(PARTICLE_COUNT * 6 * 3);
    lineGeo.setAttribute("position", new THREE.BufferAttribute(linePositions, 3));
    scene.add(
      new THREE.LineSegments(
        lineGeo,
        new THREE.LineBasicMaterial({ color: 0x06b6d4, transparent: true, opacity: 0.12 })
      )
    );

    // ── Mouse parallax ────────────────────────────────────────────────────
    const mouse    = { x: 0, y: 0 };
    const tilt     = { x: 0, y: 0 };
    const startTime = performance.now();

    const onMouseMove = (e: MouseEvent) => {
      mouse.x = (e.clientX / globalThis.innerWidth  - 0.5) * 2;
      mouse.y = (e.clientY / globalThis.innerHeight - 0.5) * 2;
    };
    const onResize = () => {
      camera.aspect = mount.clientWidth / mount.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(mount.clientWidth, mount.clientHeight);
    };

    globalThis.addEventListener("mousemove", onMouseMove);
    globalThis.addEventListener("resize", onResize);

    // ── Animation loop ────────────────────────────────────────────────────
    let frameId: number;

    const animate = () => {
      frameId = requestAnimationFrame(animate);
      const t = (performance.now() - startTime) / 1000;

      tilt.x += (mouse.x - tilt.x) * 0.04;
      tilt.y += (mouse.y - tilt.y) * 0.04;

      driftParticles(positions, velocities, PARTICLE_COUNT);
      (particleGeo.attributes.position as THREE.BufferAttribute).needsUpdate = true;

      const lineIdx = buildLines(positions, linePositions, PARTICLE_COUNT, MAX_DIST);
      lineGeo.setDrawRange(0, lineIdx / 3);
      (lineGeo.attributes.position as THREE.BufferAttribute).needsUpdate = true;

      scene.rotation.y =  tilt.x * 0.06 + Math.sin(t * 0.15) * 0.04;
      scene.rotation.x = -tilt.y * 0.04 + Math.sin(t * 0.1) * 0.02;

      renderer.render(scene, camera);
    };
    animate();

    return () => {
      cancelAnimationFrame(frameId);
      globalThis.removeEventListener("mousemove", onMouseMove);
      globalThis.removeEventListener("resize", onResize);
      renderer.dispose();
      particleGeo.dispose();
      particleMat.dispose();
      lineGeo.dispose();
      renderer.domElement.remove();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      aria-hidden="true"
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ opacity: 0.7, zIndex: 0 }}
    />
  );
}
