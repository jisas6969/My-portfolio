import './about.css';
import { useEffect, useRef } from 'react';
import Profile from '../../assets/about.jpg'; 

const About = () => {
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
    <section id="about">
  <div className="aboutContainer">

    {/* IMAGE - NO ANIMATION */}
    <div className="aboutImage">
      <img src={Profile} alt="Profile" />
    </div>

    {/* TEXT - WITH ANIMATION */}
    <div
      className="aboutContent slide-right"
      data-index="0"
      ref={(el) => (elementsRef.current[0] = el)}
    >
      <h2>About Me</h2>
      <p>
        I’m a student with experience in Java, Python, and JavaScript,
        working at the intersection of machine learning, accessibility,
        and creative technology.
      </p>
    </div>
    

  </div>
</section>
  );
};

export default About;