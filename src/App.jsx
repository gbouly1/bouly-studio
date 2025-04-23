import "./App.css";
import About from "./components/about/About";
import Contact from "./components/contact/Contact"; // Ajout de l'import
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Loader from "./components/loader/Loader";
import ParticlesComponent from "./components/particles/Particles";
import Works from "./components/works/Works";

function App() {
  return (
    <div className="App">
      <Loader />
      <ParticlesComponent id="particles" />
      <Header />
      <main>
        <section id="hero">
          <Hero />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="works">
          <Works />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
