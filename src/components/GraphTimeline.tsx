import { useRef } from "react";
import { useInView } from "motion/react";
import TimelineNode, { type TimelineNodeData } from "./TimelineNode";

interface GraphTimelineProps {
  items: TimelineNodeData[];
}

export default function GraphTimeline({ items }: Readonly<GraphTimelineProps>) {
  const topRef = useRef<HTMLDivElement>(null);
  const topInView = useInView(topRef, { once: true, margin: "-40px" });

  return (
    <div className="relative w-full py-4">
      {/* Vertical spine (desktop) — visible behind nodes */}
      <div
        ref={topRef}
        className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px"
        style={{
          background: topInView
            ? "linear-gradient(to bottom, transparent, rgba(6,182,212,0.20) 8%, rgba(129,140,248,0.15) 50%, rgba(6,182,212,0.12) 92%, transparent)"
            : "transparent",
          transition: "background 0.8s ease",
        }}
      />

      {/* Nodes */}
      <div className="space-y-10 md:space-y-16">
        {items.map((item, index) => (
          <div key={item.title + item.period}>
            <TimelineNode
              data={item}
              index={index}
              isLast={index === items.length - 1}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
