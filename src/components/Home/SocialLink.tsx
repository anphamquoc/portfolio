import React from "react";

interface SocialLinkProps {}

export const SocialLink: React.FC<SocialLinkProps> = () => {
  return (
    <div className="social">
      <h1>FIND ME ON</h1>
      <p>Feel free to connect with me</p>
      <div className="social-link">
        <a
          className="link"
          target={"_blank"}
          rel="noreferrer"
          href="https://github.com/hello5423"
        >
          <i className="fab fa-github"></i>
        </a>
        <a
          className="link"
          target={"_blank"}
          rel="noreferrer"
          href="https://www.facebook.com/profile.php?id=100034981484099"
        >
          <i className="fab fa-facebook"></i>
        </a>
        <div className="link">
          <i className="fab fa-linkedin"></i>
        </div>
        <div className="link">
          <i className="fab fa-instagram"></i>
        </div>
      </div>
    </div>
  );
};
