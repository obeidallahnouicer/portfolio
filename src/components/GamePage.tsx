import PhaserGame from "./PhaserGame";

interface GamePageProps {
  onClose?: () => void;
}

export default function GamePage({ onClose }: Readonly<GamePageProps>) {
  return (
    <div
      className="fixed inset-0 z-50 flex flex-col"
      style={{ background: "#020b18" }}
    >
      {/* Top bar */}
      <div
        className="flex items-center justify-between px-5 h-12 flex-shrink-0"
        style={{
          borderBottom: "1px solid rgba(251,191,36,0.2)",
          background: "rgba(2,11,24,0.95)",
          backdropFilter: "blur(12px)",
        }}
      >
        <div className="flex items-center gap-3">
          <span
            className="w-6 h-6 rounded flex items-center justify-center text-xs font-bold"
            style={{
              background: "linear-gradient(135deg, #fbbf24, #f59e0b)",
              color: "#020b18",
              fontFamily: "monospace",
            }}
          >
            ▶
          </span>
          <span
            className="text-sm font-semibold tracking-wide"
            style={{ color: "#fbbf24", fontFamily: "monospace", letterSpacing: "0.08em" }}
          >
            PIXEL ADVENTURE — Obeid's Life
          </span>
        </div>

        {onClose && (
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg text-xs font-medium transition-all duration-200"
            style={{
              color: "#94a3b8",
              border: "1px solid rgba(148,163,184,0.2)",
              background: "transparent",
              fontFamily: "monospace",
              letterSpacing: "0.04em",
              cursor: "pointer",
            }}
            onMouseEnter={e => {
              e.currentTarget.style.color = "#22d3ee";
              e.currentTarget.style.borderColor = "rgba(6,182,212,0.4)";
              e.currentTarget.style.background = "rgba(6,182,212,0.07)";
            }}
            onMouseLeave={e => {
              e.currentTarget.style.color = "#94a3b8";
              e.currentTarget.style.borderColor = "rgba(148,163,184,0.2)";
              e.currentTarget.style.background = "transparent";
            }}
          >
            ← Back to Portfolio
          </button>
        )}
      </div>

      {/* Game canvas — centred both axes */}
      <div
        className="flex-1 w-full overflow-hidden"
        style={{
          background: "#020b18",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <PhaserGame />
      </div>
    </div>
  );
}
