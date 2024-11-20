import "./App.css";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Works from "./components/works/Works";

function App() {
  return (
    <>
      <Header />
      <main>
        <section id="hero">
          <Hero />
        </section>
        <section id="works">
          <Works />
        </section>
      </main>
    </>
  );
}

export default App;
