import { useEffect, useRef } from "react";
import "./skills.css";

/* IMPORT ICONS (recommended way) */
import cssIcon from "../../assets/icons/css.png";
import htmlIcon from "../../assets/icons/html.png";
import jsIcon from "../../assets/icons/js.png";
import pythonIcon from "../../assets/icons/python.png";
import javaIcon from "../../assets/icons/java.png";

import blenderIcon from "../../assets/icons/blender.png";
import wordpressIcon from "../../assets/icons/wordpress.png";
import vscodeIcon from "../../assets/icons/vscode.png";

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

        <h2 className="skillsTitleBox">Technical Skills</h2>

        {/* KNOWLEDGE SECTION */}
        <div className="skillsGroup">
          <h3>Knowledgeable in:</h3>

          <div
            className="skillsGrid"
            ref={(el) => (gridRefs.current[0] = el)}
          >
            <img src={cssIcon} alt="CSS" />
            <img src={htmlIcon} alt="HTML" />
            <img src={jsIcon} alt="JavaScript" />
            <img src={pythonIcon} alt="Python" />
            <img src={javaIcon} alt="Java" />
          </div>
        </div>

        {/* TOOLS SECTION */}
        <div className="skillsGroup">
          <h3>Tools & Platforms:</h3>

          <div
            className="skillsGrid"
            ref={(el) => (gridRefs.current[1] = el)}
          >
            <img src={blenderIcon} alt="Blender" />
            <img src={wordpressIcon} alt="WordPress" />
            <img src={vscodeIcon} alt="VS Code" />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Skills;