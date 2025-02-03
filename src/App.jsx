import "./App.css";
import About from "./components/about/About";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import ParticlesBackground from "./components/particles/ParticlesBackground"; // Import du composant Particles
import Works from "./components/works/Works";

function App() {
  return (
    <>
      <Header />
      <main>
        <ParticlesBackground /> {/* Ajout du fond interactif */}
        <section id="hero">
          <Hero />
        </section>
        <section id="works">
          <Works />
        </section>
        <section id="about">
          <About />
        </section>
      </main>
    </>
  );
}

export default App;
