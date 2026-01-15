import WhatWeDo from "../components/sections/WhatWeDo";
import Product from "../components/sections/Products";
import WhyUs from "../components/sections/WhyUs";
import Resources from "../components/sections/Resources";
import About from "../components/sections/About";
import ProblemSpace from "../components/sections/ProblemSpace";

function Home() {
  return (
    <main>
      <section id="what-we-do">
        <WhatWeDo />
      </section>

      <section id="problem-spaces">
        <ProblemSpace />
      </section>

      <section id="products">
        <Product />
      </section>

      <section id="why-us">
        <WhyUs />
      </section>

      <section id="resources">
        <Resources />
      </section>

      <section id="about">
        <About />
      </section>
    </main>
  );
}

export default Home;
