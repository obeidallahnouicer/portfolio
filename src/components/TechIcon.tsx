import type { ReactElement } from "react";

/**
 * TechIcon — inline SVG icons for tech/tool skills.
 * Each returns an <svg> sized to `size` px with the brand's official colors.
 * Falls back to a styled initials badge for anything not listed.
 */

interface TechIconProps {
  name: string;
  size?: number;
}

// ─── Individual SVG icons ────────────────────────────────────────────────────

function Python({ s }: Readonly<{ s: number }>) {
  return (
    <svg viewBox="0 0 128 128" width={s} height={s}>
      <linearGradient id="py1" x1="70.252" y1="1237.476" x2="170.659" y2="1151.089" gradientTransform="matrix(.563 0 0 -.568 -29.215 707.817)" gradientUnits="userSpaceOnUse">
        <stop offset="0" stopColor="#5A9FD4" /><stop offset="1" stopColor="#306998" />
      </linearGradient>
      <linearGradient id="py2" x1="209.474" y1="1098.811" x2="173.62" y2="1149.537" gradientTransform="matrix(.563 0 0 -.568 -29.215 707.817)" gradientUnits="userSpaceOnUse">
        <stop offset="0" stopColor="#FFD43B" /><stop offset="1" stopColor="#FFE873" />
      </linearGradient>
      <path fill="url(#py1)" d="M63.391 1.988c-4.222.02-8.252.379-11.8 1.007-10.45 1.846-12.346 5.71-12.346 12.837v9.411h24.693v3.137H28.266c-7.176 0-13.46 4.313-15.426 12.521-2.268 9.405-2.368 15.275 0 25.096 1.755 7.311 5.947 12.519 13.124 12.519h8.487V67.234c0-8.151 7.051-15.34 15.426-15.34h24.665c6.866 0 12.346-5.654 12.346-12.548V15.833c0-6.693-5.646-11.72-12.346-12.837-4.244-.706-8.645-1.027-12.871-1.008zm-13.369 7.555c2.55 0 4.634 2.117 4.634 4.721 0 2.593-2.083 4.69-4.634 4.69-2.56 0-4.633-2.097-4.633-4.69-.001-2.604 2.073-4.721 4.633-4.721z" />
      <path fill="url(#py2)" d="M91.682 28.38v10.966c0 8.5-7.208 15.655-15.426 15.655H51.591c-6.756 0-12.346 5.783-12.346 12.549v23.515c0 6.691 5.818 10.628 12.346 12.547 7.816 2.297 15.312 2.713 24.665 0 6.216-1.801 12.346-5.423 12.346-12.547v-9.412H63.938v-3.138h37.012c7.176 0 9.852-5.005 12.348-12.519 2.578-7.735 2.467-15.174 0-25.096-1.774-7.145-5.161-12.521-12.348-12.521h-9.268zM77.809 87.927c2.561 0 4.634 2.097 4.634 4.692 0 2.602-2.074 4.719-4.634 4.719-2.55 0-4.633-2.117-4.633-4.719 0-2.595 2.083-4.692 4.633-4.692z" />
    </svg>
  );
}

function Docker({ s }: Readonly<{ s: number }>) {
  return (
    <svg viewBox="0 0 128 128" width={s} height={s}>
      <path fill="#019bc6" d="M124.8 52.1c-4.3-2.5-10-2.8-14.8-1.4-.6-5.2-4-9.7-8-12.9l-1.6-1.3-1.4 1.6c-2.7 3.1-3.5 8.3-3.1 12.3.3 2.9 1.2 5.9 3 8.3-1.4.8-2.9 1.9-4.3 2.4-2.8 1-5.9 2-8.9 2H79V49H65v-12H51V25H25v12H12v12H0v37h1.6c2.4 14.1 14.6 24.8 29.4 24.8 27.9 0 51.4-12.5 65.5-32h4.7c3.3 0 6.7-.1 9.9-1.3 3.6-1.3 6.8-4 8.7-7.3l1.2-2.1-1.5-2.4c-.4-.7-1.3-2.9-1.3-2.9s2.2-1.1 3.1-1.7c1.5-1 3-2.4 3.5-4.2.2-.6.3-1.3.3-1.9-.1-.5-.2-1-.5-1.5z" />
      <path fill="#fff" d="M19 55h10v10H19zm12 0h10v10H31zm12 0h10v10H43zm12 0h10v10H55zm12 0h10v10H67zM43 43h10v10H43zm12 0h10v10H55zm12 0h10v10H67zm12 0h10v10H79zM55 31h10v10H55z" />
    </svg>
  );
}

function ReactIcon({ s }: Readonly<{ s: number }>) {
  return (
    <svg viewBox="-11.5 -10.23174 23 20.46348" width={s} height={s}>
      <circle r="2.05" fill="#61dafb" />
      <g stroke="#61dafb" strokeWidth="1" fill="none">
        <ellipse rx="11" ry="4.2" />
        <ellipse rx="11" ry="4.2" transform="rotate(60)" />
        <ellipse rx="11" ry="4.2" transform="rotate(120)" />
      </g>
    </svg>
  );
}

