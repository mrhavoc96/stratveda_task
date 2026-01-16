import { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const SECTIONS = [
  { id: "what-we-do", label: "Home" },
  { id: "why-us", label: "Why Us" },
  { id: "products", label: "Products" },
  { id: "resources", label: "Resources" },
  { id: "about", label: "About" },
];

function Navbar() {
  const [hideOnDesktop, setHideOnDesktop] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  const [showNavbar, setShowNavbar] = useState(true);
  const lastScrollY = useRef(0);
  const heroInView = useRef(true);

  // Allow navbar to be always visible in hero section
  useEffect(() => {
    if (location.pathname !== "/") return;

    const hero = document.getElementById("what-we-do"); // Hero section id
    if (!hero) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        heroInView.current = entry.isIntersecting;

        if (entry.isIntersecting) {
          setShowNavbar(true); // ALWAYS show in Hero
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(hero);
    return () => observer.disconnect();
  }, [location.pathname]);

  // Hide navbar on scroll down and visible on scroll up
  useEffect(() => {
    if (location.pathname !== "/") return;

    const handleScroll = () => {
      const currentY = window.scrollY;
      const delta = currentY - lastScrollY.current;

      // If hero is visible → always show
      if (heroInView.current) {
        setShowNavbar(true);
        lastScrollY.current = currentY;
        return;
      }

      // Scrolling down → hide
      if (delta > 10) {
        setShowNavbar(false);
      }

      // Scrolling up enough → show
      if (delta < -40) {
        setShowNavbar(true);
      }

      lastScrollY.current = currentY;
    };

  window.addEventListener("scroll", handleScroll, { passive: true });
  return () => window.removeEventListener("scroll", handleScroll);
}, [location.pathname]);


  useEffect(() => {
    if (location.pathname !== "/") return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );

    SECTIONS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [location.pathname]);

  const handleNavClick = (id) => {
    setMenuOpen(false);

    if (location.pathname !== "/") {
      navigate(`/#${id}`);
      return;
    }

    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const handleCTA = () => {
    setMenuOpen(false);
    handleNavClick("contact");
  };

  return (
    <>
      {/* Navbar */}
        <nav className={`
      fixed top-0 h-23 py-4 left-0 w-full z-50
      bg-[#000000]/40 backdrop-blur-md
      transition-transform duration-500
      ${showNavbar ? "translate-y-0" : "-translate-y-full"}
    `}>

        <div className="max-w-7xl mx-auto  h-16 flex items-center justify-between">
            <div
                className="flex items-center gap-2 cursor-pointer"
                onClick={() => navigate("/")}
                >
                <img
                    src="/logo.png"
                    alt="Company logo"
                    className="h-20 py-1 w-auto"
                />
                <span className="font-bold text-3xl text-[#1ce3eb]">
                    StratVeda
                </span>
            </div>


          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-6 whitespace-nowrap">

            {SECTIONS.map(({ id, label }) => (
              <button
                key={id}
                onClick={() => handleNavClick(id)}
                className={` transition-colors ${
                  activeSection === id
                    ? "text-green-400 font-bold"

                    : "text-gray-200 hover:text-[#73152f]"

                }`}
              >
                {label}
              </button>
            ))}

            {/* Desktop CTA */}
            <button
              onClick={handleCTA}
              className="
                ml-4 px-3 py-2 text-lg font-semibold
                text-black bg-green-400
                rounded-full
                whitespace-nowrap
                shadow-[0_0_12px_rgba(45,212,191,0.45)]
                hover:shadow-[0_0_20px_rgba(45,212,191,0.65)]
                transition-shadow
              "

//               className="  
//                 ml-4 px-3 py-2 text-lg font-bold rounded-2xl
//                 text-black bg-[#1ce3eb]
//                 shadow-[0_0_12px_rgba(45,212,191,0.45)]
//                 hover:shadow-[0_0_20px_rgba(45,212,191,0.65)]
//                 transition-shadow
// "
            >
              Talk to Strategy
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white z-50 text-3xl"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            ☰
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div
            className="
              lg:hidden
              fixed top-20 left-0
              w-full
              z-40
              bg-[#0b2a2a]/95
              backdrop-blur-md
            "
          >
            {SECTIONS.map(({ id, label }) => (
              <button
                key={id}
                onClick={() => handleNavClick(id)}
                className="
                  block w-full
                  px-6 py-4
                  text-left text-sm
                  text-white
                  hover:bg-white/10
                "
              >
                {label}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* Mobile Fixed CTA */}
      <div className="md:hidden fixed bottom-4 right-4 z-40">
        <button
            onClick={handleCTA}
            className="
            ml-4 px-4 py-2 text-lg font-bold rounded-2xl
                text-black bg-green-400
                shadow-[0_0_12px_rgba(45,212,191,0.45)]
                hover:shadow-[0_0_20px_rgba(45,212,191,0.65)]
                transition-shadow
"
        >
            Talk to Strategy
        </button>
        </div>

    </>
  );
}

export default Navbar;
