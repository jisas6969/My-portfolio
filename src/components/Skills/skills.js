import { useEffect, useRef } from "react";
import "./skills.css";

import cssIcon from "../../assets/icons/css.png";
import htmlIcon from "../../assets/icons/html.png";
import jsIcon from "../../assets/icons/js.png";
import pythonIcon from "../../assets/icons/python.png";
import javaIcon from "../../assets/icons/java.png";

import blenderIcon from "../../assets/icons/blender.png";
import wordpressIcon from "../../assets/icons/wordpress.png";

const Skills = () => {
  const gridRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.2 }
    );

    gridRefs.current.forEach((grid) => {
      if (grid) observer.observe(grid);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills">
      <div className="skillsContainer">

        <h2 className="skillsTitle">Technical Skills</h2>

        {/* FRONTEND */}
        <div className="skillsGroup">
          <h3>Frontend Development</h3>

          <div className="skillsGrid" ref={(el) => (gridRefs.current[0] = el)}>

            <div className="skillCard">
              <img src={htmlIcon} alt="HTML" />
              <p className="skillName">HTML</p>
              <span className="skillLevel intermediate">Intermediate</span>
            </div>

            <div className="skillCard">
              <img src={cssIcon} alt="CSS" />
              <p className="skillName">CSS</p>
              <span className="skillLevel intermediate">Intermediate</span>
            </div>

            <div className="skillCard">
              <img src={jsIcon} alt="JavaScript" />
              <p className="skillName">JavaScript</p>
              <span className="skillLevel beginner">Beginner</span>
            </div>

          </div>
        </div>

        {/* PROGRAMMING */}
        <div className="skillsGroup">
          <h3>Programming</h3>

          <div className="skillsGrid" ref={(el) => (gridRefs.current[1] = el)}>

            <div className="skillCard">
              <img src={pythonIcon} alt="Python" />
              <p className="skillName">Python</p>
              <span className="skillLevel beginner">Beginner</span>
            </div>

            <div className="skillCard">
              <img src={javaIcon} alt="Java" />
              <p className="skillName">Java</p>
              <span className="skillLevel beginner">Beginner</span>
            </div>

          </div>
        </div>

        {/* TOOLS */}
        <div className="skillsGroup">
          <h3>Tools & Platforms</h3>

          <div className="skillsGrid" ref={(el) => (gridRefs.current[2] = el)}>

            <div className="skillCard">
              <img src={blenderIcon} alt="Blender" />
              <p className="skillName">Blender</p>
              <span className="skillLevel beginner">Beginner</span>
            </div>

            <div className="skillCard">
              <img src={wordpressIcon} alt="WordPress" />
              <p className="skillName">WordPress</p>
              <span className="skillLevel beginner">Beginner</span>
            </div>


          </div>
        </div>

      </div>
    </section>
  );
};

export default Skills;