function JavaScript({ s }: Readonly<{ s: number }>) {
  return (
    <svg viewBox="0 0 128 128" width={s} height={s}>
      <path fill="#f7df1e" d="M0 0h128v128H0z" />
      <path d="M116.347 96.736c-.917-5.711-4.641-10.508-15.672-14.981-3.832-1.761-8.104-3.022-9.377-5.926-.452-1.69-.512-2.642-.226-3.665.821-3.32 4.784-4.355 7.925-3.403 2.023.678 3.938 2.237 5.093 4.724 5.402-3.498 5.391-3.475 9.163-5.879-1.381-2.141-2.118-3.129-3.022-4.045-3.249-3.629-7.676-5.498-14.756-5.355l-3.688.477c-3.534.893-6.902 2.748-8.877 5.235-5.926 6.724-4.236 18.492 2.975 23.335 7.104 5.332 17.54 6.545 18.873 11.531 1.297 6.104-4.486 8.08-10.234 7.378-4.236-.881-6.592-3.034-9.139-6.949-4.688 2.713-4.688 2.713-9.508 5.485 1.143 2.499 2.344 3.63 4.26 5.795 9.068 9.198 31.76 8.746 35.83-5.176.165-.478 1.261-3.666.38-8.581zM69.462 58.943H57.753l-.048 30.272c0 6.438.333 12.34-.714 14.149-1.713 3.558-6.152 3.117-8.175 2.427-2.059-1.012-3.106-2.451-4.319-4.485-.333-.584-.583-1.036-.667-1.071l-9.52 5.83c1.583 3.249 3.915 6.069 6.902 7.901 4.462 2.678 10.459 3.499 16.731 2.059 4.082-1.189 7.604-3.652 9.448-7.401 2.666-4.915 2.094-10.864 2.07-17.444.06-10.735.001-21.468.001-32.237z" />
    </svg>
  );
}

function TypeScript({ s }: Readonly<{ s: number }>) {
  return (
    <svg viewBox="0 0 128 128" width={s} height={s}>
      <path fill="#007acc" d="M0 0h128v128H0z" />
      <path fill="#fff" d="M23.558 61.285h14.505v6.36H23.558v19.878h-7.635V41.48h25.136v6.36H23.558zM54.474 87.523c-3.89 0-7.16-.975-9.81-2.925-2.65-1.95-4.434-4.778-5.352-8.483l6.78-2.796c.52 2.145 1.365 3.78 2.535 4.905 1.17 1.125 2.7 1.688 4.59 1.688 1.755 0 3.157-.435 4.207-1.305 1.05-.87 1.575-2.01 1.575-3.42 0-1.5-.555-2.7-1.665-3.6-1.11-.9-3.195-1.875-6.255-2.925-3.21-1.05-5.715-2.52-7.515-4.41-1.8-1.89-2.7-4.155-2.7-6.795 0-3.045 1.14-5.445 3.42-7.2 2.28-1.755 5.13-2.633 8.55-2.633 3.12 0 5.745.72 7.875 2.16 2.13 1.44 3.645 3.39 4.545 5.85l-6.585 2.73c-.45-1.365-1.17-2.415-2.16-3.15-.99-.735-2.205-1.103-3.645-1.103-1.56 0-2.805.375-3.735 1.125-.93.75-1.395 1.755-1.395 3.015 0 1.17.495 2.145 1.485 2.925.99.78 2.79 1.62 5.4 2.52 3.57 1.2 6.195 2.745 7.875 4.635 1.68 1.89 2.52 4.23 2.52 7.02 0 3.27-1.2 5.895-3.6 7.875-2.4 1.98-5.49 2.97-9.27 2.97zM77.07 87.327V47.84H64.875V41.48H97.35v6.36H85.155v39.487z" />
    </svg>
  );
}

function FastAPI({ s }: Readonly<{ s: number }>) {
  return (
    <svg viewBox="0 0 128 128" width={s} height={s}>
      <circle cx="64" cy="64" r="64" fill="#009485" />
      <path fill="#fff" d="M71.5 26L38 72h26.5L56.5 102 90 56H63.5z" />
    </svg>
  );
}

function Flask({ s }: Readonly<{ s: number }>) {
  return (
    <svg viewBox="0 0 128 128" width={s} height={s}>
      <path fill="#fff" d="M48 6h32v52l24 46c2 4 0 18-16 18H40c-16 0-18-14-16-18L48 58V6z" />
      <path fill="#333" d="M52 10h24v50l22 42c1.5 3 1 14-12 14H42c-13 0-13.5-11-12-14l22-42V10zM36 90c-1 3 0 6 6 6h44c6 0 7-3 6-6l-4-8H40l-4 8z" />
      <circle cx="54" cy="96" r="4" fill="#4fc3f7" />
      <circle cx="72" cy="100" r="3" fill="#4fc3f7" />
      <circle cx="62" cy="104" r="2" fill="#4fc3f7" />
    </svg>
  );
}

