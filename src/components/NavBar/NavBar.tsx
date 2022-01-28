import React from "react";
import logo from "../../assets/download.png";
import { NavLink } from "react-router-dom";

interface NavBarProps {}

export const NavBar: React.FC<NavBarProps> = () => {
  return (
    <nav className="navbar active">
      <NavLink to={"/"}>
        <img src={logo} alt="logo" />
      </NavLink>
      <div className="menu">
        <NavLink to="/" className="navlink">
          <i className="far fa-home"></i>
          <span className="name">Home</span>
        </NavLink>
        <NavLink to="/about" className="navlink">
          <i className="far fa-user"></i>
          <span className="name">About</span>
        </NavLink>
        <NavLink to="/project" className="navlink">
          <i className="fas fa-tasks"></i>
          <span className="name">Project</span>
        </NavLink>
        <NavLink to="/resume" className="navlink">
          <i className="far fa-file-user"></i>
          <span className="name">Resume</span>
        </NavLink>
        <NavLink to="/blogs" className="navlink">
          <i className="far fa-pen-nib"></i>
          <span className="name">Blog</span>
        </NavLink>
      </div>
      <a href="https://github.com/hello5423" className="github">
        <i className="far fa-code-merge"></i>
        <i className="far fa-star"></i>
      </a>
    </nav>
  );
};
