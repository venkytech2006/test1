import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Partners from "./components/Partners";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <Partners />
        <Testimonials />
        <FAQ />
        <Blog />
        <Contact />
      </main>

      <Footer />
    </>
  );
}

export default App;