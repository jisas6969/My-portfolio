import "./about.css";
import Profile from "../../assets/about.jpg";
import { Link } from "react-scroll";

const About = () => {
  return (
    <section className="aboutWrapper">

      <div className="aboutHero" id="aboutHero">
        <div className="heroGrid">

          {/* LEFT SIDE */}
          <div className="heroLeft">
            <div className="aboutLabel">
              <span className="dot"></span>
              <span>About Me</span>
            </div>

            <h1>
              Get<br /> To Know Me
            </h1>
          </div>

          <div className="heroRight">

            <Link
              to="intro"
              smooth
              duration={500}
              offset={-112}
              className="breadcrumbLink"
            >
              Home
            </Link>

            <span>/</span>

            <span className="active">About</span>

          </div>

        </div>
      </div>


      <div className="aboutCard">

        <h2>Future Developer, Built with Purpose</h2>

        <div className="cardContent">

          {/* IMAGE */}
          <div className="aboutImage">
            <img src={Profile} alt="Louise" />
          </div>

          {/* TEXT */}
          <div className="aboutText">
            <blockquote>
              “Every line of code is a step toward growth,
              innovation, and real-world solutions.”
            </blockquote>

            <h3>Louise Soledad</h3>

            <span className="role">
              Aspiring Software Engineer • AI Engineer • Web Developer
            </span>

            <p>
              I’m Louise, a graduating Computer Science student passionate
              about building meaningful and impactful technology.
              My experience spans web development and machine learning-based
              systems where I developed strong problem-solving and system design skills.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default About;