import React from "react";
import CV from "../../assets/CV.png";
import CVPdf from "../../assets/CV.pdf";

const Resume = () => {
  return (
    <div className="resume">
      {/* btn download cv   */}
      <a href={CVPdf} className="download">
        <i className="far fa-arrow-to-bottom"></i> Download
      </a>
      <img src={CV} alt="resume" className="resume-image" />
      <a href={CVPdf} className="download">
        <i className="far fa-arrow-to-bottom"></i> Download
      </a>
    </div>
  );
};

export default Resume;
