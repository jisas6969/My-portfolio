import { useState, useEffect } from "react";
import Navbar from "./components/NavBar/navbar";
import Intro from "./components/Intro/intro";
import About from "./components/about/about";
import Skills from "./components/Skills/Skills";
import Footer from "./components/Footer/Footer";
import LoadingScreen from "./components/LoadingScreen/LoadingScreen";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3500);
  }, []);

  return (
    <div className="App">
      {/* HOMEPAGE ALWAYS RENDERED */}
      <Navbar />
      <Intro />
      <About />
      <Skills />
      <Footer />

      {/* OVERLAY LOADING SCREEN */}
      {loading && <LoadingScreen />}
    </div>
  );
}

export default App;