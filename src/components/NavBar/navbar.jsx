import { useState, useEffect } from "react";
import "./navbar.css";
import Logo from "../../assets/logo.png";
import { Link } from "react-scroll";
import sunImg from "../../assets/sun.png";
import moonImg from "../../assets/moon.png";

const Navbar = () => {
  const [theme, setTheme] = useState("dark");
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
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
    <>
      <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
        <img src={Logo} alt="logo" className="logo" />

        {/* DESKTOP MENU */}
        <div className="desktopMenu">
          <Link className="desktopMenuListItem" activeClass="active" to="intro" spy smooth duration={500} offset={-112}>
            Home
          </Link>

          <Link className="desktopMenuListItem" activeClass="active" to="aboutHero" spy smooth duration={500}>
            About
          </Link>

          <Link className="desktopMenuListItem" activeClass="active" to="skillsContainer" spy smooth duration={500}>
            Skills
          </Link>

          <Link className="desktopMenuListItem" activeClass="active" to="projectsWrapper" spy smooth duration={500}>
            Portfolio
          </Link>

          <Link className="desktopMenuListItem" activeClass="active" to="contactWrapper" spy smooth duration={500}>
            Contact
          </Link>
        </div>

        {/* THEME BUTTON */}
        <button className="desktopMenuBtn" onClick={toggleTheme}>
          <img
            src={theme === "dark" ? sunImg : moonImg}
            alt="theme toggle"
            className="desktopMenuImg"
          />
        </button>

        {/* HAMBURGER */}
        <div className="hamburger" onClick={toggleMenu}>
          {menuOpen ? "✕" : "☰"}
        </div>
      </nav>

      {/* MOBILE MENU */}
      <div className={`mobileMenu ${menuOpen ? "active" : ""}`}>

        <Link onClick={closeMenu} to="intro" smooth duration={500}>
          Home
        </Link>

        <Link onClick={closeMenu} to="aboutHero" smooth duration={500}>
          About
        </Link>

        <Link onClick={closeMenu} to="skillsContainer" smooth duration={500}>
          Skills
        </Link>

        <Link onClick={closeMenu} to="projectsWrapper" smooth duration={500}>
          Portfolio
        </Link>

        <Link onClick={closeMenu} to="contactWrapper" smooth duration={500}>
          Contact
        </Link>

      </div>
    </>
  );
};

export default Navbar;