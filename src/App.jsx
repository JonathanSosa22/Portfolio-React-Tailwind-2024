import "./App.css";
import NavBar from "./components/NavBar";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";

function App() {
  return (
    <>
      <NavBar />
      <Home />
      <About />
      <Portfolio />
      <Contact />
    </>
  );
}

export default App;
