import React, { useState, useEffect, useRef } from 'react';

const Portfolio = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [currentX, setCurrentX] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const carouselRef = useRef(null);
  const trackRef = useRef(null);

  const portfolioItems = [
    {
      id: 1,
      title: "Damascus Gin",
      category: "Branding",
      image: "/assets/images/damascusgin.png",
      instagram: "https://www.instagram.com/damascusgin/",
      facebook: "https://www.facebook.com/damascusgin",
      website: "https://damascusgin.com"
    },
    {
      id: 2,
      title: "Tembix",
      category: "Web Development",
      image: "/assets/images/Tembix.png",
      instagram: "https://www.instagram.com/tembix/",
      facebook: "https://www.facebook.com/tembix",
      website: "https://tembix.com"
    },
    {
      id: 3,
      title: "Sabco",
      category: "Digital Marketing",
      image: "/assets/images/Sabco.png",
      instagram: "https://www.instagram.com/sabco/",
      facebook: "https://www.facebook.com/sabco",
      website: "https://sabco.com"
    },
    {
      id: 4,
      title: "Hcb",
      category: "Software Development",
      image: "/assets/images/hcb.jpg",
      instagram: "https://www.instagram.com/hcb/",
      facebook: "https://www.facebook.com/hcb",
      website: "https://hcb.com"
    },
    {
      id: 5,
      title: "GD",
      category: "Graphic Design",
      image: "/assets/images/gd.png",
      instagram: "https://www.instagram.com/gd/",
      facebook: "https://www.facebook.com/gd",
      website: "https://gd.com"
    },
    {
      id: 6,
      title: "SD",
      category: "Software Development",
      image: "/assets/images/sd.png",
      instagram: "https://www.instagram.com/sd/",
      facebook: "https://www.facebook.com/sd",
      website: "https://sd.com"
    }
  ];

  // Check if device is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 991);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Infinite loop logic
  const totalItems = portfolioItems.length;
  const actualIndex = currentIndex % totalItems;

  const goToNext = () => {
    setCurrentIndex(prev => prev + 1);
  };

  const goToPrev = () => {
    setCurrentIndex(prev => prev - 1);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  // Touch and mouse event handlers for mobile only
  const handleTouchStart = (e) => {
    if (!isMobile) return;
    setIsDragging(true);
    setStartX(e.touches[0].clientX);
    setCurrentX(e.touches[0].clientX);
  };

  const handleTouchMove = (e) => {
    if (!isMobile || !isDragging) return;
    e.preventDefault();
    setCurrentX(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!isMobile || !isDragging) return;
    setIsDragging(false);
    
    const diff = startX - currentX;
    const threshold = 50;
    
    if (Math.abs(diff) > threshold) {
      if (diff > 0) {
        goToNext();
      } else {
        goToPrev();
      }
    }
  };

  const handleMouseDown = (e) => {
    if (!isMobile) return;
    setIsDragging(true);
    setStartX(e.clientX);
    setCurrentX(e.clientX);
  };

  const handleMouseMove = (e) => {
    if (!isMobile || !isDragging) return;
    setCurrentX(e.clientX);
  };

  const handleMouseUp = () => {
    if (!isMobile || !isDragging) return;
    setIsDragging(false);
    
    const diff = startX - currentX;
    const threshold = 50;
    
    if (Math.abs(diff) > threshold) {
      if (diff > 0) {
        goToNext();
      } else {
        goToPrev();
      }
    }
  };

  // Calculate transform for desktop vs mobile
  const getTransform = () => {
    if (isMobile) {
      return `translateX(-${actualIndex * 100}%)`;
    } else {
      return `translateX(-${actualIndex * 33.333}%)`;
    }
  };

  return (
    <div id="portfolio" className="our-portfolio">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-heading">
              <h6>Our Portfolio</h6>
              <h4>Check Out Some of Our Recent Work</h4>
              <p>Discover our latest projects showcasing innovative design and development solutions across various industries.</p>
            </div>
          </div>
        </div>
        
        <div className="custom-carousel" ref={carouselRef}>
          <div className="carousel-container">
            <div 
              className="carousel-track"
              ref={trackRef}
              style={{
                transform: getTransform(),
                transition: isDragging ? 'none' : 'transform 0.5s ease-in-out'
              }}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
            >
              {portfolioItems.map((item, index) => (
                <div key={item.id} className="carousel-slide">
                  <div className="portfolio-item-wrapper">
                    <div className="portfolio-item">
                      <div className="thumb">
                        <img src={item.image} alt={item.title} />
                        <div className="portfolio-overlay">
                          <div className="overlay-content">
                            <i className="fa fa-eye"></i>
                          </div>
                        </div>
                      </div>
                      <div className="down-content">
                        <h4>{item.title}</h4>
                        <span>{item.category}</span>
                      </div>
                      <div className="portfolio-social-buttons">
                        <a href={item.instagram} target="_blank" rel="noopener noreferrer" className="social-btn instagram-btn">
                          <i className="fab fa-instagram"></i>
                        </a>
                        <a href={item.facebook} target="_blank" rel="noopener noreferrer" className="social-btn facebook-btn">
                          <i className="fab fa-facebook"></i>
                        </a>
                        <a href={item.website} target="_blank" rel="noopener noreferrer" className="social-btn website-btn">
                          <i className="fas fa-globe"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Desktop Navigation Buttons */}
          {!isMobile && (
            <>
              <button 
                className="carousel-nav carousel-prev" 
                onClick={goToPrev}
                aria-label="Previous slide"
              >
                <i className="fas fa-chevron-left"></i>
              </button>
              <button 
                className="carousel-nav carousel-next" 
                onClick={goToNext}
                aria-label="Next slide"
              >
                <i className="fas fa-chevron-right"></i>
              </button>
            </>
          )}
        </div>

        {/* Carousel Dots */}
        <div className="carousel-dots">
          {portfolioItems.map((_, index) => (
            <button
              key={index}
              className={`carousel-dot ${index === actualIndex ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio; 