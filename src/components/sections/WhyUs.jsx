import { useEffect, useRef, useState } from "react";
import ConstraintField from "./gimmicks/ConstraintField";

/* -------------------------------------------------------------------------- */
/*                            REUSABLE FOCUS OVERLAY                           */
/* -------------------------------------------------------------------------- */

function FocusOverlay({ active }) {
  return (
    <div
      className={`
        absolute inset-0
        bg-black/40
        transition-opacity duration-500 ease-out
        pointer-events-none
        ${active ? "opacity-100" : "opacity-0"}
      `}
    />
  );
}

const featureCards = [
  {
    title: "Decision-Centric Design",
    description: "We start from the decision, not the dashboard.",
    icon: "◎",
  },
  {
    title: "Context Awareness",
    description: "Models adapt to real-world constraints.",
    icon: "◉",
  },
  {
    title: "Execution Alignment",
    description: "Insights flow directly into action.",
    icon: "⬡",
  },
  {
    title: "Outcome Ownership",
    description: "Decisions are measured by impact, not output.",
    icon: "◈",
  },
];


/* -------------------------------------------------------------------------- */
/*                                  COMPONENT                                 */
/* -------------------------------------------------------------------------- */

function WhyUs() {
  const whyRef = useRef(null);
  const tailoredRef = useRef(null);

  const tailoredPathRef = useRef(null);
  const genericPathRef = useRef(null);

  const [whyFocused, setWhyFocused] = useState(false);
  const [tailoredFocused, setTailoredFocused] = useState(false);

  const philosophyRef = useRef(null);
  const [philosophyFocused, setPhilosophyFocused] = useState(false);


  /* ------------------------ DATA ------------------------ */

  const dataPoints = [
    { x: 50, y: 180 },
    { x: 100, y: 120 },
    { x: 150, y: 200 },
    { x: 200, y: 80 },
    { x: 250, y: 160 },
    { x: 300, y: 100 },
    { x: 350, y: 220 },
    { x: 400, y: 140 },
    { x: 450, y: 60 },
    { x: 500, y: 180 },
    { x: 550, y: 110 },
  ];

  const tailoredPath =
    "M 50 180 C 70 150, 80 120, 100 120 S 130 200, 150 200 S 180 80, 200 80 S 230 160, 250 160 S 280 100, 300 100 S 330 220, 350 220 S 380 140, 400 140 S 430 60, 450 60 S 530 180, 550 110";

  const genericPath = "M 50 160 L 550 140";

  /* ------------------------ FOCUS OBSERVERS ------------------------ */

  const useFocusObserver = (ref, setter) => {
    useEffect(() => {
      if (!ref.current) return;
      const observer = new IntersectionObserver(
        ([entry]) => setter(entry.isIntersecting),
        { threshold: 0.5 }
      );
      observer.observe(ref.current);
      return () => observer.disconnect();
    }, []);
  };

  useFocusObserver(whyRef, setWhyFocused);
  useFocusObserver(tailoredRef, setTailoredFocused);
  useFocusObserver(philosophyRef, setPhilosophyFocused);


  /* ------------------------ GRAPH ANIMATION ------------------------ */

  useEffect(() => {
    const animate = (ref) => {
      if (!ref.current) return;
      const length = ref.current.getTotalLength();
      ref.current.style.strokeDasharray = length;
      ref.current.style.strokeDashoffset = length;
      ref.current.animate(
        [{ strokeDashoffset: length }, { strokeDashoffset: 0 }],
        { duration: 2000, easing: "ease-out", fill: "forwards" }
      );
    };

    if (tailoredFocused) {
      animate(tailoredPathRef);
      animate(genericPathRef);
    }
  }, [tailoredFocused]);

  return (
    <section id="why-us" className="relative py-24 overflow-hidden">
      {/* ============================== BACKGROUND ============================== */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: "url('/whyus_one.jpg')" }}
      />
      <div className="absolute inset-0 bg-black/60 z-10" />

      {/* ============================== CONTENT ============================== */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 space-y-24">

        {/* ============================== WHY STRATVEDA ============================== */}
        <div ref={whyRef} className="relative overflow-hidden rounded-3xl">
          <FocusOverlay active={whyFocused} />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center p-12">
            <div>
              <h2 className="font-display text-6xl lg:text-8xl text-white/85 mb-6">
                Why Stratveda?
              </h2>
              <p className="text-lg lg:text-xl text-white/60 leading-relaxed max-w-xl">
                Most organizations are surrounded by data, dashboards, and generic
                AI tools, yet still struggle to make confident decisions.
                <br /><br />
                Stratveda closes this gap by focusing on context, intent, and
                outcomes — not analytics alone.
              </p>
            </div>

            <ConstraintField />
          </div>
        </div>

        {/* ================== TAILORED INTELLIGENCE + GRAPHS ================== */}
        <div ref={tailoredRef} className="relative overflow-hidden rounded-3xl">
          <FocusOverlay active={tailoredFocused} />

          <div className="relative z-10 space-y-20 p-12">

            {/* ----- Text ----- */}
            <div className="max-w-4xl">
              <h3 className="font-mono text-4xl lg:text-5xl font-semibold text-white mb-4 sm:mb-2">
                Tailored Intelligence
              </h3>
              <p className="text-lg text-white/65 leading-relaxed font-mono">
                Intelligence must adapt to real business constraints. Stratveda
                shapes decision systems around your reality instead of forcing
                generic models.
              </p>
            </div>

            {/* ----- Graphs ----- */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">

              {/* Adaptive */}
              <div className="relative bg-white/5 border border-white/10 rounded-2xl p-6">
                <h4 className="text-lg font-semibold text-emerald-400 mb-4">
                  Adaptive Intelligence
                </h4>

                <svg viewBox="0 0 600 280" className="w-full h-auto">
                  <defs>
                    <pattern id="gridA" width="50" height="50" patternUnits="userSpaceOnUse">
                      <path d="M 50 0 L 0 0 0 50" fill="none" stroke="rgba(255,255,255,0.08)" />
                    </pattern>
                    <filter id="glow">
                      <feGaussianBlur stdDeviation="3" />
                    </filter>
                  </defs>

                  <rect width="600" height="280" fill="url(#gridA)" />

                  {dataPoints.map((p, i) => (
                    <g key={i}>
                      <circle cx={p.x} cy={p.y} r="8" fill="#10b981" opacity="0.25" />
                      <circle cx={p.x} cy={p.y} r="5" fill="#10b981" filter="url(#glow)" />
                    </g>
                  ))}

                  <path
                    ref={tailoredPathRef}
                    d={tailoredPath}
                    fill="none"
                    stroke="#10b981"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                </svg>

                <div className="absolute bottom-4 right-4 text-right">
                  <div className="text-3xl font-bold text-emerald-400">100%</div>
                  <div className="text-sm text-white/50">Constraints Covered</div>
                </div>
              </div>

              {/* Generic */}
              <div className="relative bg-white/5 border border-white/10 rounded-2xl p-6">
                <h4 className="text-lg font-semibold text-red-400 mb-4">
                  Generic AI Solutions
                </h4>

                <svg viewBox="0 0 600 280" className="w-full h-auto">
                  <defs>
                    <pattern id="gridB" width="50" height="50" patternUnits="userSpaceOnUse">
                      <path d="M 50 0 L 0 0 0 50" fill="none" stroke="rgba(255,255,255,0.08)" />
                    </pattern>
                  </defs>

                  <rect width="600" height="280" fill="url(#gridB)" />

                  {dataPoints.map((p, i) => {
                    const lineY = 160 - (p.x - 50) * (20 / 500);
                    const hit = Math.abs(p.y - lineY) < 25;

                    return (
                      <g key={i}>
                        <circle cx={p.x} cy={p.y} r="8" fill={hit ? "#10b981" : "#ef4444"} opacity="0.25" />
                        <circle cx={p.x} cy={p.y} r="5" fill={hit ? "#10b981" : "#ef4444"} />
                        {!hit && (
                          <g stroke="#ef4444" strokeWidth="1.5">
                            <line x1={p.x - 10} y1={p.y - 10} x2={p.x + 10} y2={p.y + 10} />
                            <line x1={p.x + 10} y1={p.y - 10} x2={p.x - 10} y2={p.y + 10} />
                          </g>
                        )}
                      </g>
                    );
                  })}

                  <path
                    ref={genericPathRef}
                    d={genericPath}
                    fill="none"
                    stroke="#ef4444"
                    strokeWidth="3"
                    strokeDasharray="10 5"
                  />
                </svg>

                <div className="absolute bottom-4 right-4 text-right">
                  <div className="text-3xl font-bold text-red-400">~18%</div>
                  <div className="text-sm text-white/50">Constraints Covered</div>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* ================== DECISION FIRST PHILOSOPHY ================== */}
          <div
          ref={philosophyRef}
          className="relative overflow-hidden rounded-3xl"
        >
          <FocusOverlay active={philosophyFocused} />

          <div className="relative z-10 space-y-16 p-12">

            {/* ----- Section Heading ----- */}
            <div className="max-w-4xl">
              <h3 className="font-mono text-4xl lg:text-5xl font-semibold text-white mb-2 lg:mb-4">
                Decision First Philosophy
              </h3>
              <p className="text-lg text-white/65 leading-relaxed font-mono">
                Strategy and execution must move together. We prioritize decisions over
                dashboards, focusing on outcomes that matter rather than metrics that look good.
              </p>
            </div>

            {/* ----- Feature Cards ----- */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

              {featureCards.map((card, index) => (
                <div
                  key={index}
                  className="
                    group
                    relative
                    rounded-2xl
                    bg-white/5
                    border border-white/10
                    p-6
                    transition-all duration-600
                    hover:border-white/30
                    hover:bg-white/10
                    hover:shadow-amber-100 shadow-2xs
                  "
                >
                  <div className="flex justify-center mb-6 text-white/60 text-6xl group-hover:text-emerald-100 transition-all duration-700">
                    {card.icon}
                  </div>

                  <h4 className="text-xl font-semibold text-white mb-3 text-center group-hover:text-emerald-400">
                    {card.title}
                  </h4>

                  <p className="text-lg text-white/55 text-center leading-relaxed group-hover:text-white/70">
                    {card.description}
                  </p>
                </div>
              ))}

            </div>
          </div>
        </div>


      </div>
    </section>
  );
}

export default WhyUs;
