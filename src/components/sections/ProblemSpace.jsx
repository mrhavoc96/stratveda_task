import { useState } from "react";

/* -------------------------------------------------------------------------- */
/*                                   DATA                                     */
/* -------------------------------------------------------------------------- */

const PROBLEMS = [
  {
    title: "Unified Data",
    summary: "A single, reliable view of data across the organization.",
    description:
      "Bringing data together across systems and teams creates a shared source of truth for decision-making. When information is unified, decisions are grounded in consistent context rather than fragmented inputs, enabling clarity across functions and workflows.",

  },
  {
    title: "Actionable Insights",
    summary: "Insights designed to inform action, not just analysis.",
    description:
      "Transforming raw data into contextual insights helps decision-makers focus on what matters most. Clear prioritization and relevance turn analysis into direction, allowing teams to act with confidence instead of interpreting signals in isolation.",
    image: "/actionable-insights.png",
  },
  {
    title: "Decision Automation",
    summary: "Shared context for decisions across teams and roles.",
    description:
      "Providing a common decision framework allows teams to align around the same information and objectives. When context is shared, collaboration improves, accountability increases, and execution becomes more coordinated across the organization.",
    
  },
  {
    title: "Collaborative Decisions",
    summary: "Decisions lack shared context",
    description:
      "Teams make decisions in isolation, leading to misalignment, duplicated effort, and outcomes that don’t reflect collective intelligence.",
    image: "/collaborative-decisions.png",
  },
];

/* -------------------------------------------------------------------------- */
/*                               COMPONENT                                    */
/* -------------------------------------------------------------------------- */

function ProblemSpace() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    /* ============================== SECTION WRAPPER ============================== */
    <section
      id="problem-space"
      className="relative py-40 bg-black/45 min-h-[30%]"
    >
      {/* ============================== BACKGROUND VIDEO ============================== */}

			<div className="bg-black/20">
      	<video
        	autoPlay
        	loop
        	muted
        	className="absolute inset-0 w-full h-full object-cover  opacity-30"
      	>
        <source src="../public/neural_bgv_right.mp4" type="video/mp4" />
      </video>
			</div>

      {/* ============================== SECTION HEADING ============================== */}
      

      {/* ============================== CONTENT LAYER ============================== */}
      <div className="relative z-20">
        <div className="relative max-w-7xl mx-auto px-6">
          
          {/* ============================== DESKTOP LAYOUT ============================== */}
          <div
            className="
              hidden lg:block
              relative
              bg-[#d4d6d6]/90
              rounded-2xl
              shadow-black
              shadow-2xl
							p-8
              pt-12
            "
          >
						{/* ===== Section Title & Text (Desktop) ===== */}
						<div className="mb-15">
							<h2 className="text-6xl font-bold font-display text-[#05192b] mb-8">
								Data ≠ Decisions
							</h2>

							<div className="space-y-5 pl-2 pr-12">
								<div className="flex items-start gap-3">
									<span className="mt-2 h-2 w-2 rounded-full bg-[#0b2a2a] shrink-0"></span>
									<p className="text-lg leading-tight">
										Organizations generate vast amounts of data across dashboards, tools, and reports, yet confident decision-making remains difficult. Information is plentiful, but clarity is often missing as complexity increases.
									</p>
								</div>

								<div className="flex items-start gap-3">
									<span className="mt-2 h-2 w-2 rounded-full bg-[#0b2a2a] shrink-0"></span>
									<p className="text-lg leading-tight">
										As businesses scale, decisions slow down and become fragmented across teams. Analysis grows, alignment weakens, and critical choices are increasingly made with partial context rather than shared understanding.
									</p>
								</div>

								<div className="flex items-start gap-3">
									<span className="mt-2 h-2 w-2 rounded-full bg-[#0b2a2a] shrink-0"></span>
									<p className="text-lg leading-tight">
										When decisions lack clarity and consistency, the cost becomes visible across the organization. Opportunities are missed, execution weakens, and risk accumulates where insight should guide action.
									</p>
								</div>
  						</div>
						</div>

            {/* ============================== INTERACTIVE CARD ROW ============================== */}
            <div className="hidden lg:flex lg:flex-col gap-1 h-50">
							
							<div className="hidden lg:flex gap-1 h-50">
								
								{PROBLEMS.map((item, index) => {
									const isActive = index === activeIndex;

									return (
										/* ============================== CARD ============================== */
										<div
											key={item.title}
											onMouseEnter={() => setActiveIndex(index)}
											className={`
												relative
												flex
												flex-col
												p-6
												rounded-xl
												cursor-pointer
												transition-all duration-300 ease-in-out
												${isActive ? "flex-4 bg-[#75fd27]" : "flex-[1]"}
												bg-[#532332]
												text-white
											`}
										>
											{/* ---------- Card Image (Visible When Expanded) ---------- */}
											

											{/* ---------- Card Title ---------- */}
											<h3 className="text-xl font-semibold mb-4">
												{item.title}
											</h3>

											{/* ---------- Card Text Container ---------- */}
											<div className="relative flex-1">
												
												{/* Summary (Collapsed State) */}
												<p
													className={`
														absolute inset-0
														text-sm text-gray-300
														transition-opacity duration-100 delay-300
														${
															isActive
																? "opacity-0 invisible pointer-events-none"
																: "opacity-100 visible"
														}
													`}
												>
													{item.summary}
												</p>

												{/* Description (Expanded State) */}
												<p
													className={`
														absolute inset-0
														text-sm text-gray-200
														transition-opacity
														${
															isActive
																? "opacity-100 duration-700 delay-200"
																: "opacity-0 pointer-events-none"
														}
													`}
												>
													{item.description}
												</p>
											</div>
										</div>
									);
								})}
							</div>
            </div>
          </div>

          {/* ============================== MOBILE LAYOUT ============================== */}
					<div className="lg:hidden">
						<div className="bg-[#969696]/90 rounded-2xl shadow-black shadow-2xl p-6">

								{/* ===== Section Title & Text (Mobile) ===== */}
								<h2 className="text-3xl font-bold font-display text-[#05192b] ">
									Data ≠ Decisions
								</h2>

								<p className="text-base mb-2">
									Decision intelligence for deriving better, more confident decisions before,
									during, and after execution.
								</p>

								<p className="text-sm mb-6">
									Leverage AI-powered insights to optimize operations, reduce risks, and
									accelerate decision-making across your business.
								</p>

								{/* ===== Mobile Cards ===== */}
								<div className="flex flex-col gap-6">
									{PROBLEMS.map((item) => (
										<div
											key={item.title}
											className="p-6 rounded-xl bg-[#0b2a2a] text-white"
										>
											<h3 className="text-xl font-semibold mb-2">
												{item.title}
											</h3>
											<p className="text-sm text-gray-300">
												{item.description}
											</p>
										</div>
									))}
								</div>

						</div>
					</div>


        </div>
      </div>
    </section>
  );
}

export default ProblemSpace;
