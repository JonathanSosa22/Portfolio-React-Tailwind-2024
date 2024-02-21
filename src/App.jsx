import "./App.css";
import NavBar from "./components/NavBar";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <NavBar />
      <Home />
      <About />
      <Portfolio />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