function PostgreSQL({ s }: Readonly<{ s: number }>) {
  return (
    <svg viewBox="0 0 128 128" width={s} height={s}>
      <path fill="#336791" d="M64 0C28.7 0 0 28.7 0 64s28.7 64 64 64 64-28.7 64-64S99.3 0 64 0z" />
      <path fill="#fff" d="M90.2 34c-2.5-1.8-6.1-2.7-10.5-2.7-4 0-7.9 1-11.2 2.9-1.4-1.9-3.5-3-5.8-3-2.6 0-4.9 1.2-6.4 3.1C52.9 33 49 32 45 32c-4.4 0-8 .9-10.5 2.7C31 37.3 29 41 29 45.4c0 4.2 1.8 8.6 4.9 12.2-.5 1.5-.8 3-.8 4.5 0 6.3 4.1 11.7 10 13.5V86c0 5.5 4.5 10 10 10h22c5.5 0 10-4.5 10-10v-10.4c5.9-1.8 10-7.2 10-13.5 0-1.5-.3-3-.8-4.5C97.4 54 99 49.6 99 45.4c0-4.4-2-8.1-5.4-10.6-.2-.2-.4-.5-.6-.7l-2.8-.1zm-5.8 3.3c6 0 9.6 2.2 9.6 4.5 0 1.2-1 2.3-2.7 3.2-5-2.8-11-4.2-17.3-4.2-1.5 0-3 .1-4.5.3 1.4-2.3 4.4-3.8 7.7-3.8h7.2zm-40.8 0h7.2c3.3 0 6.3 1.5 7.7 3.8-1.5-.2-3-.3-4.5-.3-6.3 0-12.3 1.4-17.3 4.2-1.7-.9-2.7-2-2.7-3.2 0-2.3 3.6-4.5 9.6-4.5zm5.4 42.4c-3.8-1.2-6.5-4.7-6.5-8.6 0-5.1 4.2-9.3 9.3-9.3 4.3 0 8 3 9 7.1-3.8 2.2-7.5 5.4-10 9.4-.6.4-1.2.9-1.8 1.4zm36.6 0c-.6-.5-1.2-1-1.8-1.4-2.5-4-6.2-7.2-10-9.4 1-4.1 4.7-7.1 9-7.1 5.1 0 9.3 4.2 9.3 9.3 0 3.9-2.7 7.4-6.5 8.6z" />
    </svg>
  );
}

function NodeJS({ s }: Readonly<{ s: number }>) {
  return (
    <svg viewBox="0 0 128 128" width={s} height={s}>
      <path fill="#83cd29" d="M112.771 30.334L66.308 3.615c-2.046-1.18-4.573-1.18-6.619 0L13.229 30.334C11.183 31.514 10 33.683 10 36v53.999c0 2.318 1.183 4.487 3.229 5.667l46.463 26.719c2.046 1.18 4.573 1.18 6.619 0l46.46-26.719c2.046-1.18 3.229-3.349 3.229-5.667V36c0-2.317-1.183-4.486-3.229-5.666z" />
      <path fill="#fff" d="M61.74 57.712v30.2l-13.57 7.862V43.65L61.74 57.712zm6.008 0l13.57-14.062v52.124l-13.57-7.862v-30.2z" />
      <path fill="#fff" d="M64.744 19.462L35.59 36.387v33.85l6.008-3.47V43.613l23.146-13.412L88 30.2v-.001l-6.008-3.469L64.744 19.462z" />
    </svg>
  );
}

function GitLabIcon({ s }: Readonly<{ s: number }>) {
  return (
    <svg viewBox="0 0 128 128" width={s} height={s}>
      <path fill="#e24329" d="M64 118.198l18.959-58.33H45.041z" />
      <path fill="#fc6d26" d="M64 118.198L45.041 59.868H10.034z" />
      <path fill="#fca326" d="M10.034 59.868l-6.96 21.428a4.747 4.747 0 001.724 5.309L64 118.198z" />
      <path fill="#e24329" d="M10.034 59.868h35.007L28.977 9.652a2.375 2.375 0 00-4.506 0z" />
      <path fill="#fc6d26" d="M64 118.198l18.959-58.33h35.007z" />
      <path fill="#fca326" d="M117.966 59.868l6.96 21.428a4.747 4.747 0 01-1.724 5.309L64 118.198z" />
      <path fill="#e24329" d="M117.966 59.868h-35.007l16.064-50.216a2.375 2.375 0 014.506 0z" />
    </svg>
  );
}

