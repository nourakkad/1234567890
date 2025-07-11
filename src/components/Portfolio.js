import React, { useState, useEffect, useCallback, useRef } from 'react';

const Portfolio = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [currentX, setCurrentX] = useState(0);
  const [dragDistance, setDragDistance] = useState(0);
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
      // If we reach the end of the original items, jump to the middle set
      if (next >= originalLength) {
        return originalLength; // Jump to the middle set
      }
      return next;
    });
  }, [originalLength]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => {
      const next = prev - 1;
      // If we go below 0, jump to the middle set
      if (next < 0) {
        return originalLength - 1; // Jump to the last item of middle set
      }
      return next;
    });
  }, [originalLength]);

  const goToSlide = (index) => {
    // Map the dot index to the middle set of items
    setCurrentSlide(index + originalLength);
  };

  // Handle infinite loop reset
  useEffect(() => {
    const handleTransitionEnd = () => {
      // If we're at the end of the original items, jump to middle set
      if (currentSlide >= originalLength * 2) {
        setCurrentSlide(originalLength);
      }
      // If we're at the beginning of the original items, jump to middle set
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

  // Fixed touch/mouse handlers with correct direction logic
  const handleStart = useCallback((e) => {
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    setIsDragging(true);
    setStartX(clientX);
    setCurrentX(clientX);
    setDragDistance(0);
  }, []);

  const handleMove = useCallback((e) => {
    if (!isDragging) return;
    
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const distance = clientX - startX; // Fixed: positive when swiping right
    
    setCurrentX(clientX);
    setDragDistance(distance);
    
    // Prevent default to stop scrolling
    e.preventDefault();
  }, [isDragging, startX]);

  const handleEnd = useCallback(() => {
    if (!isDragging) return;
    
    setIsDragging(false);
    setDragDistance(0);
    
    const diff = currentX - startX; // Fixed: positive when swiping right
    const threshold = 30; // Reduced threshold for easier swiping on mobile
    
    if (Math.abs(diff) > threshold) {
      if (diff > 0) {
        // Swiped right - go to previous slide
        prevSlide();
      } else {
        // Swiped left - go to next slide
        nextSlide();
      }
    }
  }, [isDragging, startX, currentX, nextSlide, prevSlide]);

  // Auto-advance slides every 5 seconds (only on desktop)
  useEffect(() => {
    const isMobile = window.innerWidth <= 768;
    if (isMobile) return; // Don't auto-advance on mobile
    
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  // Update CSS custom property for desktop layout
  useEffect(() => {
    if (carouselRef.current) {
      // Calculate the effective slide position for the middle set
      const effectiveSlide = currentSlide - originalLength;
      carouselRef.current.style.setProperty('--current-slide', effectiveSlide);
    }
  }, [currentSlide, originalLength]);

  // Fixed event listeners with better desktop support
  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    // Mouse events for desktop
    carousel.addEventListener('mousedown', handleStart);
    carousel.addEventListener('mousemove', handleMove);
    carousel.addEventListener('mouseup', handleEnd);
    carousel.addEventListener('mouseleave', handleEnd);

    // Touch events for mobile
    carousel.addEventListener('touchstart', handleStart, { passive: false });
    carousel.addEventListener('touchmove', handleMove, { passive: false });
    carousel.addEventListener('touchend', handleEnd, { passive: true });

    return () => {
      carousel.removeEventListener('mousedown', handleStart);
      carousel.removeEventListener('mousemove', handleMove);
      carousel.removeEventListener('mouseup', handleEnd);
      carousel.removeEventListener('mouseleave', handleEnd);
      carousel.removeEventListener('touchstart', handleStart);
      carousel.removeEventListener('touchmove', handleMove);
      carousel.removeEventListener('touchend', handleEnd);
    };
  }, [handleStart, handleMove, handleEnd]);

  // Calculate the effective slide for display (middle set)
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
                style={{ touchAction: 'pan-y' }} // Allow vertical scrolling while preventing horizontal
              >
                <div className="carousel-container">
                  <div 
                    className="carousel-track" 
                    style={{ 
                      transform: `translateX(calc(-${currentSlide * 100}% + ${dragDistance}px))`,
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