import React, { useState, useEffect, useCallback, useRef } from 'react';

const Portfolio = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const carouselRef = useRef(null);
  
  const originalPortfolioItems = [
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

  // Create infinite loop array by duplicating items
  const portfolioItems = [...originalPortfolioItems, ...originalPortfolioItems, ...originalPortfolioItems];
  const originalLength = originalPortfolioItems.length;

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => {
      const next = prev + 1;
      if (next >= originalLength) {
        return originalLength;
      }
      return next;
    });
  }, [originalLength]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => {
      const next = prev - 1;
      if (next < 0) {
        return originalLength - 1;
      }
      return next;
    });
  }, [originalLength]);

  const goToSlide = (index) => {
    setCurrentSlide(index + originalLength);
  };

  // Handle infinite loop reset
  useEffect(() => {
    const handleTransitionEnd = () => {
      if (currentSlide >= originalLength * 2) {
        setCurrentSlide(originalLength);
      }
      if (currentSlide < originalLength) {
        setCurrentSlide(originalLength);
      }
    };

    const carousel = carouselRef.current;
    if (carousel) {
      carousel.addEventListener('transitionend', handleTransitionEnd);
      return () => carousel.removeEventListener('transitionend', handleTransitionEnd);
    }
  }, [currentSlide, originalLength]);

  // Simple drag handlers
  const handleDragStart = useCallback((e) => {
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    setIsDragging(true);
    setDragStart(clientX);
    setDragOffset(0);
  }, []);

  const handleDragMove = useCallback((e) => {
    if (!isDragging) return;
    
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const offset = clientX - dragStart;
    setDragOffset(offset);
    
    e.preventDefault();
  }, [isDragging, dragStart]);

  const handleDragEnd = useCallback(() => {
    if (!isDragging) return;
    
    setIsDragging(false);
    setDragOffset(0);
    
    const threshold = 50;
    
    if (Math.abs(dragOffset) > threshold) {
      if (dragOffset > 0) {
        prevSlide(); // Swipe right = previous
      } else {
        nextSlide(); // Swipe left = next
      }
    }
  }, [isDragging, dragOffset, nextSlide, prevSlide]);

  // Auto-advance slides every 5 seconds (only on desktop)
  useEffect(() => {
    const isMobile = window.innerWidth <= 768;
    if (isMobile) return;
    
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  // Update CSS custom property for desktop layout
  useEffect(() => {
    if (carouselRef.current) {
      const effectiveSlide = currentSlide - originalLength;
      carouselRef.current.style.setProperty('--current-slide', effectiveSlide);
    }
  }, [currentSlide, originalLength]);

  // Event listeners
  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    // Mouse events
    carousel.addEventListener('mousedown', handleDragStart);
    carousel.addEventListener('mousemove', handleDragMove);
    carousel.addEventListener('mouseup', handleDragEnd);
    carousel.addEventListener('mouseleave', handleDragEnd);

    // Touch events
    carousel.addEventListener('touchstart', handleDragStart, { passive: false });
    carousel.addEventListener('touchmove', handleDragMove, { passive: false });
    carousel.addEventListener('touchend', handleDragEnd, { passive: true });

    return () => {
      carousel.removeEventListener('mousedown', handleDragStart);
      carousel.removeEventListener('mousemove', handleDragMove);
      carousel.removeEventListener('mouseup', handleDragEnd);
      carousel.removeEventListener('mouseleave', handleDragEnd);
      carousel.removeEventListener('touchstart', handleDragStart);
      carousel.removeEventListener('touchmove', handleDragMove);
      carousel.removeEventListener('touchend', handleDragEnd);
    };
  }, [handleDragStart, handleDragMove, handleDragEnd]);

  // Calculate the effective slide for display
  const effectiveSlide = currentSlide - originalLength;

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
              <div 
                className="custom-carousel"
                ref={carouselRef}
                style={{ touchAction: 'pan-y' }}
              >
                <div className="carousel-container">
                  <div 
                    className="carousel-track" 
                    style={{ 
                      transform: `translateX(calc(-${currentSlide * 100}% + ${dragOffset}px))`,
                      transition: isDragging ? 'none' : 'transform 0.3s ease-out'
                    }}
                  >
                    {portfolioItems.map((item, index) => (
                      <div key={`${item.id}-${index}`} className="carousel-slide">
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
                
                {/* Dots Indicator */}
                <div className="carousel-dots">
                  {originalPortfolioItems.map((_, index) => (
                    <button
                      key={index}
                      className={`carousel-dot ${index === effectiveSlide ? 'active' : ''}`}
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