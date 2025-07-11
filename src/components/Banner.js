import React, { useEffect } from 'react';

const Banner = () => {
  useEffect(() => {
    const words = [
      ' Create <i class="fa-regular fa-pen-to-square"></i> ',
      ' Code <i class="fa-solid fa-code"></i> ',
      ' Control <i class="fa-solid fa-sliders"></i> '
    ];
    let currentWord = 0;
    const animateWord = document.getElementById("animateWord");
    function cycleWords() {
      if (!animateWord) return;
      animateWord.style.opacity = 0;
      setTimeout(() => {
        currentWord = (currentWord + 1) % words.length;
        animateWord.innerHTML = words[currentWord];
        animateWord.style.opacity = 1;
      }, 400);
    }
    const interval = setInterval(cycleWords, 1800);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="main-banner"
      id="top"
      data-wow-duration="1s"
      data-wow-delay="0.5s"
      style={{ position: 'relative', overflow: 'hidden', background: "url('assets/images/img.jpg') center center / cover no-repeat" }}
    >
      <div className="img-overlay" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'rgba(255, 255, 255, 0.8)' }}></div>
      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div className="row">
          <div className="col-lg-12">
            <div className="custom-hero-text">
              <div className="custom-underline-group">
                <div className="custom-title-group">
                  <span className="custom-title-stack">
                    <span className="custom-title digital-marketing">Marketing</span>
                    <span className="custom-underline black-underline"></span>
                  </span>
                  <span className="custom-title and"> &amp; </span>
                  <span className="custom-title-stack">
                    <span className="custom-title software">Software</span>
                    <span className="custom-underline orange-underline"></span>
                  </span>
                </div>
                <div className="custom-title solutions">Solutions</div>
              </div>
              <div className="custom-subtitle">
                Your Vision, Our
                <span className="custom-animate-black" id="animateWord">
                  Create
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner; 