function AzureIcon({ s }: Readonly<{ s: number }>) {
  return (
    <svg viewBox="0 0 128 128" width={s} height={s}>
      <defs>
        <linearGradient id="az1" x1="58.634" y1="34.67" x2="29.107" y2="95.641" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#114a8b" /><stop offset="1" stopColor="#0669bc" />
        </linearGradient>
        <linearGradient id="az2" x1="70.553" y1="60.511" x2="64.006" y2="62.727" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopOpacity=".3" /><stop offset="1" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="az3" x1="67.748" y1="35.655" x2="97.027" y2="95.561" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#3ccbf4" /><stop offset="1" stopColor="#2892df" />
        </linearGradient>
      </defs>
      <path fill="url(#az1)" d="M46.09 7.103H76.5L46.97 102.527a4.028 4.028 0 01-3.818 2.746H10.427a4.023 4.023 0 01-3.819-5.299L37.451 9.849a4.028 4.028 0 013.818-2.746z" />
      <path fill="#0078d4" d="M97.28 66.477H50.764a1.856 1.856 0 00-1.265 3.21l29.524 27.542a4.047 4.047 0 002.763 1.083h26.045z" />
      <path fill="url(#az2)" d="M46.09 7.103a4 4 0 00-3.824 2.777L6.638 99.955a4.02 4.02 0 003.795 5.318h33.028a4.315 4.315 0 003.306-2.8l7.976-23.49 28.52 26.602a4.113 4.113 0 002.59.921H117.7l-12.207-34.929-35.578.008L80.7 7.103z" />
      <path fill="url(#az3)" d="M90.549 9.848a4.023 4.023 0 00-3.814-2.745H46.455a4.023 4.023 0 013.814 2.745l30.843 90.124a4.023 4.023 0 01-3.814 5.3h40.28a4.023 4.023 0 003.814-5.3z" />
    </svg>
  );
}

function LangChainIcon({ s }: Readonly<{ s: number }>) {
  // LangChain official logo: interlocking chain links in their teal/green brand color
  return (
    <svg viewBox="0 0 128 128" width={s} height={s}>
      <rect width="128" height="128" rx="18" fill="#0f1f2e" />
      {/* Left link */}
      <rect x="12" y="44" width="44" height="20" rx="10" fill="none" stroke="#1dd1a1" strokeWidth="7" />
      {/* Right link — offset, interlocking */}
      <rect x="72" y="64" width="44" height="20" rx="10" fill="none" stroke="#1dd1a1" strokeWidth="7" />
      {/* Connector bar */}
      <line x1="56" y1="54" x2="72" y2="74" stroke="#1dd1a1" strokeWidth="7" strokeLinecap="round" />
    </svg>
  );
}

function TensorFlow({ s }: Readonly<{ s: number }>) {
  // TensorFlow official logo — the "T" flow mark with correct orange gradient
  return (
    <svg viewBox="0 0 128 128" width={s} height={s}>
      <defs>
        <linearGradient id="tf1" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#FF8F00" />
          <stop offset="1" stopColor="#FF6F00" />
        </linearGradient>
      </defs>
      {/* Left dark half */}
      <path fill="#FF6F00" d="M64 10L18 36v56l46 26V10z" />
      {/* Right lighter half */}
      <path fill="url(#tf1)" d="M64 10l46 26v56L64 118V10z" />
      {/* White T-flow mark */}
      {/* Top bar */}
      <rect x="38" y="38" width="52" height="10" rx="2" fill="#fff" />
      {/* Vertical drop left */}
      <rect x="43" y="48" width="10" height="20" rx="2" fill="#fff" />
      {/* Bottom cross */}
      <rect x="38" y="68" width="52" height="10" rx="2" fill="#fff" />
      {/* Vertical drop right */}
      <rect x="75" y="78" width="10" height="18" rx="2" fill="#fff" />
    </svg>
  );
}

function PyTorch({ s }: Readonly<{ s: number }>) {
  // PyTorch official flame logo — orange flame with white dot (their actual mark)
  return (
    <svg viewBox="0 0 128 128" width={s} height={s}>
      <defs>
        <linearGradient id="pt1" x1="0.3" y1="0" x2="0.7" y2="1">
          <stop offset="0" stopColor="#EE4C2C" />
          <stop offset="1" stopColor="#F8A000" />
        </linearGradient>
      </defs>
      {/* Main flame body */}
      <path
        fill="url(#pt1)"
        d="M64 10
           C64 10 90 28 90 55
           C90 70 84 78 78 84
           C72 90 72 96 72 100
           C72 108 66 118 64 118
           C62 118 56 108 56 100
           C56 96 56 90 50 84
           C44 78 38 70 38 55
           C38 28 64 10 64 10Z"
      />
      {/* Inner highlight — lighter core */}
      <path
        fill="#F8A000"
        opacity="0.6"
        d="M64 26
           C64 26 80 40 80 58
           C80 70 74 78 70 84
           C68 88 68 94 67 100
           C65 106 64 110 64 110
           C64 110 58 100 60 90
           C62 82 66 76 68 70
           C70 64 70 56 64 44
           C62 38 62 30 64 26Z"
      />
      {/* White dot — PyTorch signature */}
      <circle cx="77" cy="38" r="9" fill="#fff" />
    </svg>
  );
}

