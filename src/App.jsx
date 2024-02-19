import "./App.css";
import NavBar from "./components/NavBar";
import About from "./pages/About";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";

function App() {
  return (
    <>
      <NavBar />
      <Home />
      <About />
      <Portfolio />
    </>
  );
}

export default App;
