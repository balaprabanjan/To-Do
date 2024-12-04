import About from "../components/About";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Guide from "../components/Guide";
import Gallery from "../components/Gallery";
import Testimonials from "../components/Testimonials";
import Contact from "../components/Contact";

const Home = () => {
  return (
    <main>
      <Navbar />
      <section>
        <Hero />
        <About />
        <Guide />
        <Gallery />
        <Testimonials />
        <Contact />
      </section>
    </main>
  );
};

export default Home;
