import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <h3>Designed and Developed by Pham Quoc An</h3>
      <h3>Copyright © 2022 SB</h3>
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
    </footer>
  );
};

export default Footer;