function ScikitLearn({ s }: Readonly<{ s: number }>) {
  // Scikit-learn logo — orange circle with the characteristic "sk" bicycle wheel spokes mark
  return (
    <svg viewBox="0 0 128 128" width={s} height={s}>
      <defs>
        <linearGradient id="sk1" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#F7931E" />
          <stop offset="1" stopColor="#E86E00" />
        </linearGradient>
      </defs>
      {/* Outer ring */}
      <circle cx="64" cy="64" r="58" fill="url(#sk1)" />
      <circle cx="64" cy="64" r="50" fill="#fff" />
      {/* Inner rings — bicycle wheel style */}
      <circle cx="64" cy="64" r="36" fill="none" stroke="#F7931E" strokeWidth="5" />
      <circle cx="64" cy="64" r="16" fill="none" stroke="#F7931E" strokeWidth="5" />
      {/* Spokes */}
      <line x1="64" y1="28" x2="64" y2="14" stroke="#F7931E" strokeWidth="5" strokeLinecap="round" />
      <line x1="64" y1="100" x2="64" y2="114" stroke="#F7931E" strokeWidth="5" strokeLinecap="round" />
      <line x1="28" y1="64" x2="14" y2="64" stroke="#F7931E" strokeWidth="5" strokeLinecap="round" />
      <line x1="100" y1="64" x2="114" y2="64" stroke="#F7931E" strokeWidth="5" strokeLinecap="round" />
      <line x1="38.7" y1="38.7" x2="28.3" y2="28.3" stroke="#F7931E" strokeWidth="5" strokeLinecap="round" />
      <line x1="89.3" y1="89.3" x2="99.7" y2="99.7" stroke="#F7931E" strokeWidth="5" strokeLinecap="round" />
      <line x1="89.3" y1="38.7" x2="99.7" y2="28.3" stroke="#F7931E" strokeWidth="5" strokeLinecap="round" />
      <line x1="38.7" y1="89.3" x2="28.3" y2="99.7" stroke="#F7931E" strokeWidth="5" strokeLinecap="round" />
      {/* Hub */}
      <circle cx="64" cy="64" r="8" fill="#F7931E" />
    </svg>
  );
}

function KubernetesIcon({ s }: Readonly<{ s: number }>) {
  return (
    <svg viewBox="0 0 128 128" width={s} height={s}>
      <path fill="#326CE5" d="M64 8L12 38v52l52 30 52-30V38z" />
      <path fill="#fff" d="M64 24l-28 16v32l28 16 28-16V40zM52 58V48l12-7 12 7v10l-12 7z" />
    </svg>
  );
}

// ─── AI Concepts ─────────────────────────────────────────────────────────────

function GenAIIcon({ s }: Readonly<{ s: number }>) {
  // Stylised brain with a neural spark — represents Generative AI
  return (
    <svg viewBox="0 0 128 128" width={s} height={s}>
      <defs>
        <radialGradient id="gai1" cx="50%" cy="50%" r="50%">
          <stop offset="0" stopColor="#a78bfa" />
          <stop offset="1" stopColor="#6d28d9" />
        </radialGradient>
      </defs>
      <circle cx="64" cy="64" r="58" fill="url(#gai1)" opacity="0.15" />
      {/* Brain left lobe */}
      <path fill="none" stroke="#a78bfa" strokeWidth="5" strokeLinecap="round"
        d="M44 80 C28 76 24 62 30 52 C34 44 42 40 50 44 C50 36 56 28 64 28 C72 28 78 36 78 44 C86 40 94 44 98 52 C104 62 100 76 84 80" />
      {/* Center divide */}
      <line x1="64" y1="28" x2="64" y2="86" stroke="#a78bfa" strokeWidth="3" strokeDasharray="4 3" />
      {/* Neural connections */}
      <circle cx="42" cy="58" r="4" fill="#c4b5fd" />
      <circle cx="64" cy="50" r="4" fill="#c4b5fd" />
      <circle cx="86" cy="58" r="4" fill="#c4b5fd" />
      <circle cx="50" cy="72" r="4" fill="#c4b5fd" />
      <circle cx="78" cy="72" r="4" fill="#c4b5fd" />
      <line x1="42" y1="58" x2="64" y2="50" stroke="#c4b5fd" strokeWidth="2" opacity="0.7" />
      <line x1="64" y1="50" x2="86" y2="58" stroke="#c4b5fd" strokeWidth="2" opacity="0.7" />
      <line x1="42" y1="58" x2="50" y2="72" stroke="#c4b5fd" strokeWidth="2" opacity="0.7" />
      <line x1="86" y1="58" x2="78" y2="72" stroke="#c4b5fd" strokeWidth="2" opacity="0.7" />
      <line x1="50" y1="72" x2="64" y2="50" stroke="#c4b5fd" strokeWidth="2" opacity="0.7" />
      <line x1="78" y1="72" x2="64" y2="50" stroke="#c4b5fd" strokeWidth="2" opacity="0.7" />
      {/* Spark / generate symbol */}
      <path fill="#e9d5ff" d="M60 90 L68 100 L64 96 L72 108 L64 98 L60 106 L64 96 L56 108 L64 98 Z" />
    </svg>
  );
}

