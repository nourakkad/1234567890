import React from 'react';

const Footer = () => (
  <footer className="footer-section">
    <div className="footer-top">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6">
            <div className="footer-widget">
              <div className="footer-logo">
                <a href="#top">
                  <img src="assets/images/LOGO ELYPTEK .png" className="img-fluid" alt="logo" />
                </a>
              </div>
              <div className="footer-text">
                <p>
                  Where innovation meets expertise . We specialize in software
                  development , web design , cybersecurity , and more .
                </p>
              </div>
              <div className="footer-social-links">
                <div className="social-icons">
                  <a href="https://www.facebook.com/share/1FTGLY6bvR/" className="facebook">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="https://www.instagram.com/elyptek.co?igsh=MXRwOHN0eXJueXRoNA==" className="instagram">
                    <i className="fab fa-instagram"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="footer-widget">
              <h4>Quick Links</h4>
              <div className="footer-links">
                <ul>
                  <li><a href="#top"><i className="fas fa-chevron-right"></i> Home</a></li>
                  <li><a href="#about"><i className="fas fa-chevron-right"></i> About</a></li>
                  <li><a href="#services"><i className="fas fa-chevron-right"></i> Services</a></li>
                  <li><a href="#portfolio"><i className="fas fa-chevron-right"></i> Portfolio</a></li>
                  <li><a href="#contact"><i className="fas fa-chevron-right"></i> Contact</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="footer-widget">
              <h4>Contact Info</h4>
              <div className="contact-info">
                <div className="contact-item">
                  <i className="fas fa-envelope"></i>
                  <div className="content">
                    <p>anasalomari0934@gmail.com</p>
                  </div>
                </div>
                <div className="contact-item">
                  <i className="fas fa-phone-alt"></i>
                  <div className="content">
                    <p>+963934092373</p>
                  </div>
                </div>
                <div className="contact-item">
                  <i className="fas fa-map-marker-alt"></i>
                  <div className="content">
                    <p>Syria, Damascus </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="footer-bottom">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <p className="copyright text-center">
              Copyright © 2025 <span className="footer-brand">Elyptek</span> . All Rights Reserved .
            </p>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer; 