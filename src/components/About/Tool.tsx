import React from "react";
import Tools from "../../data/tools.json";

export const Tool = () => {
  return (
    <div className="skillset">
      <h1>
        <span className="purple">Tools</span> I use
      </h1>
      <div className="skills">
        {Tools.map((tool, index) => (
          <div className="skill" key={index}>
            <img src={tool.image} alt={tool.description} />
          </div>
        ))}
      </div>
    </div>
  );
};