function LLMIcon({ s }: Readonly<{ s: number }>) {
  // LLMs & RAG — stacked token blocks feeding into a knowledge cylinder (RAG metaphor)
  return (
    <svg viewBox="0 0 128 128" width={s} height={s}>
      <defs>
        <linearGradient id="llm1" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#22d3ee" />
          <stop offset="1" stopColor="#0891b2" />
        </linearGradient>
      </defs>
      {/* Knowledge base cylinder (RAG) */}
      <ellipse cx="64" cy="96" rx="30" ry="8" fill="#0891b2" opacity="0.4" />
      <rect x="34" y="78" width="60" height="18" rx="2" fill="#0891b2" opacity="0.3" />
      <ellipse cx="64" cy="78" rx="30" ry="8" fill="url(#llm1)" />
      {/* Token blocks (LLM input) */}
      <rect x="18" y="38" width="22" height="12" rx="4" fill="#22d3ee" opacity="0.9" />
      <rect x="46" y="38" width="22" height="12" rx="4" fill="#22d3ee" opacity="0.7" />
      <rect x="74" y="38" width="22" height="12" rx="4" fill="#22d3ee" opacity="0.5" />
      {/* Attention arrows flowing down */}
      <path fill="none" stroke="#22d3ee" strokeWidth="2.5" strokeLinecap="round"
        d="M29 50 Q29 64 48 72" />
      <path fill="none" stroke="#22d3ee" strokeWidth="2.5" strokeLinecap="round"
        d="M57 50 Q57 60 57 70" />
      <path fill="none" stroke="#22d3ee" strokeWidth="2.5" strokeLinecap="round"
        d="M85 50 Q85 64 76 72" />
      <polygon points="46,70 50,76 52,68" fill="#22d3ee" />
      <polygon points="55,68 59,68 57,74" fill="#22d3ee" />
      <polygon points="74,70 78,68 74,76" fill="#22d3ee" />
      {/* Label */}
      <text x="64" y="22" textAnchor="middle" fontSize="12" fontFamily="JetBrains Mono, monospace"
        fontWeight="700" fill="#67e8f9">LLM + RAG</text>
    </svg>
  );
}

function GuardrailsIcon({ s }: Readonly<{ s: number }>) {
  // Shield with a checkmark + fence bars — AI safety guardrails
  return (
    <svg viewBox="0 0 128 128" width={s} height={s}>
      <defs>
        <linearGradient id="gr1" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#34d399" />
          <stop offset="1" stopColor="#059669" />
        </linearGradient>
      </defs>
      {/* Shield body */}
      <path fill="url(#gr1)" opacity="0.2"
        d="M64 12 L104 30 L104 66 Q104 96 64 116 Q24 96 24 66 L24 30 Z" />
      <path fill="none" stroke="#34d399" strokeWidth="5" strokeLinejoin="round"
        d="M64 12 L104 30 L104 66 Q104 96 64 116 Q24 96 24 66 L24 30 Z" />
      {/* Fence bars inside shield */}
      <line x1="44" y1="46" x2="44" y2="80" stroke="#34d399" strokeWidth="4" strokeLinecap="round" opacity="0.7" />
      <line x1="56" y1="42" x2="56" y2="84" stroke="#34d399" strokeWidth="4" strokeLinecap="round" opacity="0.7" />
      <line x1="68" y1="42" x2="68" y2="84" stroke="#34d399" strokeWidth="4" strokeLinecap="round" opacity="0.7" />
      <line x1="80" y1="46" x2="80" y2="80" stroke="#34d399" strokeWidth="4" strokeLinecap="round" opacity="0.7" />
      {/* Horizontal rails */}
      <line x1="38" y1="52" x2="86" y2="52" stroke="#34d399" strokeWidth="4" strokeLinecap="round" />
      <line x1="38" y1="74" x2="86" y2="74" stroke="#34d399" strokeWidth="4" strokeLinecap="round" />
    </svg>
  );
}

function PromptEngIcon({ s }: Readonly<{ s: number }>) {
  // Terminal prompt cursor + wrench — Prompt Engineering
  return (
    <svg viewBox="0 0 128 128" width={s} height={s}>
      <defs>
        <linearGradient id="pe1" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#f472b6" />
          <stop offset="1" stopColor="#db2777" />
        </linearGradient>
      </defs>
      {/* Terminal window */}
      <rect x="10" y="20" width="108" height="78" rx="10" fill="#0f1923" />
      <rect x="10" y="20" width="108" height="20" rx="10" fill="url(#pe1)" opacity="0.8" />
      {/* Traffic lights */}
      <circle cx="28" cy="30" r="4" fill="#ff5f57" />
      <circle cx="42" cy="30" r="4" fill="#febc2e" />
      <circle cx="56" cy="30" r="4" fill="#28c840" />
      {/* Prompt line: "> _" */}
      <text x="22" y="62" fontSize="20" fontFamily="JetBrains Mono, monospace"
        fontWeight="700" fill="#f472b6">{">"}</text>
      <text x="40" y="62" fontSize="16" fontFamily="JetBrains Mono, monospace"
        fill="#f9a8d4">prompt</text>
      {/* Blinking cursor block */}
      <rect x="102" y="48" width="10" height="18" rx="2" fill="#f472b6" opacity="0.9" />
      {/* Second line faded */}
      <text x="22" y="82" fontSize="13" fontFamily="JetBrains Mono, monospace"
        fill="#6b7280">few-shot · chain-of-thought</text>
    </svg>
  );
}

