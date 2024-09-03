import React from 'react';
import '../css/footer.css';
import logo from '../img/SL-logo.png';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
        <img src={logo} className="App-logo" alt="logo" />
        </div>
        <div className="footer-social">
          <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
          <a href="https://x.com/" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
          <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
          <a href="https://github.com/" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
        </div>
        <div className="footer-contact">
          <a href="../contact-form.html">Contact Us</a>
        </div>
        <div className="footer-rights">
          <p>© 2024 Nome sito</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
