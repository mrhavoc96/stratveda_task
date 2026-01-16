function WhyUs() {
  return (
    <section
      id="why-us"
      className="
        relative
        min-h-screen
        py-40
        overflow-hidden
      "
    >
      {/* ================= BACKGROUND IMAGE ================= */}
      <div
        className="
          absolute inset-0
          bg-cover bg-center
          z-0
        "
        style={{
          backgroundImage: "url('/whyus_one.jpg')",
        }}
      ></div>

      {/* ================= DARK OVERLAY ================= */}
      <div className="absolute inset-0 bg-black/60 z-10"></div>

      {/* ================= CONTENT LAYER ================= */}
      <div className="relative z-20 max-w-7xl mx-auto px-6">
        <img
          className="h-50" 
        src="../public/tailored_curve1.svg" alt="" />
        <img
          className="h-50" 
        src="../public/general_curve1.svg" alt="" /> 
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-6">
        
      </div>
    </section>
  );
}

export default WhyUs;
