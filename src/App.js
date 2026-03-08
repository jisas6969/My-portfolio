import { useState, useEffect } from "react";
import Navbar from "./components/NavBar/navbar";
import Intro from "./components/Intro/intro";
import About from "./components/about/about";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import LoadingScreen from "./components/LoadingScreen/LoadingScreen";
import { Toaster } from "react-hot-toast";

function App() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3500);
  }, []);

  useEffect(() => {

    const STAR_COUNT = 120;
    const container = document.body;

    let mouseX = 0;
    let mouseY = 0;

    const stars = [];

    for (let i = 0; i < STAR_COUNT; i++) {

      const star = document.createElement("div");
      star.className = "bg-star";

      const x = Math.random() * window.innerWidth;
      const y = Math.random() * window.innerHeight;

      star.style.left = x + "px";
      star.style.top = y + "px";

      container.appendChild(star);

      stars.push({
        el: star,
        baseX: x,
        baseY: y,
        x: x,
        y: y
      });
    }

    window.addEventListener("mousemove", (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    });

    function animate() {

      stars.forEach(star => {

        const dx = mouseX - star.baseX;
        const dy = mouseY - star.baseY;

        const dist = Math.sqrt(dx * dx + dy * dy);

        let targetX = star.baseX;
        let targetY = star.baseY;

        if (dist < 150) {
          targetX = star.baseX + dx * 0.15;
          targetY = star.baseY + dy * 0.15;
        }

        star.x += (targetX - star.x) * 0.05;
        star.y += (targetY - star.y) * 0.05;

        star.el.style.transform =
          `translate(${star.x - star.baseX}px, ${star.y - star.baseY}px)`;

      });

      requestAnimationFrame(animate);
    }

    animate();

  }, []);

  return (
    
    <div className="App">

      {/* Toast Notification Container */}
      <Toaster position="top-right" />

      <div id="stars"></div>
      <div id="stars2"></div>
      <div id="stars3"></div>

      {/* HOMEPAGE */}
      <Navbar />
      <Intro />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />

      {/* LOADING SCREEN */}
      {loading && <LoadingScreen />}

    </div>
  );
}

export default App;