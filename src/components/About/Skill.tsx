import React from "react";
import Skills from "../../data/skill.json";

const Skill = () => {
  return (
    <div className="skillset">
      <h1>
        Professional <span className="purple">Skillset</span>
      </h1>
      <div className="skills">
        {Skills.map((skill, index) => (
          <div className="skill" key={index}>
            <img src={`.${skill.image}`} alt={skill.description} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skill;
