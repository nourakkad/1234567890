import React from 'react';

const Footer = () => (
  <footer className="footer-section modern-footer">
    <div className="footer-top">
      <div className="container">
        <div className="footer-row">
          {/* Left: Logo, Quote, Socials */}
          <div className="footer-col footer-col-left">
            <div className="footer-logo">
              <a href="#top" aria-label="Back to top">
                <img src="assets/images/LOGO ELYPTEK .png" alt="Elyptek logo" />
              </a>
            </div>
            <p className="footer-quote">
              Empowering businesses with innovative digital solutions and cutting-edge technology.
            </p>
            <div className="footer-social-links">
              <a href="https://www.facebook.com/share/1FTGLY6bvR/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="facebook">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://www.instagram.com/elyptek.co" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="instagram">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://wa.me/963956009824" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="whatsapp">
                <i className="fab fa-whatsapp"></i>
              </a>
            </div>
          </div>

          {/* Center: Quick Links */}
          <div className="footer-col footer-col-center">
            <h4 className="footer-title left-list">Quick Links</h4>
            <ul className="footer-links-list">
              <li><a href="#top">Home</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#services">Our Services</a></li>
              <li><a href="#portfolio">Portfolio</a></li>
              <li><a href="#team">Our Team</a></li>
              <li><a href="#contact">Contact Us</a></li>
            </ul>
          </div>

          {/* Right: Contact Info */}
          <div className="footer-col footer-col-right">
            <h4 className="footer-title left-list">Contact Info</h4>
            <ul className="footer-contact-list">
              <li>
                <i className="fas fa-phone-alt"></i>
                <a href="tel:+963993887774" className="footer-link-white">+963 993 887 774</a>
              </li>
              <li>
                <i className="fas fa-envelope"></i>
                <a href="mailto:elyptek@gmail.com" className="footer-link-white">elyptek@gmail.com</a>
              </li>
              <li>
                <i className="fas fa-map-marker-alt"></i>
                <span>Shaalan, Damascus, Syria</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    
    <div className="footer-bottom">
      <div className="container">
        <div className="footer-bottom-row">
          <p className="copyright">
            © 2025 <span className="footer-brand">Elyptek</span>. All Rights Reserved. 
            
          </p>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer; 