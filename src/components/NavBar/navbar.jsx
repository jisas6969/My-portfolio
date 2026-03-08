import { useState, useEffect } from "react";
import "./navbar.css";
import Logo from "../../assets/logo.png";
import { Link } from "react-scroll";
import sunImg from "../../assets/sun.png";
import moonImg from "../../assets/moon.png";

const Navbar = () => {
  const [theme, setTheme] = useState("dark");
  const [scrolled, setScrolled] = useState(false);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  /* THEME */
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  /* SCROLL DETECTION */
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <img src={Logo} alt="logo" className="logo" />

      <div className="desktopMenu">
        <Link
          className="desktopMenuListItem"
          activeClass="active"
          to="intro"
          spy={true}
          smooth={true}
          duration={500}
          offset={-112}
        >
          Home
        </Link>

        <Link
          className="desktopMenuListItem"
          activeClass="active"
          to="aboutHero"
          spy={true}
          smooth={true}
          duration={500}
        >
          About
        </Link>

        <Link
          className="desktopMenuListItem"
          activeClass="active"
          to="skillsContainer"
          spy={true}
          smooth={true}
          duration={500}
        >
          Skills
        </Link>

        <Link
          className="desktopMenuListItem"
          activeClass="active"
          to="projectsWrapper"
          spy={true}
          smooth={true}
          duration={500}
        >
          Portfolio
        </Link>

        <Link
          className="desktopMenuListItem"
          activeClass="active"
          to="contactWrapper"
          spy={true}
          smooth={true}
          duration={500}
        >
          Contact
        </Link>
      </div>

      <button className="desktopMenuBtn" onClick={toggleTheme}>
        <img
          src={theme === "dark" ? sunImg : moonImg}
          alt="theme toggle"
          className="desktopMenuImg"
        />
      </button>
    </nav>
  );
};

export default Navbar;