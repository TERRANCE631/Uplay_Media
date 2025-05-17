import { About } from "./Components/About";
import Features from "./Components/Features";
import { Hero } from "./Components/Hero";
import { NavBar } from "./Components/NavBar";
import FloatingImage from "./Components/FloatingImage";
import { Contact } from "./Components/Contact";
import { Footer } from "./Components/Footer";

function App() {
  return (
    <main className="reletive min-h-screen w-screen overflow-x-hidden">
      <NavBar />
      <Hero />
      <About />
      <Features />
      <FloatingImage />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;
