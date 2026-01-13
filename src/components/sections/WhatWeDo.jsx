import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const TYPING_TEXT = "How can AI benefit my business?";

function WhatWeDo() {
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);
  const navigate = useNavigate();

  // Typing effect (looping, calm)
  useEffect(() => {
    const timeout = setTimeout(() => {
      if (index < TYPING_TEXT.length) {
        setDisplayedText((prev) => prev + TYPING_TEXT[index]);
        setIndex(index + 1);
      } else {
        setTimeout(() => {
          setDisplayedText("");
          setIndex(0);
        }, 2000);
      }
    }, 130);

    return () => clearTimeout(timeout);
  }, [index]);

  return (
    <section
      id="what-we-do"
      className="
        relative
        min-h-screen
        pt-28 lg:pt-14
        pb-24
        text-white
        bg-[#040f29]
      "
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1762398509512-ad1104c4c2da?q=80&w=1760&auto=format&fit=crop')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      <div className="relative z-10 min-h-screen lg:flex lg:items-center ">
        <div className="w-full max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
            {/* LEFT + RIGHT columns */}
            {/* LEFT: Text (2/3) */}
          <div className="lg:col-span-2">
            <h1
              className="
                font-display
                text-5xl sm:text-6xl md:text-7xl xl:text-8xl
                font-semibold
                leading-[1.05]
              "
            >
              The Decision Intelligence
              <br />
              Company
            </h1>

            <p className="mt-10 max-w-2xl text-gray-300 text-lg sm:text-xl md:text-2xl">
              Helping businesses make confident decisions before and after
              execution using AI-powered intelligence.
            </p>
          </div>

          {/* RIGHT: Typing + CTAs (1/3) */}
          <div className="lg:col-span-1 flex flex-col gap-34 lg:justify-center lg:mt-20">
            
            {/* Typing text (height locked) */}
            <div className="min-h-[5.8rem] ">
              <span
                className="
                  block
                  font-display
                  text-3xl sm:text-4xl
                  text-green-300/90
                  leading-tight
                "
              >
                {displayedText}
                <span className="animate-pulse">|</span>
              </span>
            </div>

            {/* Buttons */}
            <div className="flex flex-col gap-4 w-full max-w-sm ">
              <button
                onClick={() => navigate("/#contact")}
                className="
                  w-full
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
                Talk to Strategy
              </button>

              <button
                className="
                  w-full
                  px-6 py-3
                  text-sm font-medium
                  text-white
                  border border-white/20
                  rounded-full
                  whitespace-nowrap
                  hover:bg-white/10
                  transition
                "
              >
                Explore Framework
              </button>
            </div>

          </div>
          </div>
        </div>
      </div>



      {/* Content
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          
          
        </div>
      </div> */}
    </section>
  );
}

export default WhatWeDo;
