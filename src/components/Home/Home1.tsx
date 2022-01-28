import React from "react";
import Home from "../../assets/home-main.svg";
import TypeWriter from "typewriter-effect";

interface Home1Props {}

export const Home1: React.FC<Home1Props> = () => {
  return (
    <div className="home1-page">
      <div className="detail">
        <div className="name">
          <h1>HI THERE</h1>
          <h1>I'M PHAM QUOC AN</h1>
        </div>
        <div className="description">
          <h1>
            <span className="purple">
              <TypeWriter
                options={{
                  strings: [
                    "MERN Stack Developer",
                    "Nextjs Developer",
                    "RestAPI",
                    "Apollo Graphql",
                  ],
                  autoStart: true,
                  loop: true,
                  deleteSpeed: 50,
                }}
              />
            </span>
          </h1>
        </div>
      </div>
      <img src={Home} alt="home" className="home" />
    </div>
  );
};
