import "./footer.css";
import facebookIcon from "../../assets/facebook.png";
import instagramIcon from "../../assets/instagram.png";
import githubIcon from "../../assets/github.png";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footerNav">
  <Link to="intro" smooth duration={500} offset={-112}>
    Home
  </Link>

  <Link to="about" smooth duration={500}>
    About
  </Link>

  <Link to="portfolio" smooth duration={500} offset={-112}>
    Portfolio
  </Link>

  <Link to="contact" smooth duration={500} offset={-112}>
    Contact
  </Link>
</div>

      <div className="footerSocials">
        <a href="https://www.facebook.com/louise.soledad.7" target="_blank" rel="noreferrer">
          <img src={facebookIcon} alt="Facebook" />
        </a>

        <a href="https://www.instagram.com/louiseeee666" target="_blank" rel="noreferrer">
          <img src={instagramIcon} alt="Instagram" />
        </a>

        <a href="https://github.com/jisas6969" target="_blank" rel="noreferrer">
          <img src={githubIcon} alt="GitHub" />
        </a>
      </div>

      <p className="footerCopy">
        © 2026 Louise Angelo Soledad
      </p>
    </footer>
  );
};

export default Footer;