// ─── Finance Icons ─────────────────────────────────────────────────────────────

function CreditAnalysisIcon({ s }: Readonly<{ s: number }>) {
  // Credit scorecard / gauge with a tick — Credit Analysis
  return (
    <svg viewBox="0 0 128 128" width={s} height={s}>
      <defs>
        <linearGradient id="ca1" x1="0" y1="1" x2="1" y2="0">
          <stop offset="0" stopColor="#f87171" />
          <stop offset="0.5" stopColor="#fbbf24" />
          <stop offset="1" stopColor="#34d399" />
        </linearGradient>
      </defs>
      {/* Gauge arc background */}
      <path fill="none" stroke="#1e293b" strokeWidth="12"
        d="M 20 90 A 46 46 0 0 1 108 90" strokeLinecap="round" />
      {/* Gauge arc coloured */}
      <path fill="none" stroke="url(#ca1)" strokeWidth="12"
        d="M 20 90 A 46 46 0 0 1 108 90" strokeLinecap="round"
        strokeDasharray="145" strokeDashoffset="36" />
      {/* Needle pointing to ~75% (good credit) */}
      <line x1="64" y1="90" x2="98" y2="52" stroke="#f1f5f9" strokeWidth="4" strokeLinecap="round" />
      <circle cx="64" cy="90" r="6" fill="#f1f5f9" />
      {/* Score label */}
      <text x="64" y="116" textAnchor="middle" fontSize="14" fontFamily="Syne, sans-serif"
        fontWeight="700" fill="#34d399">CREDIT</text>
      {/* Tick marks */}
      <line x1="20" y1="90" x2="26" y2="80" stroke="#64748b" strokeWidth="2" />
      <line x1="64" y1="44" x2="64" y2="54" stroke="#64748b" strokeWidth="2" />
      <line x1="108" y1="90" x2="102" y2="80" stroke="#64748b" strokeWidth="2" />
    </svg>
  );
}

function FinModelingIcon({ s }: Readonly<{ s: number }>) {
  // Candlestick chart with upward trend line — Financial Modeling
  return (
    <svg viewBox="0 0 128 128" width={s} height={s}>
      <defs>
        <linearGradient id="fm1" x1="0" y1="1" x2="0" y2="0">
          <stop offset="0" stopColor="#fb923c" />
          <stop offset="1" stopColor="#fde68a" />
        </linearGradient>
      </defs>
      {/* Grid lines */}
      <line x1="16" y1="30" x2="116" y2="30" stroke="#1e293b" strokeWidth="1" />
      <line x1="16" y1="55" x2="116" y2="55" stroke="#1e293b" strokeWidth="1" />
      <line x1="16" y1="80" x2="116" y2="80" stroke="#1e293b" strokeWidth="1" />
      <line x1="16" y1="105" x2="116" y2="105" stroke="#1e293b" strokeWidth="1" />
      {/* Candle 1 — bearish (red) */}
      <line x1="28" y1="42" x2="28" y2="95" stroke="#f87171" strokeWidth="2" />
      <rect x="22" y="52" width="12" height="30" rx="2" fill="#f87171" />
      {/* Candle 2 — bullish (green) */}
      <line x1="52" y1="38" x2="52" y2="88" stroke="#34d399" strokeWidth="2" />
      <rect x="46" y="48" width="12" height="28" rx="2" fill="#34d399" />
      {/* Candle 3 — bullish */}
      <line x1="76" y1="30" x2="76" y2="74" stroke="#34d399" strokeWidth="2" />
      <rect x="70" y="36" width="12" height="26" rx="2" fill="#34d399" />
      {/* Candle 4 — bullish */}
      <line x1="100" y1="20" x2="100" y2="60" stroke="#34d399" strokeWidth="2" />
      <rect x="94" y="24" width="12" height="22" rx="2" fill="#34d399" />
      {/* Trend line */}
      <path fill="none" stroke="url(#fm1)" strokeWidth="3" strokeLinecap="round"
        d="M 22 90 Q 52 68 76 52 T 110 26" />
      {/* Arrow tip */}
      <polygon points="110,20 118,28 106,30" fill="#fde68a" />
    </svg>
  );
}

