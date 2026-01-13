import { useEffect, useRef, useState } from "react";

const PRODUCT_NAME = "DecisionOS";

const FEATURE_POINTS = [
  "Analyzes decision patterns across teams",
  "Identifies bottlenecks before execution",
  "Provides AI-backed confidence scoring",
  "Improves post-decision outcome analysis",
];

function Products() {
  const sectionRef = useRef(null);
  const [canStartTyping, setCanStartTyping] = useState(false);
  const [showHeadingLine1, setShowHeadingLine1] = useState(false);
  const [showHeadingLine2, setShowHeadingLine2] = useState(false);

  const [typedText, setTypedText] = useState("");
  const [pointIndex, setPointIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  /* Headline fade-in observer */
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShowHeadingLine1(true);
          setTimeout(() => setShowHeadingLine2(true), 700);
        } else {
          setShowHeadingLine1(false);
          setShowHeadingLine2(false);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    // return () => observer.disconnect();
  }, []);

  /* Autotype feature points */
  useEffect(() => {
    if (pointIndex >= FEATURE_POINTS.length) return;

    const currentPoint = FEATURE_POINTS[pointIndex];

    const timeout = setTimeout(() => {
      if (charIndex < currentPoint.length) {
        setTypedText((prev) => prev + currentPoint[charIndex]);
        setCharIndex(charIndex + 1);
      } else {
        setTimeout(() => {
          setTypedText("");
          setCharIndex(0);
          setPointIndex((prev) => (prev + 1) % FEATURE_POINTS.length);
        }, 1600);
      }
    }, 90);

    return () => clearTimeout(timeout);
  }, [charIndex, pointIndex]);

  return (
    <section
      ref={sectionRef}
      id="products"
      className="relative min-h-screen pt-28 lg:pt-12 pb-24 text-white"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1764138370667-d15f89ee1c45?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDl8fHxlbnwwfHx8fHw%3D')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Heading */}
        <div className="mb-24 text-center">
          <h2 className="font-display text-5xl sm:text-6xl md:text-7xl">
            <span
              className={`block transition-opacity duration-700 ${
                showHeadingLine1 ? "opacity-100" : "opacity-0"
              }`}
            >
              Two Products.
            </span>
            <span
              className={`block transition-opacity duration-2200 ${
                showHeadingLine2 ? "opacity-100" : "opacity-0"
              }`}
            >
              One Decision Lifecycle.
            </span>
          </h2>
        </div>

        {/* Product Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* LEFT: Product content */}
          <div>
            <h3 className="font-display text-6xl mb-6">
              {PRODUCT_NAME}
            </h3>

            <p className="text-lg text-gray-300 mb-10">
              Lorem ipsum dolor sit amet consectetur adipisicing elit sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>

            {/* Autotype feature area */}
            <div className="min-h-12 mb-10">
              <span className="lg:text-3xl text-sm text-green-300 font-medium">
                {typedText}
                <span className="animate-pulse">|</span>
              </span>
            </div>

            <button
              className="
                px-6 py-3
                text-sm font-semibold
                text-black bg-green-400
                rounded-full
                whitespace-nowrap
                shadow-[0_0_16px_rgba(45,212,191,0.55)]
                hover:shadow-[0_0_24px_rgba(45,212,191,0.75)]
                transition
              "
            >
              Explore {PRODUCT_NAME}
            </button>
          </div>

          {/* RIGHT: Product image */}
          <div className="w-full h-80 sm:h-105 bg-black/40 rounded-xl flex items-center justify-center">
            <span className="text-gray-400 text-sm">
              Product dashboard image
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Products;
