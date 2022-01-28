import React from "react";
import Projects from "../../data/projects.json";

const Project = () => {
  return (
    <div className="project-section">
      <h1>
        My Recent <span className="purple">Works</span>
      </h1>
      <p>Here are a few projects I've worked on recently</p>
      <div className="projects">
        {Projects.map((project, index) => (
          <div className="project" key={index}>
            <div className="project-description">
              <img src={project.image} alt="code editor" />
              <h5 className="card-title">{project.title}</h5>
              <p className="card-text">{project.description}</p>
            </div>
            <button className="project-link">
              <a href={project.link} target={"_blank"} rel="noreferrer">
                View Project
              </a>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