function RiskMgmtIcon({ s }: Readonly<{ s: number }>) {
  // Heat-map matrix (3×3 red-amber-green squares) — Risk Management
  return (
    <svg viewBox="0 0 128 128" width={s} height={s}>
      {/* Label axes */}
      <text x="8" y="14" fontSize="9" fontFamily="Inter, sans-serif" fill="#64748b">IMPACT →</text>
      <text x="4" y="110" fontSize="9" fontFamily="Inter, sans-serif" fill="#64748b"
        transform="rotate(-90,8,90)">PROB.</text>
      {/* 3×3 risk matrix cells */}
      {/* Row 3 (high prob) — left to right: yellow, orange, red */}
      <rect x="26" y="26" width="28" height="28" rx="4" fill="#fbbf24" opacity="0.85" />
      <rect x="62" y="26" width="28" height="28" rx="4" fill="#f97316" opacity="0.85" />
      <rect x="98" y="26" width="28" height="28" rx="4" fill="#ef4444" opacity="0.85" />
      {/* Row 2 — green, yellow, orange */}
      <rect x="26" y="62" width="28" height="28" rx="4" fill="#34d399" opacity="0.85" />
      <rect x="62" y="62" width="28" height="28" rx="4" fill="#fbbf24" opacity="0.85" />
      <rect x="98" y="62" width="28" height="28" rx="4" fill="#f97316" opacity="0.85" />
      {/* Row 1 (low prob) — green, green, yellow */}
      <rect x="26" y="98" width="28" height="28" rx="4" fill="#34d399" opacity="0.85" />
      <rect x="62" y="98" width="28" height="28" rx="4" fill="#34d399" opacity="0.85" />
      <rect x="98" y="98" width="28" height="28" rx="4" fill="#fbbf24" opacity="0.85" />
      {/* Diagonal emphasis stroke */}
      <path fill="none" stroke="#f1f5f9" strokeWidth="2.5" strokeDasharray="5 3" opacity="0.4"
        d="M 26 54 L 90 26" />
    </svg>
  );
}

// ─── Generic fallback badge ────────────────────────────────────────────────
function InitialsBadge({ name, size, accent }: Readonly<{ name: string; size: number; accent?: string }>) {
  const initials = name
    .split(/[\s&\-/]+/)
    .slice(0, 2)
    .map(w => w[0]?.toUpperCase() ?? "")
    .join("");
  const color = accent ?? "#22d3ee";
  return (
    <svg viewBox="0 0 56 56" width={size} height={size}>
      <rect width="56" height="56" rx="12" fill={`${color}18`} />
      <text
        x="28" y="35" textAnchor="middle"
        fontSize={initials.length > 1 ? "18" : "22"}
        fontFamily="Syne, Inter, sans-serif"
        fontWeight="700"
        fill={color}
      >
        {initials}
      </text>
    </svg>
  );
}

// ─── Icon map ────────────────────────────────────────────────────────────────
const ICON_MAP: Record<string, (s: number) => ReactElement> = {
  python:             s => <Python s={s} />,
  docker:             s => <Docker s={s} />,
  react:              s => <ReactIcon s={s} />,
  javascript:         s => <JavaScript s={s} />,
  typescript:         s => <TypeScript s={s} />,
  fastapi:            s => <FastAPI s={s} />,
  flask:              s => <Flask s={s} />,
  postgresql:         s => <PostgreSQL s={s} />,
  nodejs:             s => <NodeJS s={s} />,
  "node.js":          s => <NodeJS s={s} />,
  gitlab:             s => <GitLabIcon s={s} />,
  "gitlab ci":        s => <GitLabIcon s={s} />,
  azure:              s => <AzureIcon s={s} />,
  langchain:          s => <LangChainIcon s={s} />,
  tensorflow:         s => <TensorFlow s={s} />,
  pytorch:            s => <PyTorch s={s} />,
  "scikit-learn":     s => <ScikitLearn s={s} />,
  "scikit learn":     s => <ScikitLearn s={s} />,
  kubernetes:         s => <KubernetesIcon s={s} />,
  // AI concepts
  "gen ai":           s => <GenAIIcon s={s} />,
  "generative ai":    s => <GenAIIcon s={s} />,
  "llms & rag":       s => <LLMIcon s={s} />,
  "llms":             s => <LLMIcon s={s} />,
  "rag":              s => <LLMIcon s={s} />,
  "guardrails":       s => <GuardrailsIcon s={s} />,
  "prompt eng":       s => <PromptEngIcon s={s} />,
  "prompt engineering": s => <PromptEngIcon s={s} />,
  // Finance
  "credit analysis":  s => <CreditAnalysisIcon s={s} />,
  "fin modeling":     s => <FinModelingIcon s={s} />,
  "financial modeling": s => <FinModelingIcon s={s} />,
  "risk mgmt":        s => <RiskMgmtIcon s={s} />,
  "risk management":  s => <RiskMgmtIcon s={s} />,
};

// ─── Public export ────────────────────────────────────────────────────────────
export default function TechIcon({ name, size = 28 }: Readonly<TechIconProps>) {
  const key = name.toLowerCase().trim();
  // Try exact match, then prefix match
  const renderer =
    ICON_MAP[key] ??
    Object.entries(ICON_MAP).find(([k]) => key.startsWith(k) || k.startsWith(key))?.[1];

  if (renderer) {
    return (
      <span style={{ display: "inline-flex", alignItems: "center", justifyContent: "center" }}>
        {renderer(size)}
      </span>
    );
  }

  return <InitialsBadge name={name} size={size} />;
}
