import "./App.css";
import NavBar from "./components/NavBar";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import Skills from "./components/Skills";

function App() {
  return (
    <>
      <NavBar />
      <Home />
      <About />
      <Skills />
      <Portfolio />
      <Contact />
    </>
  );
}

export default App;
