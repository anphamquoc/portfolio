import React from "react";
import Avatar from "../../assets/avatar.svg";
interface Home2Props {}

export const Home2: React.FC<Home2Props> = () => {
  return (
    <div className="home2-page">
      <div className="introduce">
        <h1>
          LET ME <span className="purple">INTRODUCE</span> MYSELF
        </h1>
        <p>
          I fell in love with programming and I have at least learnt something,
          I think… 🤷‍♂️
        </p>
        <p>
          I am fluent in classics like{" "}
          <span className="purple">C++, Javascript and Python.</span>
        </p>
        <p>
          My field of Interest's are building new Web Technologies and Products
          and also in areas related to Deep Learning and Natural Launguage
          Processing.
        </p>
        <p>
          Whenever possible, I also apply my passion for developing products
          with Node.js and Modern Javascript Library and Frameworks like
          React.js and Next.js
        </p>
      </div>
      <div className="image">
        <img src={Avatar} alt="avatar   " />
      </div>
    </div>
  );
};
