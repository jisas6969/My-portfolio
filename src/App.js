import Navbar from "./components/NavBar/navbar";
import Intro from './components/Intro/intro';
import About from "./components/about/about";
import Skills from "./components/Skills/Skills";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <About />
      <Skills />
      <Footer />
    </div>
  );
}

export default App;