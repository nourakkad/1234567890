import React from 'react';

const Portfolio = () => (
  <>
    <div className="section-divider">
      <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" style={{display:'block',width:'100%',height:'60px'}}>
        <path fill="rgba(255,167,0,0.8)" d="M0,32L48,37.3C96,43,192,53,288,58.7C384,64,480,64,576,58.7C672,53,768,43,864,37.3C960,32,1056,32,1152,37.3C1248,43,1344,53,1392,58.7L1440,64L1440,80L1392,80C1344,80,1248,80,1152,80C1056,80,960,80,864,80C768,80,672,80,576,80C480,80,384,80,288,80C192,80,96,80,48,80L0,80Z"></path>
      </svg>
    </div>
    <div id="portfolio" className="our-portfolio section">
      <div className="container">
        <div className="row">
          <div className="col-lg-5">
            <div className="section-heading wow fadeInLeft" data-wow-duration="1s" data-wow-delay="0.3s">
              <h6>Our Portfolio</h6>
              <h4>Client <em>Projects</em></h4>
              <div className="line-dec"></div>
              <p>Explore our successful client projects that showcase our expertise in delivering innovative solutions across various industries and technologies.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid wow fadeIn" data-wow-duration="1s" data-wow-delay="0.7s">
        <div className="row">
          <div className="col-lg-12">
            <div className="loop owl-carousel">
              <div className="item">
                <div className="portfolio-item">
                  <div className="thumb">
                    <img src="assets/images/Tembix.png" alt="Timbex Client Project" />
                    <div className="portfolio-overlay">
                      <div className="overlay-content">
                        <i className="fa fa-eye"></i>
                      </div>
                    </div>
                  </div>
                  <div className="down-content">
                    <h4>Timbex</h4>
                    <span>Composite Decking & Flooring Solutions</span>
                  </div>
                </div>
                <div className="portfolio-social-buttons">
                  <a href="https://www.instagram.com/timbex_sy/" target="_blank" rel="noopener noreferrer" className="social-btn instagram-btn">
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a href="https://www.facebook.com/people/Timbex/61577931910672/" target="_blank" rel="noopener noreferrer" className="social-btn facebook-btn">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="https://timbex-sy.com/" target="_blank" rel="noopener noreferrer" className="social-btn website-btn">
                    <i className="fas fa-globe"></i>
                  </a>
                </div>
              </div>
              <div className="item">
                <div className="portfolio-item">
                  <div className="thumb">
                    <img src="assets/images/Sabco.png" alt="Sabco Client Project" />
                    <div className="portfolio-overlay">
                      <div className="overlay-content">
                        <i className="fa fa-eye"></i>
                      </div>
                    </div>
                  </div>
                  <div className="down-content">
                    <h4>Sabco</h4>
                    <span>Polystyrene Manufacturing & Thermal Insulation</span>
                  </div>
                </div>
                <div className="portfolio-social-buttons">
                  <a href="https://www.instagram.com/sabco_for_eps" target="_blank" rel="noopener noreferrer" className="social-btn instagram-btn">
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a href="https://www.facebook.com/share/1CBaAvuV7k/" target="_blank" rel="noopener noreferrer" className="social-btn facebook-btn">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="https://sabco.com.sy/" target="_blank" rel="noopener noreferrer" className="social-btn website-btn">
                    <i className="fas fa-globe"></i>
                  </a>
                </div>
              </div>
              <div className="item">
                <div className="portfolio-item">
                  <div className="thumb">
                    <img src="assets/images/damascusgin.png" alt="Damascus Gin Client Project" />
                    <div className="portfolio-overlay">
                      <div className="overlay-content">
                        <i className="fa fa-eye"></i>
                      </div>
                    </div>
                  </div>
                  <div className="down-content">
                    <h4>Damascus Gin</h4>
                    <span>Premium Craft Gin Distillery</span>
                  </div>
                </div>
                <div className="portfolio-social-buttons">
                  <a href="https://www.instagram.com/damascus_gin?igsh=MTg1bDgwOGd5N2d0Nw==" target="_blank" rel="noopener noreferrer" className="social-btn instagram-btn">
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a href="https://www.facebook.com/share/16x6q2Tm9K/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="social-btn facebook-btn">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="http://damascusgin.com/" target="_blank" rel="noopener noreferrer" className="social-btn website-btn">
                    <i className="fas fa-globe"></i>
                  </a>
                </div>
              </div>
              
             
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
);

export default Portfolio; 