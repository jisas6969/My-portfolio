import './intro.css';
import { useState, useEffect } from 'react';

import bgOff from '../../assets/bg.png';
import bgOn from '../../assets/bg-on.png';

import fbIcon from '../../assets/facebook.png';
import igIcon from '../../assets/instagram.png';
import ttIcon from '../../assets/github.png';

const Intro = () => {
  const [isOn, setIsOn] = useState(false);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  const fullText = "Louise";
  const typingSpeed = 150;
  const deletingSpeed = 100;
  const pauseTime = 1500;

  useEffect(() => {
    let timeout;

    if (!isDeleting && text.length < fullText.length) {
      timeout = setTimeout(() => {
        setText(fullText.slice(0, text.length + 1));
      }, typingSpeed);
    } else if (isDeleting && text.length > 0) {
      timeout = setTimeout(() => {
        setText(fullText.slice(0, text.length - 1));
      }, deletingSpeed);
    } else if (!isDeleting && text.length === fullText.length) {
      timeout = setTimeout(() => setIsDeleting(true), pauseTime);
    } else if (isDeleting && text.length === 0) {
      setIsDeleting(false);
    }

    return () => clearTimeout(timeout);
  }, [text, isDeleting]);

  return (
    <section id="intro">
      <div className="introcontent">
        <span className="hello">Hello,</span>

        <span className="introText">
          I'm <span className="introName">{text}</span>
          <br />
          Aspiring Software Developer
        </span>

        <div className="introButtons">
          <a href="/Louise-CV.pdf" download className="introBtn">
            Download CV
          </a>

          <a
            href="https://www.facebook.com/louise.soledad.7"
            target="_blank"
            rel="noreferrer"
            className="socialIcon"
          >
            <img src={fbIcon} alt="Facebook" />
          </a>

          <a
            href="https://www.instagram.com/louiseeee666"
            target="_blank"
            rel="noreferrer"
            className="socialIcon"
          >
            <img src={igIcon} alt="Instagram" />
          </a>

          <a
            href="https://github.com/jisas6969"
            target="_blank"
            rel="noreferrer"
            className="socialIcon"
          >
            <img src={ttIcon} alt="Github" />
          </a>
        </div>
      </div>

      <div className="img-frame">
        <img
          src={isOn ? bgOn : bgOff}
          alt="profile"
          className="bg"
          onMouseEnter={() => setIsOn(true)}
          onMouseLeave={() => setIsOn(false)}
        />


      </div>
    </section>
  );
};

export default Intro;
