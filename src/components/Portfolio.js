import React, { useState, useEffect } from 'react';

const Portfolio = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const portfolioItems = [
    {
      id: 1,
      image: "assets/images/Tembix.png",
      alt: "Timbex Client Project",
      title: "Timbex",
      description: "Composite Decking & Flooring Solutions",
      socialLinks: [
        { type: "instagram", url: "https://www.instagram.com/timbex_sy/", icon: "fab fa-instagram" },
        { type: "facebook", url: "https://www.facebook.com/people/Timbex/61577931910672/", icon: "fab fa-facebook-f" },
        { type: "website", url: "https://timbex-sy.com/", icon: "fas fa-globe" }
      ]
    },
    {
      id: 2,
      image: "assets/images/Sabco.png",
      alt: "Sabco Client Project",
      title: "Sabco",
      description: "Polystyrene Manufacturing & Thermal Insulation",
      socialLinks: [
        { type: "instagram", url: "https://www.instagram.com/sabco_for_eps", icon: "fab fa-instagram" },
        { type: "facebook", url: "https://www.facebook.com/share/1CBaAvuV7k/", icon: "fab fa-facebook-f" },
        { type: "website", url: "https://sabco.com.sy/", icon: "fas fa-globe" }
      ]
    },
    {
      id: 3,
      image: "assets/images/damascusgin.png",
      alt: "Damascus Gin Client Project",
      title: "Damascus Gin",
      description: "Premium Craft Gin Distillery",
      socialLinks: [
        { type: "instagram", url: "https://www.instagram.com/damascus_gin?igsh=MTg1bDgwOGd5N2d0Nw==", icon: "fab fa-instagram" },
        { type: "facebook", url: "https://www.facebook.com/share/16x6q2Tm9K/?mibextid=wwXIfr", icon: "fab fa-facebook-f" },
        { type: "website", url: "http://damascusgin.com/", icon: "fas fa-globe" }
      ]
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % portfolioItems.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + portfolioItems.length) % portfolioItems.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  // Auto-advance slides every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
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
              <div className="custom-carousel">
                <div className="carousel-container">
                  <div 
                    className="carousel-track" 
                    style={{ 
                      transform: `translateX(-${currentSlide * 100}%)`,
                      transition: 'transform 0.5s ease-in-out'
                    }}
                  >
                    {portfolioItems.map((item, index) => (
                      <div key={item.id} className="carousel-slide">
                        <div className="portfolio-item">
                          <div className="thumb">
                            <img src={item.image} alt={item.alt} />
                            <div className="portfolio-overlay">
                              <div className="overlay-content">
                                <i className="fa fa-eye"></i>
                              </div>
                            </div>
                          </div>
                          <div className="down-content">
                            <h4>{item.title}</h4>
                            <span>{item.description}</span>
                          </div>
                        </div>
                        <div className="portfolio-social-buttons">
                          {item.socialLinks.map((link, linkIndex) => (
                            <a 
                              key={linkIndex}
                              href={link.url} 
                              target="_blank" 
                              rel="noopener noreferrer" 
                              className={`social-btn ${link.type}-btn`}
                            >
                              <i className={link.icon}></i>
                            </a>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Navigation Buttons */}
                <button className="carousel-nav carousel-prev" onClick={prevSlide}>
                  <i className="fas fa-chevron-left"></i>
                </button>
                <button className="carousel-nav carousel-next" onClick={nextSlide}>
                  <i className="fas fa-chevron-right"></i>
                </button>
                
                {/* Dots Indicator */}
                <div className="carousel-dots">
                  {portfolioItems.map((_, index) => (
                    <button
                      key={index}
                      className={`carousel-dot ${index === currentSlide ? 'active' : ''}`}
                      onClick={() => goToSlide(index)}
                    ></button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Portfolio; 