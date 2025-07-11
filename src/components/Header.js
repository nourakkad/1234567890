import React, { useState, useEffect } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [currentLanguage, setCurrentLanguage] = useState('EN');
  const [activeSection, setActiveSection] = useState('top');

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Check if we're at the top of the page
      if (currentScrollY <= 50) {
        setIsHeaderVisible(true);
        setIsScrolled(false);
        setActiveSection('top');
      } else {
        setIsScrolled(true);
        
        // Hide header when scrolling down, show when scrolling up
        const scrollDifference = currentScrollY - lastScrollY;
        if (scrollDifference > 5) {
          setIsHeaderVisible(false);
        } else if (scrollDifference < -5) {
          setIsHeaderVisible(true);
        }
        // Keep current state if scroll position hasn't changed significantly
      }
      
      // Update active section based on scroll position
      const sections = ['top', 'services', 'about', 'team', 'portfolio', 'contact'];
      const headerHeight = 80;
      
      sections.forEach(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= headerHeight + 50 && rect.bottom >= headerHeight + 50) {
            setActiveSection(section);
          }
        }
      });
      
      setLastScrollY(currentScrollY);
    };

    // Add throttling to prevent too many scroll events
    let ticking = false;
    const throttledHandleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

        window.addEventListener('scroll', throttledHandleScroll);
    return () => {
      window.removeEventListener('scroll', throttledHandleScroll);
      document.body.classList.remove('menu-open');
    };
  }, [lastScrollY]);

  const toggleMenu = () => {
    const newMenuState = !isMenuOpen;
    setIsMenuOpen(newMenuState);
    
    // Prevent body scroll when menu is open
    if (newMenuState) {
      document.body.classList.add('menu-open');
    } else {
      document.body.classList.remove('menu-open');
    }
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    document.body.classList.remove('menu-open');
  };

  const smoothScrollToSection = (e, targetId) => {
    e.preventDefault();
    closeMenu();
    
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      const headerHeight = 80; // Adjust based on your header height
      const targetPosition = targetElement.offsetTop - headerHeight;
      
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  };

  const toggleLanguage = () => {
    setCurrentLanguage(currentLanguage === 'EN' ? 'AR' : 'EN');
  };

  return (
    <header className={`header-area header-sticky transparent-header wow slideInDown ${isScrolled ? 'show-header' : ''} ${isHeaderVisible ? 'header-visible' : 'header-hidden'}`} data-wow-duration="0.75s" data-wow-delay="0s">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <nav className="main-nav">
              {/* Mobile Menu Trigger - Left Side */}
              <a className={`menu-trigger ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
                <span>Menu</span>
              </a>
              
              {/* Logo Start */}
              <a href="#top" className="logo" onClick={(e) => smoothScrollToSection(e, '#top')}>
                <img src="assets/images/p.png" alt="Elyptek Logo" className="logo-webs" />
              </a>
              {/* Logo End */}
              
              {/* Language Toggle - Right Side */}
              <div className="language-toggle">
                <button 
                  className={`lang-btn ${currentLanguage === 'EN' ? 'active' : ''}`}
                  onClick={() => setCurrentLanguage('EN')}
                >
                  EN
                </button>
                <button 
                  className={`lang-btn ${currentLanguage === 'AR' ? 'active' : ''}`}
                  onClick={() => setCurrentLanguage('AR')}
                >
                  AR
                </button>
              </div>
              
              {/* Menu Start */}
              <ul className={`nav ${isMenuOpen ? 'active' : ''}`}>
                <li className="scroll-to-section">
                  <a 
                    href="#top" 
                    className={activeSection === 'top' ? 'active' : ''} 
                    onClick={(e) => smoothScrollToSection(e, '#top')}
                  >
                    <i className="fa fa-home"></i>
                    Home
                  </a>
                </li>
                <li className="scroll-to-section">
                  <a 
                    href="#services" 
                    className={activeSection === 'services' ? 'active' : ''} 
                    onClick={(e) => smoothScrollToSection(e, '#services')}
                  >
                    <i className="fa fa-cogs"></i>
                    Services
                  </a>
                </li>
                <li className="scroll-to-section">
                  <a 
                    href="#about" 
                    className={activeSection === 'about' ? 'active' : ''} 
                    onClick={(e) => smoothScrollToSection(e, '#about')}
                  >
                    <i className="fa fa-info-circle"></i>
                    About
                  </a>
                </li>
                <li className="scroll-to-section">
                  <a 
                    href="#team" 
                    className={activeSection === 'team' ? 'active' : ''} 
                    onClick={(e) => smoothScrollToSection(e, '#team')}
                  >
                    <i className="fa fa-users"></i>
                    Team
                  </a>
                </li>
                <li className="scroll-to-section">
                  <a 
                    href="#portfolio" 
                    className={activeSection === 'portfolio' ? 'active' : ''} 
                    onClick={(e) => smoothScrollToSection(e, '#portfolio')}
                  >
                    <i className="fas fa-project-diagram"></i>
                    Projects
                  </a>
                </li>
                <li className="scroll-to-section">
                  <a 
                    href="#contact" 
                    className={`contact-btn ${activeSection === 'contact' ? 'active' : ''}`} 
                    onClick={(e) => smoothScrollToSection(e, '#contact')}
                  >
                    <i className="fa fa-envelope"></i>
                    Contact
                  </a>
                </li>
                <li className="scroll-to-section desktop-hidden">
                  <a 
                    href="#contact" 
                    className="contact-btn" 
                    onClick={(e) => smoothScrollToSection(e, '#contact')}
                  >
                    <i className="fa fa-paper-plane"></i>
                    Free Quote
                  </a>
                </li>
              </ul>
              {/* Menu End */}
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header; 