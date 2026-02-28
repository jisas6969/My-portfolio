import './skills.css';
import { useEffect, useRef } from 'react';

import Programming from '../../assets/programming.png';
import Technologies from '../../assets/technologies.png';
import Technical from '../../assets/technical.png';

const Skills = () => {
  const elementsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number(entry.target.dataset.index) || 0;

          if (entry.isIntersecting) {
            entry.target.style.transitionDelay = `${index * 0.15}s`;
            entry.target.classList.add('show');
          } else {
            entry.target.classList.remove('show');
            entry.target.style.transitionDelay = '0s';
          }
        });
      },
      { threshold: 0.25 }
    );

    elementsRef.current.forEach((el) => el && observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills">
      <div className="skillsContainer">

        {/* ABOUT — index 0 */}
        <div
          className="aboutColumn slide-left"
          data-index="0"
          ref={(el) => (elementsRef.current[0] = el)}
        >
          <span className="skillTitle">About Me</span>
          <span className="skillDescription">
            I’m a student with experience in Java, Python, and JavaScript,
            working at the intersection of machine learning, accessibility,
            and creative technology.
          </span>
        </div>

        <div
          className="skillBar slide-right"
          data-index="1"
          ref={(el) => (elementsRef.current[1] = el)}
        >
          <div className="skill">Skills</div>

          <div className="skillBars">

            {/* SKILL 1 */}
            <div
              className="skillbar fade-up"
              data-index="2"
              ref={(el) => (elementsRef.current[2] = el)}
            >
              <img src={Programming} alt="programming" className="skillBarImg" />
              <div className="skillBarText">
                <h2>Programming Languages</h2>
                <p>Java, Python, JS, React (Basic)</p>
              </div>
            </div>

            {/* SKILL 2 */}
            <div
              className="skillbar fade-up"
              data-index="3"
              ref={(el) => (elementsRef.current[3] = el)}
            >
              <img src={Technologies} alt="technologies" className="skillBarImg" />
              <div className="skillBarText">
                <h2>Technical Skills</h2>
                <p>Machine Learning, HTML, CSS, 3D Animation</p>
              </div>
            </div>

            {/* SKILL 3 */}
            <div
              className="skillbar fade-up"
              data-index="4"
              ref={(el) => (elementsRef.current[4] = el)}
            >
              <img src={Technical} alt="tools" className="skillBarImg" />
              <div className="skillBarText">
                <h2>Tools</h2>
                <p>NetBeans, VS Code, Blender</p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Skills;
