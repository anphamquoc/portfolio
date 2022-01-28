import React from "react";
import About from "../../assets/about.png";

const AboutMe = () => {
  return (
    <div className="about">
      <div className="about-me">
        <h1>Know Who I'm</h1>
        <p>
          Hi Everyone, I am <span className="purple">Pham Quoc An</span> from{" "}
          <span className="purple">Quang Ngai, Viet Nam.</span>
        </p>
        <p>Apart from coding, some other activities that I love to do!</p>
        <ul className="hobbies">
          <li>Playing Games</li>
          <li>Writing Tech Blogs</li>
          <li>Travelling</li>
        </ul>
      </div>
      <img src={About} alt="about me" className="image-about" />
    </div>
  );
};

export default AboutMe;
